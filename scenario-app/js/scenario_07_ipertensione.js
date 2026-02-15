// ========================================
// SCENARIO 07: DOLORE TORACICO (Ipertensione)
// Crisi ipertensiva - Fedele alla scheda AREU
// ========================================

const scenario_07_ipertensione = {
    id: "scenario_07",
    code: "MEDICO_05",
    title: "DOLORE TORACICO (ipertensione)",
    category: "Emergenza Cardiologica",
    difficulty: "Alta",
    estimatedTime: "15-18 minuti",
    
    // Info iniziali dalla centrale
    briefing: {
        centralCall: "Donna anziana a domicilio con dolore toracico.",
        msaMsi: false,
        forzeOrdine: false
    },
    
    // Steps dello scenario - ABCDE fedele
    steps: [
        // ===== PRE-ARRIVO =====
        {
            id: "step_01",
            phase: "PRE-ARRIVO",
            situation: "🚑 Sei in ambulanza. Centrale: 'Donna anziana con dolore toracico'.",
            question: "Cosa fai durante il tragitto?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Assegno incarichi e preparo materiale cardiologico (O2, monitor, DAE)",
                    correct: true,
                    feedback: "✅ Perfetto! Dolore toracico = possibile emergenza cardiaca.",
                    points: 15,
                    nextStep: "step_02"
                },
                {
                    id: "b",
                    text: "Solo incarichi generici",
                    correct: false,
                    feedback: "⚠️ 'Dolore toracico' richiede preparazione CARDIOLOGICA specifica!",
                    points: 5,
                    nextStep: "step_02"
                },
                {
                    id: "c",
                    text: "Preparo solo O2",
                    correct: false,
                    feedback: "⚠️ Serve anche monitor, DAE, materiale completo!",
                    points: 7,
                    nextStep: "step_02"
                },
                {
                    id: "d",
                    text: "Chiedo alla centrale se è grave",
                    correct: false,
                    feedback: "⚠️ Dolore toracico è SEMPRE da considerare grave. Prepara tutto!",
                    points: 3,
                    nextStep: "step_02"
                }
            ]
        },
        
        // ===== VALUTAZIONE SCENA =====
        {
            id: "step_02",
            phase: "VALUTAZIONE DELLA SCENA",
            situation: "📍 Arrivi a domicilio, piano terra.",
            question: "Cosa fai prima di entrare?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Chiedo descrizione, colpo d'occhio, verifico ostacoli",
                    correct: true,
                    feedback: "✅ Corretto! Valutazione scena completa.",
                    points: 10,
                    nextStep: "step_03"
                },
                {
                    id: "b",
                    text: "Entro subito",
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
                    text: "Preparo subito il DAE",
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
            situation: "👀 Vedi: donna cosciente, seduta in poltrona, paziente tranquilla. Piano terra, nessun ostacolo.",
            vitalSigns: {
                posizione: "Seduta in poltrona",
                stato: "Cosciente, tranquilla",
                ambiente: "Piano terra, libero"
            },
            question: "Dopo valutazione scena, cosa fai?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Indosso DPI e mi avvicino",
                    correct: true,
                    feedback: "✅ Corretto! Autoprotezione sempre.",
                    points: 10,
                    nextStep: "step_04"
                },
                {
                    id: "b",
                    text: "Vado senza DPI, sembra tranquilla",
                    correct: false,
                    feedback: "❌ DPI SEMPRE obbligatori!",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "c",
                    text: "Non mi avvicino, sembra stare bene",
                    correct: false,
                    feedback: "❌ Devi valutare! 'Tranquilla' non significa 'sana'.",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "d",
                    text: "Chiedo se ha ancora dolore prima di avvicinarmi",
                    correct: false,
                    feedback: "⚠️ Prima DPI e avvicinamento, POI valutazione!",
                    points: 3,
                    nextStep: "step_04"
                }
            ]
        },
        
        // ===== FASE A =====
        {
            id: "step_04",
            phase: "A - VIE AEREE",
            situation: "Ti avvicini alla paziente seduta.",
            question: "Come ti presenti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Mi presento, qualificomi, tranquillizzo e verifico vie aeree",
                    correct: true,
                    feedback: "✅ Perfetto! Paziente cosciente. Vie aeree pervie.",
                    points: 15,
                    nextStep: "step_05"
                },
                {
                    id: "b",
                    text: "Chiedo subito del dolore",
                    correct: false,
                    feedback: "⚠️ Prima presentazione e vie aeree!",
                    points: 5,
                    nextStep: "step_05"
                },
                {
                    id: "c",
                    text: "Controllo solo se respira",
                    correct: false,
                    feedback: "❌ Prima A (vie aeree), poi B (respiro)!",
                    points: 3,
                    nextStep: "step_05"
                },
                {
                    id: "d",
                    text: "Misuro subito la PA",
                    correct: false,
                    feedback: "❌ Segui l'ABCDE! Prima A, B, poi C (PA)!",
                    points: 0,
                    nextStep: "step_05"
                }
            ]
        },
        
        // ===== FASE B =====
        {
            id: "step_05",
            phase: "B - RESPIRO",
            situation: "🫁 La paziente respira normalmente.",
            vitalSigns: {
                vie_aeree: "Pervie",
                coscienza: "Vigile"
            },
            question: "Come valuti il respiro?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Osservo meccanica, palpo torace, ascolto, conto FR, saturimetro",
                    correct: true,
                    feedback: "✅ Ottimo! Valutazione completa respiratoria.",
                    points: 15,
                    nextStep: "step_06"
                },
                {
                    id: "b",
                    text: "Vedo solo che respira",
                    correct: false,
                    feedback: "❌ Serve valutazione COMPLETA!",
                    points: 3,
                    nextStep: "step_06"
                },
                {
                    id: "c",
                    text: "Metto O2 senza valutare",
                    correct: false,
                    feedback: "❌ Prima VALUTI, poi O2 se necessario!",
                    points: 0,
                    nextStep: "step_06"
                },
                {
                    id: "d",
                    text: "Solo saturimetro",
                    correct: false,
                    feedback: "⚠️ Mancano: meccanica, palpazione, auscultazione, FR!",
                    points: 7,
                    nextStep: "step_06"
                }
            ]
        },
        
        // ===== PARAMETRI B + PACEMAKER =====
        {
            id: "step_06",
            phase: "B - RESPIRO",
            situation: "📊 Valuti il torace. Alla palpazione noti qualcosa...",
            vitalSigns: {
                meccanica: "Movimento torace regolare",
                rumori: "Nessun rumore patologico",
                FR: "20 atti/min",
                SpO2: "95% in aria"
            },
            question: "Cosa noti alla palpazione del torace?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Nessun dolore alla palpazione, ma rilevo presenza PACEMAKER lato sinistro",
                    correct: true,
                    feedback: "✅ IMPORTANTE! Pacemaker presente. Parametri respiratori normali, non serve O2.",
                    points: 20,
                    nextStep: "step_07"
                },
                {
                    id: "b",
                    text: "Tutto normale",
                    correct: false,
                    feedback: "❌ C'è un PACEMAKER! Va sempre rilevato e annotato!",
                    points: 0,
                    nextStep: "step_07"
                },
                {
                    id: "c",
                    text: "Solo che non ha dolore",
                    correct: false,
                    feedback: "❌ Manca il rilevamento del PACEMAKER!",
                    points: 5,
                    nextStep: "step_07"
                },
                {
                    id: "d",
                    text: "Non palpo per non farle male",
                    correct: false,
                    feedback: "❌ La palpazione delicata è OBBLIGATORIA!",
                    points: 0,
                    nextStep: "step_07"
                }
            ]
        },
        
        // ===== FASE C - POLSO =====
        {
            id: "step_07",
            phase: "C - CIRCOLO",
            situation: "💓 Con SpO2 95% normale, valuti il circolo. Paziente con pacemaker.",
            vitalSigns: {
                respiro: "FR 20, SpO2 95%",
                device: "Pacemaker presente"
            },
            question: "Come procedi?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Rilevo polso radiale, valuto cute, misuro PA",
                    correct: true,
                    feedback: "✅ Corretto! Valutazione completa circolatoria.",
                    points: 15,
                    nextStep: "step_08"
                },
                {
                    id: "b",
                    text: "Solo PA",
                    correct: false,
                    feedback: "⚠️ Mancano polso e cute! Con pacemaker il polso è critico!",
                    points: 5,
                    nextStep: "step_08"
                },
                {
                    id: "c",
                    text: "Non valuto il polso, ha il pacemaker",
                    correct: false,
                    feedback: "❌ CON pacemaker il polso è ancora più importante!",
                    points: 0,
                    nextStep: "step_08"
                },
                {
                    id: "d",
                    text: "Salto la C per non perdere tempo",
                    correct: false,
                    feedback: "❌ La C è fondamentale in dolore toracico!",
                    points: 0,
                    nextStep: "step_08"
                }
            ]
        },
        
        // ===== POLSO NON REGOLARE =====
        {
            id: "step_08",
            phase: "C - CIRCOLO",
            situation: "Rilevi il polso radiale...",
            question: "Cosa noti di CRITICO al polso?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Polso presente ma NON REGOLARE, FC 85 bpm",
                    correct: true,
                    feedback: "✅ IMPORTANTE! Polso irregolare con pacemaker può indicare malfunzionamento o aritmia!",
                    points: 20,
                    nextStep: "step_09"
                },
                {
                    id: "b",
                    text: "Polso regolare e normale",
                    correct: false,
                    feedback: "❌ Il polso è NON REGOLARE! Segno critico!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "c",
                    text: "Polso assente",
                    correct: false,
                    feedback: "❌ Il polso C'È ma è irregolare!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "d",
                    text: "Non riesco a sentirlo bene",
                    correct: false,
                    feedback: "❌ Riprova con attenzione! Polso presente ma irregolare.",
                    points: 0,
                    nextStep: "step_09"
                }
            ]
        },
        
        // ===== PA CRITICA =====
        {
            id: "step_09",
            phase: "C - CIRCOLO",
            situation: "📊 Polso irregolare, FC 85. Valuti cute e PA.",
            vitalSigns: {
                polso: "Presente, NON regolare",
                FC: "85 bpm"
            },
            question: "Cosa rilevi?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Cute rosea/asciutta. PA 220/110! CRISI IPERTENSIVA! Rilevo anche dall'altro braccio: confermata.",
                    correct: true,
                    feedback: "✅ CRITICO! PA 220/110 = EMERGENZA IPERTENSIVA! Conferma bilaterale corretta.",
                    points: 25,
                    nextStep: "step_10"
                },
                {
                    id: "b",
                    text: "PA normale",
                    correct: false,
                    feedback: "❌ PA 220/110 è CRISI IPERTENSIVA GRAVE!",
                    points: 0,
                    nextStep: "step_10"
                },
                {
                    id: "c",
                    text: "PA alta ma non rilevo dall'altro braccio",
                    correct: false,
                    feedback: "⚠️ Con PA così alta, conferma bilaterale è importante!",
                    points: 10,
                    nextStep: "step_10"
                },
                {
                    id: "d",
                    text: "Non misuro PA, ha il pacemaker",
                    correct: false,
                    feedback: "❌ Il pacemaker NON impedisce la misurazione PA!",
                    points: 0,
                    nextStep: "step_10"
                }
            ]
        },
        
        // ===== FASE D =====
        {
            id: "step_10",
            phase: "D - CONTROLLO NEUROLOGICO",
            situation: "🧠 PA 220/110, polso irregolare. Valuti neurologico.",
            vitalSigns: {
                PA: "220/110 (CRITICA)",
                polso: "Irregolare"
            },
            question: "Cosa valuti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "AVPU, dialogo, sensibilità e motilità",
                    correct: true,
                    feedback: "✅ Perfetto! AVPU: A (cosciente orientata). Sensibilità/motilità conservate ai 4 arti.",
                    points: 15,
                    nextStep: "step_11"
                },
                {
                    id: "b",
                    text: "Solo se è cosciente",
                    correct: false,
                    feedback: "❌ Serve valutazione COMPLETA!",
                    points: 3,
                    nextStep: "step_11"
                },
                {
                    id: "c",
                    text: "Non valuto, focus sul cuore",
                    correct: false,
                    feedback: "❌ Con PA 220/110 rischio ictus! D è OBBLIGATORIA!",
                    points: 0,
                    nextStep: "step_11"
                },
                {
                    id: "d",
                    text: "Solo AVPU",
                    correct: false,
                    feedback: "⚠️ Manca sensibilità/motilità!",
                    points: 7,
                    nextStep: "step_11"
                }
            ]
        },
        
        // ===== FASE E - ANAMNESI =====
        {
            id: "step_11",
            phase: "E - ESAME OBIETTIVO + ANAMNESI",
            situation: "💬 Paziente con pacemaker, PA 220/110, polso irregolare.",
            vitalSigns: {
                neurologico: "Normale",
                quadro: "Crisi ipertensiva + aritmia"
            },
            question: "Cosa chiedi sulla storia del dolore?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Quando iniziato, tipo dolore, durata, episodi precedenti",
                    correct: true,
                    feedback: "✅ Ottimo! Da 3 ore dolore toracico tipo OPPRESSIVO. Episodi RICORRENTI, PS 3 giorni fa per stesso motivo!",
                    points: 20,
                    nextStep: "step_12"
                },
                {
                    id: "b",
                    text: "Chiedo solo dov'è il dolore",
                    correct: false,
                    feedback: "❌ Serve storia COMPLETA: inizio, tipo, durata, episodi!",
                    points: 5,
                    nextStep: "step_12"
                },
                {
                    id: "c",
                    text: "Non chiedo, è ovvio che è il cuore",
                    correct: false,
                    feedback: "❌ La storia è FONDAMENTALE per diagnosi!",
                    points: 0,
                    nextStep: "step_12"
                },
                {
                    id: "d",
                    text: "Chiedo solo l'intensità",
                    correct: false,
                    feedback: "⚠️ Mancano: sede, tipo, inizio, episodi precedenti!",
                    points: 7,
                    nextStep: "step_12"
                }
            ]
        },
        
        // ===== AMPIA =====
        {
            id: "step_12",
            phase: "E - AMPIA",
            situation: "📋 Dolore oppressivo da 3 ore, episodi ricorrenti. Raccogli AMPIA.",
            vitalSigns: {
                dolore: "Oppressivo, 3 ore",
                storia: "Episodi ricorrenti, PS 3 gg fa"
            },
            question: "Cosa chiedi per l'AMPIA?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Allergie, Medicinali, Patologie, Ingestione, Altro + intensità dolore VAS",
                    correct: true,
                    feedback: "✅ Perfetto! 83 anni, CARDIOPATICA, IPERTESA in terapia. Dolore VAS 4/10.",
                    points: 20,
                    nextStep: "step_13"
                },
                {
                    id: "b",
                    text: "Solo patologie",
                    correct: false,
                    feedback: "⚠️ Serve AMPIA COMPLETA!",
                    points: 7,
                    nextStep: "step_13"
                },
                {
                    id: "c",
                    text: "Non serve, ha già fatto PS",
                    correct: false,
                    feedback: "❌ L'AMPIA è SEMPRE obbligatoria!",
                    points: 0,
                    nextStep: "step_13"
                },
                {
                    id: "d",
                    text: "Solo farmaci",
                    correct: false,
                    feedback: "⚠️ Mancano A-P-I-A + VAS!",
                    points: 5,
                    nextStep: "step_13"
                }
            ]
        },
        
        // ===== COMUNICAZIONE SOREU =====
        {
            id: "step_13",
            phase: "COMUNICAZIONE SOREU",
            situation: "📞 Devi comunicare questa emergenza ipertensiva.",
            question: "Cosa comunichi?",
            timeLimit: 45,
            choices: [
                {
                    id: "a",
                    text: "Donna 83aa, PA 220/110 (crisi ipertensiva!), polso irregolare, pacemaker, cardiopatica/ipertesa, dolore oppressivo VAS 4, episodi ricorrenti",
                    correct: true,
                    feedback: "✅ PERFETTO! Comunicazione completa. SOREU decide gestione emergenza ipertensiva.",
                    points: 25,
                    nextStep: "step_14"
                },
                {
                    id: "b",
                    text: "Donna anziana con pressione alta",
                    correct: false,
                    feedback: "❌ 'Pressione alta' non rende l'urgenza! 220/110 è CRISI!",
                    points: 0,
                    nextStep: "step_14"
                },
                {
                    id: "c",
                    text: "Solo che ha PA alta e dolore",
                    correct: false,
                    feedback: "❌ Mancano: valori PA, pacemaker, polso irregolare, episodi!",
                    points: 5,
                    nextStep: "step_14"
                },
                {
                    id: "d",
                    text: "Chiedo MSA senza dare dettagli",
                    correct: false,
                    feedback: "❌ SOREU decide dopo aver ricevuto TUTTI i dati!",
                    points: 3,
                    nextStep: "step_14"
                }
            ]
        },
        
        // ===== FINALE =====
        {
            id: "step_14",
            phase: "RIVALUTAZIONE + TRASPORTO",
            situation: "🚑 SOREU autorizza trasporto urgente in PS cardiologico.",
            vitalSigns: {
                diagnosi: "Crisi ipertensiva + aritmia"
            },
            question: "Come gestisci trasporto?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Rivaluto ABCDE continuo, monitoro PA/FC, posizione seduta comoda, O2 se necessario, trasporto delicato senza stress",
                    correct: true,
                    feedback: "✅ PERFETTO! Gestione ottimale crisi ipertensiva. Evitare stress per non alzare ulteriormente PA. SCENARIO COMPLETATO!",
                    points: 20,
                    nextStep: "end"
                },
                {
                    id: "b",
                    text: "Carico e parto veloce",
                    correct: false,
                    feedback: "❌ Con PA 220/110 serve trasporto DELICATO! Stress peggiora ipertensione.",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "c",
                    text: "La faccio sdraiare supina",
                    correct: false,
                    feedback: "⚠️ Posizione seduta/semiseduta è meglio per crisi ipertensive.",
                    points: 5,
                    nextStep: "end"
                },
                {
                    id: "d",
                    text: "Non rivaluto, è stabile",
                    correct: false,
                    feedback: "❌ PA 220/110 NON è stabile! Rivalutazione continua obbligatoria!",
                    points: 0,
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

window.scenario_07_ipertensione = scenario_07_ipertensione;
