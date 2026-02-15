// ========================================
// SCENARIO 09: DOLORE TORACICO (IMA 2)
// IMA con bradicardia - Fedele alla scheda AREU
// ========================================

const scenario_09_ima2 = {
    id: "scenario_09",
    code: "MEDICO_07",
    title: "DOLORE TORACICO (IMA 2)",
    category: "Emergenza Cardiologica",
    difficulty: "Alta",
    estimatedTime: "15-20 minuti",
    
    // Info iniziali dalla centrale
    briefing: {
        centralCall: "Uomo 70 anni circa con dolore toracico.",
        msaMsi: false,
        forzeOrdine: false
    },
    
    // Steps dello scenario - ABCDE fedele
    steps: [
        // PRE-ARRIVO
        {
            id: "step_01",
            phase: "PRE-ARRIVO",
            situation: "🚑 Centrale: 'Uomo 70 anni con dolore toracico'.",
            question: "Cosa fai?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Assegno incarichi, preparo materiale cardiologico completo",
                    correct: true,
                    feedback: "✅ Perfetto! 70 anni + dolore toracico = alto rischio IMA.",
                    points: 15,
                    nextStep: "step_02"
                },
                {
                    id: "b",
                    text: "Solo incarichi",
                    correct: false,
                    feedback: "⚠️ Serve preparazione CARDIOLOGICA!",
                    points: 5,
                    nextStep: "step_02"
                },
                {
                    id: "c",
                    text: "Preparo solo O2",
                    correct: false,
                    feedback: "⚠️ Serve materiale completo!",
                    points: 7,
                    nextStep: "step_02"
                },
                {
                    id: "d",
                    text: "Non faccio nulla",
                    correct: false,
                    feedback: "❌ Preparazione sempre necessaria!",
                    points: 0,
                    nextStep: "step_02"
                }
            ]
        },
        
        // SCENA
        {
            id: "step_02",
            phase: "VALUTAZIONE DELLA SCENA",
            situation: "📍 Arrivi. Vedi: uomo anziano seduto in giardino, cosciente, sofferente. Nessun ostacolo.",
            vitalSigns: {
                posizione: "Seduto in giardino",
                stato: "Sofferente",
                coscienza: "Cosciente"
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
                    text: "Chiamo MSA prima",
                    correct: false,
                    feedback: "❌ Prima valuti!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "c",
                    text: "Collego DAE subito",
                    correct: false,
                    feedback: "❌ Prima ABCDE!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "d",
                    text: "Lo faccio entrare in casa",
                    correct: false,
                    feedback: "❌ NO sforzi! Valuta dove si trova.",
                    points: 0,
                    nextStep: "step_03"
                }
            ]
        },
        
        // FASE A-B
        {
            id: "step_03",
            phase: "A-B - VIE AEREE E RESPIRO",
            situation: "Ti presenti. Paziente cosciente. Vie aeree pervie. Respiro affannoso.",
            vitalSigns: {
                A: "Pervie",
                B: "Affannoso"
            },
            question: "Valuti respiro completo. Cosa rilevi?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "FR 25, SpO2 90% → somministro O2 ad alti flussi → SpO2 sale a 94%",
                    correct: true,
                    feedback: "✅ Perfetto! Tachipnea + ipossia = O2 immediato.",
                    points: 20,
                    nextStep: "step_04"
                },
                {
                    id: "b",
                    text: "Tutto normale",
                    correct: false,
                    feedback: "❌ FR 25 e SpO2 90% sono critici!",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "c",
                    text: "Non serve O2",
                    correct: false,
                    feedback: "❌ SpO2 90% è ipossia!",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "d",
                    text: "O2 a bassi flussi",
                    correct: false,
                    feedback: "⚠️ Con 90% serve alti flussi!",
                    points: 8,
                    nextStep: "step_04"
                }
            ]
        },
        
        // FASE C - BRADICARDIA!
        {
            id: "step_04",
            phase: "C - CIRCOLO",
            situation: "💓 Valuti circolo...",
            vitalSigns: {
                respiro: "FR 25, SpO2 94% con O2"
            },
            question: "Cosa rilevi di ANOMALO?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Polso normoteso/ritmico ma FC 50 bpm (BRADICARDIA!), cute pallida/fredda/sudata, PA 180/100 (ipertensione)",
                    correct: true,
                    feedback: "✅ CRITICO! FC 50 = BRADICARDIA in IMA! + pallore/sudore + PA alta paradossa. Possibile IMA inferiore.",
                    points: 25,
                    nextStep: "step_05"
                },
                {
                    id: "b",
                    text: "Tutto normale",
                    correct: false,
                    feedback: "❌ FC 50 è bradicardia! Cute pallida/fredda/sudata è critico!",
                    points: 0,
                    nextStep: "step_05"
                },
                {
                    id: "c",
                    text: "Solo PA alta",
                    correct: false,
                    feedback: "❌ Manca BRADICARDIA FC 50 + cute critica!",
                    points: 5,
                    nextStep: "step_05"
                },
                {
                    id: "d",
                    text: "Tachicardia",
                    correct: false,
                    feedback: "❌ È BRADICARDIA (FC 50)!",
                    points: 0,
                    nextStep: "step_05"
                }
            ]
        },
        
        // FASE D
        {
            id: "step_05",
            phase: "D - NEUROLOGICO",
            situation: "🧠 Bradicardia FC 50, PA 180/100. Valuti neurologico.",
            vitalSigns: {
                bradicardia: "FC 50",
                PA: "180/100"
            },
            question: "Cosa valuti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "AVPU: A (cosciente). Nessun deficit sensibilità/motilità.",
                    correct: true,
                    feedback: "✅ Perfetto! Neurologico normale nonostante bradicardia.",
                    points: 15,
                    nextStep: "step_06"
                },
                {
                    id: "b",
                    text: "Non valuto",
                    correct: false,
                    feedback: "❌ Sempre obbligatorio!",
                    points: 0,
                    nextStep: "step_06"
                },
                {
                    id: "c",
                    text: "Solo coscienza",
                    correct: false,
                    feedback: "⚠️ Manca sensibilità/motilità!",
                    points: 7,
                    nextStep: "step_06"
                },
                {
                    id: "d",
                    text: "Focus sul cuore",
                    correct: false,
                    feedback: "❌ D è obbligatoria!",
                    points: 0,
                    nextStep: "step_06"
                }
            ]
        },
        
        // FASE E - DOLORE
        {
            id: "step_06",
            phase: "E - DOLORE",
            situation: "💬 Chiedi del dolore.",
            question: "Cosa descrive?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Da 1 ORA dolore toracico IRRADIATO a SPALLE e POSTERIORMENTE, NON varia con respiro. VAS 8/10. Dopo sforzo fisico nell'orto.",
                    correct: true,
                    feedback: "✅ CLASSICO IMA! Irradiazione posteriore tipica di IMA inferiore (spiega bradicardia!). Post-sforzo.",
                    points: 25,
                    nextStep: "step_07"
                },
                {
                    id: "b",
                    text: "Dolore pleuritico",
                    correct: false,
                    feedback: "❌ IMA NON varia con respiro!",
                    points: 0,
                    nextStep: "step_07"
                },
                {
                    id: "c",
                    text: "Solo dice che fa male",
                    correct: false,
                    feedback: "❌ Serve descrizione dettagliata!",
                    points: 3,
                    nextStep: "step_07"
                },
                {
                    id: "d",
                    text: "Non chiedo",
                    correct: false,
                    feedback: "❌ È fondamentale!",
                    points: 0,
                    nextStep: "step_07"
                }
            ]
        },
        
        // AMPIA - PREGRESSO IMA!
        {
            id: "step_07",
            phase: "E - AMPIA CRITICA",
            situation: "📋 Dolore VAS 8/10, post-sforzo, da 1 ora. Raccogli AMPIA.",
            vitalSigns: {
                dolore: "Tipico IMA inferiore"
            },
            question: "Cosa scopri di GRAVISSIMO nell'anamnesi?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "CARDIOPATICO, PREGRESSO IMA 3 ANNI FA! In terapia betabloccanti/antipertensivi/cardioaspirina. Ha assunto 1 cp CARVASIN senza beneficio.",
                    correct: true,
                    feedback: "✅ CRITICO! Secondo IMA in cardiopatico! Ha già provato nitroderivato (Carvasin) senza risultato = IMA severo.",
                    points: 25,
                    nextStep: "step_08"
                },
                {
                    id: "b",
                    text: "Nessuna patologia",
                    correct: false,
                    feedback: "❌ È cardiopatico con IMA pregresso!",
                    points: 0,
                    nextStep: "step_08"
                },
                {
                    id: "c",
                    text: "Solo iperteso",
                    correct: false,
                    feedback: "❌ Manca PREGRESSO IMA + terapia!",
                    points: 5,
                    nextStep: "step_08"
                },
                {
                    id: "d",
                    text: "Non chiedo AMPIA",
                    correct: false,
                    feedback: "❌ È fondamentale!",
                    points: 0,
                    nextStep: "step_08"
                }
            ]
        },
        
        // COMUNICAZIONE SOREU
        {
            id: "step_08",
            phase: "COMUNICAZIONE SOREU",
            situation: "📞 Devi comunicare questa emergenza.",
            question: "Cosa comunichi?",
            timeLimit: 45,
            choices: [
                {
                    id: "a",
                    text: "IMA con BRADICARDIA: uomo 70aa, dolore irradiato spalle/dorso VAS 8, FC 50(!), PA 180/100, SpO2 94% O2, PREGRESSO IMA, post-sforzo, Carvasin inefficace",
                    correct: true,
                    feedback: "✅ PERFETTO! SOREU allerta MSI URGENTE. Bradicardia + IMA pregresso = altissimo rischio!",
                    points: 25,
                    nextStep: "step_09"
                },
                {
                    id: "b",
                    text: "Anziano con dolore",
                    correct: false,
                    feedback: "❌ Non rende urgenza!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "c",
                    text: "Solo bradicardia",
                    correct: false,
                    feedback: "❌ Mancano dolore, pregresso IMA!",
                    points: 3,
                    nextStep: "step_09"
                },
                {
                    id: "d",
                    text: "Chiedo MSA senza dettagli",
                    correct: false,
                    feedback: "❌ Servono TUTTI i dati!",
                    points: 5,
                    nextStep: "step_09"
                }
            ]
        },
        
        // FINALE
        {
            id: "step_09",
            phase: "RIVALUTAZIONE",
            situation: "⏱️ MSI in arrivo. IMA con bradicardia in cardiopatico.",
            vitalSigns: {
                diagnosi: "Secondo IMA + bradicardia"
            },
            question: "Cosa fai?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Rivaluto ABCDE continuo, monitoro FC/PA/SpO2 (ATTENZIONE bradicardia!), O2, NO sforzi, preparo DAE, MSI farà ECG e terapia",
                    correct: true,
                    feedback: "✅ PERFETTO! Bradicardia può precedere arresto! Monitoraggio stretto. SCENARIO COMPLETATO!",
                    points: 20,
                    nextStep: "end"
                },
                {
                    id: "b",
                    text: "Aspetto senza fare nulla",
                    correct: false,
                    feedback: "❌ Bradicardia può degenerare!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "c",
                    text: "Lo faccio camminare",
                    correct: false,
                    feedback: "❌ MAI in IMA!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "d",
                    text: "Parto subito",
                    correct: false,
                    feedback: "⚠️ Meglio attendere MSI!",
                    points: 5,
                    nextStep: "end"
                }
            ]
        }
    ],
    
    // Scoring
    scoring: {
        maxScore: 230,
        thresholds: {
            excellent: 210,
            good: 185,
            sufficient: 160,
            insufficient: 0
        }
    }
};

window.scenario_09_ima2 = scenario_09_ima2;
