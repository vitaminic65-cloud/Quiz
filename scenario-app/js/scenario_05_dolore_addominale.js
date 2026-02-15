// ========================================
// SCENARIO 05: DOLORE ADDOMINALE
// Colica renale - Fedele alla scheda AREU
// ========================================

const scenario_05_dolore_addominale = {
    id: "scenario_05",
    code: "MEDICO_03",
    title: "DOLORE ADDOMINALE",
    category: "Emergenza Medica",
    difficulty: "Media",
    estimatedTime: "15-18 minuti",
    
    // Info iniziali dalla centrale
    briefing: {
        centralCall: "Malore in ufficio, donna 45 anni con forte dolore.",
        msaMsi: false,
        forzeOrdine: false
    },
    
    // Steps dello scenario - ABCDE fedele
    steps: [
        // ===== PRE-ARRIVO =====
        {
            id: "step_01",
            phase: "PRE-ARRIVO",
            situation: "🚑 Sei in ambulanza diretto verso l'ufficio. Centrale: 'Malore, donna 45 anni, forte dolore'.",
            question: "Cosa fai durante il tragitto?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Assegno incarichi al team",
                    correct: true,
                    feedback: "✅ Corretto! Team organizzato e pronto.",
                    points: 10,
                    nextStep: "step_02"
                },
                {
                    id: "b",
                    text: "Preparo materiale per arresto cardiaco",
                    correct: false,
                    feedback: "⚠️ 'Malore con dolore' non indica arresto. Preparazione generica va bene.",
                    points: 3,
                    nextStep: "step_02"
                },
                {
                    id: "c",
                    text: "Chiedo alla centrale di far sdraiare la paziente",
                    correct: false,
                    feedback: "⚠️ Con dolore forte, la paziente assume spontaneamente posizione antalgica. Non forzare.",
                    points: 2,
                    nextStep: "step_02"
                },
                {
                    id: "d",
                    text: "Non faccio nulla, aspetto di arrivare",
                    correct: false,
                    feedback: "❌ L'assegnazione incarichi è sempre necessaria!",
                    points: 0,
                    nextStep: "step_02"
                }
            ]
        },
        
        // ===== ARRIVO - VALUTAZIONE SCENA =====
        {
            id: "step_02",
            phase: "VALUTAZIONE DELLA SCENA",
            situation: "📍 Arrivi nell'ufficio al 5° piano. L'ascensore è accessibile.",
            question: "Cosa fai prima di avvicinarti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Chiedo descrizione, faccio colpo d'occhio, verifico ostacoli",
                    correct: true,
                    feedback: "✅ Perfetto! Valutazione completa della scena.",
                    points: 10,
                    nextStep: "step_03"
                },
                {
                    id: "b",
                    text: "Vado subito dalla paziente",
                    correct: false,
                    feedback: "❌ Prima: valutazione scena, DPI!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "c",
                    text: "Chiedo solo dove si trova",
                    correct: false,
                    feedback: "⚠️ Serve valutazione completa!",
                    points: 5,
                    nextStep: "step_03"
                },
                {
                    id: "d",
                    text: "Preparo la barella subito",
                    correct: false,
                    feedback: "❌ Prima valutazione scena e DPI!",
                    points: 2,
                    nextStep: "step_03"
                }
            ]
        },
        
        // ===== SCENA =====
        {
            id: "step_03",
            phase: "VALUTAZIONE DELLA SCENA",
            situation: "👀 Vedi: donna seduta vicino alla scrivania, MOLTO sofferente, cosciente, piegata in avanti con le mani sull'addome. Ufficio stretto ma nessun ostacolo per trasporto.",
            vitalSigns: {
                posizione: "Seduta, piegata in avanti",
                stato: "Molto sofferente, mani sull'addome",
                coscienza: "Cosciente"
            },
            question: "Dopo valutazione scena, cosa fai?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Indosso DPI e mi avvicino",
                    correct: true,
                    feedback: "✅ Corretto! Autoprotezione sempre necessaria.",
                    points: 10,
                    nextStep: "step_04"
                },
                {
                    id: "b",
                    text: "Mi avvicino senza DPI",
                    correct: false,
                    feedback: "❌ I DPI sono SEMPRE obbligatori!",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "c",
                    text: "Chiamo subito MSA",
                    correct: false,
                    feedback: "❌ Prima valuti la paziente, POI comunichi!",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "d",
                    text: "Cerco di farla sdraiare",
                    correct: false,
                    feedback: "❌ Posizione antalgica! Non modificarla finché non valuti.",
                    points: 0,
                    nextStep: "step_04"
                }
            ]
        },
        
        // ===== FASE A - VIE AEREE =====
        {
            id: "step_04",
            phase: "A - VIE AEREE",
            situation: "Ti avvicini alla paziente che geme dal dolore.",
            vitalSigns: {
                ambiente: "Sicuro, DPI indossati"
            },
            question: "Come ti presenti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Mi presento, qualificomi, tranquillizzo e verifico vie aeree",
                    correct: true,
                    feedback: "✅ Perfetto! Paziente cosciente, sofferente. Vie aeree pervie.",
                    points: 15,
                    nextStep: "step_05"
                },
                {
                    id: "b",
                    text: "Chiedo subito dov'è il dolore",
                    correct: false,
                    feedback: "⚠️ Prima ti presenti e tranquillizzi, POI raccogli informazioni!",
                    points: 5,
                    nextStep: "step_05"
                },
                {
                    id: "c",
                    text: "Controllo solo se respira",
                    correct: false,
                    feedback: "❌ Prima presentazione e vie aeree, POI respiro!",
                    points: 3,
                    nextStep: "step_05"
                },
                {
                    id: "d",
                    text: '"Stia calma, passerà"',
                    correct: false,
                    feedback: "❌ Non minimizzare! Serve empatia e presentazione professionale.",
                    points: 0,
                    nextStep: "step_05"
                }
            ]
        },
        
        // ===== FASE B - RESPIRO =====
        {
            id: "step_05",
            phase: "B - RESPIRO",
            situation: "🫁 La paziente respira ma con affanno per il dolore.",
            vitalSigns: {
                vie_aeree: "Pervie",
                coscienza: "Sofferente ma vigile"
            },
            question: "Come valuti il respiro?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Osservo meccanica, palpo torace, ascolto, conto FR, saturimetro",
                    correct: true,
                    feedback: "✅ Ottimo! Valutazione respiratoria completa.",
                    points: 15,
                    nextStep: "step_06"
                },
                {
                    id: "b",
                    text: "Vedo solo se respira",
                    correct: false,
                    feedback: "❌ Serve valutazione COMPLETA!",
                    points: 3,
                    nextStep: "step_06"
                },
                {
                    id: "c",
                    text: "Le chiedo se respira bene",
                    correct: false,
                    feedback: "❌ Serve valutazione OGGETTIVA con parametri!",
                    points: 5,
                    nextStep: "step_06"
                },
                {
                    id: "d",
                    text: "Salto la B per il dolore",
                    correct: false,
                    feedback: "❌ L'ABCDE è SEMPRE obbligatorio!",
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
                meccanica: "Torace si espande regolare",
                respiro: "Normale",
                palpazione: "Nessun dolore toracico",
                rumori: "Nessun rumore patologico",
                FR: "18 atti/min",
                SpO2: "96% in aria"
            },
            question: "Cosa noti e cosa fai?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Parametri respiratori normali. Propongo O2 ma la paziente RIFIUTA.",
                    correct: true,
                    feedback: "✅ Corretto! FR 18 e SpO2 96% sono accettabili. Paziente rifiuta maschera.",
                    points: 15,
                    nextStep: "step_07"
                },
                {
                    id: "b",
                    text: "Tutto perfetto, non propongo O2",
                    correct: false,
                    feedback: "⚠️ Va sempre PROPOSTO anche se parametri ok. Poi paziente può rifiutare.",
                    points: 8,
                    nextStep: "step_07"
                },
                {
                    id: "c",
                    text: "Forzo la paziente a mettere O2",
                    correct: false,
                    feedback: "❌ La paziente può rifiutare! Non si forza se cosciente.",
                    points: 0,
                    nextStep: "step_07"
                },
                {
                    id: "d",
                    text: "SpO2 96% = insufficienza respiratoria grave",
                    correct: false,
                    feedback: "❌ 96% è accettabile! <90% sarebbe critico.",
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
                respiro: "FR 18, SpO2 96%"
            },
            question: "Come procedi?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Rilevo polso, valuto cute, misuro PA",
                    correct: true,
                    feedback: "✅ Corretto! Valutazione completa.",
                    points: 15,
                    nextStep: "step_08"
                },
                {
                    id: "b",
                    text: "Solo polso",
                    correct: false,
                    feedback: "⚠️ Serve COMPLETA: polso, cute E PA!",
                    points: 5,
                    nextStep: "step_08"
                },
                {
                    id: "c",
                    text: "Salto per non perdere tempo",
                    correct: false,
                    feedback: "❌ Mai saltare fasi dell'ABCDE!",
                    points: 0,
                    nextStep: "step_08"
                },
                {
                    id: "d",
                    text: "Solo PA",
                    correct: false,
                    feedback: "⚠️ Serve anche polso e cute!",
                    points: 7,
                    nextStep: "step_08"
                }
            ]
        },
        
        // ===== PARAMETRI CIRCOLO =====
        {
            id: "step_08",
            phase: "C - CIRCOLO",
            situation: "📊 Rilevi parametri circolatori.",
            vitalSigns: {
                polso: "Presente, pieno, ritmico",
                FC: "120 bpm",
                cute: "Pallida, sudata",
                PA: "105/70 mmHg"
            },
            question: "Interpreti i parametri?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "FC 120 (tachicardia), cute pallida/sudata → segni di dolore intenso e stress",
                    correct: true,
                    feedback: "✅ Ottima interpretazione! Tachicardia e pallore/sudore da dolore acuto.",
                    points: 15,
                    nextStep: "step_09"
                },
                {
                    id: "b",
                    text: "Tutto normale",
                    correct: false,
                    feedback: "❌ FC 120 è tachicardia! Cute pallida/sudata sono significativi.",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "c",
                    text: "Shock imminente",
                    correct: false,
                    feedback: "⚠️ PA 105/70 è al limite ma non shock. Tachicardia da dolore.",
                    points: 5,
                    nextStep: "step_09"
                },
                {
                    id: "d",
                    text: "Infarto miocardico",
                    correct: false,
                    feedback: "❌ Dolore addominale, non toracico! Quadro diverso.",
                    points: 0,
                    nextStep: "step_09"
                }
            ]
        },
        
        // ===== FASE D - NEUROLOGICO =====
        {
            id: "step_09",
            phase: "D - CONTROLLO NEUROLOGICO",
            situation: "🧠 Valuti stato neurologico.",
            question: "Cosa valuti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "AVPU, dialogo, sensibilità e motilità",
                    correct: true,
                    feedback: "✅ Perfetto! AVPU: A (vigile). Molto sofferente. Sensibilità e motilità conservate ai 4 arti.",
                    points: 15,
                    nextStep: "step_10"
                },
                {
                    id: "b",
                    text: "Solo se è cosciente",
                    correct: false,
                    feedback: "❌ Serve valutazione completa: AVPU + mobilità!",
                    points: 3,
                    nextStep: "step_10"
                },
                {
                    id: "c",
                    text: "Non valuto, è sveglia",
                    correct: false,
                    feedback: "❌ La D è OBBLIGATORIA!",
                    points: 0,
                    nextStep: "step_10"
                },
                {
                    id: "d",
                    text: "Solo AVPU",
                    correct: false,
                    feedback: "⚠️ Manca valutazione sensibilità/motilità!",
                    points: 7,
                    nextStep: "step_10"
                }
            ]
        },
        
        // ===== FASE E - DOLORE =====
        {
            id: "step_10",
            phase: "E - ESAME OBIETTIVO",
            situation: "👁️ Osservi: donna cosciente, agitata, SI PORTA LE MANI AL FIANCO SINISTRO.",
            vitalSigns: {
                AVPU: "A (Alert)",
                stato: "Molto sofferente",
                gesto: "Mani al fianco SX"
            },
            question: "Cosa chiedi sulla storia del dolore?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Quando è iniziato, dove fa male, tipo di dolore, irradiazione, intensità",
                    correct: true,
                    feedback: "✅ PERFETTO! Improvvisa fitta persistente dal fianco SX che IRRADIA a schiena e addome. Iniziato 1 ora fa.",
                    points: 20,
                    nextStep: "step_11"
                },
                {
                    id: "b",
                    text: "Chiedo solo dov'è il dolore",
                    correct: false,
                    feedback: "❌ Serve storia COMPLETA: inizio, tipo, irradiazione, intensità!",
                    points: 5,
                    nextStep: "step_11"
                },
                {
                    id: "c",
                    text: "Non chiedo, è ovvio che è l'addome",
                    correct: false,
                    feedback: "❌ La storia del dolore è FONDAMENTALE per la diagnosi!",
                    points: 0,
                    nextStep: "step_11"
                },
                {
                    id: "d",
                    text: "Chiedo solo l'intensità",
                    correct: false,
                    feedback: "⚠️ Mancano: sede, tipo, irradiazione, inizio!",
                    points: 7,
                    nextStep: "step_11"
                }
            ]
        },
        
        // ===== SCALA VAS =====
        {
            id: "step_11",
            phase: "E - VALUTAZIONE DOLORE",
            situation: "💬 La paziente descrive: 'Fitta fortissima che parte dal fianco sinistro e va verso la schiena e l'addome. Non passa!'",
            vitalSigns: {
                dolore: "Fianco SX → schiena/addome",
                tipo: "Fitta persistente",
                inizio: "1 ora fa"
            },
            question: "Come valuti l'INTENSITÀ del dolore?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Uso scala VAS da 0 a 10: paziente riferisce VAS 8/10",
                    correct: true,
                    feedback: "✅ PERFETTO! Dolore SEVERO (VAS 8). Fianco SX con irradiazione = sospetta COLICA RENALE.",
                    points: 15,
                    nextStep: "step_12"
                },
                {
                    id: "b",
                    text: "Non valuto l'intensità",
                    correct: false,
                    feedback: "❌ La scala VAS è fondamentale per valutare gravità e risposta a terapia!",
                    points: 0,
                    nextStep: "step_12"
                },
                {
                    id: "c",
                    text: "Chiedo solo se fa molto male",
                    correct: false,
                    feedback: "⚠️ Serve scala NUMERICA VAS 0-10 per oggettivare!",
                    points: 5,
                    nextStep: "step_12"
                },
                {
                    id: "d",
                    text: "Valuto solo osservando",
                    correct: false,
                    feedback: "⚠️ Serve anche valutazione SOGGETTIVA con scala VAS!",
                    points: 7,
                    nextStep: "step_12"
                }
            ]
        },
        
        // ===== AMPIA =====
        {
            id: "step_12",
            phase: "E - AMPIA",
            situation: "📋 Dolore VAS 8/10, fianco SX con irradiazione. Raccogli AMPIA.",
            vitalSigns: {
                sospetto: "Colica renale"
            },
            question: "Cosa chiedi per l'AMPIA?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Allergie, Medicinali, Patologie, Ingestione, Altro (episodi simili, gravidanza, ciclo)",
                    correct: true,
                    feedback: "✅ Perfetto! NEGATIVA per episodi precedenti. Non patologie, NON gravida, ciclo regolare.",
                    points: 15,
                    nextStep: "step_13"
                },
                {
                    id: "b",
                    text: "Chiedo solo se è incinta",
                    correct: false,
                    feedback: "⚠️ Serve AMPIA COMPLETA: A-M-P-I-A!",
                    points: 5,
                    nextStep: "step_13"
                },
                {
                    id: "c",
                    text: "Non serve AMPIA",
                    correct: false,
                    feedback: "❌ L'AMPIA è sempre obbligatoria!",
                    points: 0,
                    nextStep: "step_13"
                },
                {
                    id: "d",
                    text: "Solo allergie e farmaci",
                    correct: false,
                    feedback: "⚠️ Mancano P-I-A!",
                    points: 7,
                    nextStep: "step_13"
                }
            ]
        },
        
        // ===== COMUNICAZIONE SOREU =====
        {
            id: "step_13",
            phase: "COMUNICAZIONE SOREU",
            situation: "📞 Comunichi con SOREU.",
            question: "Cosa riferisci?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Donna 45aa, AVPU A, dolore fianco SX VAS 8/10 con irradiazione, FR 18, FC 120, PA 105/70 → sospetta colica renale",
                    correct: true,
                    feedback: "✅ PERFETTO! Comunicazione completa. SOREU autorizza trasporto in PS. SCENARIO COMPLETATO!",
                    points: 20,
                    nextStep: "step_14"
                },
                {
                    id: "b",
                    text: "Donna con mal di pancia",
                    correct: false,
                    feedback: "❌ Troppo vago! Serve comunicazione dettagliata!",
                    points: 0,
                    nextStep: "step_14"
                },
                {
                    id: "c",
                    text: "Solo che ha dolore addominale",
                    correct: false,
                    feedback: "❌ Mancano: parametri, sede, intensità, irradiazione!",
                    points: 5,
                    nextStep: "step_14"
                },
                {
                    id: "d",
                    text: "Chiedo solo MSA",
                    correct: false,
                    feedback: "⚠️ Con parametri stabili MSB può trasportare. Dai tutti i dati a SOREU.",
                    points: 8,
                    nextStep: "step_14"
                }
            ]
        },
        
        // ===== FINALE =====
        {
            id: "step_14",
            phase: "TRASPORTO",
            situation: "🚑 SOREU autorizza trasporto. Prepari la paziente.",
            question: "Come gestisci il trasporto?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Rivaluto ABCDE, monitoro continuo, posizione antalgica, relazione adeguata, trasporto delicato",
                    correct: true,
                    feedback: "✅ PERFETTO! Gestione ottimale del dolore acuto. SCENARIO COMPLETATO!",
                    points: 15,
                    nextStep: "end"
                },
                {
                    id: "b",
                    text: "Carico e parto velocemente",
                    correct: false,
                    feedback: "⚠️ Serve rivalutazione e monitoraggio continuo!",
                    points: 5,
                    nextStep: "end"
                },
                {
                    id: "c",
                    text: "Forzo paziente supina sulla barella",
                    correct: false,
                    feedback: "❌ Rispetta posizione antalgica! Non forzare posizioni con dolore acuto.",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "d",
                    text: "Non rivaluto, è stabile",
                    correct: false,
                    feedback: "❌ La rivalutazione è SEMPRE necessaria durante trasporto!",
                    points: 3,
                    nextStep: "end"
                }
            ]
        }
    ],
    
    // Scoring
    scoring: {
        maxScore: 235,
        thresholds: {
            excellent: 215,
            good: 190,
            sufficient: 165,
            insufficient: 0
        }
    }
};

window.scenario_05_dolore_addominale = scenario_05_dolore_addominale;
