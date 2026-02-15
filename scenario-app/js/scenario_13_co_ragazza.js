// ========================================
// SCENARIO 13: INTOSSICAZIONE DA MONOSSIDO DI CARBONIO
// Ragazza dopo doccia - AVPU V - Fedele alla scheda AREU
// ========================================

const scenario_13_co_ragazza = {
    id: "scenario_13",
    code: "MEDICO_12",
    title: "Intossicazione CO (monossido)",
    category: "Emergenza Medica",
    difficulty: "Alta",
    estimatedTime: "15-18 minuti",
    
    // Info iniziali dalla centrale
    briefing: {
        centralCall: "Ragazza incosciente a domicilio.",
        msaMsi: false,
        forzeOrdine: false
    },
    
    // Steps dello scenario
    steps: [
        // PRE-ARRIVO
        {
            id: "step_01",
            phase: "PRE-ARRIVO",
            situation: "🚑 Centrale: 'Ragazza incosciente a domicilio'.",
            question: "Cosa fai?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Assegno incarichi, preparo materiale",
                    correct: true,
                    feedback: "✅ Corretto! Preparazione completa.",
                    points: 10,
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
                    text: "Chiamo MSA subito",
                    correct: false,
                    feedback: "⚠️ Prima valuti!",
                    points: 2,
                    nextStep: "step_02"
                }
            ]
        },
        
        // VALUTAZIONE SCENA - CRITICA!
        {
            id: "step_02",
            phase: "VALUTAZIONE SCENA - PERICOLI",
            situation: "📍 Casa vecchia costruzione, scale strette/ripide. Ragazza sdraiata sul DIVANO con accappatoio, NON si muove.",
            vitalSigns: {
                ambiente: "Vecchia costruzione",
                ostacoli: "Scale strette/ripide",
                paziente: "Sul divano, non si muove"
            },
            question: "Cosa fai per VALUTAZIONE SCENA?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Chiedo descrizione completa, colpo d'occhio, CHIEDO DINAMICA EVENTO, verifico ALTRI COINVOLTI, controllo PERICOLI",
                    correct: true,
                    feedback: "✅ PERFETTO! Valutazione scena completa con attenzione a PERICOLI e altri coinvolti!",
                    points: 20,
                    nextStep: "step_03"
                },
                {
                    id: "b",
                    text: "Solo descrizione base",
                    correct: false,
                    feedback: "❌ Mancano: dinamica, altri coinvolti, PERICOLI!",
                    points: 5,
                    nextStep: "step_03"
                },
                {
                    id: "c",
                    text: "Entro subito",
                    correct: false,
                    feedback: "❌ Prima valutazione scena completa!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "d",
                    text: "Solo ostacoli",
                    correct: false,
                    feedback: "❌ Mancano dinamica, altri, PERICOLI!",
                    points: 3,
                    nextStep: "step_03"
                }
            ]
        },
        
        // DINAMICA + PERICOLO CO!
        {
            id: "step_03",
            phase: "VALUTAZIONE SCENA - DINAMICA CRITICA",
            situation: "💬 Madre riferisce: 'Sono rientrata dalla spesa e ho trovato mia figlia NON COSCIENTE IN BAGNO dopo la doccia!'",
            vitalSigns: {
                dinamica: "Trovata incosciente in bagno post-doccia"
            },
            question: "Cosa fai per verificare PERICOLI?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Verifico se ci sono ALTRE PERSONE in casa, controllo se c'è SCALDABAGNO A GAS nel bagno → C'È! PERICOLO CO! Faccio APRIRE FINESTRE!",
                    correct: true,
                    feedback: "✅ CRITICO! Scaldabagno a gas NELLO STESSO LOCALE doccia = INTOSSICAZIONE CO! Se c'è rilevatore monossido: SUONA!",
                    points: 30,
                    nextStep: "step_04"
                },
                {
                    id: "b",
                    text: "Non verifico pericoli",
                    correct: false,
                    feedback: "❌ PERICOLO MORTALE! Scaldabagno a gas = CO!",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "c",
                    text: "Solo verifico altre persone",
                    correct: false,
                    feedback: "⚠️ Manca controllo FONTE CO (scaldabagno)!",
                    points: 10,
                    nextStep: "step_04"
                },
                {
                    id: "d",
                    text: "Entro senza aprire finestre",
                    correct: false,
                    feedback: "❌ PERICOLOSO! Ambiente saturo CO! Aprire finestre SUBITO!",
                    points: 0,
                    nextStep: "step_04"
                }
            ]
        },
        
        // FASE A
        {
            id: "step_04",
            phase: "A - VIE AEREE",
            situation: "Finestre aperte, scaldabagno identificato. Con DPI ti avvicini.",
            vitalSigns: {
                ambiente: "Aerato",
                pericolo: "CO identificato"
            },
            question: "Come valuti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Chiamo paziente, mi presento, qualificomi, tranquillizzo, verifico vie aeree",
                    correct: true,
                    feedback: "✅ Corretto! Paziente RISPONDE alla chiamata ma è CONFUSA, NON riesce a rimanere sveglia. Vie aeree pervie.",
                    points: 20,
                    nextStep: "step_05"
                },
                {
                    id: "b",
                    text: "Solo controllo vie aeree",
                    correct: false,
                    feedback: "⚠️ Prima presentazione completa!",
                    points: 8,
                    nextStep: "step_05"
                },
                {
                    id: "c",
                    text: "La scuoto forte",
                    correct: false,
                    feedback: "❌ Approccio delicato! Chiama prima.",
                    points: 0,
                    nextStep: "step_05"
                },
                {
                    id: "d",
                    text: "Non la disturbo",
                    correct: false,
                    feedback: "❌ Devi valutare!",
                    points: 0,
                    nextStep: "step_05"
                }
            ]
        },
        
        // FASE B
        {
            id: "step_05",
            phase: "B - RESPIRO",
            situation: "🫁 Risponde ma confusa, assopita. Valuti respiro.",
            vitalSigns: {
                coscienza: "Confusa, assopita"
            },
            question: "Cosa rilevi?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Torace normale, respiro superficiale, FR 22, SpO2 94% → O2 alti flussi → SpO2 sale a 100%",
                    correct: true,
                    feedback: "✅ PERFETTO! Tachipnea lieve + ipossia da CO. O2 ad alti flussi FONDAMENTALE per spiazzare CO!",
                    points: 25,
                    nextStep: "step_06"
                },
                {
                    id: "b",
                    text: "Tutto normale",
                    correct: false,
                    feedback: "❌ FR 22 è tachipnea, SpO2 94% al limite!",
                    points: 0,
                    nextStep: "step_06"
                },
                {
                    id: "c",
                    text: "O2 a bassi flussi",
                    correct: false,
                    feedback: "❌ In CO serve O2 ad ALTI FLUSSI!",
                    points: 5,
                    nextStep: "step_06"
                },
                {
                    id: "d",
                    text: "Non serve O2",
                    correct: false,
                    feedback: "❌ O2 è VITALE per eliminare CO!",
                    points: 0,
                    nextStep: "step_06"
                }
            ]
        },
        
        // FASE C
        {
            id: "step_06",
            phase: "C - CIRCOLO",
            situation: "💓 O2 in corso. Valuti circolo.",
            question: "Cosa rilevi?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Polso presente/pieno/ritmico FC 100, cute rosea, PA 100/75",
                    correct: true,
                    feedback: "✅ Corretto! Parametri circolatori stabili.",
                    points: 15,
                    nextStep: "step_07"
                },
                {
                    id: "b",
                    text: "Parametri critici",
                    correct: false,
                    feedback: "❌ Sono normali!",
                    points: 0,
                    nextStep: "step_07"
                },
                {
                    id: "c",
                    text: "Non valuto",
                    correct: false,
                    feedback: "❌ C è obbligatoria!",
                    points: 0,
                    nextStep: "step_07"
                },
                {
                    id: "d",
                    text: "Solo polso",
                    correct: false,
                    feedback: "⚠️ Serve anche cute e PA!",
                    points: 7,
                    nextStep: "step_07"
                }
            ]
        },
        
        // FASE D - AVPU V!
        {
            id: "step_07",
            phase: "D - NEUROLOGICO",
            situation: "🧠 Valuti neurologico.",
            question: "Cosa rilevi?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "AVPU: V (risponde a stimolo VERBALE ma CONFUSA, tendente al sopore). Sensibilità/motilità normali.",
                    correct: true,
                    feedback: "✅ PERFETTO! AVPU: V = risponde a voce ma confusa. Tipico di intossicazione CO moderata!",
                    points: 25,
                    nextStep: "step_08"
                },
                {
                    id: "b",
                    text: "AVPU: A (sveglia)",
                    correct: false,
                    feedback: "❌ Non è completamente sveglia! È V (confusa).",
                    points: 0,
                    nextStep: "step_08"
                },
                {
                    id: "c",
                    text: "AVPU: P",
                    correct: false,
                    feedback: "❌ Risponde a voce = V!",
                    points: 0,
                    nextStep: "step_08"
                },
                {
                    id: "d",
                    text: "Non valuto",
                    correct: false,
                    feedback: "❌ D è fondamentale!",
                    points: 0,
                    nextStep: "step_08"
                }
            ]
        },
        
        // FASE E - SINTOMI CO
        {
            id: "step_08",
            phase: "E - ESAME OBIETTIVO",
            situation: "👁️ Donna 25 anni, occhi chiusi, sdraiata. Osservi e chiedi sintomi.",
            vitalSigns: {
                età: "25 anni",
                aspetto: "Occhi chiusi, sdraiata"
            },
            question: "Cosa riferisce?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "CEFALEA e NAUSEA! Rallentata nelle risposte, confusa, NON racconta l'accaduto",
                    correct: true,
                    feedback: "✅ CLASSICO CO! Cefalea + nausea + confusione = triade intossicazione monossido!",
                    points: 25,
                    nextStep: "step_09"
                },
                {
                    id: "b",
                    text: "Nessun sintomo",
                    correct: false,
                    feedback: "❌ Ha cefalea e nausea!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "c",
                    text: "Solo confusione",
                    correct: false,
                    feedback: "⚠️ Mancano cefalea e nausea!",
                    points: 8,
                    nextStep: "step_09"
                },
                {
                    id: "d",
                    text: "Non chiedo sintomi",
                    correct: false,
                    feedback: "❌ Sintomi sono fondamentali!",
                    points: 0,
                    nextStep: "step_09"
                }
            ]
        },
        
        // AMPIA + PROTEZIONE TERMICA
        {
            id: "step_09",
            phase: "E - AMPIA + PROTEZIONE",
            situation: "📋 Cefalea, nausea, confusione. Raccogli AMPIA.",
            question: "Cosa fai?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "AMPIA completa: nessuna patologia/terapia. COPRO la paziente (protezione termica post-doccia)",
                    correct: true,
                    feedback: "✅ Perfetto! AMPIA negativa. Protezione termica importante (era bagnata dopo doccia)!",
                    points: 20,
                    nextStep: "step_10"
                },
                {
                    id: "b",
                    text: "Solo AMPIA",
                    correct: false,
                    feedback: "⚠️ Manca protezione termica! Era bagnata.",
                    points: 12,
                    nextStep: "step_10"
                },
                {
                    id: "c",
                    text: "Non faccio AMPIA",
                    correct: false,
                    feedback: "❌ AMPIA è obbligatoria!",
                    points: 0,
                    nextStep: "step_10"
                },
                {
                    id: "d",
                    text: "Non copro paziente",
                    correct: false,
                    feedback: "⚠️ Protezione termica necessaria!",
                    points: 8,
                    nextStep: "step_10"
                }
            ]
        },
        
        // COMUNICAZIONE SOREU - VV.FF.!
        {
            id: "step_10",
            phase: "COMUNICAZIONE SOREU - VV.FF.",
            situation: "📞 Devi comunicare URGENTEMENTE questa intossicazione CO.",
            question: "Cosa comunichi?",
            timeLimit: 45,
            choices: [
                {
                    id: "a",
                    text: "INTOSSICAZIONE CO! Donna 25aa AVPU V, cefalea/nausea, FR 22, FC 100, SpO2 100% O2, scaldabagno a gas in bagno, finestre aperte",
                    correct: true,
                    feedback: "✅ PERFETTO! SOREU comunica: VV.FF. ALLERTATI per messa in sicurezza! Fondamentale per evitare altri intossicati!",
                    points: 30,
                    nextStep: "step_11"
                },
                {
                    id: "b",
                    text: "Donna incosciente",
                    correct: false,
                    feedback: "❌ Troppo vago! Devi dire INTOSSICAZIONE CO!",
                    points: 0,
                    nextStep: "step_11"
                },
                {
                    id: "c",
                    text: "Non comunico dinamica",
                    correct: false,
                    feedback: "❌ DINAMICA (scaldabagno) è CRITICA per VV.FF.!",
                    points: 5,
                    nextStep: "step_11"
                },
                {
                    id: "d",
                    text: "Non chiedo VV.FF.",
                    correct: false,
                    feedback: "❌ VV.FF. sono ESSENZIALI per sicurezza!",
                    points: 0,
                    nextStep: "step_11"
                }
            ]
        },
        
        // FINALE
        {
            id: "step_11",
            phase: "RIVALUTAZIONE + TRASPORTO",
            situation: "🚑 VV.FF. in arrivo. Trasporti verso PS.",
            vitalSigns: {
                diagnosi: "Intossicazione CO moderata",
                VV_FF: "Allertati"
            },
            question: "Cosa fai?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Rivaluto ABCDE continuo, mantengo O2 ALTI FLUSSI (fondamentale!), monitoro coscienza, proteggo da freddo, trasporto rapido",
                    correct: true,
                    feedback: "✅ PERFETTO! O2 alti flussi per eliminare CO (emivita 4-6h in aria, 40-80min con O2 100%)! SCENARIO COMPLETATO!",
                    points: 20,
                    nextStep: "end"
                },
                {
                    id: "b",
                    text: "Riduco O2",
                    correct: false,
                    feedback: "❌ O2 ALTI FLUSSI per tutto trasporto!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "c",
                    text: "Non rivaluto",
                    correct: false,
                    feedback: "❌ Rivalutazione continua essenziale!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "d",
                    text: "Aspetto VV.FF. prima trasporto",
                    correct: false,
                    feedback: "⚠️ VV.FF. per ambiente, tu trasporti paziente subito!",
                    points: 8,
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

window.scenario_13_co_ragazza = scenario_13_co_ragazza;
