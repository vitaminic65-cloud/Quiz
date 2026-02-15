// ========================================
// SCENARIO 18: PAZIENTE ALLERGICO (alimentare)
// Reazione allergica severa - Fedele alla scheda AREU
// ========================================

const scenario_18_allergia = {
    id: "scenario_18",
    code: "MEDICO_17",
    title: "Allergia Alimentare (anafilassi)",
    category: "Emergenza Respiratoria",
    difficulty: "Alta",
    estimatedTime: "15-18 minuti",
    
    // Info iniziali dalla centrale
    briefing: {
        centralCall: "Donna 70 anni con importante difficoltà respiratoria.",
        msaMsi: false,
        forzeOrdine: false
    },
    
    // Steps dello scenario
    steps: [
        // PRE-ARRIVO
        {
            id: "step_01",
            phase: "PRE-ARRIVO",
            situation: "🚑 Centrale: 'Donna 70 anni con IMPORTANTE difficoltà respiratoria'.",
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
        
        // SCENA - RISTORANTE!
        {
            id: "step_02",
            phase: "VALUTAZIONE SCENA",
            situation: "📍 Vedi: donna SEDUTA AL RISTORANTE, agitata con affanno respiratorio. Nessun ostacolo.",
            vitalSigns: {
                luogo: "RISTORANTE",
                stato: "Agitata, affanno"
            },
            question: "Cosa noti di IMPORTANTE nel luogo?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Al RISTORANTE = possibile allergia ALIMENTARE! Importante per anamnesi.",
                    correct: true,
                    feedback: "✅ FONDAMENTALE! Ristorante = sospetta allergia cibo!",
                    points: 15,
                    nextStep: "step_03"
                },
                {
                    id: "b",
                    text: "Luogo non rilevante",
                    correct: false,
                    feedback: "⚠️ Ristorante è CHIAVE per allergia!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "c",
                    text: "Non noto nulla",
                    correct: false,
                    feedback: "❌ Luogo è indicativo!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "d",
                    text: "Solo che è pubblica",
                    correct: false,
                    feedback: "⚠️ RISTORANTE suggerisce allergia alimentare!",
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
                    feedback: "✅ Corretto! Cosciente, agitata con difficoltà respiratoria. Vie aeree pervie.",
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
                    text: "Chiedo solo cosa ha mangiato",
                    correct: false,
                    feedback: "⚠️ Prima valutazione ABCDE completa!",
                    points: 3,
                    nextStep: "step_04"
                }
            ]
        },
        
        // FASE B
        {
            id: "step_04",
            phase: "B - RESPIRO",
            situation: "🫁 Vie aeree pervie. Valuti respiro.",
            question: "Cosa rilevi?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Respiro superficiale, tachipnoico, rumori presenti (sibili/fischi), FR 30, SpO2 88% → O2 → 90%",
                    correct: true,
                    feedback: "✅ Perfetto! Sibili = broncospasmo allergico. FR 30 + SpO2 88% = severa.",
                    points: 20,
                    nextStep: "step_05"
                },
                {
                    id: "b",
                    text: "Respiro normale",
                    correct: false,
                    feedback: "❌ FR 30 e SpO2 88% sono critici!",
                    points: 0,
                    nextStep: "step_05"
                },
                {
                    id: "c",
                    text: "Non serve O2",
                    correct: false,
                    feedback: "❌ SpO2 88% richiede O2!",
                    points: 0,
                    nextStep: "step_05"
                },
                {
                    id: "d",
                    text: "Solo tachipnea",
                    correct: false,
                    feedback: "⚠️ Mancano sibili e SpO2!",
                    points: 7,
                    nextStep: "step_05"
                }
            ]
        },
        
        // FASE C - IPOTENSIONE!
        {
            id: "step_05",
            phase: "C - CIRCOLO",
            situation: "💓 O2 in corso. Valuti circolo.",
            question: "Cosa rilevi di CRITICO?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Polso presente/tachicardico/regolare FC 110, cute pallida/sudata, PA 90/60 (IPOTENSIONE!)",
                    correct: true,
                    feedback: "✅ CRITICO! PA 90/60 + pallore/sudore = shock anafilattico incipiente!",
                    points: 25,
                    nextStep: "step_06"
                },
                {
                    id: "b",
                    text: "PA normale",
                    correct: false,
                    feedback: "❌ PA 90/60 è IPOTENSIONE!",
                    points: 0,
                    nextStep: "step_06"
                },
                {
                    id: "c",
                    text: "Solo tachicardia",
                    correct: false,
                    feedback: "❌ Manca PA bassa critica!",
                    points: 5,
                    nextStep: "step_06"
                },
                {
                    id: "d",
                    text: "Non valuto",
                    correct: false,
                    feedback: "❌ C è obbligatoria!",
                    points: 0,
                    nextStep: "step_06"
                }
            ]
        },
        
        // FASE D
        {
            id: "step_06",
            phase: "D - NEUROLOGICO",
            situation: "🧠 PA 90/60. Valuti neurologico.",
            question: "Cosa rilevi?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Cosciente AVPU: A, orientata, nessun deficit",
                    correct: true,
                    feedback: "✅ Corretto! Coscienza conservata.",
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
        
        // FASE E - EDEMA!
        {
            id: "step_07",
            phase: "E - ESAME OBIETTIVO CRITICO",
            situation: "👁️ Osservi attentamente la paziente.",
            vitalSigns: {
                età: "70 anni"
            },
            question: "Cosa noti di GRAVISSIMO?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "EDEMA PALPEBRALE E LABBRA! Segno di reazione allergica severa (angioedema)!",
                    correct: true,
                    feedback: "✅ CRITICO! Angioedema = anafilassi! Rischio chiusura vie aeree!",
                    points: 30,
                    nextStep: "step_08"
                },
                {
                    id: "b",
                    text: "Niente particolare",
                    correct: false,
                    feedback: "❌ EDEMA palpebre/labbra è GRAVISSIMO!",
                    points: 0,
                    nextStep: "step_08"
                },
                {
                    id: "c",
                    text: "Solo che è anziana",
                    correct: false,
                    feedback: "❌ EDEMA è segno chiave!",
                    points: 0,
                    nextStep: "step_08"
                },
                {
                    id: "d",
                    text: "Non osservo",
                    correct: false,
                    feedback: "❌ Esame obiettivo è fondamentale!",
                    points: 0,
                    nextStep: "step_08"
                }
            ]
        },
        
        // STORIA - COSTRIZIONE GOLA
        {
            id: "step_08",
            phase: "E - ANAMNESI",
            situation: "💬 Edema palpebre/labbra. Chiedi sintomi.",
            question: "Cosa riferisce?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Da 15 MINUTI difficoltà respiratoria con senso di COSTRIZIONE ALLA GOLA!",
                    correct: true,
                    feedback: "✅ CRITICO! Costrizione gola = edema glottide incipiente! Rischio ostruzione!",
                    points: 25,
                    nextStep: "step_09"
                },
                {
                    id: "b",
                    text: "Da ore",
                    correct: false,
                    feedback: "❌ Da 15 MINUTI!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "c",
                    text: "Nessun sintomo gola",
                    correct: false,
                    feedback: "❌ COSTRIZIONE GOLA è sintomo chiave!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "d",
                    text: "Non chiedo",
                    correct: false,
                    feedback: "❌ Storia è fondamentale!",
                    points: 0,
                    nextStep: "step_09"
                }
            ]
        },
        
        // AMPIA - FRUTTA SECCA!
        {
            id: "step_09",
            phase: "E - AMPIA CRITICA",
            situation: "📋 Edema, costrizione gola. Raccogli AMPIA.",
            question: "Cosa scopri di FONDAMENTALE?",
            timeLimit: 50,
            choices: [
                {
                    id: "a",
                    text: "ALLERGICA FRUTTA SECCA (NOTA!)! 1 ORA FA: torta con sospetto ingrediente MANDORLE! Asmatica, ha fatto 2 puff Ventolin. POLIALLERGICA: crostacei, pollini...",
                    correct: true,
                    feedback: "✅ FONDAMENTALE! Allergica nota + mandorle = ANAFILASSI! Poliallergica = rischio alto! Ventolin non basta!",
                    points: 30,
                    nextStep: "step_10"
                },
                {
                    id: "b",
                    text: "Non è allergica",
                    correct: false,
                    feedback: "❌ È ALLERGICA frutta secca!",
                    points: 0,
                    nextStep: "step_10"
                },
                {
                    id: "c",
                    text: "Non ha mangiato nulla",
                    correct: false,
                    feedback: "❌ Torta con MANDORLE 1h fa!",
                    points: 0,
                    nextStep: "step_10"
                },
                {
                    id: "d",
                    text: "Non chiedo AMPIA",
                    correct: false,
                    feedback: "❌ AMPIA è vitale!",
                    points: 0,
                    nextStep: "step_10"
                }
            ]
        },
        
        // COMUNICAZIONE - MSA URGENTE
        {
            id: "step_10",
            phase: "COMUNICAZIONE SOREU - MSA URGENTE",
            situation: "📞 Devi comunicare URGENTEMENTE.",
            question: "Cosa comunichi?",
            timeLimit: 50,
            choices: [
                {
                    id: "a",
                    text: "ANAFILASSI! Donna 70aa ristorante, edema palpebre/labbra, costrizione gola, FR 30, SpO2 90% O2, PA 90/60, allergica frutta secca, mandorle 1h fa",
                    correct: true,
                    feedback: "✅ PERFETTO! SOREU: MSA URGENTE! Anafilassi = serve ADRENALINA IM immediata!",
                    points: 30,
                    nextStep: "step_11"
                },
                {
                    id: "b",
                    text: "Donna con allergia",
                    correct: false,
                    feedback: "❌ Troppo vago! Devi dire ANAFILASSI!",
                    points: 0,
                    nextStep: "step_11"
                },
                {
                    id: "c",
                    text: "Non comunico edema",
                    correct: false,
                    feedback: "❌ Edema/costrizione gola sono CRITICI!",
                    points: 5,
                    nextStep: "step_11"
                },
                {
                    id: "d",
                    text: "Non chiedo MSA",
                    correct: false,
                    feedback: "❌ Anafilassi richiede MSA URGENTE!",
                    points: 0,
                    nextStep: "step_11"
                }
            ]
        },
        
        // FINALE
        {
            id: "step_11",
            phase: "RIVALUTAZIONE + ATTESA MSA",
            situation: "⏱️ MSA in arrivo URGENTE.",
            vitalSigns: {
                diagnosi: "Anafilassi severa"
            },
            question: "Cosa fai?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Rivaluto ABCDE CONTINUO (edema può peggiorare!), mantengo O2, monitoro PA/vie aeree, preparo per possibile ostruzione, tranquillizzo",
                    correct: true,
                    feedback: "✅ PERFETTO! Edema glottide può progredire! MSA farà adrenalina IM + steroidi + antistaminici. SCENARIO COMPLETATO!",
                    points: 20,
                    nextStep: "end"
                },
                {
                    id: "b",
                    text: "Non rivaluto",
                    correct: false,
                    feedback: "❌ Può progredire rapidamente a ostruzione!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "c",
                    text: "Tolgo O2",
                    correct: false,
                    feedback: "❌ O2 continuo necessario!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "d",
                    text: "Non monitoro vie aeree",
                    correct: false,
                    feedback: "❌ Vie aeree sono a RISCHIO!",
                    points: 0,
                    nextStep: "end"
                }
            ]
        }
    ],
    
    // Scoring
    scoring: {
        maxScore: 285,
        thresholds: {
            excellent: 260,
            good: 230,
            sufficient: 200,
            insufficient: 0
        }
    }
};

window.scenario_18_allergia = scenario_18_allergia;
