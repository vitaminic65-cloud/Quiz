// ========================================
// SCENARIO 04: DIABETE (Crisi Ipoglicemica)
// Emergenza metabolica - Fedele alla scheda AREU
// ========================================

const scenario_04_diabete_ipoglicemia = {
    id: "scenario_04",
    code: "MEDICO_02",
    title: "DIABETE (crisi ipoglicemica)",
    category: "Emergenza Medica",
    difficulty: "Alta",
    estimatedTime: "15-20 minuti",
    
    // Info iniziali dalla centrale
    briefing: {
        centralCall: "Donna 70 anni, incosciente a domicilio. Familiari allarmati.",
        msaMsi: false,
        forzeOrdine: false
    },
    
    // Steps dello scenario - ABCDE fedele
    steps: [
        // ===== PRE-ARRIVO =====
        {
            id: "step_01",
            phase: "PRE-ARRIVO",
            situation: "🚑 Sei in ambulanza diretto verso l'abitazione. Info dalla centrale: donna 70 anni incosciente.",
            question: "Cosa fai durante il tragitto?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Assegno incarichi e preparo materiale per emergenza metabolica/neurologica",
                    correct: true,
                    feedback: "✅ Ottimo! 'Incosciente' = possibile ictus, ipoglicemia, o altro. Preparazione completa.",
                    points: 15,
                    nextStep: "step_02"
                },
                {
                    id: "b",
                    text: "Assegno solo incarichi generici",
                    correct: false,
                    feedback: "⚠️ Con 'incosciente' serve preparazione specifica: glucometro, O2, aspiratore.",
                    points: 5,
                    nextStep: "step_02"
                },
                {
                    id: "c",
                    text: "Preparo solo materiale per rianimazione cardiopolmonare",
                    correct: false,
                    feedback: "⚠️ Troppo specifico. Potrebbe essere ipoglicemia, ictus, overdose... Prepara tutto.",
                    points: 3,
                    nextStep: "step_02"
                },
                {
                    id: "d",
                    text: "Chiedo alla centrale di far svegliare la persona",
                    correct: false,
                    feedback: "❌ Se è incosciente non si può svegliare! Serve intervento immediato.",
                    points: 0,
                    nextStep: "step_02"
                }
            ]
        },
        
        // ===== ARRIVO - VALUTAZIONE SCENA =====
        {
            id: "step_02",
            phase: "VALUTAZIONE DELLA SCENA",
            situation: "📍 Arrivi nell'abitazione. I familiari sono agitati.",
            question: "Cosa fai prima di entrare nella stanza?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Chiedo descrizione scena, faccio colpo d'occhio, verifico ostacoli",
                    correct: true,
                    feedback: "✅ Corretto! Valutazione completa della scena.",
                    points: 10,
                    nextStep: "step_03"
                },
                {
                    id: "b",
                    text: "Corro subito dalla paziente",
                    correct: false,
                    feedback: "❌ Prima: valutazione scena, DPI, informazioni dai familiari!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "c",
                    text: "Chiedo solo dove si trova",
                    correct: false,
                    feedback: "⚠️ Serve valutazione completa: descrizione, colpo d'occhio, ostacoli!",
                    points: 5,
                    nextStep: "step_03"
                },
                {
                    id: "d",
                    text: "Chiamo subito MSA senza valutare",
                    correct: false,
                    feedback: "❌ Prima valuti la paziente, POI comunichi con SOREU!",
                    points: 0,
                    nextStep: "step_03"
                }
            ]
        },
        
        // ===== SCENA + OSTACOLI =====
        {
            id: "step_03",
            phase: "VALUTAZIONE DELLA SCENA",
            situation: "👀 Entri nella camera da letto. Vedi: donna sdraiata nel letto, non si muove, occhi chiusi. Camera stretta con mobili ingombranti.",
            vitalSigns: {
                posizione: "Sdraiata nel letto",
                stato: "Immobile, occhi chiusi",
                ambiente: "Camera stretta"
            },
            question: "Cosa fai riguardo agli ostacoli al trasporto?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Faccio spostare subito i mobili ingombranti per liberare il passaggio",
                    correct: true,
                    feedback: "✅ Perfetto! Con paziente critica, libera sempre il percorso PRIMA della valutazione.",
                    points: 10,
                    nextStep: "step_04"
                },
                {
                    id: "b",
                    text: "Non mi preoccupo degli ostacoli, vado dalla paziente",
                    correct: false,
                    feedback: "❌ Se serve evacuazione rapida, gli ostacoli rallentano tutto! Libera PRIMA.",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "c",
                    text: "Penserò agli ostacoli dopo aver valutato",
                    correct: false,
                    feedback: "⚠️ Con paziente critica libera il percorso SUBITO, prima della valutazione.",
                    points: 3,
                    nextStep: "step_04"
                },
                {
                    id: "d",
                    text: "Chiedo ai familiari di farlo dopo",
                    correct: false,
                    feedback: "⚠️ Va fatto SUBITO, non dopo! In emergenza ogni secondo conta.",
                    points: 2,
                    nextStep: "step_04"
                }
            ]
        },
        
        // ===== AUTOPROTEZIONE + FASE A =====
        {
            id: "step_04",
            phase: "A - VIE AEREE",
            situation: "Ti avvicini al letto dopo aver indossato i DPI.",
            vitalSigns: {
                ostacoli: "Rimossi"
            },
            question: "Come approcci la paziente?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Chiamo la paziente, mi presento, qualificomi e verifico vie aeree",
                    correct: true,
                    feedback: "✅ Corretto! La paziente NON risponde. Verifichi vie aeree: PERVIE.",
                    points: 15,
                    nextStep: "step_05"
                },
                {
                    id: "b",
                    text: "Scuoto la paziente per svegliarla",
                    correct: false,
                    feedback: "❌ Non si scuote! Prima chiami verbalmente, poi stimolo tattile delicato.",
                    points: 0,
                    nextStep: "step_05"
                },
                {
                    id: "c",
                    text: "Controllo solo se respira",
                    correct: false,
                    feedback: "⚠️ Prima ti presenti e chiami, POI valuti vie aeree e respiro!",
                    points: 5,
                    nextStep: "step_05"
                },
                {
                    id: "d",
                    text: "Faccio subito un'iniezione di glucosio",
                    correct: false,
                    feedback: "❌ Prima completi ABCDE! Non sai ancora se è ipoglicemia.",
                    points: 0,
                    nextStep: "step_05"
                }
            ]
        },
        
        // ===== FASE B - RESPIRO =====
        {
            id: "step_05",
            phase: "B - RESPIRO",
            situation: "🫁 La paziente non risponde ma respira. Valuti il respiro.",
            vitalSigns: {
                coscienza: "Incosciente",
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
                    text: "Vedo solo se respira",
                    correct: false,
                    feedback: "❌ Serve valutazione COMPLETA con parametri!",
                    points: 3,
                    nextStep: "step_06"
                },
                {
                    id: "c",
                    text: "Metto subito ossigeno senza valutare",
                    correct: false,
                    feedback: "❌ Prima VALUTI (meccanica, FR, SpO2), poi decidi!",
                    points: 0,
                    nextStep: "step_06"
                },
                {
                    id: "d",
                    text: "Chiedo ai familiari se respira normalmente",
                    correct: false,
                    feedback: "❌ Serve valutazione OGGETTIVA con parametri vitali!",
                    points: 2,
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
                meccanica: "Respiro superficiale e accelerato",
                espansione: "Torace bilaterale",
                palpazione: "Nulla di particolare",
                rumori: "Non rumori particolari",
                FR: "32 atti/min",
                SpO2: "98% in aria"
            },
            question: "Cosa noti e cosa fai?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "FR 32 (tachipnea) ma SpO2 98% buona. Somministro O2 alti flussi per sicurezza.",
                    correct: true,
                    feedback: "✅ PERFETTO! Tachipnea + incoscienza = O2 ad alti flussi. SpO2 sale a 100%.",
                    points: 20,
                    nextStep: "step_07"
                },
                {
                    id: "b",
                    text: "SpO2 98% ottima, non serve O2",
                    correct: false,
                    feedback: "❌ FR 32 è tachipnea! Con paziente incosciente SEMPRE O2 profilattico!",
                    points: 0,
                    nextStep: "step_07"
                },
                {
                    id: "c",
                    text: "O2 a bassi flussi (2-4 L/min)",
                    correct: false,
                    feedback: "⚠️ Con paziente incosciente serve O2 ad ALTI FLUSSI (10-15 L/min)!",
                    points: 8,
                    nextStep: "step_07"
                },
                {
                    id: "d",
                    text: "Ventilo con pallone Ambu",
                    correct: false,
                    feedback: "❌ Respira autonomamente con SpO2 98%! Non serve ventilazione assistita.",
                    points: 0,
                    nextStep: "step_07"
                }
            ]
        },
        
        // ===== FASE C - CIRCOLO =====
        {
            id: "step_07",
            phase: "C - CIRCOLO",
            situation: "💓 Con O2 in corso, valuti il circolo.",
            vitalSigns: {
                respiro: "FR 32, SpO2 100% con O2"
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
                    text: "Solo polso",
                    correct: false,
                    feedback: "⚠️ Serve valutazione COMPLETA: polso, cute E pressione!",
                    points: 5,
                    nextStep: "step_08"
                },
                {
                    id: "c",
                    text: "Salto la C per risparmiare tempo",
                    correct: false,
                    feedback: "❌ L'ABCDE è SEMPRE obbligatorio! Mai saltare fasi!",
                    points: 0,
                    nextStep: "step_08"
                },
                {
                    id: "d",
                    text: "Chiedo ai familiari se ha problemi cardiaci",
                    correct: false,
                    feedback: "⚠️ Prima rilevi i PARAMETRI oggettivi, poi raccogli anamnesi!",
                    points: 3,
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
                polso: "Presente, flebile, ritmico",
                FC: "115 bpm",
                cute: "Pallida con sudorazione ABBONDANTE",
                PA: "100/80 mmHg"
            },
            question: "Cosa noti di CRITICO?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "FC 115 (tachicardia), polso flebile, cute PALLIDA E SUDATA → segni di shock/ipoglicemia!",
                    correct: true,
                    feedback: "✅ CRITICO! Pallore + sudorazione abbondante + tachicardia = classico quadro ipoglicemia!",
                    points: 20,
                    nextStep: "step_09"
                },
                {
                    id: "b",
                    text: "Tutto normale",
                    correct: false,
                    feedback: "❌ Cute PALLIDA E SUDATA + tachicardia sono CRITICI!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "c",
                    text: "Solo tachicardia lieve",
                    correct: false,
                    feedback: "❌ Manca il segno CRITICO: pallore + sudorazione ABBONDANTE!",
                    points: 5,
                    nextStep: "step_09"
                },
                {
                    id: "d",
                    text: "Paziente in arresto cardiaco",
                    correct: false,
                    feedback: "❌ Ha polso e PA! Non è arresto. È quadro da ipoglicemia.",
                    points: 0,
                    nextStep: "step_09"
                }
            ]
        },
        
        // ===== FASE D - NEUROLOGICO =====
        {
            id: "step_09",
            phase: "D - CONTROLLO NEUROLOGICO",
            situation: "🧠 Valuti lo stato neurologico. Quadro sospetto per ipoglicemia.",
            vitalSigns: {
                circolo: "Tachicardia, pallore, sudorazione"
            },
            question: "Come valuti il neurologico?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "AVPU + stimolo doloroso + valuto sensibilità/motilità",
                    correct: true,
                    feedback: "✅ Perfetto! Valutazione neurologica completa.",
                    points: 15,
                    nextStep: "step_10"
                },
                {
                    id: "b",
                    text: "Vedo solo che è incosciente",
                    correct: false,
                    feedback: "❌ Serve classificazione AVPU + valutazione motilità!",
                    points: 3,
                    nextStep: "step_10"
                },
                {
                    id: "c",
                    text: "Faccio subito glicemia senza valutare",
                    correct: false,
                    feedback: "⚠️ Prima completi la D (AVPU, motilità), POI glicemia nella E!",
                    points: 7,
                    nextStep: "step_10"
                },
                {
                    id: "d",
                    text: "Non valuto perché è incosciente",
                    correct: false,
                    feedback: "❌ La D è OBBLIGATORIA! Serve classificare livello coscienza!",
                    points: 0,
                    nextStep: "step_10"
                }
            ]
        },
        
        // ===== AVPU: P =====
        {
            id: "step_10",
            phase: "D - CONTROLLO NEUROLOGICO",
            situation: "Applichi uno stimolo doloroso (pizzico trapezio).",
            vitalSigns: {
                aspetto: "Incosciente"
            },
            question: "Cosa succede?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Paziente emette SUONI INCOMPRENSIBILI allo stimolo → AVPU: P (Pain)",
                    correct: true,
                    feedback: "✅ CRITICO! AVPU: P = risponde solo a dolore. GCS basso! Sensibilità conservata ai 4 arti (muove debolmente).",
                    points: 20,
                    nextStep: "step_11"
                },
                {
                    id: "b",
                    text: "Non risponde → AVPU: U",
                    correct: false,
                    feedback: "❌ La scheda dice: emette suoni a stimolo doloroso = P (Pain)!",
                    points: 0,
                    nextStep: "step_11"
                },
                {
                    id: "c",
                    text: "Apre gli occhi → AVPU: V",
                    correct: false,
                    feedback: "❌ Emette solo suoni incomprensibili = P (Pain), non V!",
                    points: 0,
                    nextStep: "step_11"
                },
                {
                    id: "d",
                    text: "È sveglia → AVPU: A",
                    correct: false,
                    feedback: "❌ È INCOSCIENTE! Risponde solo a dolore = P!",
                    points: 0,
                    nextStep: "step_11"
                }
            ]
        },
        
        // ===== FASE E - ANAMNESI DAI FAMILIARI =====
        {
            id: "step_11",
            phase: "E - ESAME OBIETTIVO + ANAMNESI",
            situation: "👁️ Osservi: donna 70 anni, labbra asciutte, disidratata. Quadro: AVPU P, pallore, sudorazione, tachicardia.",
            vitalSigns: {
                AVPU: "P (Pain)",
                cute: "Pallida, sudata",
                aspetto: "Disidratata"
            },
            question: "Cosa fai per raccogliere informazioni?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Chiedo ai familiari cosa è successo e anamnesi patologica",
                    correct: true,
                    feedback: "✅ Fondamentale! Paziente incosciente = anamnesi dai familiari.",
                    points: 15,
                    nextStep: "step_12"
                },
                {
                    id: "b",
                    text: "Non chiedo nulla, trasporto subito",
                    correct: false,
                    feedback: "❌ L'anamnesi è CRITICA per capire la causa! Chiedi ai familiari!",
                    points: 0,
                    nextStep: "step_12"
                },
                {
                    id: "c",
                    text: "Cerco di svegliare la paziente per chiederlo a lei",
                    correct: false,
                    feedback: "❌ È AVPU: P! Non può rispondere. Chiedi ai familiari!",
                    points: 0,
                    nextStep: "step_12"
                },
                {
                    id: "d",
                    text: "Chiedo solo se è diabetica",
                    correct: false,
                    feedback: "⚠️ Serve anamnesi COMPLETA: cosa è successo + AMPIA!",
                    points: 5,
                    nextStep: "step_12"
                }
            ]
        },
        
        // ===== INFO CRITICHE DAI FAMILIARI =====
        {
            id: "step_12",
            phase: "E - ANAMNESI CRITICA",
            situation: "💬 I familiari riferiscono: 'È DIABETICA. Oggi ha fatto insulina come sempre, ma ha mangiato POCO. Poi è andata a riposare. Dopo mezz'ora non riuscivamo a svegliarla!'",
            vitalSigns: {
                storia: "Diabetica, insulina + poco cibo"
            },
            question: "Cosa fai IMMEDIATAMENTE con queste informazioni?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "MISURO LA GLICEMIA subito! Insulina + poco cibo = sospetta IPOGLICEMIA!",
                    correct: true,
                    feedback: "✅ PERFETTO! I familiari l'hanno già misurata: GLICEMIA 30 mg/dL! IPOGLICEMIA SEVERA!",
                    points: 25,
                    nextStep: "step_13"
                },
                {
                    id: "b",
                    text: "Procedo con il trasporto senza misurare glicemia",
                    correct: false,
                    feedback: "❌ Con diabetica incosciente la glicemia è PRIORITARIA! Può essere trattata subito!",
                    points: 0,
                    nextStep: "step_13"
                },
                {
                    id: "c",
                    text: "Somministro subito glucosio senza misurare",
                    correct: false,
                    feedback: "⚠️ Prima MISURI (potrebbe essere iperglicemia!), poi tratti. Familiari hanno misurato: 30!",
                    points: 10,
                    nextStep: "step_13"
                },
                {
                    id: "d",
                    text: "Penso che sia un ictus, non ipoglicemia",
                    correct: false,
                    feedback: "❌ Diabetica + insulina + poco cibo + pallore/sudore = classico quadro IPOGLICEMIA!",
                    points: 0,
                    nextStep: "step_13"
                }
            ]
        },
        
        // ===== AMPIA =====
        {
            id: "step_13",
            phase: "E - AMPIA",
            situation: "📋 Glicemia confermata: 30 mg/dL. Raccogli AMPIA completa.",
            vitalSigns: {
                glicemia: "30 mg/dL (CRITICA!)"
            },
            question: "Cosa chiedi ai familiari per l'AMPIA?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Allergie, Medicinali, Patologie, Ingestione, Altro",
                    correct: true,
                    feedback: "✅ Perfetto! Diabetica con 3 somministrazioni insulina/giorno. Ipertesa in terapia. Nessuna allergia.",
                    points: 15,
                    nextStep: "step_14"
                },
                {
                    id: "b",
                    text: "Non c'è tempo per AMPIA",
                    correct: false,
                    feedback: "❌ L'AMPIA è sempre obbligatoria! Si fa rapidamente.",
                    points: 0,
                    nextStep: "step_14"
                },
                {
                    id: "c",
                    text: "Chiedo solo i farmaci",
                    correct: false,
                    feedback: "⚠️ Serve AMPIA COMPLETA: A-M-P-I-A!",
                    points: 5,
                    nextStep: "step_14"
                },
                {
                    id: "d",
                    text: "Solo se ha altre patologie",
                    correct: false,
                    feedback: "⚠️ Manca A-M-I-A! Serve completa.",
                    points: 7,
                    nextStep: "step_14"
                }
            ]
        },
        
        // ===== COMUNICAZIONE SOREU =====
        {
            id: "step_14",
            phase: "COMUNICAZIONE SOREU",
            situation: "📞 Devi comunicare con SOREU l'emergenza metabolica.",
            question: "Cosa comunichi?",
            timeLimit: 45,
            choices: [
                {
                    id: "a",
                    text: "Donna 70aa diabetica, AVPU P, glicemia 30, pallore/sudore, FR 32, FC 115, PA 100/80 → IPOGLICEMIA SEVERA",
                    correct: true,
                    feedback: "✅ PERFETTO! SOREU comunica: MSI in arrivo. Nel frattempo supporto funzioni vitali.",
                    points: 20,
                    nextStep: "step_15"
                },
                {
                    id: "b",
                    text: "Donna incosciente, venite",
                    correct: false,
                    feedback: "❌ Troppo vago! Serve comunicazione COMPLETA con parametri e glicemia!",
                    points: 0,
                    nextStep: "step_15"
                },
                {
                    id: "c",
                    text: "Solo che ha glicemia bassa",
                    correct: false,
                    feedback: "❌ Mancano: AVPU, parametri vitali, sintomi! Comunicazione incompleta.",
                    points: 5,
                    nextStep: "step_15"
                },
                {
                    id: "d",
                    text: "Chiedo solo MSI urgente senza dare dettagli",
                    correct: false,
                    feedback: "❌ SOREU decide le risorse DOPO aver ricevuto tutti i dati!",
                    points: 3,
                    nextStep: "step_15"
                }
            ]
        },
        
        // ===== FINALE - ATTESA MSI =====
        {
            id: "step_15",
            phase: "RIVALUTAZIONE",
            situation: "⏱️ MSI in arrivo. Devi mantenere le funzioni vitali e monitorare.",
            vitalSigns: {
                diagnosi: "Ipoglicemia severa (glicemia 30)"
            },
            question: "Cosa fai in attesa dell'MSI?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Rivaluto ABCDE continuo, monitoro parametri, mantengo O2, proteggo vie aeree, relazione con familiari",
                    correct: true,
                    feedback: "✅ PERFETTO! Gestione ottimale. MSI somministrerà glucosio EV. SCENARIO COMPLETATO!",
                    points: 20,
                    nextStep: "end"
                },
                {
                    id: "b",
                    text: "Aspetto MSI senza fare nulla",
                    correct: false,
                    feedback: "❌ Devi monitorare continuamente! Paziente critica può peggiorare!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "c",
                    text: "Somministro zucchero per bocca",
                    correct: false,
                    feedback: "❌ Paziente INCOSCIENTE (AVPU: P)! Rischio ab ingestis! Solo MSI può dare glucosio EV.",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "d",
                    text: "Carico e parto verso ospedale",
                    correct: false,
                    feedback: "⚠️ MSI sta arrivando e può trattare subito! Attendi supporto medicalizzato.",
                    points: 5,
                    nextStep: "end"
                }
            ]
        }
    ],
    
    // Scoring
    scoring: {
        maxScore: 280,
        thresholds: {
            excellent: 255,
            good: 225,
            sufficient: 195,
            insufficient: 0
        }
    }
};

window.scenario_04_diabete_ipoglicemia = scenario_04_diabete_ipoglicemia;
