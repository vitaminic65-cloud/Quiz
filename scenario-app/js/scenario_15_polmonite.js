// ========================================
// SCENARIO 15: PATOLOGIA RESPIRATORIA - POLMONITE
// Uomo con tosse e dispnea - Fedele alla scheda AREU
// ========================================

const scenario_15_polmonite = {
    id: "scenario_15",
    code: "MEDICO_14",
    title: "Polmonite (patologia respiratoria)",
    category: "Emergenza Respiratoria",
    difficulty: "Media",
    estimatedTime: "12-15 minuti",
    
    // Info iniziali dalla centrale
    briefing: {
        centralCall: "Uomo 70 anni circa con difficoltà respiratoria.",
        msaMsi: false,
        forzeOrdine: false
    },
    
    // Steps dello scenario
    steps: [
        // PRE-ARRIVO
        {
            id: "step_01",
            phase: "PRE-ARRIVO",
            situation: "🚑 Centrale: 'Uomo 70 anni con difficoltà respiratoria'.",
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
        
        // SCENA - TOSSE
        {
            id: "step_02",
            phase: "VALUTAZIONE SCENA",
            situation: "📍 Vedi: uomo seduto sulla sedia, CONTINUA A TOSSIRE. Nessun pericolo né ostacolo.",
            vitalSigns: {
                posizione: "Seduto",
                sintomo: "TOSSE CONTINUA"
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
                    text: "Aspetto che smetta tossire",
                    correct: false,
                    feedback: "⚠️ Valuta comunque!",
                    points: 3,
                    nextStep: "step_03"
                },
                {
                    id: "c",
                    text: "Non mi avvicino",
                    correct: false,
                    feedback: "❌ Devi valutare!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "d",
                    text: "Chiamo MSA prima",
                    correct: false,
                    feedback: "❌ Prima valuti!",
                    points: 0,
                    nextStep: "step_03"
                }
            ]
        },
        
        // FASE A
        {
            id: "step_03",
            phase: "A - VIE AEREE",
            situation: "Ti avvicini. Paziente continua a tossire.",
            question: "Come valuti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Mi presento, qualificomi, tranquillizzo, verifico vie aeree",
                    correct: true,
                    feedback: "✅ Corretto! Cosciente, parla con DIFFICOLTÀ (tosse). Vie aeree pervie.",
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
                    text: "Gli do acqua",
                    correct: false,
                    feedback: "⚠️ Prima valutazione completa!",
                    points: 2,
                    nextStep: "step_04"
                }
            ]
        },
        
        // FASE B - CRITICA!
        {
            id: "step_04",
            phase: "B - RESPIRO",
            situation: "🫁 Vie aeree pervie. Valuti respiro. FASE CRITICA.",
            question: "Cosa rilevi?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Meccanica bilaterale, TACHIPNOICO, TOSSE CONTINUA con CATARRO, FR 26, SpO2 90% → O2 → sale a 96%",
                    correct: true,
                    feedback: "✅ PERFETTO! Tachipnea + ipossia + tosse produttiva = quadro polmonite/bronchite!",
                    points: 25,
                    nextStep: "step_05"
                },
                {
                    id: "b",
                    text: "Respiro normale",
                    correct: false,
                    feedback: "❌ FR 26 è tachipnea! SpO2 90% è ipossia!",
                    points: 0,
                    nextStep: "step_05"
                },
                {
                    id: "c",
                    text: "Non serve O2",
                    correct: false,
                    feedback: "❌ SpO2 90% richiede O2!",
                    points: 0,
                    nextStep: "step_05"
                },
                {
                    id: "d",
                    text: "Solo tosse secca",
                    correct: false,
                    feedback: "❌ Tosse con CATARRO (produttiva)!",
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
                    text: "Polso presente/tachicardico/regolare FC 100, cute calda/sudata, PA 160/90",
                    correct: true,
                    feedback: "✅ Corretto! Tachicardia compensatoria + ipertensione da stress respiratorio.",
                    points: 15,
                    nextStep: "step_06"
                },
                {
                    id: "b",
                    text: "Parametri normali",
                    correct: false,
                    feedback: "❌ FC 100 è tachicardico, PA 160/90 alta!",
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
        
        // FASE D - FAME D'ARIA
        {
            id: "step_06",
            phase: "D - NEUROLOGICO",
            situation: "🧠 Valuti neurologico.",
            question: "Cosa rilevi?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Cosciente AVPU: A, riferisce sensazione di FAME D'ARIA, nessun deficit neurologico",
                    correct: true,
                    feedback: "✅ Perfetto! Fame d'aria = dispnea soggettiva. Segno importante!",
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
            situation: "💬 Chiedi cosa è successo.",
            question: "Cosa riferisce?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Da 3 GIORNI FEBBRE e TOSSE (soprattutto da coricato). Da 1 ORA attacco tosse continua con aumento difficoltà respiratoria",
                    correct: true,
                    feedback: "✅ PERFETTO! Febbre + tosse 3 gg + peggioramento acuto = polmonite!",
                    points: 25,
                    nextStep: "step_08"
                },
                {
                    id: "b",
                    text: "Sintomi da poche ore",
                    correct: false,
                    feedback: "❌ Da 3 GIORNI!",
                    points: 0,
                    nextStep: "step_08"
                },
                {
                    id: "c",
                    text: "Solo tosse",
                    correct: false,
                    feedback: "❌ Anche FEBBRE da 3 giorni!",
                    points: 5,
                    nextStep: "step_08"
                },
                {
                    id: "d",
                    text: "Non chiedo storia",
                    correct: false,
                    feedback: "❌ Storia è fondamentale!",
                    points: 0,
                    nextStep: "step_08"
                }
            ]
        },
        
        // AMPIA - NON HA VISTO MEDICO
        {
            id: "step_08",
            phase: "E - AMPIA",
            situation: "📋 Febbre + tosse da 3 giorni. Raccogli AMPIA.",
            question: "Cosa scopri?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Nessuna patologia/terapia. Utilizzo ANTIPIRETICI da alcuni giorni. NON È ANCORA STATO dal medico di base!",
                    correct: true,
                    feedback: "✅ IMPORTANTE! Febbre 3 giorni + non visto medico = ritardo diagnosi polmonite!",
                    points: 20,
                    nextStep: "step_09"
                },
                {
                    id: "b",
                    text: "Ha visto medico",
                    correct: false,
                    feedback: "❌ NON è ancora stato dal medico!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "c",
                    text: "Non usa antipiretici",
                    correct: false,
                    feedback: "❌ Li usa da alcuni giorni!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "d",
                    text: "Non chiedo AMPIA",
                    correct: false,
                    feedback: "❌ AMPIA è obbligatoria!",
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
                    text: "Uomo 70aa, tosse produttiva/febbre da 3gg, FR 26, SpO2 96% O2, FC 100, PA 160/90, fame d'aria, non visto medico → sospetta polmonite",
                    correct: true,
                    feedback: "✅ PERFETTO! Comunicazione completa. SOREU autorizza trasporto PS.",
                    points: 20,
                    nextStep: "step_10"
                },
                {
                    id: "b",
                    text: "Uomo con tosse",
                    correct: false,
                    feedback: "❌ Troppo vago!",
                    points: 0,
                    nextStep: "step_10"
                },
                {
                    id: "c",
                    text: "Non comunico febbre",
                    correct: false,
                    feedback: "⚠️ Febbre è info critica!",
                    points: 8,
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
        
        // FINALE
        {
            id: "step_10",
            phase: "RIVALUTAZIONE + TRASPORTO",
            situation: "🚑 Trasporti verso PS.",
            vitalSigns: {
                diagnosi: "Sospetta polmonite"
            },
            question: "Cosa fai?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Rivaluto ABCDE continuo, monitoro SpO2/FR, mantengo O2, posizione seduta comoda, relazione adeguata",
                    correct: true,
                    feedback: "✅ PERFETTO! Gestione ottimale patologia respiratoria. PS farà RX torace. SCENARIO COMPLETATO!",
                    points: 15,
                    nextStep: "end"
                },
                {
                    id: "b",
                    text: "Tolgo O2",
                    correct: false,
                    feedback: "❌ Mantieni O2!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "c",
                    text: "Lo faccio sdraiare",
                    correct: false,
                    feedback: "⚠️ Posizione seduta è meglio per respirare!",
                    points: 5,
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
        maxScore: 200,
        thresholds: {
            excellent: 180,
            good: 155,
            sufficient: 130,
            insufficient: 0
        }
    }
};

window.scenario_15_polmonite = scenario_15_polmonite;
