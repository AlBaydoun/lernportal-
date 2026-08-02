<?php
/* ============================================================
   Lernportal – Sync-Server für Hostinger (oder jedes PHP-Hosting)
   ------------------------------------------------------------
   1. Trage unten bei $SECRET ein eigenes, langes Passwort ein.
   2. Lade diese Datei per Dateimanager/FTP in den Ordner public_html
      (oder public_html/lernportal) hoch.
   3. Die Adresse lautet dann z. B.:
        https://deine-domain.de/sync.php
      Diese Adresse + das Secret trägst du im Admin-Bereich ein.

   Die Datei speichert NUR verschlüsselte Daten – der Server sieht
   den Inhalt nie im Klartext.
   ============================================================ */

$SECRET = 'HIER-EIN-EIGENES-LANGES-PASSWORT-EINTRAGEN';

/* --- CORS, damit die Website auch von github.io aus speichern darf --- */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Secret');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Cache-Control: no-store');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }

/* --- Zugriff nur mit richtigem Secret --- */
$given = isset($_SERVER['HTTP_X_SECRET']) ? $_SERVER['HTTP_X_SECRET']
       : (isset($_GET['s']) ? $_GET['s'] : '');
if (!is_string($given) || !hash_equals($SECRET, $given)) {
    http_response_code(403);
    header('Content-Type: application/json');
    echo json_encode(array('error' => 'forbidden'));
    exit;
}

$dir  = __DIR__ . '/lernportal-data';
$file = $dir . '/data.json';
if (!is_dir($dir)) { @mkdir($dir, 0775, true); }
/* Datenordner vor direktem Zugriff über den Browser schützen */
if (!file_exists($dir . '/.htaccess')) {
    @file_put_contents($dir . '/.htaccess', "Deny from all\n");
}

/* --- Lesen --- */
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Content-Type: application/json');
    if (file_exists($file)) { readfile($file); }
    else { echo json_encode(array('empty' => true)); }
    exit;
}

/* --- Schreiben --- */
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $raw = file_get_contents('php://input');
    if ($raw === false || strlen($raw) < 2) {
        http_response_code(400);
        echo json_encode(array('error' => 'empty body'));
        exit;
    }
    if (strlen($raw) > 8 * 1024 * 1024) {      // 8 MB Sicherheitsgrenze
        http_response_code(413);
        echo json_encode(array('error' => 'too large'));
        exit;
    }
    $decoded = json_decode($raw, true);
    if ($decoded === null) {
        http_response_code(400);
        echo json_encode(array('error' => 'invalid json'));
        exit;
    }
    /* rollierende Sicherungen: die letzten 5 Stände bleiben erhalten */
    if (file_exists($file)) {
        for ($i = 4; $i >= 1; $i--) {
            if (file_exists("$dir/backup$i.json")) { @copy("$dir/backup$i.json", "$dir/backup" . ($i + 1) . ".json"); }
        }
        @copy($file, "$dir/backup1.json");
    }
    file_put_contents($file, $raw, LOCK_EX);
    header('Content-Type: application/json');
    echo json_encode(array('ok' => true, 'bytes' => strlen($raw), 'time' => gmdate('c')));
    exit;
}

http_response_code(405);
echo json_encode(array('error' => 'method not allowed'));
