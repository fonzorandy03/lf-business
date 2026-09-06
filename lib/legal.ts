export interface LegalSection { title: string; paragraphs: string[] }
export interface LegalArea {
  number: string; category: string; title: string; description: string; slug: string; href: string
  image: string; imageAlt: string; professional: string; sections: LegalSection[]
}

export const LEGAL_AREAS: LegalArea[] = [
  {
    number: '01', category: 'Impresa & Governance', title: 'Diritto societario e d’impresa',
    description: 'Consulenza continuativa alle aziende, governance, rapporti tra soci e contenzioso societario.',
    slug: 'diritto-societario', href: '/specializzazioni-legali/diritto-societario', image: '/images/blog/diritto-impresa.png', imageAlt: 'Architettura istituzionale per il diritto societario', professional: 'Avv. Nunzia Robustelli',
    sections: [
      { title: 'Consulenza alle aziende e contenzioso societario', paragraphs: [
        'L’Avv. Nunzia Robustelli svolge attività di consulenza e assistenza in materia di diritto societario e d’impresa, seguendo diverse aziende sia nella gestione ordinaria dei rapporti giuridici e societari, sia nelle situazioni di conflitto che richiedono assistenza giudiziale.',
        'L’attività è rivolta a società, imprenditori, amministratori e soci, con un approccio finalizzato, ove possibile, alla prevenzione del contenzioso e alla ricerca di soluzioni capaci di tutelare l’impresa e garantire la continuità dell’attività aziendale.',
      ]},
      { title: 'Consulenza e assistenza continuativa alle imprese', paragraphs: [
        'L’Avv. Robustelli affianca le aziende nelle problematiche che accompagnano la loro attività, offrendo assistenza nella gestione dei rapporti tra soci, amministratori e organi societari, nell’interpretazione e predisposizione di accordi e nella gestione delle situazioni di potenziale conflitto.',
        'L’assistenza comprende anche le problematiche connesse ad assemblee societarie, bilanci, accesso alla documentazione sociale, esercizio dei diritti dei soci, rapporti tra maggioranza e minoranza, operazioni sulle partecipazioni e scioglimento o liquidazione della società. L’attività comprende, ad esempio, assemblee chiamate a deliberare sul bilancio, conflittualità tra soci, eventuale scioglimento anticipato e nomina del liquidatore.',
      ]},
      { title: 'Rapporti tra soci e governance societaria', paragraphs: [
        'Particolare attenzione è dedicata alle controversie che possono insorgere all’interno della compagine societaria, con assistenza nelle questioni riguardanti patti parasociali, cessione delle partecipazioni, obblighi assunti tra soci, funzionamento dell’assemblea e tutela dei soci di minoranza.',
        'Lo Studio ha affrontato, tra l’altro, controversie relative all’esecuzione di accordi tra soci finalizzati alla cessione congiunta delle quote societarie, alla valutazione delle offerte di acquisto e all’adempimento degli obblighi derivanti da patti parasociali.',
      ]},
      { title: 'Responsabilità e revoca degli amministratori', paragraphs: [
        'L’Avv. Robustelli presta assistenza nei procedimenti riguardanti la responsabilità degli amministratori, le contestazioni relative alla gestione societaria e le azioni dirette alla loro revoca in presenza dei presupposti previsti dalla legge.',
        'L’esperienza comprende anche procedimenti cautelari dinanzi alla Sezione Specializzata in materia di Impresa, con richieste di revoca dell’amministratore e adozione di misure urgenti a tutela dei soci e del patrimonio sociale.',
      ]},
      { title: 'Impugnazione delle deliberazioni assembleari', paragraphs: [
        'L’attività giudiziale comprende inoltre l’impugnazione delle deliberazioni societarie, anche mediante richiesta di sospensione cautelare della loro efficacia, nei casi in cui vengano contestate violazioni della legge, dello statuto o dei diritti dei soci.',
        'Tra le controversie affrontate rientrano giudizi dinanzi al Tribunale di Napoli – Sezione Specializzata in materia di Impresa – aventi ad oggetto l’impugnazione di deliberazioni ai sensi dell’art. 2479-ter c.c. e la relativa tutela cautelare.',
      ]},
      { title: 'Conflitti societari e tutela del patrimonio aziendale', paragraphs: [
        'Nelle situazioni di maggiore complessità, l’assistenza riguarda anche conflitti di interesse, atti di gestione contestati, rapporti contrattuali stipulati dagli amministratori, tutela del patrimonio sociale e responsabilità derivanti dalla gestione dell’impresa.',
        'L’attività professionale comprende controversie riguardanti società caratterizzate da partecipazioni paritetiche, nelle quali sono state affrontate questioni relative ai poteri dell’amministratore unico, ai rapporti tra i soci e ad atti negoziali ritenuti pregiudizievoli per gli interessi societari.',
      ]},
      { title: 'Contrattualistica, crediti e controversie commerciali', paragraphs: [
        'L’assistenza alle imprese si estende ai rapporti contrattuali e commerciali, alle contestazioni relative all’esecuzione dei contratti, al recupero dei crediti e alla gestione delle controversie con clienti, fornitori e partner commerciali.',
        'Quando sussistono le condizioni per evitare un lungo contenzioso, viene privilegiata anche la ricerca di una soluzione negoziale attraverso trattative, transazioni e procedure di negoziazione assistita, nell’interesse dell’impresa e della continuità dei rapporti economici.',
      ]},
      { title: 'Contenzioso societario e commerciale', paragraphs: [
        'Quando la soluzione stragiudiziale non risulta possibile, l’Avv. Robustelli cura la difesa giudiziale di società, imprenditori e soci, anche nell’ambito di procedimenti complessi dinanzi alle Sezioni Specializzate in materia di Impresa.',
        'L’assistenza accompagna il cliente dalla valutazione preventiva della controversia sino alla fase cautelare e di merito, mantenendo una visione unitaria degli aspetti societari, contrattuali e patrimoniali della vicenda.',
      ]},
      { title: 'Un’assistenza legale integrata per l’impresa', paragraphs: [
        'L’obiettivo è offrire all’azienda un punto di riferimento legale stabile, capace di intervenire non soltanto quando nasce una controversia, ma anche nella gestione quotidiana delle problematiche societarie e nella prevenzione dei rischi.',
        'La combinazione tra consulenza continuativa e difesa nel contenzioso societario consente all’Avv. Nunzia Robustelli di assistere l’impresa nelle diverse fasi della sua attività, tutelandone gli interessi, il patrimonio e gli equilibri societari.',
      ]},
    ],
  },
  {
    number: '02', category: 'Territorio & Amministrazione', title: 'Edilizia e urbanistica',
    description: 'Assistenza e difesa di privati, imprese, Comuni ed Enti pubblici.',
    slug: 'edilizia-urbanistica', href: '/specializzazioni-legali/edilizia-urbanistica', image: '/images/legal-edilizia-urbanistica-hq.png', imageAlt: 'Architettura urbana contemporanea e intervento di rigenerazione del territorio', professional: 'Avv. Luigi Ferrara',
    sections: [
      { title: 'Assistenza e difesa di privati, imprese ed Enti pubblici', paragraphs: [
        'Lo Studio Legale presta assistenza specialistica in materia di diritto urbanistico ed edilizio, operando sia nell’interesse di privati, proprietari e imprese, sia a tutela di Comuni ed Enti pubblici.',
        'La possibilità di affrontare il contenzioso da entrambe le prospettive consente allo Studio di conoscere in maniera approfondita non soltanto gli strumenti di tutela del privato, ma anche i procedimenti amministrativi, l’attività istruttoria e l’esercizio dei poteri di vigilanza e repressione spettanti alle Amministrazioni.',
      ]},
      { title: 'Tutela di privati e imprese', paragraphs: [
        'Lo Studio assiste privati e operatori economici nei rapporti con le Amministrazioni competenti in materia edilizia e urbanistica, sin dalla fase procedimentale e, ove necessario, nel successivo giudizio dinanzi al TAR e al Consiglio di Stato.',
        'L’attività riguarda, tra l’altro, ordinanze di demolizione e ripristino dello stato dei luoghi, accertamento della legittimità urbanistico-edilizia degli immobili, opere realizzate in assenza o difformità dal titolo edilizio e problematiche derivanti dalla disciplina urbanistica e dai vincoli insistenti sull’area.',
        'Una specifica esperienza è maturata nel settore dei condoni e delle sanatorie edilizie, compresa l’impugnazione dei provvedimenti di diniego e l’esame delle problematiche connesse alla presenza di vincoli paesaggistici, idrogeologici e di altra natura.',
      ]},
      { title: 'Procedimenti edilizi e rapporti con la Pubblica Amministrazione', paragraphs: [
        'L’assistenza non è limitata al contenzioso. Lo Studio interviene anche nella fase amministrativa, mediante osservazioni ex art. 10-bis della L. 241/1990, memorie, istanze, pareri e interlocuzioni con gli uffici competenti, al fine di prevenire, quando possibile, l’adozione di provvedimenti negativi.',
        'L’attività comprende anche procedimenti relativi a SCIA, permessi di costruire, interventi di riqualificazione edilizia e procedimenti dinanzi a SUAP e uffici dell’edilizia privata. In una recente pratica, ad esempio, l’assistenza ha riguardato una SCIA condizionata per un intervento di riqualificazione edilizia conservativa e le conseguenti osservazioni contro il parere edilizio contrario espresso in Conferenza di Servizi.',
      ]},
      { title: 'Pianificazione urbanistica, convenzioni e trasformazione del territorio', paragraphs: [
        'Lo Studio presta consulenza anche nelle operazioni urbanistiche più complesse, riguardanti piani attuativi, convenzioni urbanistiche, opere di urbanizzazione, permessi di costruire e procedimenti espropriativi.',
        'L’attività comprende la valutazione della fattibilità giuridico-amministrativa degli interventi e il coordinamento tra disciplina urbanistica, titoli edilizi, convenzioni e acquisizione delle aree necessarie all’attuazione dell’intervento.',
      ]},
      { title: 'Assistenza e difesa degli Enti pubblici', paragraphs: [
        'Accanto alla tutela dei privati, lo Studio assume la difesa delle Amministrazioni pubbliche nelle controversie urbanistiche ed edilizie, sostenendo la legittimità dell’azione amministrativa e dei provvedimenti adottati dagli uffici competenti.',
        'L’esperienza comprende la costituzione nell’interesse di Comuni dinanzi al TAR e al Consiglio di Stato, anche in controversie relative ad abusi edilizi, ordinanze di demolizione, titoli abilitativi e legittimità urbanistica degli immobili. In tale ambito risulta, tra l’altro, la difesa del Comune di Sarno dinanzi al Consiglio di Stato in una controversia avente ad oggetto un’ordinanza comunale di demolizione.',
      ]},
      { title: 'Consulenza agli Enti per programmi di sviluppo e rigenerazione', paragraphs: [
        'Lo Studio affianca inoltre le Amministrazioni nella predisposizione giuridico-amministrativa di operazioni di trasformazione e valorizzazione del territorio, anche attraverso strumenti di partenariato pubblico-privato e finanza di progetto.',
        'In tale settore sono stati conferiti allo Studio incarichi di assistenza giuridico-amministrativa per un Ambito di Rigenerazione urbana e per interventi di ampliamento di infrastrutture comunali mediante partenariato pubblico-privato e finanza di progetto.',
      ]},
      { title: 'Contenzioso amministrativo in materia edilizia e urbanistica', paragraphs: [
        'Lo Studio cura il contenzioso dinanzi ai Tribunali Amministrativi Regionali e al Consiglio di Stato, sia per il privato che contesta l’esercizio del potere amministrativo, sia per l’Ente chiamato a difendere la legittimità dei propri provvedimenti.',
        'La tutela comprende, secondo la specifica controversia, ricorsi per l’annullamento, domande cautelari, costituzioni in giudizio, memorie difensive e appelli al Consiglio di Stato.',
      ]},
      { title: 'Un’assistenza su entrambi i versanti del rapporto amministrativo', paragraphs: ['La peculiarità dell’attività dello Studio risiede nell’esperienza maturata sia nella difesa del cittadino e dell’impresa, sia nell’assistenza e rappresentanza delle Pubbliche Amministrazioni.']},
    ],
  },
  {
    number: '03', category: 'Gare & Contratti pubblici', title: 'Appalti pubblici', description: 'Assistenza alle imprese e contenzioso nelle procedure di gara.',
    slug: 'appalti-pubblici', href: '/specializzazioni-legali/appalti-pubblici', image: '/images/legal-appalti-pubblici-cmo.png', imageAlt: 'Incontro professionale internazionale presso CMO', professional: 'Avv. Luigi Ferrara',
    sections: [
      { title: 'Assistenza alle imprese e contenzioso nelle procedure di gara', paragraphs: [
        'Lo Studio Legale assiste imprese e operatori economici nel settore degli appalti pubblici, offrendo consulenza nelle diverse fasi delle procedure di affidamento e tutela giurisdizionale dinanzi ai Tribunali Amministrativi Regionali e al Consiglio di Stato.',
        'L’attività comprende l’analisi della documentazione di gara, la verifica dei requisiti di partecipazione, l’assistenza nella gestione delle criticità insorte durante la procedura e l’impugnazione dei provvedimenti lesivi adottati dalle Stazioni Appaltanti.',
        'L’esperienza dello Studio comprende anche controversie nelle quali vengono in rilievo i principi introdotti dal D.Lgs. 36/2023, tra cui i principi del risultato, della fiducia, della buona fede, della proporzionalità, della leale collaborazione e del favor participationis.',
      ]},
      { title: 'Esclusione dalla gara e soccorso istruttorio', paragraphs: ['Particolare attenzione è dedicata alla tutela dell’operatore economico in caso di esclusione per irregolarità o incompletezza della documentazione amministrativa, valutando la possibilità di ricorrere al soccorso istruttorio previsto dall’art. 101 del D.Lgs. 36/2023.']},
      { title: 'Ricorsi al TAR e appelli al Consiglio di Stato', paragraphs: [
        'In presenza di provvedimenti ritenuti illegittimi, lo Studio assiste l’impresa attraverso il rito speciale in materia di appalti previsto dall’art. 120 c.p.a., proponendo, ove necessario, domanda cautelare per ottenere la sospensione degli atti impugnati.',
        'La tutela può riguardare l’annullamento dell’esclusione o dell’aggiudicazione, la riammissione alla procedura, la sospensione degli atti di gara e, quando ne ricorrano i presupposti, il risarcimento del danno in forma specifica o per equivalente.',
        'L’attività dello Studio prosegue, ove necessario, dinanzi al Consiglio di Stato, anche mediante appello avverso le ordinanze cautelari pronunciate dal TAR.',
      ]},
      { title: 'Il ruolo dello Studio', paragraphs: [
        'Lo Studio affianca l’impresa dalla valutazione preventiva degli atti di gara sino all’eventuale fase contenziosa, con l’obiettivo di individuare tempestivamente le criticità della procedura e tutelare il diritto dell’operatore economico a una partecipazione conforme ai principi di trasparenza, concorrenza, parità di trattamento e proporzionalità.',
        'L’assistenza integra competenze di diritto amministrativo, contrattualistica pubblica e processo amministrativo, con particolare attenzione alle disposizioni del Codice dei contratti pubblici – D.Lgs. 36/2023 e alla più recente giurisprudenza amministrativa.',
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
      { title: 'GPS – Graduatorie Provinciali per le Supplenze', paragraphs: ['Ricorsi avverso esclusioni, depennamenti, mancato riconoscimento dei titoli, rettifica del punteggio e corretta collocazione in graduatoria.']},
      { title: 'Titoli di sostegno e abilitazione all’insegnamento', paragraphs: ['Tutela dei docenti nei procedimenti di verifica, convalida e riconoscimento dei titoli.']},
      { title: 'Titoli conseguiti all’estero', paragraphs: ['Assistenza nei procedimenti e nei ricorsi relativi al riconoscimento in Italia di abilitazioni all’insegnamento e specializzazioni sul sostegno conseguite in altri Paesi, anche alla luce della normativa europea e dei principi affermati dall’Adunanza Plenaria del Consiglio di Stato. L’esperienza comprende, tra l’altro, ricorsi relativi a titoli conseguiti in Romania e Albania.']},
      { title: 'Provvedimenti del Ministero e degli Uffici Scolastici', paragraphs: ['Impugnazione di dinieghi, esclusioni e provvedimenti adottati in autotutela.']},
      { title: 'Fase cautelare e appello al Consiglio di Stato', paragraphs: ['Tutela urgente del docente quando il provvedimento amministrativo possa compromettere l’inserimento in graduatoria, l’incarico lavorativo o la partecipazione alle procedure di reclutamento.']},
      { title: 'Esperienza dinanzi al Consiglio di Stato', paragraphs: [
        'Lo Studio ha ottenuto, nell’ambito di controversie riguardanti docenti esclusi dalle GPS, provvedimenti cautelari favorevoli del Consiglio di Stato, con sospensione degli atti di esclusione dalle graduatorie.',
        'La tutela è stata estesa anche alla fase di ottemperanza: in una delle controversie esaminate, il Consiglio di Stato ha accolto il ricorso patrocinato dall’Avv. Luigi Ferrara, ordinando al Ministero dell’Istruzione e all’USR competente la reiscrizione con riserva dei docenti nelle graduatorie dalle quali erano stati depennati.',
      ]},
      { title: 'Il ruolo dello Studio', paragraphs: [
        'Lo Studio segue il docente dall’esame preliminare della posizione e della documentazione sino all’eventuale impugnazione del provvedimento, assicurando assistenza nelle fasi cautelari e di merito dinanzi al TAR, negli appelli al Consiglio di Stato e, ove necessario, nei successivi giudizi di ottemperanza.',
        'L’obiettivo è assicurare una tutela tempestiva dei diritti e degli interessi professionali del personale scolastico nei rapporti con il Ministero dell’Istruzione e del Merito, gli Uffici Scolastici Regionali e gli Ambiti Territoriali competenti.',
      ]},
    ],
  },
]

export function getLegalArea(slug: string) { return LEGAL_AREAS.find((area) => area.slug === slug) }
