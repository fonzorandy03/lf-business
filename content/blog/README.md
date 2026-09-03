# Gestione del Blog con Pages CMS

Gli articoli di questa cartella sono gestiti dal pannello Pages CMS e restano
file MDX normali, versionati su GitHub. Il sito non dipende da un database e non
contiene credenziali GitHub.

## Pubblicare senza modificare codice

1. Aprire `/admin` sul sito oppure `https://app.pagescms.org`.
2. Accedere con GitHub e scegliere il repository del sito.
3. Aprire **Articoli del blog** e premere **Nuovo**.
4. Compilare titolo, indirizzo, data, autore, categoria, riassunto e copertina.
5. Scrivere il testo nell'editor visuale. Le immagini caricate vengono salvate
   in `public/images/blog`.
6. Lasciare **Bozza** attivo durante la preparazione. Quando è pronto,
   disattivarlo e salvare: Pages CMS crea un commit GitHub e il sistema di
   hosting collegato esegue il nuovo deployment.

Per correggere un articolo basta riaprirlo e salvarlo. Per ritirarlo senza
eliminarlo, attivare **Bozza**. Per rimuoverlo definitivamente usare **Elimina**:
la cronologia GitHub permette comunque di recuperare versioni precedenti.

## Regole importanti

- Lo slug usa soltanto lettere minuscole, numeri e trattini.
- Non cambiare lo slug di un articolo già pubblicato senza predisporre un
  redirect, altrimenti il vecchio collegamento smette di funzionare.
- Un solo articolo dovrebbe avere **In evidenza** attivo.
- I file `_template.mdx` e `README.md` sono esclusi dal CMS e dal sito pubblico.
- Le categorie disponibili sono definite sia in `.pages.yml` sia in
  `lib/blog-types.ts`; mantenerle allineate quando se ne aggiunge una.
