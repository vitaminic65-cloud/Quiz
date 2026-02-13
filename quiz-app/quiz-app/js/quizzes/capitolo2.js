// ========================================
// QUIZ CAPITOLO 2 - COMPLETO (Dispensa Urgenze Mediche)
// ========================================

const capitolo2Questions = [
    {
        question: "Paziente dispnoico è’ un paziente che:",
        answers: [
            "non ha alcun interesse per quello che succede intorno a lui",
            "ha difficoltà a digerire",
            "fa fatica a respirare",
            "è affetto da una malattia respiratoria cronica"
        ],
        correctAnswer: 2
    },
    {
        question: "paziente molto sofferente per dolore toracico:",
        answers: [
            "rivalutare costantemente ABC in quanto è una patologia evolutiva",
            "somministrare O2",
            "trasportare nella posizione più idonea tenendo presente la possibile evoluzione",
            "tutte le precedenti risposte sono corrette"
        ],
        correctAnswer: 3
    },
    {
        question: "L’ASSISTENZA di un paziente sveglio, poco contattabile e roseo include:",
        answers: [
            "la somministrazione di O2",
            "il posizionamento in posizione laterale di sicurezza",
            "la necessità di parlare a voce molto alta",
            "la somministrazione di zucchero"
        ],
        correctAnswer: 0
    },
    {
        question: "Nel corso di un intervento per urgenza medica le notizie PRINCIPALI da trasmettere alla soreu sono:",
        answers: [
            "La residenza del paziente",
            "Il peso del paziente",
            "le condizioni di coscienza, respiro e circolo",
            "il nome della struttura presso la quale è stato in passato curato il paziente"
        ],
        correctAnswer: 2
    },
    {
        question: "quale dei seguenti quadri respiratori si PUO’ PRESENTARE IN una reazione allergica?",
        answers: [
            "bronchite",
            "edema polmonare acuto",
            "asma",
            "enfisema"
        ],
        correctAnswer: 2
    },
    {
        question: "Siete inviati per malore nell’abitazione di un paziente che dalla documentazione medica risulta essere diabetico in terapia con insulina:",
        answers: [
            "somministrate glucosio istantaneo",
            "trasmettete i parametri vitali (coscienza respiro e circolo) alla SOREU",
            "chiedete ai parenti di somministrare insulina",
            "tutte le precedenti"
        ],
        correctAnswer: 1
    },
    {
        question: "Il soccorritore che interviene in un luogo pubblico su un paziente con sospetto ictus deve:",
        answers: [
            "Somministrare O2 ad alti flussi",
            "Invitare il paziente a camminare per valutare l’equilibrio",
            "Somministrare farmaci per la pressione",
            "Valutare i parametri vitali (ABC) e trasmetterli alla SOREU"
        ],
        correctAnswer: 3
    },
    {
        question: "In caso di reazione allergica i sintomi sono:",
        answers: [
            "Prurito, orticaria, edema (gonfiore) del volto e delle mucose",
            "Difficoltà respiratoria, ipotensione (shock)",
            "Nausea, vomito e dolori addominali",
            "Tutte le precedenti"
        ],
        correctAnswer: 3
    },
    {
        question: "La valutazione della coscienza in un lattante si effettua:",
        answers: [
            "chiamandolo per nome",
            "valutando la reazione a stimoli tattili (pizzicotto sulla pianta del piede)",
            "scuotendolo leggermente",
            "solleticandolo"
        ],
        correctAnswer: 1
    },
    {
        question: "In un bambino che presenta ostruzione totale delle vie aeree da corpo estraneo, se è cosciente si devono:",
        answers: [
            "Effettuare le pacche dorsali e le compressioni sottodiaframmatiche (Manovra di Heimlich)",
            "Cercare di estrarre il corpo estraneo con le dita",
            "Mettere il bambino a testa in giù",
            "Iniziare la rianimazione cardiopolmonare"
        ],
        correctAnswer: 0
    },
    {
        question: "Cosa si intende per 'falso croup' o laringospasmo?",
        answers: [
            "Un'improvvisa ostruzione delle alte vie aeree su base infiammatoria-infettiva",
            "Un'ostruzione delle vie aeree da corpo estraneo",
            "Un attacco d'asma",
            "Nessuna delle precedenti"
        ],
        correctAnswer: 0
    },
    {
        question: "Quali sono i sintomi tipici del 'falso croup'?",
        answers: [
            "Febbre, tosse abbaiante, stridore inspiratorio",
            "Tosse grassa e rinite",
            "Scomparsa della voce e dolore toracico",
            "Nessuno dei precedenti"
        ],
        correctAnswer: 0
    },
    {
        question: "IN CASO DI ATTACCO CONVULSIVO IN UN BAMBINO, IL SOCCORRITORE DEVE:",
        answers: [
            "Inserire un fazzoletto tra i denti",
            "Cercare di bloccare i movimenti",
            "Proteggere il bambino da traumi secondari e non forzare l'apertura della bocca",
            "Mettere il bambino in posizione seduta"
        ],
        correctAnswer: 2
    },
    {
        question: "NELLO STATO DI SHOCK IL BAMBINO PUO' PRESENTARE:",
        answers: [
            "Agitazione psicomotoria",
            "Aumento della frequenza respiratoria",
            "Aumento della frequenza cardiaca",
            "Tutte le precedenti"
        ],
        correctAnswer: 3
    },
    {
        question: "SI PARLA DI FEBBRE QUANDO LA TEMPERATURA CORPOREA ESTERNA E’ SUPERIORE A:",
        answers: [
            "37 gradi centigrade",
            "36 gradi centigradi",
            "39 gradi centigradi",
            "Basta che superi i 38 gradi centigradi"
        ],
        correctAnswer: 0
    },
    {
        question: "NEL SOSPETTO DI INTOSSICAZIONE IN ETA’ PEDIATRICA E’ CORRETTO:",
        answers: [
            "Non favorire mai il vomito",
            "Consegnare in PS eventuale materiale biologico raccolto sul luogo dell’evento",
            "Raccogliere e trasportare in PS con il bambino il contenitore e gli eventuali residui della sostanza ingerita",
            "Tutte le precedenti risposte sono esatte"
        ],
        correctAnswer: 3
    },
    {
        question: "QUALE FREQUENZA DI COMPRESSIONE DEVE ESSERE MANTENUTA DURANTE L’RCP NEL BAMBINO?",
        answers: [
            "basta ridurre al minimo le interruzioni delle CTE",
            "comprimere il torace ad una fra 80-100 compressioni/minuto",
            "comprimere il torace ad una frequenza da 100 a 120 compressioni/minuto",
            "nessuna risposta precedente è corretta"
        ],
        correctAnswer: 2
    },
    {
        question: "VI VIENE RIFERITO DAI GENITORI CHE IL BAMBINO HA AVUTO UN ATTACCO CONVULSIVO, QUALI DATI RACCOGLIETE NELL’ANAMNESI?",
        answers: [
            "La durata dell’attacco",
            "L’eventuale rilascio sfinterico",
            "L'eventuale presenza di febbre",
            "Tutte le precedenti"
        ],
        correctAnswer: 3
    }
];

// NON MODIFICARE QUESTA RIGA
window.capitolo2Questions = capitolo2Questions;