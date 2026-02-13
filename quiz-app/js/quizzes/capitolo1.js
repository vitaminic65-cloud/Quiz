// ========================================
// QUIZ CAPITOLO 1 - COMPLETO (Dispensa Aggiornata)
// ========================================

const capitolo1Questions = [
    {
        question: "QUAL È LA PRIMA COSA DA FARE APPENA GIUNTI SUL LUOGO DI UN INCIDENTE?",
        answers: [
            "Fermare le emorragie importanti",
            "Valutare la scena e fare auto protezione",
            "Mettere l'ossigeno",
            "Immobilizzare il rachide cervicale e fare l'ABCDE primario"
        ],
        correctAnswer: 1
    },
    {
        question: "Nel soccorso ad un paziente colpito da una scarica elettrica:",
        answers: [
            "Si deve verificare che la scena sia sicura",
            "Si può valutare immediatamente il paziente perché i guanti servono da isolante",
            "Si rianima il paziente con materiali che non conducono elettricità, cannule, pallone auto espansibile",
            "Non si somministra O2 per motivi di sicurezza"
        ],
        correctAnswer: 0
    },
    {
        question: "PER POLITRAUMA SI INTENDE:",
        answers: [
            "Trauma di più distretti corporei con moltiplicazione degli effetti negativi concomitanti",
            "Trauma cranico più la frattura di un arto",
            "Trauma toracico",
            "Frattura di entrambe le caviglie"
        ],
        correctAnswer: 0
    },
    {
        question: "In base al meccanismo di lesione, indicate quali pazienti si presume abbiano subito una lesione della colonna",
        answers: [
            "Un muratore caduto da un'impalcatura due piani sopra il terreno",
            "Una persona trovata a galleggiare a faccia in giù in una piscina",
            "Il passeggero sveglio di un'auto che ha urtato un albero e che presenta solo numerosi tagli ed ecchimosi sul volto prodotti dal parabrezza",
            "Tutte le precedenti risposte sono corrette"
        ],
        correctAnswer: 3
    },
    {
        question: "Lo scopo della valutazione primaria nel trauma:",
        answers: [
            "Aprire le vie aeree e proteggere il rachide cervicale",
            "Identificare e trattare rapidamente le situazioni immediatamente pericolose per la sopravvivenza",
            "Rilevare i parametri relativi a coscienza respiro e circolo",
            "Immobilizzare correttamente la vittima"
        ],
        correctAnswer: 1
    },
    {
        question: "Il punto 'A' dell'ABCD primario nel paziente traumatizzato comprende:",
        answers: [
            "Valutare attentamente l'ambiente",
            "Valutare la pervietà delle vie aeree mentre si mantiene immobilizzato il rachide cervicale",
            "Valutare solo se il paziente è agitato",
            "Rendere solo pervie le vie aeree, il rachide cervicale si tratta nel punto C"
        ],
        correctAnswer: 1
    },
    {
        question: "Quale è lo scopo della valutazione secondaria nel paziente traumatizzato?",
        answers: [
            "L'identificazione di problemi secondari per quanto riguarda la sopravvivenza del paziente.",
            "L'identificazione di segni e sintomi che possono contribuire alla scelta dell'ospedale adeguato da parte della SOREU",
            "La prevenzione del danno secondario",
            "La correzione delle complicanze del danno primario"
        ],
        correctAnswer: 1
    },
    {
        question: "L'AVPU vuol DIRE:",
        answers: [
            "A = vie Aeree, V = Ventilazione, P = risposta al dolore (Pain), U = non risponde (Unresponsive)",
            "A = vie Aeree, V = Valutare la coscienza, P = Parlare al paziente, U = dare Uno stimolo",
            "A = cosciente, V = reagisce allo stimolo Verbale, P = reagisce al dolore, U = non reagisce",
            "A = Attento, V = Vocalizza, P = Parla, U = non risponde"
        ],
        correctAnswer: 2
    },
    {
        question: "In caso di paziente incosciente con trauma cranico NELLA VALUTAZIONE PRIMARIA È PRIORITARIO:",
        answers: [
            "Garantire la pervietà delle vie aeree, mettere l'ossigeno",
            "Valutare il diametro delle pupille",
            "Mettere in posizione laterale di sicurezza (PLS)",
            "Tutte le precedenti"
        ],
        correctAnswer: 0
    },
    {
        question: "La valutazione neurologica primaria nel paziente traumatizzato si esegue:",
        answers: [
            "Facendo alzare il paziente e vedendo come si muove",
            "Facendo camminare il paziente per valutarne l'equilibrio",
            "Facendo toccare il naso con la punta delle dita (indice-naso)",
            "Nessuna delle precedenti risposte è corretta"
        ],
        correctAnswer: 3
    },
    {
        question: "NEL CASO DI PERSONA VITTIMA DI EVENTO TRAUMATICO CON TRAUMA CRANICO ED OTORRAGIA SINISTRA IL COMPORTAMENTO PIÙ IDONEO TRA QUELLI ELENCATI È:",
        answers: [
            "Posizionarla supina con gli arti inferiori rialzati di 30 gradi per contrastare un eventuale ipotensione derivante dall'importante otorragia",
            "Posizionarla supina e ruotare il capo sul lato sinistro per facilitare la fuoriuscita di sangue dall'orecchio",
            "Posizionarla supina e immobilizzare il capo con un collare cervicale senza tentare di arrestare la fuoriuscita di sangue dal canale uditivo",
            "Posizionarla supina, immobilizzare il capo con un collare cervicale e inserire un tampone all'interno del canale uditivo per il controllo dell'emorragia"
        ],
        correctAnswer: 2
    },
    {
        question: "IN QUALE CASO IN UN PAZIENTE CHE HA RIPORTATO UN TRAUMA CRANICO IN SEGUITO AD INCIDENTE D'AUTO NON È INDICATA L'APPLICAZIONE DI COLLARE CERVICALE?",
        answers: [
            "Quando è cosciente e risponde perfettamente a tutte le domande",
            "Quando non lamenta dolore al collo",
            "Quando è cosciente, cammina e riferisce di star bene",
            "Nessuno dei precedenti"
        ],
        correctAnswer: 3
    },
    {
        question: "Quale delle seguenti affermazioni è vera circa la stabilizzazione manuale del rachide cervicale:",
        answers: [
            "Non è necessaria se è stato messo un collare cervicale",
            "Può essere rimossa dopo che è stato messo un collare cervicale",
            "Può essere rimossa quando l'infortunato è supino sulla barella",
            "Deve essere mantenuta sino a quando il capo non è stato fissato a una tavola spinale o ad altro presidio d'immobilizzazione definitiva"
        ],
        correctAnswer: 3
    },
    {
        question: "NEL CASO DI LESIONE ALLA COLONNA VERTEBRALE IN PERSONA COSCIENTE:",
        answers: [
            "La valutazione evidenzia sempre un deficit neurologico di moto e/o di sensibilità agli arti",
            "La valutazione può non evidenziare alcun sintomo o segno a carico della colonna vertebrale",
            "In tutti i casi, l'infortunato riferisce almeno dolore alla schiena",
            "Se è cosciente non può avere una lesione della colonna"
        ],
        correctAnswer: 1
    },
    {
        question: "Il modo migliore per ridurre i rischi DI lesioni al rachide cervicale è:",
        answers: [
            "Posizionare un collare rigido e mantenere manualmente il capo in posizione neutra",
            "Posizionare un collare morbido",
            "Iperestendere la testa per rendere pervie le vie aeree",
            "Lasciare il paziente come si trova"
        ],
        correctAnswer: 0
    },
    {
        question: "IL COLLARE CERVICALE PUÒ ESSERE CONTROINDICATO IN CASO DI:",
        answers: [
            "Paziente cosciente, senza deficit neurologici agli arti",
            "Difficoltà a ottenere la posizione neutra per dolore o contrattura muscolare",
            "Non ci sono controindicazioni",
            "Difficoltà respiratoria"
        ],
        correctAnswer: 1
    },
    {
        question: "È CONSIGLIATO L'UTILIZZO DEL COLLARE NEL BAMBINO DI 10 ANNI TRAUMATIZZATO?",
        answers: [
            "No se muove correttamente i 4 arti e non lamenta dolori al collo",
            "Sì sempre",
            "Solo se incosciente e in caso di grave sospetto di lesione midollare",
            "No se si oppone piangendo"
        ],
        correctAnswer: 1
    },
    {
        question: "Il casco integrale si TOGLIE:",
        answers: [
            "Solo se c'è un medico",
            "Solo se si ha in dotazione il collare cervicale",
            "Solo se si è già messo il collare cervicale",
            "Sempre, se è possibile"
        ],
        correctAnswer: 3
    },
    {
        question: "IN CASO DI PAZIENTE TRAUMATIZZATO CHE INDOSSA UN CASCO DI TIPO INTEGRALE, IL COLLARE CERVICALE va POSTO:",
        answers: [
            "Prima di togliere il casco",
            "Durante l'estrazione del casco",
            "Dopo l'estrazione del casco",
            "Dopo aver posizionato il paziente sulla tavola spinale"
        ],
        correctAnswer: 2
    },
    {
        question: "NEL CASO DI CORPO ESTRANEO (LAMA DI COLTELLO) NEL TORACE IL COMPORTAMENTO DA TENERE:",
        answers: [
            "Rimuoverlo rapidamente per evitare l'insufficienza respiratoria",
            "Rimuoverlo con le dovute precauzioni se il paziente lamenta dolore",
            "Non rimuoverlo e fissarlo adeguatamente",
            "Rimuoverlo rapidamente per facilitare l'espansione del parenchima polmonare e l'ossigenazione"
        ],
        correctAnswer: 2
    },
    {
        question: "In una ferita soffiante aperta del torace, si deve:",
        answers: [
            "Fare una medicazione occlusiva",
            "Lasciare la ferita aperta",
            "Aspirare con aspiratore collegato a un sondino sterile",
            "Fare medicazione chiusa su tre lati"
        ],
        correctAnswer: 3
    },
    {
        question: "Nel trauma toracico la valutazione del punto B comprende:",
        answers: [
            "O.P.A.C.S",
            "Frequenza respiratoria ed eventuali rumori",
            "Rilevazione della saturazione",
            "Osservazione e rilevazione del respiro"
        ],
        correctAnswer: 0
    },
    {
        question: "QUAL È LA POSIZIONE PIÙ IDONEA DA FAR ASSUMERE AD UN INFORTUNATO NON COSCIENTE CON SOSPETTO TRAUMA ADDOMINALE DURANTE IL TRASPORTO IN OSPEDALE CON AMBULANZA?",
        answers: [
            "Laterale di sicurezza",
            "Semiseduto",
            "Supino",
            "Posizione antalgica"
        ],
        correctAnswer: 2
    },
    {
        question: "QUALI SONO I SEGNI E SINTOMI CHE POSSONO ESSERE PRESENTI NEL PAZIENTE CON TRAUMA ADDOMINALE",
        answers: [
            "Presenza di ematomi, ferite, contusioni, abrasioni e dolore",
            "Dolore alla palpazione, contrattura, aumento del volume addominale",
            "Segni di shock",
            "Tutti i segni e sintomi descritti sopra possono essere presenti"
        ],
        correctAnswer: 3
    },
    {
        question: "NEL CASO DI FERITA APERTA ALL'ADDOME CON EVISCERAZIONE, IL COMPORTAMENTO PIÙ OPPORTUNO È:",
        answers: [
            "Non tentare di riposizionare i visceri e coprire con un telo sterile",
            "Tentare di riposizionare i visceri all'interno della cavità addominale e coprire con una medicazione sterile",
            "Comprimere l'addome in corrispondenza dei visceri per ridurre il sanguinamento",
            "Non far tossire il paziente"
        ],
        correctAnswer: 0
    },
    {
        question: "NEL CASO IN CUI NON FOSSE APPREZZABILE IL POLSO ARTERIOSO RADIALE IN UN SOGGETTO PALLIDO E AGITATO, VITTIMA DI TRAUMA, SI PUÒ PENSARE CHE:",
        answers: [
            "La sua pressione arteriosa sistolica sia inferiore a 80mmHg",
            "Sia estremamente spaventato",
            "Sia da rianimare per evitare un completo arresto cardiaco",
            "Sia necessario eseguire la valutazione senza guanti"
        ],
        correctAnswer: 0
    },
    {
        question: "QUAL È LA CAUSA PIÙ FREQUENTE DI SHOCK IN UNA PERSONA VITTIMA DI TRAUMA?",
        answers: [
            "Un grande spavento",
            "Un trauma cranico",
            "Un'emorragia",
            "Una lesione al midollo spinale"
        ],
        correctAnswer: 2
    },
    {
        question: "IN UN PAZIENTE IN STATO DI SHOCK POSSONO VERIFICARSI I SEGUENTI SEGNI E SINTOMI:",
        answers: [
            "Alterazione della coscienza",
            "Alterazione del respiro",
            "Alterazione dei segni di circolo",
            "Tutti i sintomi presenti nelle precedenti risposte"
        ],
        correctAnswer: 3
    },
    {
        question: "QUALE TRA I SEGNI ELENCATI SI MANIFESTA PIÙ PRECOCEMENTE IN CASO DI SHOCK EMORRAGICO:",
        answers: [
            "Tachicardia",
            "Ipotensione",
            "Tachipnea",
            "Nessuno dei precedenti"
        ],
        correctAnswer: 0
    },
    {
        question: "In un paziente traumatizzato cosciente senza polso periferico si deve:",
        answers: [
            "Effettuare subito un massaggio cardiaco",
            "Sospettare uno stato di shock e controllare il polso carotideo",
            "Mettere ossigeno a 2 lt/min.",
            "Metterlo semiseduto e tranquillizzarlo"
        ],
        correctAnswer: 1
    },
    {
        question: "Il mezzo più efficace per controllare una EMORRAGIA ESTERNA è:",
        answers: [
            "Sollevare la parte interessata",
            "Applicare il laccio emostatico",
            "Applicare una compressione diretta",
            "Comprimere l'arteria a monte"
        ],
        correctAnswer: 2
    },
    {
        question: "Per quali motivi è necessario immobilizzare un arto fratturato?",
        answers: [
            "Ridurre le perdite di sangue",
            "Ridurre la possibilità di lesioni alle strutture vicine",
            "Ridurre il dolore",
            "Tutte le precedenti risposte sono corrette"
        ],
        correctAnswer: 3
    },
    {
        question: "LA PRIMA MANOVRA DA EFFETTUARE IN CASO DI UNA EMORRAGIA ESTERNA AD UN ARTO È:",
        answers: [
            "Applicare un'azione di compressione sul punto di sanguinamento",
            "Applicare un laccio a monte del punto di sanguinamento",
            "Comprimere selettivamente l'arteria a monte del punto di sanguinamento",
            "Posizionare l'infortunato supino con gli arti inferiori sollevati di 60 gradi"
        ],
        correctAnswer: 0
    },
    {
        question: "La parte amputata di un arto deve essere:",
        answers: [
            "Inviata in medicina legale",
            "Lavata accuratamente e immersa in un contenitore con ghiaccio",
            "Immersa in disinfettante o soluzione fisiologica",
            "Trasportata con il paziente, avvolta in telo sterile, messa in sacchetto di plastica e tenuta al freddo"
        ],
        correctAnswer: 3
    },
    {
        question: "UN PAZIENTE DI 40 ANNI HA UNA SOSPETTA FRATTURA DI TIBIA-PERONE. COSA IMMOBILIZZATE?",
        answers: [
            "Solo la zona con sospetta frattura",
            "Frattura e ginocchio",
            "Caviglia, frattura e ginocchio",
            "Bacino, femore, ginocchio frattura e caviglia"
        ],
        correctAnswer: 2
    },
    {
        question: "Se dopo l'applicazione di una medicazione sterile su una ferita alla COSCIA VI accorgete che il SANGUINAMENTO CONTINUA potete:",
        answers: [
            "Applicare il tourniquet",
            "Rimuovere la precedente medicazione e applicarne una nuova",
            "Aggiungere nuove garze senza togliere le precedenti comprimendo con la mano.",
            "Comprimere l'arteria femorale per controllare il sanguinamento"
        ],
        correctAnswer: 2
    },
    {
        question: "Un oggetto penetrante deve essere:",
        answers: [
            "Estratto immediatamente",
            "Estratto con cautela stando pronti a tamponare la ferita",
            "Lasciato dove è fissandolo perché non si muova",
            "Lasciato dov'è"
        ],
        correctAnswer: 2
    },
    {
        question: "In caso di frattura non esposta DI UN ARTO si deve:",
        answers: [
            "Immobilizzare l'arto con steccobenda",
            "Raddrizzare l'arto anche forzandolo e steccarlo",
            "Ripristinare la posizione anatomica trazionando l'arto",
            "Caricare il paziente così com'è sulla barella a cucchiaio"
        ],
        correctAnswer: 0
    },
    {
        question: "Una sospetta frattura semplice e composta di gamba deve essere immobilizzata:",
        answers: [
            "Come prima cosa appena arrivati sul posto",
            "Dopo aver fatto l'ABCDE primario, prima di mobilizzare il paziente",
            "Senza precauzioni poiché non è esposta",
            "Solo in ambulanza"
        ],
        correctAnswer: 1
    },
    {
        question: "SOCCORRETE UNA DONNA INVESTITA DA AUTO. LA PAZIENTE SI PRESENTA COSCIENTE E ORIENTATA, IN POSIZIONE PRONA CON UN'EVIDENTE FRATTURA DI GAMBA. DOPO AVER IMMOBILIZZATO IL RACHIDE CERVICALE, QUALE È LA PRIMA COSA DA FARE?",
        answers: [
            "Posizionare il collare cervicale",
            "Somministrare ossigeno",
            "Effettuare la manovra di prono supinazione",
            "Rilevare la saturazione e la pressione arteriosa"
        ],
        correctAnswer: 2
    },
    {
        question: "QUAL È, TRA QUELLE ELENCATE, LA MIGLIORE MODALITÀ DI TRASPORTO DI UNA GRAVIDA ALLA 30^ SETTIMANA TRAUMATIZZATA?",
        answers: [
            "Supina ruotata leggermente sul lato destro",
            "Supina ruotata leggermente sul lato sinistro",
            "Supina semi seduta",
            "Prona"
        ],
        correctAnswer: 1
    },
    {
        question: "NEL CASO DI PERSONA VITTIMA DI EVENTO TRAUMATICO, NON COSCIENTE ED IN POSIZIONE SUPINA, LA PRIMA MANOVRA DA EFFETTUARE È:",
        answers: [
            "Controllo polso radiale per valutare se è in arresto cardiaco",
            "Applicazione di collare cervicale",
            "Stabilizzazione manuale della colonna, apertura e controllo delle vie aeree",
            "Controllo del diametro delle pupille"
        ],
        correctAnswer: 2
    },
    {
        question: "LA MANOVRA DI APERTURA DELLE VIE AEREE NEL PAZIENTE NON COSCIENTE VITTIMA DI EVENTO TRAUMATICO VIENE EFFETTUATA:",
        answers: [
            "Mediante estensione del capo e sollevamento della mandibola",
            "Mediante sublussazione della mandibola evitando l'iperestensione del capo",
            "Con la posizione laterale di sicurezza",
            "Con l'aspirazione e lo svuotamento del cavo orale"
        ],
        correctAnswer: 1
    },
    {
        question: "IN UN SOGGETTO TRAUMATIZZATO, LA CANNULA OROFARINGEA PUÒ ESSERE UTILIZZATA SE:",
        answers: [
            "È presente un'ostruzione delle vie aeree profonde da corpo estraneo solido",
            "Sono presenti segni o sintomi d'importante emorragia alle prime vie aeree",
            "Il paziente è incosciente",
            "È presente un trauma facciale"
        ],
        correctAnswer: 2
    },
    {
        question: "Quale delle seguenti manovre è prioritaria nel primo soccorso di un traumatizzato incosciente?",
        answers: [
            "Controllo di un modesto sanguinamento",
            "Medicazione su tre lati di una ferita aperta del torace",
            "Raccolta d'informazioni sull'accaduto",
            "Immobilizzazione di eventuali fratture"
        ],
        correctAnswer: 1
    },
    {
        question: "In un paziente TRAUMATIZZATO INCOSCIENTE CHE vomita DURANTE IL TRASPORTO si deve:",
        answers: [
            "Aspettare che finisca e poi aspirare in bocca",
            "Metterlo in posizione laterale (mantenendo l'immobilizzazione) e aspirare il cavo orale",
            "Somministrare O2",
            "Nessuna delle risposte precedenti è corretta"
        ],
        correctAnswer: 1
    },
    {
        question: "ESISTE CONTROINDICAZIONE ALLA SOMMINISTRAZIONE DI O2 IN MASCHERA CON RESERVOIR AD UN PAZIENTE COSCIENTE E NON CIANOTICO, VITTIMA DI EVENTO TRAUMATICO?",
        answers: [
            "No, nessuna",
            "No, ma solo se somministrato a bassi flussi (max6 lt/minuto)",
            "Sì, se è presente nausea",
            "Sì, se è presente trauma cranico"
        ],
        correctAnswer: 0
    },
    {
        question: "Per una corretta valutazione dell'ustione, quali dei seguenti fattori sono da considerare:",
        answers: [
            "La fonte dell'ustione",
            "Il grado e l'estensione dell'ustione",
            "La regione del corpo lesa",
            "Tutti i fattori elencati"
        ],
        correctAnswer: 3
    },
    {
        question: "IN UN PAZIENTE USTIONATO SOSPETTATE UNA LESIONE DA INALAZIONE IN PRESENZA DI:",
        answers: [
            "Ustioni da corrente elettrica agli arti",
            "Voce rauca",
            "Si riscontra presenza di benzina sulla scena dell'evento",
            "Se la frequenza respiratoria è elevata"
        ],
        correctAnswer: 1
    },
    {
        question: "IN CASO DI USTIONE DA FONTE DI CALORE LA MANOVRA PIÙ IMPORTANTE DA ESEGUIRE È:",
        answers: [
            "Applicare una pomata rinfrescante e antibiotica",
            "Raffreddare la zona colpita con acqua pulita",
            "Rompere le flittene e asportare la pelle necrotica",
            "Togliere gli abiti anche se adesi"
        ],
        correctAnswer: 1
    },
    {
        question: "La persona USTIONATA:",
        answers: [
            "Non si deve coprire perché possa disperdere il calore accumulato",
            "È da fasciare con un bendaggio compressivo dopo lavaggio della zona ustionata",
            "È a rischio d'ipotermia e quindi è necessario coprirla con teli sterili dopo aver raffreddato la zona ustionata",
            "Nessuna delle precedenti risposte è corretta"
        ],
        correctAnswer: 2
    },
    {
        question: "In un paziente con ustione agli occhi causata da sostanze chimiche è necessario:",
        answers: [
            "Detergere abbondantemente con acqua per 20/30mn dall'angolo nasale",
            "Rimuovere sempre la polvere asciutta",
            "Seguire eventuali procedure interne alla ditta legate alla sostanza utilizzata",
            "Tutti le precedenti risposte sono corrette"
        ],
        correctAnswer: 3
    },
    {
        question: "Nel caso di un paziente caduto in un SILOS che potrebbe contenere gas Tossico si deve:",
        answers: [
            "Scendere immediatamente con mascherina per estrarlo",
            "Contattare la SOREU e aspettare i Vigili del Fuoco",
            "Mettere l'autorespiratore, assicurarsi con una corda e calarsi con l'aiuto di altri colleghi muniti di autorespiratore",
            "Nessuno dei precedenti"
        ],
        correctAnswer: 1
    },
    {
        question: "IL MATERASSO A DEPRESSIONE:",
        answers: [
            "È un sistema d'immobilizzazione del paziente in toto",
            "Necessità di tempi lunghi di posizionamento",
            "Per il corretto utilizzo richiede il posizionamento del collare cervicale e l'utilizzo della barella cucchiaio",
            "Tutte le precedenti risposte sono corrette"
        ],
        correctAnswer: 3
    },
    {
        question: "INCIDENTE STRADALE: PAZIENTE È ALL'INTERNO DELL'AUTO, NON INCARCERATO, IN ARRESTO CARDIACO; È GIUSTIFICATA L'ESTRICAZIONE RAPIDA?",
        answers: [
            "Sì",
            "No",
            "Solo dopo aver posizionato il collare cervicale",
            "Solo dopo autorizzazione della SOREU"
        ],
        correctAnswer: 0
    },
    {
        question: "IN QUALE FASE DELLA VALUTAZIONE VENGONO IDENTIFICATI I TRAUMI MUSCOLO SCHELETRICI:",
        answers: [
            "Testa-piedi della valutazione secondaria",
            "Dopo aver valutato coscienza e respiro",
            "Colpo d'occhio",
            "Durante la valutazione primaria per evidenziare lesioni pericolose per la vita"
        ],
        correctAnswer: 0
    },
    {
        question: "PERCHÉ È IMPORTANTE RIFERIRE IL MECCANISMO DI LESIONE ALLA SOREU?",
        answers: [
            "No, non è necessario riferirlo alla SOREU, è sufficiente descriverlo sulla relazione di soccorso",
            "Perché dà indicazioni sui danni dei veicoli da riferire alle forze dell'ordine",
            "Perché dà importanti informazioni sulle possibili lesioni interne o all'evoluzione delle stesse in breve tempo",
            "Non spetta ai soccorritori del mezzo di base valutare e riferire il meccanismo di lesione"
        ],
        correctAnswer: 2
    },
    {
        question: "Qual è la definizione corretta della Golden hour (ORA D'ORO)?",
        answers: [
            "La prima ora dopo l'evento traumatico nella quale i trattamenti attuati al paziente incidono in maniera rilevante sulla riduzione della mortalità e sugli esiti invalidanti",
            "La prima ora dopo l'evento traumatico, nella quale i trattamenti attuati al paziente traumatizzato in pronto soccorso incidono in modo rilevante sulla riduzione degli esiti invalidanti",
            "È il tempo minimo di intervento sugli eventi traumatici",
            "Nessuna delle affermazioni precedenti è corretta"
        ],
        correctAnswer: 0
    },
    {
        question: "Quale affermazione è corretta sulla teoria del triplice impatto?",
        answers: [
            "Collisione del veicoli con 3 autovetture",
            "Collisione del veicolo, collisione del corpo sul veicolo, collisione degli organi sul corpo",
            "Collisione del veicolo, collisione del corpo sul veicolo, collisione contro un ostacolo fermo",
            "Caduta dall'alto, collisione con il suolo"
        ],
        correctAnswer: 1
    },
    {
        question: "COS'È LA MOBILIZZAZIONE ATRAUMATICA",
        answers: [
            "Una serie di manovre atte a consentire il posizionamento del paziente traumatizzato su di un piano rigido per garantire la protezione del rachide durante la mobilizzazione ed il trasporto",
            "Una serie di manovre che consentono la mobilizzazione del paziente che ha subito un trauma importante senza provocare altro dolore",
            "La mobilizzazione del paziente che non ha subito trauma",
            "Nessuna delle affermazioni precedenti è corretta"
        ],
        correctAnswer: 0
    },
    {
        question: "Quali sono i vantaggi del materasso a depressione rispetto alla tavola spinale nella mobilizzazione del paziente con sospetta frattura di BACINO?",
        answers: [
            "Il materasso è più confortevole, permette maggior agio nelle pratiche assistenziali, rapido da posizionare.",
            "Consente il raccoglimento e avvolgimento, anche se parziale, del bacino e di contenere le probabili emorragie",
            "Non vi sono particolari differenze, entrambi sono presidi di immobilizzazione, l'utilizzo dipende dall'abitudine degli operatori.",
            "Nessuna delle affermazioni precedenti è corretta."
        ],
        correctAnswer: 1
    },
    {
        question: "Il log-roll è:",
        answers: [
            "La Rotazione del paziente sul fianco mantenendo al tempo stesso la stabilizzazione manuale, con un movimento minino, della colonna vertebrale in toto",
            "Una tecnica di mobilizzazione per mettere il collare cervicale",
            "La mobilizzazione del paziente supino già su tavola spinale",
            "La rotazione del paziente supino con il collare cervicale senza mantenere in asse la colonna"
        ],
        correctAnswer: 0
    },
    {
        question: "La barella cucchiaio:",
        answers: [
            "Si utilizza per il trasporto del paziente traumatizzato dal terreno all'ospedale",
            "Si utilizza per lo spostamento dal terreno al presidio più idoneo per il paziente che ha subito un trauma",
            "Non si utilizza mai se è presente la tavola spinale",
            "È un presidio solo per pazienti con trauma lieve"
        ],
        correctAnswer: 1
    },
    {
        question: "IL TRATTAMENTO DI UN ARTO IN CUI È EVIDENTE UNA FRATTURA ESPOSTA SCOMPOSTA DEVE AVVENIRE:",
        answers: [
            "Riallineando i monconi solo dopo averli irrigati con soluzione sterile e disinfettanti",
            "Medicando la ferita e applicando una medicazione compressiva se è presente sanguinamento",
            "Immobilizzando l'arto così come si trova, dopo aver coperto la ferita",
            "Evitando di immobilizzare l'arto con steccobenda per non comprimere i monconi esposti"
        ],
        correctAnswer: 2
    },
    {
        question: "Un arto con deformazione evidente da sospetta FRATTURA SCOMPOSTA prima di IMMOBILIZZARLO COSA fate?",
        answers: [
            "Tentate di riallinearlo senza forzare",
            "Raddrizzate l'arto anche forzandolo",
            "Lo tenete in trazione, anche dopo averlo immobilizzato",
            "Lo lasciate nella posizione in cui si trova"
        ],
        correctAnswer: 3
    },
    {
        question: "STATE TRASPORTANDO UN PAZIENTE VITTIMA DI INCIDENTE STRADALE, ESTRICATO DALL'ABITACOLO DISTRUTTO DEL SUO VEICOLO. L'UOMO COSCIENTE E TUTTI I PARAMETRI SONO NELLA NORMA, RIFERISCE DOLORE ALLA TESTA E PRESENTA UN EMATOMA AL CAPO. COME VI COMPORTATE DURANTE IL TRASPORTO?",
        answers: [
            "Data la dinamica vi dirigete più velocemente in Pronto Soccorso",
            "Lo rivalutate frequentemente secondo lo schema ABCDE perché potrebbero potenzialmente peggiorare",
            "Poiché è cosciente e i parametri sono nella norma non è necessario rivalutarlo",
            "Mantengo il saturimetro in quanto è l'unico strumento indicatore di un possibile peggioramento"
        ],
        correctAnswer: 1
    },
    {
        question: "Qual è l'affermazione corretta nella valutazione neurologica del bambino:",
        answers: [
            "Non vi sono differenze con l'adulto",
            "Non si può valutare correttamente poiché vi sono difficoltà di interazione e comunicazione con il bimbo",
            "Tenere conto delle differenti capacità di interazione e comunicazione proprie dell'età infantile",
            "Nessuna affermazione è corretta"
        ],
        correctAnswer: 2
    },
    {
        question: "Un paziente vittima di un incidente STRADALE è:",
        answers: [
            "Meno esposto agli effetti delle basse temperature",
            "Più esposto agli effetti delle basse temperature",
            "Non presenta variazioni rilevanti",
            "Nessuna delle precedenti"
        ],
        correctAnswer: 1
    }
];

// Esportazione per l'uso nel file principale del quiz
window.capitolo1Questions = capitolo1Questions;