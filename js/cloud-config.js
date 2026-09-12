/* ============ CLOUD CONFIG (Hostinger / eigener Server) ============
   Diese Werte sind fest in die Website eingebaut – JEDES Gerät
   synchronisiert damit automatisch, niemand muss etwas eintippen.

   provider 'php'  = eigener Server mit sync.php (Hostinger)
   url             = Adresse von sync.php.
                     'sync.php'  = liegt im selben Ordner wie die Website (Hostinger)
                     Wird die Website ZUSÄTZLICH auf github.io benutzt, hier die
                     volle Adresse eintragen, z. B. 'https://deine-domain.de/lernportal/sync.php'
   secret          = muss GENAU mit $SECRET in sync.php übereinstimmen
   pass            = Verschlüsselungspasswort (Daten werden im Browser verschlüsselt,
                     der Server sieht nur unlesbare Zeichen)
*/
const CLOUD_CONFIG = {
  provider: 'php',
  url:    'sync.php',
  secret: 'Tm7-Lernportal-2026-K9p4Qx2vB8sL',
  pass:   'Timur-Lernportal-2026-7c41f9-Baydoun'
};
