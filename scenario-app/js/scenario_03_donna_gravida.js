// ========================================
// SCENARIO 03: DONNA GRAVIDA
// Parto imminente - Fedele alla scheda AREU
// ========================================

const scenario_03_donna_gravida = {
    id: "scenario_03",
    code: "OSTETRICO_01",
    title: "DONNA GRAVIDA (parto imminente)",
    category: "Ostetrico",
    difficulty: "Alta",
    estimatedTime: "15-20 minuti",
    
    // Info iniziali dalla centrale
    briefing: {
        centralCall: "Donna di 30 anni, seconda gravidanza, contrazioni frequenti a domicilio.",
        msaMsi: false,
        forzeOrdine: false
    },
    
    // Steps dello scenario - ABCDE fedele
    steps: [
        // ===== PRE-ARRIVO =====
        {
            id: "step_01",
            phase: "PRE-ARRIVO",
            situation: "🚑 Sei in ambulanza diretto verso l'abitazione. Centrale ha riferito: donna 30 anni con contrazioni frequenti.",
            question: "Cosa fai durante il tragitto?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Assegno incarichi e preparo kit parto",
                    correct: true,
                    feedback: "✅ Perfetto! Contrazioni frequenti = possibile parto imminente. Kit pronto!",
                    points: 15,
                    nextStep: "step_02"
                },
                {
                    id: "b",
                    text: "Assegno solo incarichi generici",
                    correct: false,
                    feedback: "⚠️ Con 'contrazioni frequenti' devi preparare specificamente il kit parto!",
                    points: 5,
                    nextStep: "step_02"
                },
                {
                    id: "c",
                    text: "Chiedo alla centrale di far portare la donna in ospedale da sola",
                    correct: false,
                    feedback: "❌ Con contrazioni frequenti NON si trasporta autonomamente! Rischio parto in auto.",
                    points: 0,
                    nextStep: "step_02"
                },
                {
                    id: "d",
                    text: "Preparo materiale per rianimazione cardiopolmonare",
                    correct: false,
                    feedback: "⚠️ Serve kit PARTO, non RCP! Travaglio non è arresto cardiaco.",
                    points: 2,
                    nextStep: "step_02"
                }
            ]
        },
        
        // ===== ARRIVO - VALUTAZIONE SCENA =====
        {
            id: "step_02",
            phase: "VALUTAZIONE DELLA SCENA",
            situation: "📍 Arrivi nell'abitazione, piano terra. Entri nel salotto.",
            question: "Cosa fai prima di avvicinarti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Mi precipito dalla donna",
                    correct: false,
                    feedback: "❌ Prima: valutazione scena, DPI, informazioni!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "b",
                    text: "Chiedo descrizione scena, faccio colpo d'occhio, verifico ostacoli",
                    correct: true,
                    feedback: "✅ Corretto! Valutazione completa della scena prima di avvicinarsi.",
                    points: 10,
                    nextStep: "step_03"
                },
                {
                    id: "c",
                    text: "Chiedo solo dove si trova la donna",
                    correct: false,
                    feedback: "⚠️ Serve valutazione completa: scena, ostacoli, situazione!",
                    points: 5,
                    nextStep: "step_03"
                },
                {
                    id: "d",
                    text: "Preparo subito il kit parto senza valutare",
                    correct: false,
                    feedback: "❌ Prima valutazione scena e DPI!",
                    points: 3,
                    nextStep: "step_03"
                }
            ]
        },
        
        // ===== SCENA - CONTRAZIONE =====
        {
            id: "step_03",
            phase: "VALUTAZIONE DELLA SCENA",
            situation: "👀 Vedi: donna sul divano seduta. IMPROVVISAMENTE inizia una contrazione: grida forte e si accovaccia a terra!",
            vitalSigns: {
                posizione: "Accovacciata a terra",
                stato: "Grida di dolore",
                ambiente: "Piano terra, nessun ostacolo"
            },
            question: "Cosa fai mentre la donna ha la contrazione?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Indosso i DPI e aspetto che finisca la contrazione prima di avvicinarmi",
                    correct: true,
                    feedback: "✅ Corretto! Autoprotezione e rispetto del momento della contrazione.",
                    points: 10,
                    nextStep: "step_04"
                },
                {
                    id: "b",
                    text: "Mi avvicino subito senza DPI per aiutarla",
                    correct: false,
                    feedback: "❌ I DPI sono OBBLIGATORI! Rischio fluidi corporei nel parto.",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "c",
                    text: "Cerco di farla sdraiare durante la contrazione",
                    correct: false,
                    feedback: "❌ NON si muove una donna durante la contrazione! Aspetti che finisca.",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "d",
                    text: "Chiamo subito SOREU senza valutare",
                    correct: false,
                    feedback: "⚠️ Prima indossi DPI e valuti la paziente, POI comunichi con SOREU.",
                    points: 3,
                    nextStep: "step_04"
                }
            ]
        },
        
        // ===== FASE A - VIE AEREE =====
        {
            id: "step_04",
            phase: "A - VIE AEREE",
            situation: "La contrazione è finita. La donna respira affannosamente ma ti guarda.",
            vitalSigns: {
                coscienza: "Vigile",
                stato: "Affannata ma reattiva"
            },
            question: "Come ti presenti e valuti le vie aeree?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Mi presento, qualificomi, tranquillizzo e verifico vie aeree",
                    correct: true,
                    feedback: "✅ Perfetto! La donna risponde alla fine della contrazione, 39° settimana. Vie aeree pervie.",
                    points: 15,
                    nextStep: "step_05"
                },
                {
                    id: "b",
                    text: "Controllo solo se respira",
                    correct: false,
                    feedback: "⚠️ Devi presentarti, qualificarti e tranquillizzare! È spaventata.",
                    points: 5,
                    nextStep: "step_05"
                },
                {
                    id: "c",
                    text: "Chiedo subito quando partorirà",
                    correct: false,
                    feedback: "❌ Prima ti presenti e tranquillizzi, POI raccogli anamnesi!",
                    points: 3,
                    nextStep: "step_05"
                },
                {
                    id: "d",
                    text: "Le dico di stare calma e non urlare",
                    correct: false,
                    feedback: "❌ Non minimizzare il dolore! Serve empatia e supporto psicologico.",
                    points: 0,
                    nextStep: "step_05"
                }
            ]
        },
        
        // ===== FASE B - RESPIRO =====
        {
            id: "step_05",
            phase: "B - RESPIRO",
            situation: "🫁 La donna respira con affanno dopo la contrazione.",
            vitalSigns: {
                settimana: "39° settimana di gravidanza",
                vie_aeree: "Pervie"
            },
            question: "Come valuti il respiro?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Osservo meccanica, palpo torace, ascolto rumori, conto FR, saturimetro",
                    correct: true,
                    feedback: "✅ Ottimo! Valutazione completa del respiro.",
                    points: 15,
                    nextStep: "step_06"
                },
                {
                    id: "b",
                    text: "Guardo solo se respira",
                    correct: false,
                    feedback: "❌ Serve valutazione COMPLETA con tutti i parametri!",
                    points: 3,
                    nextStep: "step_06"
                },
                {
                    id: "c",
                    text: "Le chiedo se respira bene",
                    correct: false,
                    feedback: "❌ Serve valutazione OGGETTIVA, non solo soggettiva!",
                    points: 5,
                    nextStep: "step_06"
                },
                {
                    id: "d",
                    text: "Metto subito ossigeno senza valutare",
                    correct: false,
                    feedback: "❌ Prima VALUTI, poi decidi se serve O2!",
                    points: 0,
                    nextStep: "step_06"
                }
            ]
        },
        
        // ===== PARAMETRI RESPIRATORI =====
        {
            id: "step_06",
            phase: "B - RESPIRO",
            situation: "📊 Rilevi i parametri respiratori.",
            vitalSigns: {
                meccanica: "Respira con affanno ma regolare",
                palpazione: "Non lamenta dolore toracico",
                rumori: "Nessun rumore patologico",
                FR: "35 atti/min",
                SpO2: "99% in aria"
            },
            question: "Cosa noti e cosa fai?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "FR 35 (tachipnea da travaglio) ma SpO2 99% ottima. Propongo O2 ma rispetto se rifiuta.",
                    correct: true,
                    feedback: "✅ PERFETTO! Tachipnea è normale nel travaglio. La donna RIFIUTA la mascherina O2.",
                    points: 20,
                    nextStep: "step_07"
                },
                {
                    id: "b",
                    text: "Tutto normale, non serve O2",
                    correct: false,
                    feedback: "⚠️ FR 35 è tachipnea! Devi comunque proporlo anche se SpO2 è buona.",
                    points: 8,
                    nextStep: "step_07"
                },
                {
                    id: "c",
                    text: "Forzo la donna a mettere l'ossigeno",
                    correct: false,
                    feedback: "❌ La paziente è COSCIENTE e può rifiutare. Non si forza!",
                    points: 0,
                    nextStep: "step_07"
                },
                {
                    id: "d",
                    text: "FR alta = insufficienza respiratoria, serve ventilazione",
                    correct: false,
                    feedback: "❌ Tachipnea nel travaglio è FISIOLOGICA! SpO2 99% = ossigenazione ottima.",
                    points: 0,
                    nextStep: "step_07"
                }
            ]
        },
        
        // ===== FASE C - CIRCOLO =====
        {
            id: "step_07",
            phase: "C - CIRCOLO",
            situation: "💓 Valuti il circolo.",
            vitalSigns: {
                respiro: "Tachipnea fisiologica"
            },
            question: "Come procedi?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Rilevo polso radiale, valuto cute e misuro PA",
                    correct: true,
                    feedback: "✅ Corretto! Valutazione completa del circolo.",
                    points: 15,
                    nextStep: "step_08"
                },
                {
                    id: "b",
                    text: "Non valuto il circolo per non perdere tempo",
                    correct: false,
                    feedback: "❌ L'ABCDE è SEMPRE obbligatorio, anche nel parto!",
                    points: 0,
                    nextStep: "step_08"
                },
                {
                    id: "c",
                    text: "Chiedo solo se si sente bene",
                    correct: false,
                    feedback: "❌ Servono parametri OGGETTIVI: FC, cute, PA!",
                    points: 3,
                    nextStep: "step_08"
                },
                {
                    id: "d",
                    text: "Valuto solo il polso",
                    correct: false,
                    feedback: "⚠️ Serve valutazione COMPLETA: polso, cute E pressione!",
                    points: 7,
                    nextStep: "step_08"
                }
            ]
        },
        
        // ===== PARAMETRI CIRCOLO =====
        {
            id: "step_08",
            phase: "C - CIRCOLO",
            situation: "📊 Rilevi i parametri circolatori.",
            vitalSigns: {
                polso: "Presente, pieno, regolare",
                FC: "115 bpm",
                cute: "Sudata, rosea, calda",
                PA: "130/85 mmHg"
            },
            question: "Interpreti i parametri?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "FC 115 (tachicardia), PA 130/85 (limite alto), cute sudata → segni di travaglio attivo",
                    correct: true,
                    feedback: "✅ Ottima interpretazione! Tachicardia e ipertensione lieve sono normali nel travaglio.",
                    points: 15,
                    nextStep: "step_09"
                },
                {
                    id: "b",
                    text: "Tutto perfettamente normale",
                    correct: false,
                    feedback: "⚠️ FC 115 è tachicardia! Anche se fisiologica nel travaglio, va notata.",
                    points: 5,
                    nextStep: "step_09"
                },
                {
                    id: "c",
                    text: "Paziente in shock, preparo fluidi",
                    correct: false,
                    feedback: "❌ Non è shock! FC alta e PA alta sono da travaglio, non ipovolemia.",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "d",
                    text: "Ipertensione grave, serve MSA urgente",
                    correct: false,
                    feedback: "⚠️ PA 130/85 NON è ipertensione grave. È aumento fisiologico da travaglio.",
                    points: 3,
                    nextStep: "step_09"
                }
            ]
        },
        
        // ===== FASE D - NEUROLOGICO =====
        {
            id: "step_09",
            phase: "D - CONTROLLO NEUROLOGICO",
            situation: "🧠 Valuti lo stato neurologico.",
            question: "Cosa valuti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "AVPU, dialogo, valuto sensibilità e motilità arti",
                    correct: true,
                    feedback: "✅ Perfetto! AVPU: A (vigile), cosciente, collaborante, agitata. Nessun deficit ai 4 arti.",
                    points: 15,
                    nextStep: "step_10"
                },
                {
                    id: "b",
                    text: "Chiedo solo se è cosciente",
                    correct: false,
                    feedback: "❌ Serve valutazione completa: AVPU + dialogo + mobilità!",
                    points: 3,
                    nextStep: "step_10"
                },
                {
                    id: "c",
                    text: "Non valuto perché è ovviamente cosciente",
                    correct: false,
                    feedback: "❌ La fase D è OBBLIGATORIA nell'ABCDE!",
                    points: 0,
                    nextStep: "step_10"
                },
                {
                    id: "d",
                    text: "Solo AVPU, salto mobilità",
                    correct: false,
                    feedback: "⚠️ Devi valutare anche sensibilità e motilità degli arti!",
                    points: 7,
                    nextStep: "step_10"
                }
            ]
        },
        
        // ===== FASE E - ANAMNESI OSTETRICA =====
        {
            id: "step_10",
            phase: "E - ESAME OBIETTIVO + ANAMNESI",
            situation: "💬 Osservi: donna 30 anni, sofferente, contrazioni ravvicinate, rimane accovacciata.",
            vitalSigns: {
                stato: "Agitata ma collaborante",
                neurologico: "Normale"
            },
            question: "Quali informazioni OSTETRICHE raccogli?",
            timeLimit: 45,
            choices: [
                {
                    id: "a",
                    text: "Da quanto ha dolori, frequenza contrazioni, desiderio spingere, rottura sacco, data parto, parti precedenti",
                    correct: true,
                    feedback: "✅ PERFETTO! Anamnesi ostetrica completa. È fondamentale!",
                    points: 20,
                    nextStep: "step_11"
                },
                {
                    id: "b",
                    text: "Chiedo solo quando deve partorire",
                    correct: false,
                    feedback: "❌ Serve anamnesi COMPLETA: dolori, frequenza, desiderio spingere, rottura sacco!",
                    points: 5,
                    nextStep: "step_11"
                },
                {
                    id: "c",
                    text: "Non chiedo nulla, preparo il parto",
                    correct: false,
                    feedback: "❌ L'anamnesi ostetrica è FONDAMENTALE per valutare l'imminenza del parto!",
                    points: 0,
                    nextStep: "step_11"
                },
                {
                    id: "d",
                    text: "Chiedo solo se è il primo figlio",
                    correct: false,
                    feedback: "⚠️ Serve anamnesi COMPLETA: contrazioni, desiderio spingere, rottura sacco!",
                    points: 8,
                    nextStep: "step_11"
                }
            ]
        },
        
        // ===== INFORMAZIONI CRITICHE =====
        {
            id: "step_11",
            phase: "E - ANAMNESI OSTETRICA",
            situation: "💬 La donna riferisce informazioni CRITICHE tra le contrazioni...",
            vitalSigns: {
                aspetto: "Sofferente, collaborante"
            },
            question: "Ascolti le informazioni. Cosa scopri di CRITICO?",
            timeLimit: 45,
            choices: [
                {
                    id: "a",
                    text: "Contrazioni da 10 min, ogni 3 min, VUOLE SPINGERE, liquido perso 15 min fa → PARTO IMMINENTE!",
                    correct: true,
                    feedback: "✅ CRITICO! Seconda gravidanza + contrazioni ogni 3 min + desiderio spingere = parto imminente!",
                    points: 25,
                    nextStep: "step_12"
                },
                {
                    id: "b",
                    text: "Tutto normale, abbiamo tempo",
                    correct: false,
                    feedback: "❌ Contrazioni ogni 3 min + desiderio spingere = parto imminente! NON c'è tempo!",
                    points: 0,
                    nextStep: "step_12"
                },
                {
                    id: "c",
                    text: "Solo che è la seconda gravidanza",
                    correct: false,
                    feedback: "❌ Mancano info CRITICHE: frequenza contrazioni, desiderio spingere, rottura sacco!",
                    points: 5,
                    nextStep: "step_12"
                },
                {
                    id: "d",
                    text: "Ha perso liquido quindi c'è tempo",
                    correct: false,
                    feedback: "❌ Rottura sacco + contrazioni ogni 3 min + desiderio spingere = PARTO IMMINENTE!",
                    points: 0,
                    nextStep: "step_12"
                }
            ]
        },
        
        // ===== AMPIA =====
        {
            id: "step_12",
            phase: "E - AMPIA",
            situation: "📋 Raccogli l'AMPIA.",
            vitalSigns: {
                ostetrico: "Parto imminente - 2° gravidanza"
            },
            question: "Cosa chiedi per l'AMPIA?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Allergie, Medicinali, Patologie, Ingestione, Altro (gravidanza regolare, nessuna patologia)",
                    correct: true,
                    feedback: "✅ Corretto! Gravidanza regolare, nessuna patologia in anamnesi. Un figlio precedente senza complicazioni.",
                    points: 15,
                    nextStep: "step_13"
                },
                {
                    id: "b",
                    text: "Non c'è tempo per l'AMPIA",
                    correct: false,
                    feedback: "❌ L'AMPIA è sempre obbligatoria! Si fa velocemente tra le contrazioni.",
                    points: 0,
                    nextStep: "step_13"
                },
                {
                    id: "c",
                    text: "Chiedo solo se ha patologie",
                    correct: false,
                    feedback: "⚠️ L'AMPIA deve essere COMPLETA: A-M-P-I-A!",
                    points: 5,
                    nextStep: "step_13"
                },
                {
                    id: "d",
                    text: "Chiedo solo allergie e farmaci",
                    correct: false,
                    feedback: "⚠️ Manca P-I-A! Serve anamnesi completa.",
                    points: 7,
                    nextStep: "step_13"
                }
            ]
        },
        
        // ===== COMUNICAZIONE SOREU =====
        {
            id: "step_14",
            phase: "COMUNICAZIONE SOREU",
            situation: "📞 Hai completato l'ABCDE. Devi aggiornare SOREU sulla situazione critica.",
            question: "Cosa comunichi?",
            timeLimit: 45,
            choices: [
                {
                    id: "a",
                    text: "Donna 30aa, 39°sett, 2°gravidanza, contrazioni ogni 3 min, desiderio spingere, liquido rotto → PARTO IMMINENTE",
                    correct: true,
                    feedback: "✅ PERFETTO! SOREU decide: MSB resta sul posto, MSA in arrivo stimato 5 minuti.",
                    points: 20,
                    nextStep: "step_15"
                },
                {
                    id: "b",
                    text: "Donna in travaglio, tutto ok",
                    correct: false,
                    feedback: "❌ Troppo vago! SOREU ha bisogno di dettagli per decidere!",
                    points: 3,
                    nextStep: "step_15"
                },
                {
                    id: "c",
                    text: "Chiedo solo MSA urgente",
                    correct: false,
                    feedback: "❌ Devi comunicare TUTTI i parametri e l'anamnesi ostetrica!",
                    points: 5,
                    nextStep: "step_15"
                },
                {
                    id: "d",
                    text: "Comunico solo che ha contrazioni",
                    correct: false,
                    feedback: "❌ Mancano info CRITICHE: frequenza, desiderio spingere, settimana!",
                    points: 5,
                    nextStep: "step_15"
                }
            ]
        },
        
        // ===== FINALE - ATTESA MSA =====
        {
            id: "step_15",
            phase: "RIVALUTAZIONE",
            situation: "⏱️ SOREU: 'MSB resta sul posto in attesa MSA, arrivo stimato 5 minuti. Preparate kit parto.'",
            vitalSigns: {
                decisione: "MSB resta, MSA in 5 minuti"
            },
            question: "Cosa fai in attesa dell'MSA?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Rivaluto ABCDE, monitoro parametri, preparo kit parto, tranquillizzo paziente, relazione adeguata",
                    correct: true,
                    feedback: "✅ PERFETTO! Gestione ottimale. Monitoraggio continuo e supporto psicologico. SCENARIO COMPLETATO!",
                    points: 20,
                    nextStep: "end"
                },
                {
                    id: "b",
                    text: "Aspetto l'MSA senza fare nulla",
                    correct: false,
                    feedback: "❌ Devi monitorare continuamente la paziente! Il parto può avvenire prima!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "c",
                    text: "Carico in ambulanza e parto verso ospedale",
                    correct: false,
                    feedback: "❌ SOREU ha deciso di rimanere! Con parto imminente NON si trasporta!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "d",
                    text: "Solo preparo kit parto ma non rivaluto",
                    correct: false,
                    feedback: "⚠️ La rivalutazione ABCDE è obbligatoria! Parametri possono cambiare.",
                    points: 8,
                    nextStep: "end"
                }
            ]
        }
    ],
    
    // Scoring
    scoring: {
        maxScore: 270,
        thresholds: {
            excellent: 245,
            good: 215,
            sufficient: 185,
            insufficient: 0
        }
    }
};

window.scenario_03_donna_gravida = scenario_03_donna_gravida;
