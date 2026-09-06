# Pubblicazione automatica su Plesk

Il workflow `.github/workflows/deploy-plesk.yml` costruisce il sito statico e pubblica il contenuto di `out` dopo ogni push sul ramo `main`. È possibile avviarlo anche manualmente dalla scheda **Actions** di GitHub.

## Configurazione iniziale

Nel repository GitHub aprire **Settings → Secrets and variables → Actions → New repository secret** e creare:

| Secret | Valore |
| --- | --- |
| `PLESK_FTP_SERVER` | Host FTP indicato da Server.it/Plesk, senza `ftp://` |
| `PLESK_FTP_USERNAME` | Utente presente in **Plesk → Accesso FTP** |
| `PLESK_FTP_PASSWORD` | Password dell’utente FTP |
| `PLESK_FTP_PROTOCOL` | `ftps` se disponibile; altrimenti `ftp` |
| `PLESK_FTP_PORT` | `21` per FTP/FTPS esplicito |
| `PLESK_FTP_DIRECTORY` | `/httpdocs/` se l’utente parte dalla radice dell’abbonamento; `/` se il suo percorso iniziale è già `httpdocs` |

Prima del primo deploy verificare in **Plesk → Hosting e DNS → Impostazioni hosting** che la document root del dominio sia `httpdocs`.

## Uso quotidiano

1. Modificare il sito e controllarlo localmente.
2. Eseguire commit e push su `main`.
3. Controllare il risultato in **GitHub → Actions → Build and deploy to Plesk**.

Le credenziali restano nei Secrets di GitHub e non vengono salvate nel repository.
