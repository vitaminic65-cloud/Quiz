// ========================================
// QUIZ CAPITOLO 5 - COMPLETO (RCP e DAE - Adulto e Pediatrico)
// ========================================

const capitolo5Questions = [
    {
        question: "Qual è’ la causa più comune di ostruzione delle vie aeree in un soggetto adulto privo di COSCIENZA?",
        answers: [
            "la dentiera",
            "la caduta della lingua",
            "le secrezioni",
            "un corpo estraneo"
        ],
        correctAnswer: 1
    },
    {
        question: "La respirazione artificiale deve essere praticata:",
        answers: [
            "In caso di paziente incosciente",
            "in tutti i casi di respiro assente o anormale, associata alle CTE",
            "nell’insufficienza respiratoria anche se di grado lieve",
            "solo se sono disponibili le mascherine tascabili"
        ],
        correctAnswer: 1
    },
    {
        question: "In un paziente incosciente che non respira le cte:",
        answers: [
            "devono essere eseguite dopo due ventilazioni",
            "devono essere eseguite immediatamente",
            "devono essere eseguite dopo la verifica di assenza del polso carotideo",
            "non devono essere eseguite"
        ],
        correctAnswer: 1
    },
    {
        question: "le compressioni toraciche esterne devono essere effettuate con la frequenza di:",
        answers: [
            "60 – 80 compressioni / minuto",
            "più di 120 compressioni / minuto",
            "non meno di 100 compressioni / minuto e non più di 120 compressioni/minuto",
            "80 – 100 compressioni / minuto"
        ],
        correctAnswer: 2
    },
    {
        question: "Con che frequenza devono alternarsi compressioni TORACICHE esterne e ventilazioni nella rianimazione cardiopolmonare a due soccorritori, in un paziente ADULTO?",
        answers: [
            "30 compressioni – 2 ventilazioni",
            "5 compressioni – 1 ventilazione",
            "5 compressioni – 2 ventilazioni",
            "15 compressioni – 2 ventilazioni"
        ],
        correctAnswer: 0
    },
    {
        question: "La cannula orofaringea (di Mayo):",
        answers: [
            "solleva la base della lingua staccandola dalla parete posteriore della faringe permettendo il passaggio di aria",
            "deve essere utilizzata immediatamente nei pazienti dispnoici",
            "deve essere sempre fissata con cerotto",
            "si usa indifferentemente sia nei pazienti coscienti che incoscienti"
        ],
        correctAnswer: 0
    },
    {
        question: "Le POSSIBILI complicanze legate alle compressioni toraciche esterne comprendono:",
        answers: [
            "lesioni polmonari",
            "lacerazioni del fegato",
            "rottura di coste e sterno",
            "possono comportare tutte le complicanze sopra elencate"
        ],
        correctAnswer: 3
    },
    {
        question: "Nella rianimazione cardiopolmonare a due soccorritori in un paziente adulto, dopo quanti cicli (compressione/ventilazione) si deve eseguire il cambio operatore:",
        answers: [
            "6-7 cicli (2 minuti circa)",
            "10-12 cicli (4 minuti circa)",
            "12-14 cicli (5 minuti circa)",
            "quando si vuole"
        ],
        correctAnswer: 0
    },
    {
        question: "UN soccorritore può’ interrompere la rianimazione cardiopolmonare QUANDO:",
        answers: [
            "pensa che la vittima non sopravvivrà",
            "pensa che la vittima riporterà un danno cerebrale permanente",
            "ha indicazioni precise in merito, dalla SOREU",
            "non vede reazione pupillare o altri segni di vita"
        ],
        correctAnswer: 2
    },
    {
        question: "Quale dei seguenti pazienti non deve essere defibrillato con un dae?",
        answers: [
            "un bambino di 3 aa",
            "un uomo di 80 aa",
            "una donna al sesto mese di gravidanza",
            "nessuno dei precedenti"
        ],
        correctAnswer: 3
    },
    {
        question: "Quando, tra le seguenti situazioni si inizia la sequenza BLSD?",
        answers: [
            "paziente che non risponde",
            "paziente con danno cerebrale grave",
            "paziente con respiro anomalo",
            "paziente in stato di agitazione psico-motoria"
        ],
        correctAnswer: 2
    },
    {
        question: "IN UN PAZIENTE ADULTO LE PIASTRE ADESIVE DEL DAE POSSONO ESSERE APPLICATE:",
        answers: [
            "in qualunque posizione purché non si ritardi la defibrillazione",
            "solamente antero-posteriormente per garantire una maggiore efficacia di passaggio dell’energia",
            "antero – laterale, antero – posteriore, latero-laterale",
            "nessuna delle precedenti"
        ],
        correctAnswer: 2
    },
    {
        question: "Quanto deve durare la RCP tra i primi due cicli di DEFIBRILLAZIONE?",
        answers: [
            "1 minuto",
            "3-4 minuti, in ogni caso",
            "fino all’attivazione della successiva fase di analisi, circa 2 minuti",
            "è indifferente"
        ],
        correctAnswer: 2
    },
    {
        question: "dopo aver valutato il paziente e avere dichiarato l’acc, quando applichi il dae?",
        answers: [
            "dopo 2 minuti di RCP",
            "appena disponibile",
            "dopo indicazione della SOREU",
            "dopo 10 cicli di RCP"
        ],
        correctAnswer: 1
    },
    {
        question: "State soccorrendo un uomo di 50 anni che lamenta dolore toracico. Improvvisamente diventa incosciente. La prima cosa da fare è:",
        answers: [
            "dare al paziente un pugno precordiale",
            "instaurare la pervietà delle vie aeree, somministrare O2 e, se necessario, iniziare la ventilazione artificiale",
            "guardare il paziente, valutare stato di coscienza e attività respiratoria",
            "defibrillare"
        ],
        correctAnswer: 2
    },
    {
        question: "DOVETE SOCCORRERE UN UOMO DI 60 ANNI IN ACC; IL PARENTE VI INFORMA CHE E’ PORTATORE DI PM. UTILIZZATE IL DAE?",
        answers: [
            "si",
            "no",
            "solo se è possibile disattivare il PM",
            "solo dopo aver contattato la SOREU o il medico di famiglia"
        ],
        correctAnswer: 0
    },
    {
        question: "STATE SOCCORRENDO UN PAZIENTE IN ACC RIPESCATO DALL’ACQUA, COME PROCEDETE?",
        answers: [
            "asciugate il torace e procedete come da protocollo",
            "non asciugate, in quanto l’acqua conduce meglio l’energia",
            "non utilizzate il DAE, gli abiti bagnati disperderebbero l’energia",
            "nessuna delle precedenti"
        ],
        correctAnswer: 0
    },
    {
        question: "QUANDO AVVIENE IL PRIMO CONTATTO CON LA SOREU DURANTE UN ACC.",
        answers: [
            "dopo i primi 10 minuti di RCP",
            "dopo avere stabilito che il paziente è in ACC",
            "prima di partire dal posto per comunicare l’ospedale di destinazione",
            "in tutte le situazioni precedenti"
        ],
        correctAnswer: 1
    },
    {
        question: "QUANDO SI CONSENTE LA PRIMA ANALISI CON IL DAE IN UN PAZIENTE IN ACC?",
        answers: [
            "quando la SOREU vi comunica di attendere in posto il MSA/MSI.",
            "solo dopo aver erogato le ventilazioni di soccorso",
            "appena il DAE è pronto",
            "dopo 2 minuti di RCP"
        ],
        correctAnswer: 2
    },
    {
        question: "QUANDO FARE LA CHECK-LIST?",
        answers: [
            "solo quando il collega del turno precedente ha usato il DAE",
            "ad ogni inizio turno",
            "prima di ogni uscita",
            "una volta al mese"
        ],
        correctAnswer: 1
    },
    {
        question: "CONSENTIRE L’ANALISI DEL DAE:",
        answers: [
            "quando la SOREU comunica di trasportare in Ospedale",
            "dopo avere rilevato “coscienza assente”",
            "dopo avere acceso il DAE e applicato le piastre",
            "durante il trasporto in ospedale"
        ],
        correctAnswer: 2
    },
    {
        question: "DOPO AVER COLLEGATO CORRETTAMENTE LE PIASTRE DEL DAE AL PAZIENTE, L’ANALISI NON PARTE E IL DAE RIPETE IL MESSAGGIO “COLLEGARE GLI ELETTRODI”",
        answers: [
            "spegni e riaccendi il DAE",
            "inizia la RCP",
            "controlla che le connessioni siano corrette, gli elettrodi ben adesi ed eventualmente li sostituisci",
            "inverti la posizione degli elettrodi"
        ],
        correctAnswer: 2
    },
    {
        question: "SE IN QUALUNQUE MOMENTO DELLA RCP LA VITTIMA INIZIA A SVEGLIARSI, SI MUOVE, APRE GLI OCCHI E RESPIRA NORMALMENTE",
        answers: [
            "interrompi le manovre di RCP, attendi l’analisi del DAE e se negativa rivaluti il paziente",
            "interrompila RCP (senza rimuovere le piastre) valuti ABCDE e contatti la SOREU",
            "continui le manovre di RCP fino all’avvio della nuova analisi",
            "nessuna delle precedenti"
        ],
        correctAnswer: 1
    },
    {
        question: "STATE FACENDO UN TRASFERIMENTO EXTRA-PROVINCIA IN LOMBARDIA E TROVATE UN MALORE IN STRADA; AVETE A BORDO IL DAE, COSA FATE?",
        answers: [
            "fate le valutazioni e poi chiamate la SOREU competente per la Provincia e riferite di avere il DAE, ma di non poterlo utilizzare perché siete fuori dalla vostra area di competenza",
            "fate le valutazioni e chiamate la SOREU competente e riferite di aver iniziato la procedura DAE secondo i protocolli di vostra conoscenza",
            "fate le valutazioni e iniziate subito RCP attendendo il mezzo inviato dalla SOREU locale",
            "chiamate il sistema di emergenza e vi fate passare la vostra SOREU per chiedere l’autorizzazione all’utilizzo del DAE"
        ],
        correctAnswer: 1
    },
    {
        question: "LA CANNULA OROFARINGEA (DI MAYO) NEL BAMBINO DI ETA’ MAGGIORE A 8 ANNI:",
        answers: [
            "Si può utilizzare con l’impiego dell’abbassalingua",
            "Ha le stesse indicazioni valide per l'adulto",
            "È da evitare se il paziente è traumatizzato",
            "Non si utilizza mai"
        ],
        correctAnswer: 1
    },
    {
        question: "LA CANNULA DI MAYO, NELL’INFANTE:",
        answers: [
            "Non è consigliabile per le possibili lesioni alla cavità orale",
            "Ha le stesse indicazioni valide per l'adulto",
            "Se utilizzata, si introduce con l’ausilio di un abbassalingua senza movimento di rotazione",
            "E' da evitare se il paziente è traumatizzato"
        ],
        correctAnswer: 2
    },
    {
        question: "NEL CASO SIA NECESSARIO EFFETTUARE LA RCP A 2 SOCCORRITORI SU UN INFANTE, IL RAPPORTO COMPRESSIONI - VENTILAZIONI DEVE ESSERE:",
        answers: [
            "15:2",
            "3:1",
            "5:1",
            "30:2"
        ],
        correctAnswer: 0
    },
    {
        question: "IN CASO SIA NECESSARIO EFFETTUARE LA RCP A 2 SOCCORRITORI SU UN BAMBINO, IL RAPPORTO COMPRESSIONI - VENTILAZIONI DEVE ESSERE:",
        answers: [
            "5:1",
            "15:2",
            "3:1",
            "30:2"
        ],
        correctAnswer: 1
    },
    {
        question: "QUALE È IL PUNTO CORRETTO PER ESEGUIRE LE COMPRESSIONI TORACICHE ESTERNE IN UN INFANTE?",
        answers: [
            "Al centro del torace",
            "Al centro dello sterno",
            "Metà inferiore dello sterno",
            "Metà superiore dello sterno"
        ],
        correctAnswer: 2
    },
    {
        question: "COSA COMPRENDE IL PBLS (catena della sopravvivenza)?",
        answers: [
            "Prevenzione, RCP, DAE, allarme precoce, soccorso avanzato (PALS), assistenza post-arresto",
            "Prevenzione, Immediato riconoscimento dell’ACC e attivazione sistema d’emergenza, RCP, DAE, soccorso avanzato (PALS), assistenza post-arresto",
            "Allarme precoce, riconoscimento precoce del ACC, RCP, DAE",
            "Riconoscimento precoce dell’Arresto Cardiaco"
        ],
        correctAnswer: 1
    },
    {
        question: "DOPO AVER VALUTATO L’ASSENZA DI COSCIENZA E DI RESPIRO IN UN BAMBINO/INFANTE OCCORRE:",
        answers: [
            "Iniziare immediatamente le CTE",
            "Valutare la presenza di polso centrale",
            "Contattare la SOREU",
            "Eseguire 2 ventilazioni"
        ],
        correctAnswer: 3
    },
    {
        question: "DURANTE IL SOCCORSO AD UN BAMBINO/INFANTE IN ACC, QUALE DI QUESTE AFFERMAZIONI È CORRETTA?",
        answers: [
            "La sopravvivenza e l’esito neurologico possono essere migliorati da un’immediata RCP",
            "All’arrivo si deve disostruire le vie aeree e chiamare aiuto",
            "Iniziare le CTE dopo aver effettuato le 2 ventilazioni di soccorso",
            "Cercare subito il polso centrale e poi iniziare le CTE"
        ],
        correctAnswer: 0
    },
    {
        question: "QUALE TECNICA DEVE ESSERE UTILIZZATA PER ESEGUIRE LE CTE IN UN INFANTE DI 3 MESI?",
        answers: [
            "Porre il palmo della mano sul torace sopra la linea che congiunge i capezzoli",
            "Porre due dita sul torace sopra la linea che congiunge i capezzoli",
            "Porre due dita sulla metà inferiore dello sterno",
            "Porre il pollice sulla linea traversa che congiunge i capezzoli"
        ],
        correctAnswer: 2
    },
    {
        question: "QUALE TECNICA DEVE ESSERE UTILIZZATA PER ESEGUIRE LE CTE IN UN BAMBINO DI 5 ANNI?",
        answers: [
            "Porre il palmo della mano sulla metà inferiore dello sterno",
            "Porre due dita sul torace sopra la linea che congiunge i capezzoli",
            "Porre due dita sulla metà inferiore dello sterno",
            "Porre il pollice sulla linea traversa che congiunge i capezzoli"
        ],
        correctAnswer: 0
    },
    {
        question: "QUALE DEVE ESSERE LA PROFONDITÀ DELLE COMPRESSIONI TORACICHE NEL BAMBINO?",
        answers: [
            "Almeno 2 cm",
            "Tra 2 e 3 cm",
            "5 cm",
            "Tra 3 e 4 cm"
        ],
        correctAnswer: 2
    },
    {
        question: "QUAL’È IL METODO PRINCIPALE PER INSTAURARE LA PERVIETÀ DELLE VIE AEREE IN UN INFANTE NON TRAUMATIZZATO?",
        answers: [
            "Iperestensione del capo",
            "Rotazione laterale del capo",
            "Modica estensione del capo con sollevamento del mento sino alla posizione neutra",
            "Sollevamento della mandibola (sublussazione)"
        ],
        correctAnswer: 2
    },
    {
        question: "DOPO QUANTI MINUTI DI RCP SI DEVE CAMBIARE L’OPERATORE CHE EFFETTUA LE CTE, IN UN BAMBINO/INFANTE IN ACC?",
        answers: [
            "Dopo ogni minuto",
            "Dopo 2 minuti",
            "Solo quando l’infante si riprende spontaneamente",
            "Dopo 5 minuti"
        ],
        correctAnswer: 1
    },
    {
        question: "SEI UN PASSANTE, TROVI UN BAMBINO INCOSCIENTE A TERRA, COSA FAI?",
        answers: [
            "vai subito a chiamare aiuto abbandonando il bambino",
            "chiedi aiuto, fai chiamare il sistema di emergenza sanitaria e inizi le manovre di PBLS",
            "inizi le CTE",
            "prendi il bambino con te e vai a chiamare aiuto"
        ],
        correctAnswer: 1
    },
    {
        question: "L’UTILIZZO DEL DAE IN ETA’ PEDIATRICA E’ SEMPRE INDICATO:",
        answers: [
            "In tutte le età",
            "Per età superiore ad un anno",
            "Mai",
            "Per età superiore ad 8 anni"
        ],
        correctAnswer: 1
    },
    {
        question: "IN CASO DI ACC IN UN BAMBINO di 6 ANNI, DOPO L’EROGAZIONE DI UNO SHOCK:",
        answers: [
            "Si riavvia l’analisi",
            "Si controllano polso e segni di circolo",
            "Si iniziano immediatamente le compressioni toraciche esterne",
            "Si eroga un altro shock"
        ],
        correctAnswer: 2
    },
    {
        question: "AD UN BAMBINO E’ STATO EROGATO LO SHOCK SU INDICAZIONE DEL DAE, PER QUANTO TEMPO SI DEVE CONTINUARE L’RCP FINO ALL’ANALISI SUCCESSIVA?",
        answers: [
            "1 minuto",
            "3 minuti",
            "2 minuti",
            "90 secondi"
        ],
        correctAnswer: 2
    },
    {
        question: "ALLA PRIMA ANALISI DEL RITMO CARDIACO, IL DAE COMUNICA SHOCK NON INDICATO COSA FAI?",
        answers: [
            "valuti il polso centrale",
            "inizi le ventilazioni",
            "inizi le CTE",
            "ti prepari per il trasporto in ospedale"
        ],
        correctAnswer: 2
    },
    {
        question: "QUAL E’ LA PROCEDURA CORRETTA DA UTILIZZARE NEL SOCCORSO AD UN BAMBINO/INFANTE CON CONVULSIONI IN ATTO?",
        answers: [
            "Somministrare farmaci idonei",
            "Spogliare il paziente anche se non presenta febbre",
            "Evitare possibili traumi ed una volta cessate le convulsioni valutare ABCDE",
            "Applicare del ghiaccio sulla fronte e sull’inguine"
        ],
        correctAnswer: 2
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
        question: "DURANTE LA RIANIMAZIONE CARDIOPOLMONARE DI UN INFANTE COME OTTENGO LA POSIZIONE NEUTRA DEL CAPO.",
        answers: [
            "Iperestendendo il capo",
            "Posizionando di un collare cervicale e di una cannula orofaringea",
            "posizionando uno spessore sotto le spalle dell’infante",
            "nessuna risposta precedente è corretta"
        ],
        correctAnswer: 2
    },
    {
        question: "SECONDO QUANTO APPRESO COSA E’ INDISPENSABILE VALUTARE NEL NEONATO?",
        answers: [
            "Pianto valido e tono muscolare",
            "Lucidità del cordone ombelicale",
            "Presenza di riflessi corneali",
            "Dimensioni del cranio"
        ],
        correctAnswer: 0
    }
];

// NON MODIFICARE QUESTA RIGA
window.capitolo5Questions = capitolo5Questions;