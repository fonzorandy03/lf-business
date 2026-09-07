export interface LegalSection { title: string; paragraphs: string[] }
export interface LegalArea {
  number: string; category: string; title: string; description: string; slug: string; href: string
  image: string; imageAlt: string; professional: string; sections: LegalSection[]
}

export const LEGAL_AREAS: LegalArea[] = [
  {
    number: '01', category: 'Impresa & Governance', title: "Diritto societario e d'impresa",
    description: 'Consulenza continuativa alle aziende, governance, rapporti tra soci e contenzioso societario.',
    slug: 'diritto-societario', href: '/specializzazioni-legali/diritto-societario', image: '/images/blog/diritto-impresa.png', imageAlt: 'Architettura istituzionale per il diritto societario', professional: 'Avv. Nunzia Robustelli',
    sections: [
      { title: 'Consulenza alle aziende e contenzioso societario', paragraphs: [
        'Lâ€™Avv. Nunzia Robustelli svolge attivitÃ  di consulenza e assistenza in materia di diritto societario e dâ€™impresa, seguendo diverse aziende sia nella gestione ordinaria dei rapporti giuridici e societari, sia nelle situazioni di conflitto che richiedono assistenza giudiziale.',
        'Lâ€™attivitÃ  Ã¨ rivolta a societÃ , imprenditori, amministratori e soci, con un approccio finalizzato, ove possibile, alla prevenzione del contenzioso e alla ricerca di soluzioni capaci di tutelare lâ€™impresa e garantire la continuitÃ  dellâ€™attivitÃ  aziendale.',
      ]},
      { title: 'Consulenza e assistenza continuativa alle imprese', paragraphs: [
        'Lâ€™Avv. Robustelli affianca le aziende nelle problematiche che accompagnano la loro attivitÃ , offrendo assistenza nella gestione dei rapporti tra soci, amministratori e organi societari, nellâ€™interpretazione e predisposizione di accordi e nella gestione delle situazioni di potenziale conflitto.',
        'Lâ€™assistenza comprende anche le problematiche connesse ad assemblee societarie, bilanci, accesso alla documentazione sociale, esercizio dei diritti dei soci, rapporti tra maggioranza e minoranza, operazioni sulle partecipazioni e scioglimento o liquidazione della societÃ . Lâ€™attivitÃ  comprende, ad esempio, assemblee chiamate a deliberare sul bilancio, conflittualitÃ  tra soci, eventuale scioglimento anticipato e nomina del liquidatore.',
      ]},
      { title: 'Rapporti tra soci e governance societaria', paragraphs: [
        'Particolare attenzione Ã¨ dedicata alle controversie che possono insorgere allâ€™interno della compagine societaria, con assistenza nelle questioni riguardanti patti parasociali, cessione delle partecipazioni, obblighi assunti tra soci, funzionamento dellâ€™assemblea e tutela dei soci di minoranza.',
        'Lo Studio ha affrontato, tra lâ€™altro, controversie relative allâ€™esecuzione di accordi tra soci finalizzati alla cessione congiunta delle quote societarie, alla valutazione delle offerte di acquisto e allâ€™adempimento degli obblighi derivanti da patti parasociali.',
      ]},
      { title: 'ResponsabilitÃ  e revoca degli amministratori', paragraphs: [
        'Lâ€™Avv. Robustelli presta assistenza nei procedimenti riguardanti la responsabilitÃ  degli amministratori, le contestazioni relative alla gestione societaria e le azioni dirette alla loro revoca in presenza dei presupposti previsti dalla legge.',
        'Lâ€™esperienza comprende anche procedimenti cautelari dinanzi alla Sezione Specializzata in materia di Impresa, con richieste di revoca dellâ€™amministratore e adozione di misure urgenti a tutela dei soci e del patrimonio sociale.',
      ]},
      { title: 'Impugnazione delle deliberazioni assembleari', paragraphs: [
        'Lâ€™attivitÃ  giudiziale comprende inoltre lâ€™impugnazione delle deliberazioni societarie, anche mediante richiesta di sospensione cautelare della loro efficacia, nei casi in cui vengano contestate violazioni della legge, dello statuto o dei diritti dei soci.',
        'Tra le controversie affrontate rientrano giudizi dinanzi al Tribunale di Napoli â€“ Sezione Specializzata in materia di Impresa â€“ aventi ad oggetto lâ€™impugnazione di deliberazioni ai sensi dellâ€™art. 2479-ter c.c. e la relativa tutela cautelare.',
      ]},
      { title: 'Conflitti societari e tutela del patrimonio aziendale', paragraphs: [
        'Nelle situazioni di maggiore complessitÃ , lâ€™assistenza riguarda anche conflitti di interesse, atti di gestione contestati, rapporti contrattuali stipulati dagli amministratori, tutela del patrimonio sociale e responsabilitÃ  derivanti dalla gestione dellâ€™impresa.',
        'Lâ€™attivitÃ  professionale comprende controversie riguardanti societÃ  caratterizzate da partecipazioni paritetiche, nelle quali sono state affrontate questioni relative ai poteri dellâ€™amministratore unico, ai rapporti tra i soci e ad atti negoziali ritenuti pregiudizievoli per gli interessi societari.',
      ]},
      { title: 'Contrattualistica, crediti e controversie commerciali', paragraphs: [
        'Lâ€™assistenza alle imprese si estende ai rapporti contrattuali e commerciali, alle contestazioni relative allâ€™esecuzione dei contratti, al recupero dei crediti e alla gestione delle controversie con clienti, fornitori e partner commerciali.',
        'Quando sussistono le condizioni per evitare un lungo contenzioso, viene privilegiata anche la ricerca di una soluzione negoziale attraverso trattative, transazioni e procedure di negoziazione assistita, nellâ€™interesse dellâ€™impresa e della continuitÃ  dei rapporti economici.',
      ]},
      { title: 'Contenzioso societario e commerciale', paragraphs: [
        'Quando la soluzione stragiudiziale non risulta possibile, lâ€™Avv. Robustelli cura la difesa giudiziale di societÃ , imprenditori e soci, anche nellâ€™ambito di procedimenti complessi dinanzi alle Sezioni Specializzate in materia di Impresa.',
        'Lâ€™assistenza accompagna il cliente dalla valutazione preventiva della controversia sino alla fase cautelare e di merito, mantenendo una visione unitaria degli aspetti societari, contrattuali e patrimoniali della vicenda.',
      ]},
      { title: 'Unâ€™assistenza legale integrata per lâ€™impresa', paragraphs: [
        'Lâ€™obiettivo Ã¨ offrire allâ€™azienda un punto di riferimento legale stabile, capace di intervenire non soltanto quando nasce una controversia, ma anche nella gestione quotidiana delle problematiche societarie e nella prevenzione dei rischi.',
        'La combinazione tra consulenza continuativa e difesa nel contenzioso societario consente allâ€™Avv. Nunzia Robustelli di assistere lâ€™impresa nelle diverse fasi della sua attivitÃ , tutelandone gli interessi, il patrimonio e gli equilibri societari.',
      ]},
    ],
  },
  {
    number: '02', category: 'Territorio & Amministrazione', title: 'Edilizia e urbanistica',
    description: 'Assistenza e difesa di privati, imprese, Comuni ed Enti pubblici.',
    slug: 'edilizia-urbanistica', href: '/specializzazioni-legali/edilizia-urbanistica', image: '/images/legal-edilizia-urbanistica-hq.png', imageAlt: 'Architettura urbana contemporanea e intervento di rigenerazione del territorio', professional: 'Avv. Luigi Ferrara',
    sections: [
      { title: 'Assistenza e difesa di privati, imprese ed Enti pubblici', paragraphs: [
        'Lo Studio Legale presta assistenza specialistica in materia di diritto urbanistico ed edilizio, operando sia nellâ€™interesse di privati, proprietari e imprese, sia a tutela di Comuni ed Enti pubblici.',
        'La possibilitÃ  di affrontare il contenzioso da entrambe le prospettive consente allo Studio di conoscere in maniera approfondita non soltanto gli strumenti di tutela del privato, ma anche i procedimenti amministrativi, lâ€™attivitÃ  istruttoria e lâ€™esercizio dei poteri di vigilanza e repressione spettanti alle Amministrazioni.',
      ]},
      { title: 'Tutela di privati e imprese', paragraphs: [
        'Lo Studio assiste privati e operatori economici nei rapporti con le Amministrazioni competenti in materia edilizia e urbanistica, sin dalla fase procedimentale e, ove necessario, nel successivo giudizio dinanzi al TAR e al Consiglio di Stato.',
        'Lâ€™attivitÃ  riguarda, tra lâ€™altro, ordinanze di demolizione e ripristino dello stato dei luoghi, accertamento della legittimitÃ  urbanistico-edilizia degli immobili, opere realizzate in assenza o difformitÃ  dal titolo edilizio e problematiche derivanti dalla disciplina urbanistica e dai vincoli insistenti sullâ€™area.',
        'Una specifica esperienza Ã¨ maturata nel settore dei condoni e delle sanatorie edilizie, compresa lâ€™impugnazione dei provvedimenti di diniego e lâ€™esame delle problematiche connesse alla presenza di vincoli paesaggistici, idrogeologici e di altra natura.',
      ]},
      { title: 'Procedimenti edilizi e rapporti con la Pubblica Amministrazione', paragraphs: [
        'Lâ€™assistenza non Ã¨ limitata al contenzioso. Lo Studio interviene anche nella fase amministrativa, mediante osservazioni ex art. 10-bis della L. 241/1990, memorie, istanze, pareri e interlocuzioni con gli uffici competenti, al fine di prevenire, quando possibile, lâ€™adozione di provvedimenti negativi.',
        'Lâ€™attivitÃ  comprende anche procedimenti relativi a SCIA, permessi di costruire, interventi di riqualificazione edilizia e procedimenti dinanzi a SUAP e uffici dellâ€™edilizia privata. In una recente pratica, ad esempio, lâ€™assistenza ha riguardato una SCIA condizionata per un intervento di riqualificazione edilizia conservativa e le conseguenti osservazioni contro il parere edilizio contrario espresso in Conferenza di Servizi.',
      ]},
      { title: 'Pianificazione urbanistica, convenzioni e trasformazione del territorio', paragraphs: [
        'Lo Studio presta consulenza anche nelle operazioni urbanistiche piÃ¹ complesse, riguardanti piani attuativi, convenzioni urbanistiche, opere di urbanizzazione, permessi di costruire e procedimenti espropriativi.',
        'Lâ€™attivitÃ  comprende la valutazione della fattibilitÃ  giuridico-amministrativa degli interventi e il coordinamento tra disciplina urbanistica, titoli edilizi, convenzioni e acquisizione delle aree necessarie allâ€™attuazione dellâ€™intervento.',
      ]},
      { title: 'Assistenza e difesa degli Enti pubblici', paragraphs: [
        'Accanto alla tutela dei privati, lo Studio assume la difesa delle Amministrazioni pubbliche nelle controversie urbanistiche ed edilizie, sostenendo la legittimitÃ  dellâ€™azione amministrativa e dei provvedimenti adottati dagli uffici competenti.',
        'Lâ€™esperienza comprende la costituzione nellâ€™interesse di Comuni dinanzi al TAR e al Consiglio di Stato, anche in controversie relative ad abusi edilizi, ordinanze di demolizione, titoli abilitativi e legittimitÃ  urbanistica degli immobili. In tale ambito risulta, tra lâ€™altro, la difesa del Comune di Sarno dinanzi al Consiglio di Stato in una controversia avente ad oggetto unâ€™ordinanza comunale di demolizione.',
      ]},
      { title: 'Consulenza agli Enti per programmi di sviluppo e rigenerazione', paragraphs: [
        'Lo Studio affianca inoltre le Amministrazioni nella predisposizione giuridico-amministrativa di operazioni di trasformazione e valorizzazione del territorio, anche attraverso strumenti di partenariato pubblico-privato e finanza di progetto.',
        'In tale settore sono stati conferiti allo Studio incarichi di assistenza giuridico-amministrativa per un Ambito di Rigenerazione urbana e per interventi di ampliamento di infrastrutture comunali mediante partenariato pubblico-privato e finanza di progetto.',
      ]},
      { title: 'Contenzioso amministrativo in materia edilizia e urbanistica', paragraphs: [
        'Lo Studio cura il contenzioso dinanzi ai Tribunali Amministrativi Regionali e al Consiglio di Stato, sia per il privato che contesta lâ€™esercizio del potere amministrativo, sia per lâ€™Ente chiamato a difendere la legittimitÃ  dei propri provvedimenti.',
        'La tutela comprende, secondo la specifica controversia, ricorsi per lâ€™annullamento, domande cautelari, costituzioni in giudizio, memorie difensive e appelli al Consiglio di Stato.',
      ]},
      { title: 'Unâ€™assistenza su entrambi i versanti del rapporto amministrativo', paragraphs: ['La peculiaritÃ  dellâ€™attivitÃ  dello Studio risiede nellâ€™esperienza maturata sia nella difesa del cittadino e dellâ€™impresa, sia nellâ€™assistenza e rappresentanza delle Pubbliche Amministrazioni.']},
    ],
  },
  {
    number: '03', category: 'Gare & Contratti pubblici', title: 'Appalti pubblici', description: 'Assistenza alle imprese e contenzioso nelle procedure di gara.',
    slug: 'appalti-pubblici', href: '/specializzazioni-legali/appalti-pubblici', image: '/images/legal-appalti-tar-lazio.jpeg', imageAlt: 'Tribunale Amministrativo Regionale del Lazio', professional: 'Avv. Luigi Ferrara',
    sections: [
      { title: 'Assistenza alle imprese e contenzioso nelle procedure di gara', paragraphs: [
        'Lo Studio Legale assiste imprese e operatori economici nel settore degli appalti pubblici, offrendo consulenza nelle diverse fasi delle procedure di affidamento e tutela giurisdizionale dinanzi ai Tribunali Amministrativi Regionali e al Consiglio di Stato.',
        'Lâ€™attivitÃ  comprende lâ€™analisi della documentazione di gara, la verifica dei requisiti di partecipazione, lâ€™assistenza nella gestione delle criticitÃ  insorte durante la procedura e lâ€™impugnazione dei provvedimenti lesivi adottati dalle Stazioni Appaltanti.',
        'Lâ€™esperienza dello Studio comprende anche controversie nelle quali vengono in rilievo i principi introdotti dal D.Lgs. 36/2023, tra cui i principi del risultato, della fiducia, della buona fede, della proporzionalitÃ , della leale collaborazione e del favor participationis.',
      ]},
      { title: 'Esclusione dalla gara e soccorso istruttorio', paragraphs: ['Particolare attenzione Ã¨ dedicata alla tutela dellâ€™operatore economico in caso di esclusione per irregolaritÃ  o incompletezza della documentazione amministrativa, valutando la possibilitÃ  di ricorrere al soccorso istruttorio previsto dallâ€™art. 101 del D.Lgs. 36/2023.']},
      { title: 'Ricorsi al TAR e appelli al Consiglio di Stato', paragraphs: [
        'In presenza di provvedimenti ritenuti illegittimi, lo Studio assiste lâ€™impresa attraverso il rito speciale in materia di appalti previsto dallâ€™art. 120 c.p.a., proponendo, ove necessario, domanda cautelare per ottenere la sospensione degli atti impugnati.',
        'La tutela puÃ² riguardare lâ€™annullamento dellâ€™esclusione o dellâ€™aggiudicazione, la riammissione alla procedura, la sospensione degli atti di gara e, quando ne ricorrano i presupposti, il risarcimento del danno in forma specifica o per equivalente.',
        'Lâ€™attivitÃ  dello Studio prosegue, ove necessario, dinanzi al Consiglio di Stato, anche mediante appello avverso le ordinanze cautelari pronunciate dal TAR.',
      ]},
      { title: 'Il ruolo dello Studio', paragraphs: [
        'Lo Studio affianca lâ€™impresa dalla valutazione preventiva degli atti di gara sino allâ€™eventuale fase contenziosa, con lâ€™obiettivo di individuare tempestivamente le criticitÃ  della procedura e tutelare il diritto dellâ€™operatore economico a una partecipazione conforme ai principi di trasparenza, concorrenza, paritÃ  di trattamento e proporzionalitÃ .',
        'Lâ€™assistenza integra competenze di diritto amministrativo, contrattualistica pubblica e processo amministrativo, con particolare attenzione alle disposizioni del Codice dei contratti pubblici â€“ D.Lgs. 36/2023 e alla piÃ¹ recente giurisprudenza amministrativa.',
      ]},
    ],
  },
  {
    number: '04', category: 'Scuola & Professione', title: 'Diritto scolastico e tutela dei docenti', description: 'Reclutamento, graduatorie, riconoscimento dei titoli e tutela cautelare.',
    slug: 'diritto-scolastico', href: '/specializzazioni-legali/diritto-scolastico', image: '/images/legal-diritto-scolastico-hq.png', imageAlt: 'Cortile accademico italiano e tutela del personale docente', professional: 'Avv. Luigi Ferrara',
    sections: [
      { title: 'Diritto scolastico e tutela dei docenti', paragraphs: [
        'Lo Studio Legale assiste docenti e personale della scuola nei giudizi dinanzi ai Tribunali Amministrativi Regionali e al Consiglio di Stato, con particolare esperienza nelle controversie relative al reclutamento, alle graduatorie e al riconoscimento dei titoli professionali.',
      ]},
      { title: 'GPS â€“ Graduatorie Provinciali per le Supplenze', paragraphs: ['Ricorsi avverso esclusioni, depennamenti, mancato riconoscimento dei titoli, rettifica del punteggio e corretta collocazione in graduatoria.']},
      { title: 'Titoli di sostegno e abilitazione allâ€™insegnamento', paragraphs: ['Tutela dei docenti nei procedimenti di verifica, convalida e riconoscimento dei titoli.']},
      { title: 'Titoli conseguiti allâ€™estero', paragraphs: ['Assistenza nei procedimenti e nei ricorsi relativi al riconoscimento in Italia di abilitazioni allâ€™insegnamento e specializzazioni sul sostegno conseguite in altri Paesi, anche alla luce della normativa europea e dei principi affermati dallâ€™Adunanza Plenaria del Consiglio di Stato. Lâ€™esperienza comprende, tra lâ€™altro, ricorsi relativi a titoli conseguiti in Romania e Albania.']},
      { title: 'Provvedimenti del Ministero e degli Uffici Scolastici', paragraphs: ['Impugnazione di dinieghi, esclusioni e provvedimenti adottati in autotutela.']},
      { title: 'Fase cautelare e appello al Consiglio di Stato', paragraphs: ['Tutela urgente del docente quando il provvedimento amministrativo possa compromettere lâ€™inserimento in graduatoria, lâ€™incarico lavorativo o la partecipazione alle procedure di reclutamento.']},
      { title: 'Esperienza dinanzi al Consiglio di Stato', paragraphs: [
        'Lo Studio ha ottenuto, nellâ€™ambito di controversie riguardanti docenti esclusi dalle GPS, provvedimenti cautelari favorevoli del Consiglio di Stato, con sospensione degli atti di esclusione dalle graduatorie.',
        'La tutela Ã¨ stata estesa anche alla fase di ottemperanza: in una delle controversie esaminate, il Consiglio di Stato ha accolto il ricorso patrocinato dallâ€™Avv. Luigi Ferrara, ordinando al Ministero dellâ€™Istruzione e allâ€™USR competente la reiscrizione con riserva dei docenti nelle graduatorie dalle quali erano stati depennati.',
      ]},
      { title: 'Il ruolo dello Studio', paragraphs: [
        'Lo Studio segue il docente dallâ€™esame preliminare della posizione e della documentazione sino allâ€™eventuale impugnazione del provvedimento, assicurando assistenza nelle fasi cautelari e di merito dinanzi al TAR, negli appelli al Consiglio di Stato e, ove necessario, nei successivi giudizi di ottemperanza.',
        'Lâ€™obiettivo Ã¨ assicurare una tutela tempestiva dei diritti e degli interessi professionali del personale scolastico nei rapporti con il Ministero dellâ€™Istruzione e del Merito, gli Uffici Scolastici Regionali e gli Ambiti Territoriali competenti.',
      ]},
    ],
  },
]

export function getLegalArea(slug: string) { return LEGAL_AREAS.find((area) => area.slug === slug) }

