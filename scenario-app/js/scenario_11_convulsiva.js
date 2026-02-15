// ========================================
// SCENARIO 11: CRISI CONVULSIVA
// Epilessia fase post-critica - Fedele alla scheda AREU
// ========================================

const scenario_11_convulsiva = {
    id: "scenario_11",
    code: "MEDICO_09",
    title: "CRISI CONVULSIVA (epilessia)",
    category: "Emergenza Neurologica",
    difficulty: "Media",
    estimatedTime: "12-15 minuti",
    
    // Info iniziali dalla centrale
    briefing: {
        centralCall: "Ragazzo epilettico in fase post-critica.",
        msaMsi: false,
        forzeOrdine: false
    },
    
    // Steps dello scenario
    steps: [
        // PRE-ARRIVO
        {
            id: "step_01",
            phase: "PRE-ARRIVO",
            situation: "🚑 Centrale: 'Ragazzo epilettico in fase POST-CRITICA'.",
            question: "Cosa significa 'fase post-critica'?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "La crisi convulsiva è FINITA, paziente in fase di recupero (confuso/assopito)",
                    correct: true,
                    feedback: "✅ Esatto! Post-critica = DOPO la crisi. Paziente NON convulso ma ancora alterato.",
                    points: 15,
                    nextStep: "step_02"
                },
                {
                    id: "b",
                    text: "Sta convulsando ora",
                    correct: false,
                    feedback: "❌ POST-critica = DOPO! Crisi già finita.",
                    points: 0,
                    nextStep: "step_02"
                },
                {
                    id: "c",
                    text: "Sta per iniziare crisi",
                    correct: false,
                    feedback: "❌ POST = dopo! Crisi già avvenuta.",
                    points: 0,
                    nextStep: "step_02"
                },
                {
                    id: "d",
                    text: "Non so",
                    correct: false,
                    feedback: "⚠️ Post-critica = fase DOPO crisi, paziente confuso/assopito.",
                    points: 0,
                    nextStep: "step_02"
                }
            ]
        },
        
        // SCENA
        {
            id: "step_02",
            phase: "VALUTAZIONE SCENA",
            situation: "📍 Arrivi. Vedi: ragazzo supino sul divano, roseo, NON parla, occhi chiusi. Soggiorno, spazi ampi, nessun ostacolo.",
            vitalSigns: {
                posizione: "Supino sul divano",
                colorito: "Roseo",
                stato: "Non parla, occhi chiusi"
            },
            question: "Dopo scena e DPI, cosa fai?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Mi avvicino e inizio valutazione ABCDE",
                    correct: true,
                    feedback: "✅ Corretto!",
                    points: 10,
                    nextStep: "step_03"
                },
                {
                    id: "b",
                    text: "Aspetto che si svegli",
                    correct: false,
                    feedback: "❌ Devi valutare subito!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "c",
                    text: "Chiamo MSA prima",
                    correct: false,
                    feedback: "❌ Prima valuti!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "d",
                    text: "Lo scuoto forte per svegliarlo",
                    correct: false,
                    feedback: "❌ Approccio delicato! Valuta prima.",
                    points: 0,
                    nextStep: "step_03"
                }
            ]
        },
        
        // FASE A - CANNULA
        {
            id: "step_03",
            phase: "A - VIE AEREE",
            situation: "Ti presenti. Paziente NON risponde. Vie aeree pervie.",
            vitalSigns: {
                coscienza: "Non risponde",
                vie_aeree: "Pervie"
            },
            question: "Paziente incosciente, vie aeree pervie. Cosa fai?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Tento di posizionare cannula orofaringea → paziente NON la tollera (riflesso presente)",
                    correct: true,
                    feedback: "✅ Corretto! NON tollera = riflesso faringeo presente. NON forzare. Vie aeree comunque pervie.",
                    points: 15,
                    nextStep: "step_04"
                },
                {
                    id: "b",
                    text: "Forzo cannula anche se non tollera",
                    correct: false,
                    feedback: "❌ Se non tollera NON si forza! Rischio vomito.",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "c",
                    text: "Non tento cannula",
                    correct: false,
                    feedback: "⚠️ Con incosciente va sempre TENTATA. Se non tollera, ok, non forzi.",
                    points: 7,
                    nextStep: "step_04"
                },
                {
                    id: "d",
                    text: "Intubo il paziente",
                    correct: false,
                    feedback: "❌ Intubazione è manovra medica!",
                    points: 0,
                    nextStep: "step_04"
                }
            ]
        },
        
        // FASE B
        {
            id: "step_04",
            phase: "B - RESPIRO",
            situation: "🫁 Vie aeree pervie (senza cannula). Valuti respiro.",
            question: "Cosa rilevi?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Meccanica normale, FR 18 eupnoico, SpO2 92% → somministro O2 → saturazione in aumento",
                    correct: true,
                    feedback: "✅ Perfetto! Post-critica spesso lieve ipossia. O2 corregge.",
                    points: 20,
                    nextStep: "step_05"
                },
                {
                    id: "b",
                    text: "Non respira",
                    correct: false,
                    feedback: "❌ Respira! FR 18 eupnoico.",
                    points: 0,
                    nextStep: "step_05"
                },
                {
                    id: "c",
                    text: "SpO2 normale, non serve O2",
                    correct: false,
                    feedback: "⚠️ 92% è al limite! O2 è indicato.",
                    points: 8,
                    nextStep: "step_05"
                },
                {
                    id: "d",
                    text: "Respiro gravemente alterato",
                    correct: false,
                    feedback: "❌ Meccanica normale, FR 18!",
                    points: 0,
                    nextStep: "step_05"
                }
            ]
        },
        
        // FASE C
        {
            id: "step_05",
            phase: "C - CIRCOLO",
            situation: "💓 Valuti circolo.",
            vitalSigns: {
                respiro: "FR 18, SpO2 in aumento con O2"
            },
            question: "Cosa rilevi?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Polso presente/regolare FC 100, cute rosea/calda, PA 135/80",
                    correct: true,
                    feedback: "✅ Perfetto! Parametri circolatori normali. FC 100 accettabile post-crisi.",
                    points: 15,
                    nextStep: "step_06"
                },
                {
                    id: "b",
                    text: "Parametri critici",
                    correct: false,
                    feedback: "❌ Sono normali!",
                    points: 0,
                    nextStep: "step_06"
                },
                {
                    id: "c",
                    text: "Polso assente",
                    correct: false,
                    feedback: "❌ Polso presente FC 100!",
                    points: 0,
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
        
        // FASE D - AVPU P
        {
            id: "step_06",
            phase: "D - NEUROLOGICO",
            situation: "🧠 Valuti stato neurologico.",
            question: "Cosa rilevi?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "AVPU: P (risponde a stimolo DOLOROSO con lamenti), sensibilità presente, muove allo stimolo",
                    correct: true,
                    feedback: "✅ Corretto! Post-critica = spesso AVPU: P. Risponde a dolore, non a voce.",
                    points: 20,
                    nextStep: "step_07"
                },
                {
                    id: "b",
                    text: "AVPU: A (sveglio)",
                    correct: false,
                    feedback: "❌ Non risponde a voce! È P (Pain).",
                    points: 0,
                    nextStep: "step_07"
                },
                {
                    id: "c",
                    text: "AVPU: U (non risponde)",
                    correct: false,
                    feedback: "❌ Risponde a dolore = P!",
                    points: 0,
                    nextStep: "step_07"
                },
                {
                    id: "d",
                    text: "Non valuto neurologico",
                    correct: false,
                    feedback: "❌ D è fondamentale!",
                    points: 0,
                    nextStep: "step_07"
                }
            ]
        },
        
        // FASE E - MORSO LINGUA!
        {
            id: "step_07",
            phase: "E - ESAME OBIETTIVO",
            situation: "👁️ Osservi il paziente attentamente...",
            vitalSigns: {
                AVPU: "P (Pain)"
            },
            question: "Cosa noti di MOLTO IMPORTANTE?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "EVIDENTE MORSO SULLA LINGUA!",
                    correct: true,
                    feedback: "✅ SEGNO CHIAVE! Morso lingua = conferma crisi convulsiva! Segno patognomonico.",
                    points: 25,
                    nextStep: "step_08"
                },
                {
                    id: "b",
                    text: "Niente di particolare",
                    correct: false,
                    feedback: "❌ C'è morso lingua evidente!",
                    points: 0,
                    nextStep: "step_08"
                },
                {
                    id: "c",
                    text: "Solo che è assopito",
                    correct: false,
                    feedback: "❌ Manca il segno CHIAVE: morso lingua!",
                    points: 3,
                    nextStep: "step_08"
                },
                {
                    id: "d",
                    text: "Non faccio esame obiettivo",
                    correct: false,
                    feedback: "❌ E è obbligatoria!",
                    points: 0,
                    nextStep: "step_08"
                }
            ]
        },
        
        // AMPIA
        {
            id: "step_08",
            phase: "E - ANAMNESI",
            situation: "💬 Morso lingua confermato. Chiedi ai familiari.",
            question: "Cosa riferiscono?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "All'improvviso CRISI CONVULSIVA mentre faceva compiti. Ragazzo 18 anni, EPILETTICO NOTO, in terapia antiepilettica",
                    correct: true,
                    feedback: "✅ Perfetto! Epilettico noto in terapia. Crisi epilettica tipica.",
                    points: 20,
                    nextStep: "step_09"
                },
                {
                    id: "b",
                    text: "Prima crisi nella vita",
                    correct: false,
                    feedback: "❌ È epilettico NOTO (già diagnosticato)!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "c",
                    text: "Non è epilettico",
                    correct: false,
                    feedback: "❌ È epilettico noto in terapia!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "d",
                    text: "Non chiedo anamnesi",
                    correct: false,
                    feedback: "❌ AMPIA è fondamentale!",
                    points: 0,
                    nextStep: "step_09"
                }
            ]
        },
        
        // COMUNICAZIONE
        {
            id: "step_09",
            phase: "COMUNICAZIONE SOREU",
            situation: "📞 Comunichi con SOREU.",
            question: "Cosa riferisci?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Ragazzo 18aa epilettico noto, crisi convulsiva (morso lingua), fase post-critica AVPU P, FR 18, FC 100, PA 135/80, in terapia",
                    correct: true,
                    feedback: "✅ Perfetto! Comunicazione completa. SOREU autorizza trasporto PS.",
                    points: 20,
                    nextStep: "step_10"
                },
                {
                    id: "b",
                    text: "Ragazzo svenuto",
                    correct: false,
                    feedback: "❌ Non è svenimento! È crisi epilettica!",
                    points: 0,
                    nextStep: "step_10"
                },
                {
                    id: "c",
                    text: "Solo che ha convulsioni",
                    correct: false,
                    feedback: "⚠️ Mancano parametri e anamnesi!",
                    points: 5,
                    nextStep: "step_10"
                },
                {
                    id: "d",
                    text: "Non comunico",
                    correct: false,
                    feedback: "❌ Comunicazione obbligatoria!",
                    points: 0,
                    nextStep: "step_10"
                }
            ]
        },
        
        // FINALE - MIGLIORAMENTO
        {
            id: "step_10",
            phase: "RIVALUTAZIONE - TRASPORTO",
            situation: "🚑 Durante trasporto rivaluti. Paziente inizia a essere PIÙ CONTATTABILE!",
            vitalSigns: {
                evoluzione: "Miglioramento"
            },
            question: "Cosa noti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "AVPU migliora da P a V (risponde a stimolo VERBALE)! Fase post-critica in miglioramento",
                    correct: true,
                    feedback: "✅ PERFETTO! Evoluzione tipica post-crisi: P → V → A. Recupero progressivo. SCENARIO COMPLETATO!",
                    points: 20,
                    nextStep: "end"
                },
                {
                    id: "b",
                    text: "Peggiora",
                    correct: false,
                    feedback: "❌ Migliora! AVPU P → V!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "c",
                    text: "Nessun cambiamento",
                    correct: false,
                    feedback: "❌ C'è miglioramento evidente!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "d",
                    text: "Non rivaluto",
                    correct: false,
                    feedback: "❌ Rivalutazione sempre necessaria!",
                    points: 0,
                    nextStep: "end"
                }
            ]
        }
    ],
    
    // Scoring
    scoring: {
        maxScore: 205,
        thresholds: {
            excellent: 185,
            good: 160,
            sufficient: 135,
            insufficient: 0
        }
    }
};

window.scenario_11_convulsiva = scenario_11_convulsiva;
