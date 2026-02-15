// ========================================
// SCENARIO 17: PAZIENTE ASMATICO
// Crisi asmatica severa - Fedele alla scheda AREU
// ========================================

const scenario_17_asma = {
    id: "scenario_17",
    code: "MEDICO_16",
    title: "Asma (crisi asmatica)",
    category: "Emergenza Respiratoria",
    difficulty: "Alta",
    estimatedTime: "12-15 minuti",
    
    // Info iniziali dalla centrale
    briefing: {
        centralCall: "Donna 40 anni circa con importante difficoltà respiratoria, asmatica.",
        msaMsi: false,
        forzeOrdine: false
    },
    
    // Steps dello scenario
    steps: [
        // PRE-ARRIVO
        {
            id: "step_01",
            phase: "PRE-ARRIVO",
            situation: "🚑 Centrale: 'Donna 40aa IMPORTANTE difficoltà respiratoria, ASMATICA'.",
            question: "Cosa fai?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Assegno incarichi",
                    correct: true,
                    feedback: "✅ Corretto!",
                    points: 10,
                    nextStep: "step_02"
                },
                {
                    id: "b",
                    text: "Nulla",
                    correct: false,
                    feedback: "❌ Preparazione necessaria!",
                    points: 0,
                    nextStep: "step_02"
                },
                {
                    id: "c",
                    text: "Vado subito",
                    correct: false,
                    feedback: "⚠️ Prima incarichi!",
                    points: 2,
                    nextStep: "step_02"
                },
                {
                    id: "d",
                    text: "Chiamo MSA",
                    correct: false,
                    feedback: "⚠️ Prima valuti!",
                    points: 0,
                    nextStep: "step_02"
                }
            ]
        },
        
        // SCENA - IN PIEDI VICINO FINESTRA
        {
            id: "step_02",
            phase: "VALUTAZIONE SCENA",
            situation: "📍 Vedi: donna 40 anni IN PIEDI VICINO ALLA FINESTRA. Evidente difficoltà respiratoria. Nessun ostacolo.",
            vitalSigns: {
                posizione: "IN PIEDI vicino finestra",
                sintomo: "Evidente difficoltà respiratoria"
            },
            question: "Cosa noti di SIGNIFICATIVO nella posizione?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "In piedi vicino finestra = cerca aria! Segno di grave dispnea (ortopnea estrema)",
                    correct: true,
                    feedback: "✅ IMPORTANTE! Cerca aria fresca = broncospasmo severo!",
                    points: 15,
                    nextStep: "step_03"
                },
                {
                    id: "b",
                    text: "Posizione normale",
                    correct: false,
                    feedback: "⚠️ In piedi vicino finestra è segno di dispnea severa!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "c",
                    text: "Non noto nulla",
                    correct: false,
                    feedback: "❌ Posizione è indicativa!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "d",
                    text: "La faccio sedere subito",
                    correct: false,
                    feedback: "⚠️ Prima valuta, poi posizione!",
                    points: 3,
                    nextStep: "step_03"
                }
            ]
        },
        
        // FASE A
        {
            id: "step_03",
            phase: "A - VIE AEREE",
            situation: "Con DPI ti avvicini.",
            question: "Come valuti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Mi presento, qualificomi, tranquillizzo, verifico vie aeree",
                    correct: true,
                    feedback: "✅ Corretto! Cosciente, AGITATA, NON riesce a finire le frasi. Vie aeree pervie.",
                    points: 15,
                    nextStep: "step_04"
                },
                {
                    id: "b",
                    text: "Solo vie aeree",
                    correct: false,
                    feedback: "⚠️ Prima presentazione!",
                    points: 5,
                    nextStep: "step_04"
                },
                {
                    id: "c",
                    text: "Non valuto",
                    correct: false,
                    feedback: "❌ A è obbligatoria!",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "d",
                    text: "Chiedo solo nome",
                    correct: false,
                    feedback: "⚠️ Serve valutazione completa!",
                    points: 3,
                    nextStep: "step_04"
                }
            ]
        },
        
        // FASE B - SIBILI/FISCHI
        {
            id: "step_04",
            phase: "B - RESPIRO - CRITICO",
            situation: "🫁 Agitata, non finisce frasi. Valuti respiro.",
            question: "Cosa rilevi?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Respiro superficiale, tachipnoica, rumori tipo SIBILI E FISCHI (broncospasmo!), FR 30, SpO2 86% → O2 → 90%",
                    correct: true,
                    feedback: "✅ PERFETTO! Sibili/fischi = asma! FR 30 + SpO2 86% = crisi severa!",
                    points: 25,
                    nextStep: "step_05"
                },
                {
                    id: "b",
                    text: "Respiro normale",
                    correct: false,
                    feedback: "❌ FR 30 e SpO2 86% sono critici!",
                    points: 0,
                    nextStep: "step_05"
                },
                {
                    id: "c",
                    text: "Rantoli",
                    correct: false,
                    feedback: "❌ Sono SIBILI/FISCHI (non rantoli)!",
                    points: 0,
                    nextStep: "step_05"
                },
                {
                    id: "d",
                    text: "Non serve O2",
                    correct: false,
                    feedback: "❌ SpO2 86% richiede O2!",
                    points: 0,
                    nextStep: "step_05"
                }
            ]
        },
        
        // FASE C
        {
            id: "step_05",
            phase: "C - CIRCOLO",
            situation: "💓 O2 in corso. Valuti circolo.",
            question: "Cosa rilevi?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Polso presente/tachicardico/regolare FC 120, cute calda, PA 140/80",
                    correct: true,
                    feedback: "✅ Corretto! Tachicardia compensatoria. PA normale.",
                    points: 15,
                    nextStep: "step_06"
                },
                {
                    id: "b",
                    text: "Parametri critici",
                    correct: false,
                    feedback: "⚠️ Sono compensati.",
                    points: 0,
                    nextStep: "step_06"
                },
                {
                    id: "c",
                    text: "Non valuto",
                    correct: false,
                    feedback: "❌ C è obbligatoria!",
                    points: 0,
                    nextStep: "step_06"
                },
                {
                    id: "d",
                    text: "Solo polso",
                    correct: false,
                    feedback: "⚠️ Serve anche cute e PA!",
                    points: 7,
                    nextStep: "step_06"
                }
            ]
        },
        
        // FASE D - SOFFOCAMENTO
        {
            id: "step_06",
            phase: "D - NEUROLOGICO",
            situation: "🧠 Valuti neurologico.",
            question: "Cosa rilevi?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Cosciente AVPU: A, riferisce sensazione di SOFFOCAMENTO, nessun deficit",
                    correct: true,
                    feedback: "✅ Perfetto! Soffocamento = ansia da broncospasmo. Tipico asma.",
                    points: 15,
                    nextStep: "step_07"
                },
                {
                    id: "b",
                    text: "Incosciente",
                    correct: false,
                    feedback: "❌ È cosciente AVPU: A!",
                    points: 0,
                    nextStep: "step_07"
                },
                {
                    id: "c",
                    text: "Deficit neurologici",
                    correct: false,
                    feedback: "❌ Nessun deficit!",
                    points: 0,
                    nextStep: "step_07"
                },
                {
                    id: "d",
                    text: "Non valuto",
                    correct: false,
                    feedback: "❌ D è obbligatoria!",
                    points: 0,
                    nextStep: "step_07"
                }
            ]
        },
        
        // FASE E - STORIA
        {
            id: "step_07",
            phase: "E - ANAMNESI",
            situation: "💬 Donna agitata. Chiedi cosa è successo.",
            question: "Cosa riferisce?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Da circa 30 MINUTI importante difficoltà respiratoria",
                    correct: true,
                    feedback: "✅ Corretto! 30 minuti = crisi prolungata.",
                    points: 15,
                    nextStep: "step_08"
                },
                {
                    id: "b",
                    text: "Da poche ore",
                    correct: false,
                    feedback: "❌ Da 30 MINUTI!",
                    points: 0,
                    nextStep: "step_08"
                },
                {
                    id: "c",
                    text: "Da giorni",
                    correct: false,
                    feedback: "❌ Da 30 minuti!",
                    points: 0,
                    nextStep: "step_08"
                },
                {
                    id: "d",
                    text: "Non chiedo",
                    correct: false,
                    feedback: "❌ Storia è importante!",
                    points: 0,
                    nextStep: "step_08"
                }
            ]
        },
        
        // AMPIA - VENTOLIN INEFFICACE!
        {
            id: "step_08",
            phase: "E - AMPIA CRITICA",
            situation: "📋 30 min crisi. Raccogli AMPIA.",
            question: "Cosa scopri di CRITICO?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "ASMA nota. Ha assunto 2+2 PUFF VENTOLIN SPRAY: NESSUN MIGLIORAMENTO! Consegna documentazione clinica.",
                    correct: true,
                    feedback: "✅ CRITICO! 4 puff Ventolin inefficaci = asma SEVERA resistente a broncodilatatori! Serve MSA per steroidi/adrenalina!",
                    points: 25,
                    nextStep: "step_09"
                },
                {
                    id: "b",
                    text: "Non ha usato Ventolin",
                    correct: false,
                    feedback: "❌ Ha fatto 2+2 puff!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "c",
                    text: "Ventolin ha funzionato",
                    correct: false,
                    feedback: "❌ NESSUN miglioramento!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "d",
                    text: "Non chiedo AMPIA",
                    correct: false,
                    feedback: "❌ AMPIA è fondamentale!",
                    points: 0,
                    nextStep: "step_09"
                }
            ]
        },
        
        // COMUNICAZIONE - MSA
        {
            id: "step_09",
            phase: "COMUNICAZIONE SOREU - MSA",
            situation: "📞 Devi comunicare.",
            question: "Cosa comunichi?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "ASMA SEVERA! Donna 40aa, FR 30, SpO2 90% O2, sibili/fischi, FC 120, soffocamento, 30min crisi, 4 puff Ventolin INEFFICACI",
                    correct: true,
                    feedback: "✅ PERFETTO! SOREU: MSA IN ARRIVO! Ventolin inefficace = serve terapia avanzata!",
                    points: 25,
                    nextStep: "step_10"
                },
                {
                    id: "b",
                    text: "Donna con dispnea",
                    correct: false,
                    feedback: "❌ Troppo vago!",
                    points: 0,
                    nextStep: "step_10"
                },
                {
                    id: "c",
                    text: "Non comunico Ventolin",
                    correct: false,
                    feedback: "❌ Ventolin inefficace è INFO CRITICA!",
                    points: 8,
                    nextStep: "step_10"
                },
                {
                    id: "d",
                    text: "Non chiedo MSA",
                    correct: false,
                    feedback: "❌ Asma severa richiede MSA!",
                    points: 0,
                    nextStep: "step_10"
                }
            ]
        },
        
        // FINALE
        {
            id: "step_10",
            phase: "RIVALUTAZIONE + ATTESA MSA",
            situation: "⏱️ MSA in arrivo.",
            vitalSigns: {
                diagnosi: "Asma severa resistente"
            },
            question: "Cosa fai?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Rivaluto ABCDE continuo, mantengo O2, posizione comoda (seduta/in piedi), monitoro SpO2, TRANQUILLIZZO (ansia peggiora broncospasmo!)",
                    correct: true,
                    feedback: "✅ PERFETTO! Tranquillizzare è FONDAMENTALE in asma! MSA farà steroidi EV/salbutamolo. SCENARIO COMPLETATO!",
                    points: 20,
                    nextStep: "end"
                },
                {
                    id: "b",
                    text: "La faccio sdraiare",
                    correct: false,
                    feedback: "❌ Posizione comoda scelta da paziente!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "c",
                    text: "Non tranquillizzo",
                    correct: false,
                    feedback: "❌ Tranquillizzare è FONDAMENTALE!",
                    points: 5,
                    nextStep: "end"
                },
                {
                    id: "d",
                    text: "Non rivaluto",
                    correct: false,
                    feedback: "❌ Può peggiorare!",
                    points: 0,
                    nextStep: "end"
                }
            ]
        }
    ],
    
    // Scoring
    scoring: {
        maxScore: 220,
        thresholds: {
            excellent: 200,
            good: 175,
            sufficient: 150,
            insufficient: 0
        }
    }
};

window.scenario_17_asma = scenario_17_asma;
