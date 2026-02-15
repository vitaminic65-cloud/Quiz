// ========================================
// QUIZ CAPITOLO 8 - VERSIONE CORRETTA
// ========================================

const capitolo8Questions = [
    {
        question: "LA PRIMA FASE DI RICOGNIZIONE NELL'AREA DELL'EVENTO E' FINALIZZATA A:?",
        answers: [
            "Confermare l'evento",
            "Individuare il rischio evolutivo",
            "Dimensionare l'evento",
            "Tutte le precedenti operazioni"
        ],
        correctAnswer: 3
    },
    {
        question: "Quali parametri prende in considerazione il metodo triage START?",
        answers: [
            "GCS, pressione arteriosa, sudorazione",
            "GCS, RTS e respiro",
            "Saturazione, stato neurologico e frequenza cardiaca",
            "Respiro, polso periferico e stato di coscienza"
        ],
        correctAnswer: 3
    },
    {
        question: "QUALI TRA LE SEGUENTI SONO LE CARATTERISTICHE CHE DEVE AVERE UN BUON SISTEMA DI TRIAGE?",
        answers: [
            "Facile memorizzazione",
            "Rapidità di esecuzione",
            "Attendibilità nello stabilire le priorità",
            "Tutte le precedenti caratteristiche"
        ],
        correctAnswer: 3
    },
    {
        question: "QUALE TRA LE SEGUENTI NON E' UNA CARATTERISTICA DI UN BUON SISTEMA DI TRIAGE?",
        answers: [
            "Facile memorizzazione",
            "Rapidità di esecuzione",
            "Staticità",
            "Facilità di impiego"
        ],
        correctAnswer: 2
    },
    {
        question: "CHI E' IL DSS?",
        answers: [
            "Il direttore dei soccorsi sanitari",
            "Il direttore socio-sanitario",
            "Il direttore dei servizi sanitari",
            "Il direttore dei servizi strutturali"
        ],
        correctAnswer: 0
    },
    {
        question: "QUAL E' LA FUNZIONE-SANITA' UMANA, VETERINARIA ED ASSISTENZA SOCIALE ATTIVATA A LIVELLO DI CENTRI DI COORDINAMENTO OPERATIVI IN EMERGENZA?",
        answers: [
            "Funzione 3",
            "Funzione 2",
            "Funzione 6",
            "Funzione 1"
        ],
        correctAnswer: 1
    },
    {
        question: "DI CHE COLORE E' LA PETTORINA DI RICONOSCIMENTO CHE INDOSSSA IL DIRETTORE DEL TRASPORTO?",
        answers: [
            "Blu",
            "Rossa",
            "Gialla",
            "Giallo/rossa"
        ],
        correctAnswer: 0
    },
    {
        question: "QUALE TRA I SEGUENTI NON E' UN COMPITO DEL 1° MEZZO CHE GIUNGE SUL LUOGO DI UN EVENTO MAGGIORE?",
        answers: [
            "Aprire la maxi busta su indicazione della centrale operativa",
            "Fare la ricognizione dell'evento",
            "Rapportarsi con i VVF",
            "Trattare subito i primi feriti che trova"
        ],
        correctAnswer: 3
    },
    // ✅ CORREZIONE: Aggiunta virgola mancante
    {
        question: "CHE COSA E' IL PMA?",
        answers: [
            "E' una struttura ospedaliera con P.S. vicino al luogo dell'evento",
            "E' una struttura o un'area funzionale dove radunare e trattare le vittime",
            "E' la struttura dove viene istituito il posto di comando avanzato",
            "E' un ospedale da campo"
        ],
        correctAnswer: 1
    },
    // ✅ CORREZIONE: Aggiunta virgola mancante
    {
        question: "NEL SISTEMA START, UN PAZIENTE CHE: NON CAMMINA, HA FREQUENZA RESPIRATORIA DI 25 ATTI/MIN, HA POLSO RADIALE ED ESEGUE ORDINI SPECIFICI, CON QUALE CODICE COLORE VIENE IDENTIFICATO?",
        answers: [
            "Verde",
            "Giallo",
            "Rosso",
            "Bianco"
        ],
        correctAnswer: 1
    },
    // ✅ CORREZIONE: Aggiunta virgola mancante
    {
        question: "GLI STRUMENTI DELLA MEDICINA DELLE CATASTROFI SONO:",
        answers: [
            "Strategia, logistica, tattica",
            "Strategia, logistica, formazione",
            "Prevenzione, logistica, tattica",
            "Collaborazione, improvvisazione, prontezza"
        ],
        correctAnswer: 0
    },
    // ✅ CORREZIONE: Aggiunta virgola mancante
    {
        question: "IN MEDICINA DELLE CATASTROFI, LA STRATEGIA E':",
        answers: [
            "L'insieme del personale, mezzi e matereiali che sostengono un piano",
            "L'elaborazione dei piani di soccorso",
            "L'applicazione dei piani",
            "La conduzione di un'esercitazione"
        ],
        correctAnswer: 1
    },
    // ✅ CORREZIONE: Aggiunta virgola mancante
    {
        question: "IN MEDICINA DELLE CATASTROFI, LA TATTICA E'?",
        answers: [
            "L'insieme di personale, materiali e mezzi che sostengono un piano",
            "L'elaborazione dei piani di soccorso",
            "L'applicazione dei piani",
            "L'analisi dei rischi del territorio"
        ],
        correctAnswer: 2
    },
    // ✅ CORREZIONE: Aggiunta virgola mancante
    {
        question: "IN MEDICINA DELLE CATASTROFI, LA LOGISTICA E'",
        answers: [
            "L'elaborazione dei piani di soccorso",
            "L'applicazione dei piani",
            "L'insieme di personale, materiali e mezzi che sostengono un piano",
            "L'analisi dei rischi del territorio"
        ],
        correctAnswer: 2
    },
    // ✅ CORREZIONE: Aggiunta virgola mancante
    {
        question: "NEL SISTEMA START, UN PAZIENTE CHE CAMMINA, HA UNA FREQUENZA RESPIRATORIA DI 22 ATTI/MIN, HA POLSO RADIALE, ESEGUE ORDINI SEMPLICI, CON QUALE CODICE COLORE VIENE IDENTIFICATO?",
        answers: [
            "Rosso",
            "Verde",
            "Giallo",
            "Bianco"
        ],
        correctAnswer: 1
    },
    // ✅ CORREZIONE: Aggiunta virgola mancante
    {
        question: "NEL SISTEMA START, UN PAZIENTE CHE NON CAMMINA, HA UNA FREQUENZA RESPIRATORIA DI 35 ATTI/MIN, CON QUALE CODICE COLORE VIENE IDENTIFICATO?",
        answers: [
            "Verde",
            "Giallo",
            "Rosso",
            "Bianco"
        ],
        correctAnswer: 2
    },
    // ✅ CORREZIONE: Aggiunta virgola mancante
    {
        question: "NEL SISTEMA START, UN PAZIENTE CHE NON CAMMINA, HA UNA FREQUENZA RESPIRATORIA DI 25 ATTI/MIN, HA POLSO RADIALE E NON ESEGUE ORDINI SEMPLICI, CON QUALE CODICE COLORE VIENE IDENTIFICATO?",
        answers: [
            "Verde",
            "Rosso",
            "Giallo",
            "Bianco"
        ],
        correctAnswer: 1
    },
    // ✅ CORREZIONE: Aggiunta virgola mancante
    {
        question: "NEL SISTEMA START, UN PAZIENTE CHE NON CAMMINA, HA UNA FREQUENZA RESPIRATORIA DI 26 ATTI/MIN, NON HA POLSO RADIALE  CON QUALE CODICE COLORE VIENE IDENTIFICATO?",
        answers: [
            "Verde",
            "Giallo",
            "Bianco",
            "Rosso"
        ],
        correctAnswer: 3
    },
    // ✅ CORREZIONE: Aggiunta virgola mancante
    {
        question: "UN EVENTO CATASTROFICO AD EFFETTO LIMITATO E' CARATTERIZZATO DA:",
        answers: [
            "Integrità delle strutture di soccorso",
            "Limitata estensione nel tempo delle operazioni di soccorso valutate <12 ore",
            "Attivazione piano di emergenzza straordinario interno alla CO",
            "Tutte le precedenti"
        ],
        correctAnswer: 3
    },
    // ✅ CORREZIONE: Aggiunta virgola mancante
    {
        question: "UN EVENTO CATASTROFICO AD EFFETTO CHE TRAVALICA LE POTENZIALITA' DI RISPOSTA DELLE STRUTTURE LOCALI E' CARATTERIZZATO DA:",
        answers: [
            "Devastazione di ampi territori",
            "Elevato numero di vittime",
            "Coordinamento degli interventi estremamente difficile (comunicazioni,transitabilità)",
            "Tutte le precedenti"
        ],
        correctAnswer: 3
    },
    // ✅ CORREZIONE: Aggiunta virgola mancante
    {
        question: "TRA I SEGUENTI, QUALE NON E' COMPITO DEL DIRETTORE AL TRASPORTO?",
        answers: [
            "Movimentazione dei mezzi di trasporto sanitario",
            "Censimento dei mezzi disponibili",
            "Comunicazione con la CO e il DSS",
            "Coordinamento delle funzioni di triage"
        ],
        correctAnswer: 3
    },
    // ✅ CORREZIONE: Aggiunta virgola mancante
    {
        question: "DA CHI E' COSTITUITO IL POSTO DI COMANDO AVANZATO PROVVISORIO?",
        answers: [
            "1°squadra VVF + 1°ambulanza + 1°squadra MSA (guardia igienica)",
            "1°squadra VVF + 1°mezzo FFO + 1°ambulanza",
            "1°ambulanza + 1°mezzo MSA + 1°mezzo FFO",
            "1°ambulanza + 1°mezzo FFO + personale SOREU"
        ],
        correctAnswer: 1
    }
];

// ✅ CORREZIONE: Esportazione corretta
window.capitolo8Questions = capitolo8Questions;
