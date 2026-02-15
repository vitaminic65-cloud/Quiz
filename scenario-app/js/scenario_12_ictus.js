// ========================================
// SCENARIO 12: ICTUS (CPSS POSITIVA)
// Stroke con deficit neurologico - Fedele alla scheda AREU
// ========================================

const scenario_12_ictus = {
    id: "scenario_12",
    code: "MEDICO_10",
    title: "ICTUS (CPSS positiva)",
    category: "Emergenza Neurologica",
    difficulty: "Alta",
    estimatedTime: "15-18 minuti",
    
    // Info iniziali dalla centrale
    briefing: {
        centralCall: "Persona circa 65 anni, malore in casa, cosciente.",
        msaMsi: false,
        forzeOrdine: false
    },
    
    // Steps dello scenario
    steps: [
        // PRE-ARRIVO
        {
            id: "step_01",
            phase: "PRE-ARRIVO",
            situation: "🚑 Centrale: '65 anni, malore in casa, cosciente'.",
            question: "Cosa fai?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Assegno incarichi, preparo materiale per emergenza neurologica",
                    correct: true,
                    feedback: "✅ Corretto! 'Malore' può essere ictus.",
                    points: 15,
                    nextStep: "step_02"
                },
                {
                    id: "b",
                    text: "Solo incarichi",
                    correct: false,
                    feedback: "⚠️ Prepara anche materiale!",
                    points: 5,
                    nextStep: "step_02"
                },
                {
                    id: "c",
                    text: "Nulla",
                    correct: false,
                    feedback: "❌ Preparazione necessaria!",
                    points: 0,
                    nextStep: "step_02"
                },
                {
                    id: "d",
                    text: "Preparo solo DAE",
                    correct: false,
                    feedback: "⚠️ Serve materiale neurologico!",
                    points: 3,
                    nextStep: "step_02"
                }
            ]
        },
        
        // SCENA
        {
            id: "step_02",
            phase: "VALUTAZIONE SCENA",
            situation: "📍 Arrivi. Vedi: uomo sdraiato a letto, roseo, NON PARLA. Nessun ostacolo.",
            vitalSigns: {
                posizione: "Sdraiato a letto",
                colorito: "Roseo",
                comunicazione: "NON parla"
            },
            question: "Dopo scena e DPI?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Mi avvicino e inizio ABCDE",
                    correct: true,
                    feedback: "✅ Corretto!",
                    points: 10,
                    nextStep: "step_03"
                },
                {
                    id: "b",
                    text: "Chiamo MSA prima",
                    correct: false,
                    feedback: "❌ Prima valuti!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "c",
                    text: "Aspetto che parli",
                    correct: false,
                    feedback: "❌ Valuta subito!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "d",
                    text: "Non mi avvicino",
                    correct: false,
                    feedback: "❌ Devi valutare!",
                    points: 0,
                    nextStep: "step_03"
                }
            ]
        },
        
        // FASE A
        {
            id: "step_03",
            phase: "A - VIE AEREE",
            situation: "Ti presenti. Paziente ATTENTO, ti GUARDA, ti SEGUE con lo sguardo, ma NON PARLA!",
            vitalSigns: {
                attenzione: "Presente",
                contatto: "Visivo buono",
                linguaggio: "Assente"
            },
            question: "Cosa noti di IMPORTANTE?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Paziente COSCIENTE (ti guarda) ma NON PARLA → possibile AFASIA! Vie aeree pervie.",
                    correct: true,
                    feedback: "✅ CRITICO! Cosciente ma non parla = afasia, segno di ICTUS!",
                    points: 20,
                    nextStep: "step_04"
                },
                {
                    id: "b",
                    text: "È incosciente",
                    correct: false,
                    feedback: "❌ È cosciente! Ti guarda e segue.",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "c",
                    text: "Vie aeree ostruite",
                    correct: false,
                    feedback: "❌ Vie aeree pervie!",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "d",
                    text: "Tutto normale",
                    correct: false,
                    feedback: "❌ NON parla! Non è normale!",
                    points: 0,
                    nextStep: "step_04"
                }
            ]
        },
        
        // FASE B
        {
            id: "step_04",
            phase: "B - RESPIRO",
            situation: "🫁 Vie aeree pervie, afasia. Valuti respiro.",
            question: "Cosa rilevi?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Eupnoico, espansione normale, FR 16, SpO2 98% → O2 → 99%",
                    correct: true,
                    feedback: "✅ Perfetto! Parametri respiratori normali.",
                    points: 15,
                    nextStep: "step_05"
                },
                {
                    id: "b",
                    text: "Non respira",
                    correct: false,
                    feedback: "❌ Respira normalmente!",
                    points: 0,
                    nextStep: "step_05"
                },
                {
                    id: "c",
                    text: "Grave dispnea",
                    correct: false,
                    feedback: "❌ Eupnoico (normale)!",
                    points: 0,
                    nextStep: "step_05"
                },
                {
                    id: "d",
                    text: "Non valuto",
                    correct: false,
                    feedback: "❌ B è obbligatoria!",
                    points: 0,
                    nextStep: "step_05"
                }
            ]
        },
        
        // FASE C - IPERTENSIONE
        {
            id: "step_05",
            phase: "C - CIRCOLO",
            situation: "💓 Valuti circolo.",
            question: "Cosa rilevi?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Polso presente/regolare FC 100, cute calda/rosea, PA 190/110 (IPERTENSIONE!)",
                    correct: true,
                    feedback: "✅ CRITICO! PA 190/110 è ipertensione. Fattore di rischio E conseguenza ictus!",
                    points: 20,
                    nextStep: "step_06"
                },
                {
                    id: "b",
                    text: "PA normale",
                    correct: false,
                    feedback: "❌ PA 190/110 è alta!",
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
                    text: "Non misuro PA",
                    correct: false,
                    feedback: "❌ PA è fondamentale in sospetto ictus!",
                    points: 0,
                    nextStep: "step_06"
                }
            ]
        },
        
        // FASE D - AVPU
        {
            id: "step_06",
            phase: "D - NEUROLOGICO: AVPU",
            situation: "🧠 Afasia + PA 190/110. Valuti neurologico. FASE CRITICA!",
            vitalSigns: {
                afasia: "Presente",
                PA: "190/110"
            },
            question: "AVPU?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "AVPU: A (cosciente) - Attento, ti segue con sguardo",
                    correct: true,
                    feedback: "✅ Corretto! Cosciente ma con afasia. Ora scala CPSS!",
                    points: 15,
                    nextStep: "step_07"
                },
                {
                    id: "b",
                    text: "AVPU: V",
                    correct: false,
                    feedback: "❌ È Alert (A), risponde a stimoli!",
                    points: 0,
                    nextStep: "step_07"
                },
                {
                    id: "c",
                    text: "AVPU: P",
                    correct: false,
                    feedback: "❌ È cosciente! A (Alert)!",
                    points: 0,
                    nextStep: "step_07"
                },
                {
                    id: "d",
                    text: "Non valuto",
                    correct: false,
                    feedback: "❌ AVPU è obbligatorio!",
                    points: 0,
                    nextStep: "step_07"
                }
            ]
        },
        
        // SCALA CPSS - LINGUAGGIO
        {
            id: "step_07",
            phase: "D - SCALA CPSS: LINGUAGGIO",
            situation: "🧠 SCALA CPSS (Cincinnati Prehospital Stroke Scale). Primo test: LINGUAGGIO.",
            vitalSigns: {
                AVPU: "A"
            },
            question: "Chiedi al paziente di RIPETERE una frase. Cosa noti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Linguaggio ASSENTE! Non riesce a parlare (afasia)",
                    correct: true,
                    feedback: "✅ CPSS LINGUAGGIO: POSITIVO (patologico). Segno di ictus!",
                    points: 20,
                    nextStep: "step_08"
                },
                {
                    id: "b",
                    text: "Parla normalmente",
                    correct: false,
                    feedback: "❌ NON parla! Afasia completa!",
                    points: 0,
                    nextStep: "step_08"
                },
                {
                    id: "c",
                    text: "Parla ma poco chiaro",
                    correct: false,
                    feedback: "⚠️ NON parla affatto! Linguaggio ASSENTE!",
                    points: 5,
                    nextStep: "step_08"
                },
                {
                    id: "d",
                    text: "Non testo linguaggio",
                    correct: false,
                    feedback: "❌ Linguaggio è parte CRITICA CPSS!",
                    points: 0,
                    nextStep: "step_08"
                }
            ]
        },
        
        // SCALA CPSS - BRACCIA
        {
            id: "step_08",
            phase: "D - SCALA CPSS: MOVIMENTO ARTI SUPERIORI",
            situation: "🧠 CPSS Linguaggio: POSITIVO. Secondo test: BRACCIA.",
            question: "Chiedi di alzare entrambe le braccia. Cosa noti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Braccio SINISTRO si alza, braccio DESTRO: motilità ASSENTE!",
                    correct: true,
                    feedback: "✅ CPSS BRACCIA: POSITIVO! Emiparesi DX (lato destro paralizzato) = ictus emisfero sinistro!",
                    points: 25,
                    nextStep: "step_09"
                },
                {
                    id: "b",
                    text: "Entrambe si alzano",
                    correct: false,
                    feedback: "❌ Braccio DX NON si muove!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "c",
                    text: "Entrambe paralizzate",
                    correct: false,
                    feedback: "❌ Solo DX paralizzato! SX normale.",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "d",
                    text: "Non testo",
                    correct: false,
                    feedback: "❌ Braccia sono CRITICHE in CPSS!",
                    points: 0,
                    nextStep: "step_09"
                }
            ]
        },
        
        // SCALA CPSS - FACCIA
        {
            id: "step_09",
            phase: "D - SCALA CPSS: MIMICA FACCIALE",
            situation: "🧠 CPSS Linguaggio: POSITIVO. Braccia: POSITIVO. Terzo test: FACCIA.",
            question: "Chiedi di SORRIDERE o mostrare i denti. Cosa noti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "DEVIAZIONE della rima labbiale DESTRA! Bocca storta a destra",
                    correct: true,
                    feedback: "✅ CPSS FACCIA: POSITIVO! Paralisi facciale DX. Conferma ictus!",
                    points: 25,
                    nextStep: "step_10"
                },
                {
                    id: "b",
                    text: "Sorriso simmetrico",
                    correct: false,
                    feedback: "❌ C'è deviazione rima labbiale DX!",
                    points: 0,
                    nextStep: "step_10"
                },
                {
                    id: "c",
                    text: "Deviazione sinistra",
                    correct: false,
                    feedback: "❌ È deviazione DESTRA!",
                    points: 0,
                    nextStep: "step_10"
                },
                {
                    id: "d",
                    text: "Non testo faccia",
                    correct: false,
                    feedback: "❌ Faccia è CRITICA in CPSS!",
                    points: 0,
                    nextStep: "step_10"
                }
            ]
        },
        
        // SCALA CPSS - GAMBE
        {
            id: "step_10",
            phase: "D - SCALA CPSS: MOVIMENTO ARTI INFERIORI",
            situation: "🧠 CPSS 3/3 POSITIVO! Quarto test (aggiuntivo): GAMBE.",
            question: "Chiedi di muovere le gambe. Cosa noti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Gamba SINISTRA si muove, gamba DESTRA: motilità ASSENTE!",
                    correct: true,
                    feedback: "✅ Emiplegia DX COMPLETA (braccio + gamba)! CPSS COMPLETA POSITIVA!",
                    points: 25,
                    nextStep: "step_11"
                },
                {
                    id: "b",
                    text: "Entrambe si muovono",
                    correct: false,
                    feedback: "❌ Gamba DX paralizzata!",
                    points: 0,
                    nextStep: "step_11"
                },
                {
                    id: "c",
                    text: "Entrambe paralizzate",
                    correct: false,
                    feedback: "❌ Solo DX! SX normale.",
                    points: 0,
                    nextStep: "step_11"
                },
                {
                    id: "d",
                    text: "Non testo gambe",
                    correct: false,
                    feedback: "⚠️ Gambe completano quadro neurologico!",
                    points: 5,
                    nextStep: "step_11"
                }
            ]
        },
        
        // AMPIA + TEMPO
        {
            id: "step_11",
            phase: "E - ANAMNESI: TEMPO INSORGENZA",
            situation: "🕐 CPSS POSITIVA! Chiedi ai familiari. INFO CRITICA PER TROMBOLISI!",
            vitalSigns: {
                CPSS: "4/4 POSITIVA (linguaggio, braccio, faccia, gamba)"
            },
            question: "QUANDO sono iniziati i sintomi?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Al RISVEGLIO da riposino pomeridiano (durata 1 ORA) non parlava e non si alzava. TEMPO: circa 1 ORA FA!",
                    correct: true,
                    feedback: "✅ CRITICO! Tempo <4,5h = possibile TROMBOLISI! 'Last seen normal' = inizio riposino. Uomo 70aa obeso, iperteso in terapia.",
                    points: 30,
                    nextStep: "step_12"
                },
                {
                    id: "b",
                    text: "Non so quando",
                    correct: false,
                    feedback: "❌ Il tempo è FONDAMENTALE! Familiari sanno: 1 ora fa!",
                    points: 0,
                    nextStep: "step_12"
                },
                {
                    id: "c",
                    text: "Da molte ore",
                    correct: false,
                    feedback: "❌ Da 1 ora! (Tempo riposino)",
                    points: 0,
                    nextStep: "step_12"
                },
                {
                    id: "d",
                    text: "Non chiedo",
                    correct: false,
                    feedback: "❌ Tempo insorgenza è CRITICO per trombolisi!",
                    points: 0,
                    nextStep: "step_12"
                }
            ]
        },
        
        // COMUNICAZIONE SOREU
        {
            id: "step_12",
            phase: "COMUNICAZIONE SOREU - STROKE CODE",
            situation: "📞 Devi comunicare URGENTEMENTE questo STROKE!",
            question: "Cosa comunichi?",
            timeLimit: 45,
            choices: [
                {
                    id: "a",
                    text: "STROKE! Uomo 70aa, CPSS POSITIVA (afasia + emiplegia DX completa), PA 190/110, TEMPO INSORGENZA 1H, iperteso, STROKE CENTER URGENTE!",
                    correct: true,
                    feedback: "✅ PERFETTO! SOREU attiva STROKE CODE. Trasporto diretto a Stroke Center per trombolisi entro 4,5h!",
                    points: 30,
                    nextStep: "step_13"
                },
                {
                    id: "b",
                    text: "Uomo con paralisi",
                    correct: false,
                    feedback: "❌ Devi dire STROKE + CPSS + TEMPO!",
                    points: 0,
                    nextStep: "step_13"
                },
                {
                    id: "c",
                    text: "Solo che non parla",
                    correct: false,
                    feedback: "❌ Comunicazione incompleta! Manca CPSS e tempo!",
                    points: 3,
                    nextStep: "step_13"
                },
                {
                    id: "d",
                    text: "Non comunico tempo",
                    correct: false,
                    feedback: "❌ TEMPO è CRITICO per trombolisi!",
                    points: 5,
                    nextStep: "step_13"
                }
            ]
        },
        
        // FINALE
        {
            id: "step_13",
            phase: "TRASPORTO STROKE CENTER",
            situation: "🏥 STROKE CODE attivato. Trasporto urgente.",
            vitalSigns: {
                diagnosi: "Ictus ischemico destro",
                tempo: "1 ora (finestra trombolisi)"
            },
            question: "Cosa fai durante trasporto?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Rivaluto ABCDE continuo, monitoro PA, mantengo O2, posizione sicura (testa 30°), trasporto delicato, NO stress (PA!), tempo è cervello!",
                    correct: true,
                    feedback: "✅ PERFETTO! Gestione ottimale stroke. 'Time is brain' - ogni minuto conta! SCENARIO COMPLETATO!",
                    points: 25,
                    nextStep: "end"
                },
                {
                    id: "b",
                    text: "Non monitoro",
                    correct: false,
                    feedback: "❌ Monitoraggio continuo vitale!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "c",
                    text: "Paziente supino piatto",
                    correct: false,
                    feedback: "⚠️ Testa rialzata 30° è meglio per stroke!",
                    points: 8,
                    nextStep: "end"
                },
                {
                    id: "d",
                    text: "Vado piano per non perdere tempo",
                    correct: false,
                    feedback: "⚠️ In stroke serve equilibrio: veloce ma delicato. PA va controllata!",
                    points: 10,
                    nextStep: "end"
                }
            ]
        }
    ],
    
    // Scoring
    scoring: {
        maxScore: 340,
        thresholds: {
            excellent: 310,
            good: 275,
            sufficient: 240,
            insufficient: 0
        }
    }
};

window.scenario_12_ictus = scenario_12_ictus;
