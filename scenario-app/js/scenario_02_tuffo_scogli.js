// ========================================
// SCENARIO 02: TUFFO TRA GLI SCOGLI
// Trauma spinale - Fedele alla scheda AREU
// ========================================

const scenario_02_tuffo_scogli = {
    id: "scenario_02",
    code: "TRAUMA_01",
    title: "TUFFO TRA GLI SCOGLI",
    category: "Trauma",
    difficulty: "Alta",
    estimatedTime: "20-25 minuti",
    
    // Info iniziali dalla centrale
    briefing: {
        centralCall: "Donna 35 anni si tuffa in acqua e urta uno scoglio sommerso. Recuperata dagli astanti, è in spiaggia e non si muove.",
        msaMsi: false,
        forzeOrdine: false
    },
    
    // Steps dello scenario - ABCDE fedele
    steps: [
        // ===== PRE-ARRIVO =====
        {
            id: "step_01",
            phase: "PRE-ARRIVO",
            situation: "🚑 Sei in ambulanza diretto verso la spiaggia. La centrale ha riferito di un incidente da tuffo.",
            question: "Cosa fai durante il tragitto?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Assegno gli incarichi al team e preparo materiale per immobilizzazione spinale",
                    correct: true,
                    feedback: "✅ Perfetto! In un trauma da tuffo l'immobilizzazione spinale è prioritaria.",
                    points: 15,
                    nextStep: "step_02"
                },
                {
                    id: "b",
                    text: "Preparo solo la barella e il materiale per il trasporto",
                    correct: false,
                    feedback: "⚠️ Manca la preparazione specifica per trauma spinale (collare, spinale).",
                    points: 5,
                    nextStep: "step_02"
                },
                {
                    id: "c",
                    text: "Assegno incarichi generici senza focus sul trauma",
                    correct: false,
                    feedback: "❌ La dinamica (tuffo) suggerisce trauma spinale. Serve preparazione specifica!",
                    points: 3,
                    nextStep: "step_02"
                },
                {
                    id: "d",
                    text: "Chiedo alla centrale di allertare l'elicottero",
                    correct: false,
                    feedback: "⚠️ Prematuro. Prima devi valutare il paziente sul posto.",
                    points: 2,
                    nextStep: "step_02"
                }
            ]
        },
        
        // ===== ARRIVO - VALUTAZIONE SCENA =====
        {
            id: "step_02",
            phase: "VALUTAZIONE DELLA SCENA",
            situation: "📍 Arrivi sulla spiaggia. Vedi una donna sdraiata supina sulla sabbia, ferma, circondata da bagnanti preoccupati.",
            question: "Prima di avvicinarti, cosa fai?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Mi precipito subito dalla paziente",
                    correct: false,
                    feedback: "❌ Prima devi valutare la scena e indossare i DPI!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "b",
                    text: "Chiedo ai presenti cosa è successo e faccio un colpo d'occhio",
                    correct: true,
                    feedback: "✅ Corretto! Valutazione della scena e raccolta informazioni dalla dinamica.",
                    points: 10,
                    nextStep: "step_03"
                },
                {
                    id: "c",
                    text: "Chiedo di spostare la paziente in un luogo più comodo",
                    correct: false,
                    feedback: "❌ MAI muovere un paziente con sospetto trauma spinale!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "d",
                    text: "Indosso i DPI e mi avvicino senza chiedere nulla",
                    correct: false,
                    feedback: "⚠️ I DPI sono giusti, ma devi prima raccogliere informazioni sulla dinamica!",
                    points: 5,
                    nextStep: "step_03"
                }
            ]
        },
        
        // ===== DINAMICA EVENTO =====
        {
            id: "step_03",
            phase: "VALUTAZIONE DELLA SCENA",
            situation: "💬 Un bagnante dice: 'Si è tuffata dagli scogli. Ha sbattuto contro uno scoglio sommerso! L'ho aiutata a tornare a riva ma non muove le gambe!'",
            vitalSigns: {
                posizione: "Supina, immobile",
                coscienza: "Sveglia, parla"
            },
            question: "Dopo aver raccolto la dinamica, cosa fai?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Verifico presenza di ostacoli al trasporto e indosso DPI",
                    correct: true,
                    feedback: "✅ Ottimo! Completi la valutazione della scena e ti proteggi.",
                    points: 10,
                    nextStep: "step_04"
                },
                {
                    id: "b",
                    text: "Mi avvicino immediatamente senza DPI per non perdere tempo",
                    correct: false,
                    feedback: "❌ I DPI sono SEMPRE obbligatori!",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "c",
                    text: "Chiamo subito l'elicottero vista la gravità",
                    correct: false,
                    feedback: "⚠️ Prima devi valutare il paziente. Poi decidi con SOREU.",
                    points: 3,
                    nextStep: "step_04"
                },
                {
                    id: "d",
                    text: "Chiedo al bagnante di immobilizzare la testa",
                    correct: false,
                    feedback: "⚠️ L'immobilizzazione deve essere fatta da te o dal tuo team, non da un astante.",
                    points: 2,
                    nextStep: "step_04"
                }
            ]
        },
        
        // ===== FASE A - IMMOBILIZZAZIONE RACHIDE =====
        {
            id: "step_04",
            phase: "A - VIE AEREE + IMMOBILIZZAZIONE",
            situation: "👤 Ti avvicini alla paziente. È sveglia, spaventata, ma non muove le gambe.",
            vitalSigns: {
                coscienza: "Vigile (A)",
                posizione: "Supina, ferma"
            },
            question: "Qual è la PRIMA cosa che fai?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Faccio immobilizzare manualmente il rachide cervicale da un collega",
                    correct: true,
                    feedback: "✅ PERFETTO! In trauma da tuffo con deficit motorio, l'immobilizzazione rachide è PRIORITARIA.",
                    points: 20,
                    nextStep: "step_05"
                },
                {
                    id: "b",
                    text: "Controllo subito le vie aeree e il respiro",
                    correct: false,
                    feedback: "❌ Prima IMMOBILIZZI il rachide! La paziente è cosciente, vie aeree pervie.",
                    points: 5,
                    nextStep: "step_05"
                },
                {
                    id: "c",
                    text: "Posiziono il collare cervicale",
                    correct: false,
                    feedback: "⚠️ Prima IMMOBILIZZAZIONE MANUALE, poi collare come secondo step.",
                    points: 10,
                    nextStep: "step_05"
                },
                {
                    id: "d",
                    text: "Chiedo alla paziente di non muoversi",
                    correct: false,
                    feedback: "❌ Non basta! Serve immobilizzazione MANUALE attiva del rachide.",
                    points: 2,
                    nextStep: "step_05"
                }
            ]
        },
        
        // ===== PRESENTAZIONE E VIE AEREE =====
        {
            id: "step_05",
            phase: "A - VIE AEREE",
            situation: "Un collega mantiene l'immobilizzazione manuale del rachide cervicale. La paziente ti guarda spaventata.",
            vitalSigns: {
                rachide: "Immobilizzato manualmente",
                coscienza: "Vigile, spaventata"
            },
            question: "Come ti presenti e valuti le vie aeree?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Mi presento, tranquilizzo la paziente e verifico che le vie aeree siano pervie",
                    correct: true,
                    feedback: "✅ Perfetto! La paziente è cosciente e risponde → vie aeree pervie.",
                    points: 15,
                    nextStep: "step_06"
                },
                {
                    id: "b",
                    text: "Controllo solo che respiri, senza presentarmi",
                    correct: false,
                    feedback: "⚠️ Devi sempre presentarti, qualificarti e tranquillizzare il paziente!",
                    points: 5,
                    nextStep: "step_06"
                },
                {
                    id: "c",
                    text: "Apro le vie aeree con manovra di iperestensione del capo",
                    correct: false,
                    feedback: "❌ MAI iperestensione in trauma spinale! Vie aeree già pervie (parla).",
                    points: 0,
                    nextStep: "step_06"
                },
                {
                    id: "d",
                    text: "Posiziono subito una cannula orofaringea",
                    correct: false,
                    feedback: "❌ Paziente cosciente! La cannula non serve e potrebbe provocare vomito.",
                    points: 0,
                    nextStep: "step_06"
                }
            ]
        },
        
        // ===== COLLARE CERVICALE =====
        {
            id: "step_06",
            phase: "A - IMMOBILIZZAZIONE COMPLETA",
            situation: "Il rachide è immobilizzato manualmente. La paziente collabora.",
            question: "Cosa fai per completare l'immobilizzazione?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Posiziono il collare cervicale mantenendo l'immobilizzazione manuale",
                    correct: true,
                    feedback: "✅ Corretto! Collare + mantenimento immobilizzazione manuale.",
                    points: 15,
                    nextStep: "step_07"
                },
                {
                    id: "b",
                    text: "Tolgo l'immobilizzazione manuale per mettere solo il collare",
                    correct: false,
                    feedback: "❌ L'immobilizzazione manuale va MANTENUTA anche con il collare!",
                    points: 5,
                    nextStep: "step_07"
                },
                {
                    id: "c",
                    text: "Non metto il collare, basta l'immobilizzazione manuale",
                    correct: false,
                    feedback: "⚠️ Il collare è fortemente raccomandato nel trauma spinale.",
                    points: 8,
                    nextStep: "step_07"
                },
                {
                    id: "d",
                    text: "Posiziono direttamente la tavola spinale senza collare",
                    correct: false,
                    feedback: "❌ Prima il collare, poi la spinale. Sequenza importante!",
                    points: 3,
                    nextStep: "step_07"
                }
            ]
        },
        
        // ===== FASE B - RESPIRO =====
        {
            id: "step_07",
            phase: "B - RESPIRO",
            situation: "🫁 Paziente immobilizzata. Osservi il torace mentre respira.",
            vitalSigns: {
                rachide: "Immobilizzato + collare",
                respiro: "Visibile"
            },
            question: "Come valuti il respiro?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Osservo meccanica respiratoria, palpo il torace, ascolto rumori, conto FR",
                    correct: true,
                    feedback: "✅ Ottimo! Valutazione completa del respiro.",
                    points: 15,
                    nextStep: "step_08"
                },
                {
                    id: "b",
                    text: "Guardo solo se respira, poi passo al circolo",
                    correct: false,
                    feedback: "❌ Serve valutazione completa: meccanica, palpazione, auscultazione, FR!",
                    points: 5,
                    nextStep: "step_08"
                },
                {
                    id: "c",
                    text: "Chiedo alla paziente se respira bene",
                    correct: false,
                    feedback: "❌ Non basta! Serve valutazione oggettiva con osservazione e parametri.",
                    points: 3,
                    nextStep: "step_08"
                },
                {
                    id: "d",
                    text: "Metto subito ossigeno senza valutare",
                    correct: false,
                    feedback: "⚠️ Prima VALUTI (meccanica, FR, SpO2), poi decidi se serve O2.",
                    points: 5,
                    nextStep: "step_08"
                }
            ]
        },
        
        // ===== PARAMETRI RESPIRATORI =====
        {
            id: "step_08",
            phase: "B - RESPIRO",
            situation: "📊 Valuti i parametri respiratori.",
            vitalSigns: {
                meccanica: "Torace regolare",
                palpazione: "Nessun dolore",
                rumori: "Nessun rumore patologico",
                FR: "28 atti/min",
                SpO2: "92% in aria"
            },
            question: "Cosa noti e cosa fai?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "FR 28 (tachipnea) e SpO2 92% (bassa) → somministro O2 ad alti flussi",
                    correct: true,
                    feedback: "✅ PERFETTO! Tachipnea + ipossia = O2 therapy immediata.",
                    points: 20,
                    nextStep: "step_09"
                },
                {
                    id: "b",
                    text: "Tutto normale, non faccio nulla",
                    correct: false,
                    feedback: "❌ FR 28 è TACHIPNEA! SpO2 92% è IPOSSIA! Serve O2!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "c",
                    text: "Somministro O2 a bassi flussi (2-4 L/min)",
                    correct: false,
                    feedback: "⚠️ Con SpO2 92% serve O2 ad ALTI FLUSSI (10-15 L/min)!",
                    points: 8,
                    nextStep: "step_09"
                },
                {
                    id: "d",
                    text: "Aspetto che peggiori prima di dare O2",
                    correct: false,
                    feedback: "❌ Non aspetti il peggioramento! Ipossia = O2 immediato!",
                    points: 0,
                    nextStep: "step_09"
                }
            ]
        },
        
        // ===== FASE C - CIRCOLO =====
        {
            id: "step_09",
            phase: "C - CIRCOLO",
            situation: "💓 Con O2 in corso, valuti il circolo.",
            vitalSigns: {
                SpO2: "In aumento con O2"
            },
            question: "Come valuti il circolo?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Rilevo polso radiale, valuto cute e misuro PA",
                    correct: true,
                    feedback: "✅ Corretto! Valutazione completa del circolo.",
                    points: 15,
                    nextStep: "step_10"
                },
                {
                    id: "b",
                    text: "Guardo solo il colorito della cute",
                    correct: false,
                    feedback: "❌ Serve valutazione completa: polso, cute E pressione!",
                    points: 3,
                    nextStep: "step_10"
                },
                {
                    id: "c",
                    text: "Chiedo alla paziente se si sente debole",
                    correct: false,
                    feedback: "❌ Non basta! Servono parametri oggettivi (FC, PA).",
                    points: 2,
                    nextStep: "step_10"
                },
                {
                    id: "d",
                    text: "Salto la valutazione del circolo per risparmiare tempo",
                    correct: false,
                    feedback: "❌ La C nell'ABCDE è OBBLIGATORIA! Mai saltare fasi!",
                    points: 0,
                    nextStep: "step_10"
                }
            ]
        },
        
        // ===== PARAMETRI CIRCOLO =====
        {
            id: "step_10",
            phase: "C - CIRCOLO",
            situation: "📊 Rilevi i parametri circolatori.",
            vitalSigns: {
                polso: "Presente, FC 105 bpm",
                cute: "Rosea e bagnata",
                PA: "100/75 mmHg"
            },
            question: "Cosa noti nei parametri?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "FC 105 (tachicardia), PA 100/75 (limite basso), cute bagnata → segni di stress",
                    correct: true,
                    feedback: "✅ Ottima interpretazione! Tachicardia e PA limite indicano stress/dolore.",
                    points: 15,
                    nextStep: "step_11"
                },
                {
                    id: "b",
                    text: "Tutto perfettamente normale",
                    correct: false,
                    feedback: "⚠️ FC 105 è tachicardia! PA 100/75 è al limite basso. Non è tutto normale.",
                    points: 5,
                    nextStep: "step_11"
                },
                {
                    id: "c",
                    text: "Paziente in shock, preparo espansori",
                    correct: false,
                    feedback: "⚠️ Non è shock conclamato. Tachicardia può essere da dolore/ansia.",
                    points: 5,
                    nextStep: "step_11"
                },
                {
                    id: "d",
                    text: "Non mi preoccupo, passo alla fase neurologica",
                    correct: false,
                    feedback: "⚠️ Devi sempre interpretare i parametri, non ignorarli!",
                    points: 3,
                    nextStep: "step_11"
                }
            ]
        },
        
        // ===== FASE D - NEUROLOGICO =====
        {
            id: "step_11",
            phase: "D - CONTROLLO NEUROLOGICO",
            situation: "🧠 Valuti lo stato neurologico.",
            vitalSigns: {
                coscienza: "Vigile",
                comportamento: "Spaventata ma collaborante"
            },
            question: "Come valuti il neurologico?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "AVPU, dialogo con paziente, valuto sensibilità e motilità",
                    correct: true,
                    feedback: "✅ Perfetto! In trauma spinale la valutazione neurologica completa è CRITICA.",
                    points: 15,
                    nextStep: "step_12"
                },
                {
                    id: "b",
                    text: "Chiedo solo se è cosciente",
                    correct: false,
                    feedback: "❌ In trauma spinale devi valutare anche sensibilità e motilità!",
                    points: 3,
                    nextStep: "step_12"
                },
                {
                    id: "c",
                    text: "Solo AVPU, non valuto motilità",
                    correct: false,
                    feedback: "❌ La motilità è FONDAMENTALE nel trauma spinale!",
                    points: 5,
                    nextStep: "step_12"
                },
                {
                    id: "d",
                    text: "Salto la fase D per velocizzare",
                    correct: false,
                    feedback: "❌ La D è OBBLIGATORIA, specialmente in trauma spinale!",
                    points: 0,
                    nextStep: "step_12"
                }
            ]
        },
        
        // ===== DEFICIT NEUROLOGICO =====
        {
            id: "step_12",
            phase: "D - CONTROLLO NEUROLOGICO",
            situation: "🚨 Valuti sensibilità e motilità...",
            vitalSigns: {
                AVPU: "A (Alert)",
                coscienza: "Cosciente"
            },
            question: "Chiedi alla paziente di muovere gambe e piedi. Cosa scopri?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Rilevo DEFICIT MOTORIO arti inferiori + assenza sensibilità fino ai capezzoli",
                    correct: true,
                    feedback: "✅ CRITICO! Trauma spinale con paraplegia. Lesione midollare toracica alta.",
                    points: 20,
                    nextStep: "step_13"
                },
                {
                    id: "b",
                    text: "Tutto normale, muove le gambe",
                    correct: false,
                    feedback: "❌ La scheda riporta DEFICIT MOTORIO! È una lesione spinale grave.",
                    points: 0,
                    nextStep: "step_13"
                },
                {
                    id: "c",
                    text: "Non valuto perché ho paura di farle male",
                    correct: false,
                    feedback: "❌ La valutazione neurologica è OBBLIGATORIA! Non tocchi, solo chiedi di muovere.",
                    points: 0,
                    nextStep: "step_13"
                },
                {
                    id: "d",
                    text: "Rilevo solo deficit motorio ma non valuto sensibilità",
                    correct: false,
                    feedback: "⚠️ La valutazione deve essere completa: motilità E sensibilità!",
                    points: 10,
                    nextStep: "step_13"
                }
            ]
        },
        
        // ===== FASE E - ESAME OBIETTIVO =====
        {
            id: "step_13",
            phase: "E - ESAME OBIETTIVO",
            situation: "👁️ Osservi l'aspetto generale e raccogli l'anamnesi.",
            vitalSigns: {
                deficit: "Motorio + sensitivo livello T4"
            },
            question: "Cosa valuti nell'esame obiettivo?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Aspetto generale, dinamica evento, valuto dolore e segni esterni",
                    correct: true,
                    feedback: "✅ Perfetto! Esame completo testa-piedi.",
                    points: 15,
                    nextStep: "step_14"
                },
                {
                    id: "b",
                    text: "Guardo solo la schiena",
                    correct: false,
                    feedback: "❌ Serve esame COMPLETO testa-piedi!",
                    points: 5,
                    nextStep: "step_14"
                },
                {
                    id: "c",
                    text: "Non faccio esame per non muovere la paziente",
                    correct: false,
                    feedback: "❌ L'esame obiettivo si fa SENZA muovere la paziente!",
                    points: 0,
                    nextStep: "step_14"
                },
                {
                    id: "d",
                    text: "Chiedo solo cosa è successo",
                    correct: false,
                    feedback: "⚠️ Devi anche osservare aspetto, cercare lesioni, valutare dolore!",
                    points: 5,
                    nextStep: "step_14"
                }
            ]
        },
        
        // ===== DOLORE E ANAMNESI =====
        {
            id: "step_14",
            phase: "E - ESAME OBIETTIVO + AMPIA",
            situation: "💬 La paziente riferisce: 'Battendo contro lo scoglio ho sentito un dolore fortissimo alla schiena. Poi non sono più riuscita a muovere le gambe!'",
            vitalSigns: {
                dolore: "Dorsale VAS 8/10",
                stato: "Spaventata e sofferente"
            },
            question: "Raccogli l'AMPIA?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Sì: Allergie, Medicinali, Patologie, Ingestione, Altro",
                    correct: true,
                    feedback: "✅ Corretto! AMPIA completato. Donna 35 anni, fumatrice, nessuna patologia nota.",
                    points: 15,
                    nextStep: "step_15"
                },
                {
                    id: "b",
                    text: "No, non c'è tempo",
                    correct: false,
                    feedback: "❌ L'AMPIA è sempre obbligatoria!",
                    points: 0,
                    nextStep: "step_15"
                },
                {
                    id: "c",
                    text: "Chiedo solo se è allergica",
                    correct: false,
                    feedback: "⚠️ L'AMPIA deve essere completa: A-M-P-I-A!",
                    points: 5,
                    nextStep: "step_15"
                },
                {
                    id: "d",
                    text: "Chiedo solo le patologie principali",
                    correct: false,
                    feedback: "⚠️ Serve AMPIA completa!",
                    points: 7,
                    nextStep: "step_15"
                }
            ]
        },
        
        // ===== PROTEZIONE TERMICA =====
        {
            id: "step_15",
            phase: "E - PROTEZIONE TERMICA",
            situation: "🌡️ La paziente è bagnata, in costume, sulla sabbia.",
            question: "Cosa fai per la protezione termica?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Copro la paziente con telo termico per prevenire ipotermia",
                    correct: true,
                    feedback: "✅ Fondamentale! Paziente bagnata + trauma = rischio ipotermia.",
                    points: 10,
                    nextStep: "step_16"
                },
                {
                    id: "b",
                    text: "Non serve, fa caldo",
                    correct: false,
                    feedback: "❌ Paziente bagnata + shock = rischio ipotermia anche con caldo!",
                    points: 0,
                    nextStep: "step_16"
                },
                {
                    id: "c",
                    text: "La lascio scoperta per farla asciugare",
                    correct: false,
                    feedback: "❌ Rischio ipotermia! Va coperta subito.",
                    points: 0,
                    nextStep: "step_16"
                },
                {
                    id: "d",
                    text: "Aspetto di caricarla in ambulanza prima di coprirla",
                    correct: false,
                    feedback: "⚠️ La protezione termica va fatta SUBITO sul posto!",
                    points: 3,
                    nextStep: "step_16"
                }
            ]
        },
        
        // ===== COMUNICAZIONE SOREU =====
        {
            id: "step_16",
            phase: "COMUNICAZIONE SOREU",
            situation: "📞 Contatti la SOREU per aggiornamento e richiesta supporto.",
            question: "Cosa comunichi?",
            timeLimit: 45,
            choices: [
                {
                    id: "a",
                    text: "Trauma spinale da tuffo, paraplegia, AVPU A, FR 28, FC 105, PA 100/75, SpO2 in aumento con O2, dolore VAS 8",
                    correct: true,
                    feedback: "✅ PERFETTO! Comunicazione completa e precisa. SOREU valuterà invio elisoccorso.",
                    points: 20,
                    nextStep: "step_17"
                },
                {
                    id: "b",
                    text: "Donna caduta, non muove le gambe",
                    correct: false,
                    feedback: "❌ Troppo vago! Serve comunicazione dettagliata con tutti i parametri!",
                    points: 5,
                    nextStep: "step_17"
                },
                {
                    id: "c",
                    text: "Solo che c'è deficit motorio",
                    correct: false,
                    feedback: "❌ Serve comunicazione completa: coscienza, parametri vitali, manovre!",
                    points: 8,
                    nextStep: "step_17"
                },
                {
                    id: "d",
                    text: "Chiedo solo l'elicottero senza dare dettagli",
                    correct: false,
                    feedback: "❌ SOREU decide le risorse dopo aver ricevuto info complete!",
                    points: 3,
                    nextStep: "step_17"
                }
            ]
        },
        
        // ===== FINALE - TRASPORTO =====
        {
            id: "step_17",
            phase: "TRASPORTO",
            situation: "🚁 SOREU conferma invio elisoccorso. Nel frattempo prepari il trasporto.",
            question: "Come prepari la paziente per il trasporto?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Posiziono su tavola spinale con log-roll, mantengo immobilizzazione completa, monitoraggio continuo",
                    correct: true,
                    feedback: "✅ PERFETTO! Protocollo trauma spinale eseguito correttamente. SCENARIO COMPLETATO!",
                    points: 20,
                    nextStep: "end"
                },
                {
                    id: "b",
                    text: "Carico direttamente in ambulanza senza spinale",
                    correct: false,
                    feedback: "❌ Trauma spinale = tavola spinale OBBLIGATORIA!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "c",
                    text: "Chiedo alla paziente di girarsi sulla spinale da sola",
                    correct: false,
                    feedback: "❌ MAI far muovere un trauma spinale! Serve LOG-ROLL con 3-4 soccorritori!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "d",
                    text: "Uso solo la barella normale",
                    correct: false,
                    feedback: "❌ Trauma spinale con paraplegia = tavola spinale obbligatoria!",
                    points: 0,
                    nextStep: "end"
                }
            ]
        }
    ],
    
    // Scoring
    scoring: {
        maxScore: 265,
        thresholds: {
            excellent: 240,
            good: 210,
            sufficient: 180,
            insufficient: 0
        }
    }
};

window.scenario_02_tuffo_scogli = scenario_02_tuffo_scogli;
