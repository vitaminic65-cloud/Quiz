// ========================================
// SCENARIO 14: INTOSSICAZIONE DA MONOSSIDO DI CARBONIO 2
// Uomo con bracere - AVPU P - Fedele alla scheda AREU
// ========================================

const scenario_14_co_uomo = {
    id: "scenario_14",
    code: "MEDICO_13",
    title: "Intossicazione CO 2 (bracere)",
    category: "Emergenza Medica",
    difficulty: "Alta",
    estimatedTime: "15-18 minuti",
    
    // Info iniziali dalla centrale
    briefing: {
        centralCall: "Uomo straniero, chiama per malore.",
        msaMsi: false,
        forzeOrdine: false
    },
    
    // Steps dello scenario
    steps: [
        // PRE-ARRIVO
        {
            id: "step_01",
            phase: "PRE-ARRIVO",
            situation: "🚑 Centrale: 'Uomo straniero chiama per malore'.",
            question: "Cosa fai?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Assegno incarichi, ogni componente controlla materiale assegnato",
                    correct: true,
                    feedback: "✅ Corretto! Team preparato.",
                    points: 10,
                    nextStep: "step_02"
                },
                {
                    id: "b",
                    text: "Solo incarichi",
                    correct: false,
                    feedback: "⚠️ Serve anche controllo materiale!",
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
                    text: "Vado subito",
                    correct: false,
                    feedback: "❌ Prima preparazione!",
                    points: 0,
                    nextStep: "step_02"
                }
            ]
        },
        
        // VALUTAZIONE SCENA - BRACERE!
        {
            id: "step_02",
            phase: "VALUTAZIONE SCENA - PERICOLO CRITICO",
            situation: "📍 Casa SENZA RISCALDAMENTO. Vedi: BRACERE in camera da letto! Uomo sdraiato a letto, non si muove. Scala stretta/ripida.",
            vitalSigns: {
                ambiente: "Senza riscaldamento",
                PERICOLO: "BRACERE in camera!",
                paziente: "A letto, non si muove"
            },
            question: "Cosa fai per valutazione scena?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Chiedo descrizione, colpo d'occhio, verifico ALTRI COINVOLTI (l'amico), controllo PERICOLI (bracere!), ostacoli (scala)",
                    correct: true,
                    feedback: "✅ PERFETTO! BRACERE NELLO STESSO LOCALE = PERICOLO CO MORTALE!",
                    points: 25,
                    nextStep: "step_03"
                },
                {
                    id: "b",
                    text: "Solo descrizione base",
                    correct: false,
                    feedback: "❌ Mancano: altri coinvolti, PERICOLO bracere!",
                    points: 5,
                    nextStep: "step_03"
                },
                {
                    id: "c",
                    text: "Entro subito",
                    correct: false,
                    feedback: "❌ PERICOLO CO! Valuta prima!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "d",
                    text: "Non verifico pericoli",
                    correct: false,
                    feedback: "❌ BRACERE = CO! Fondamentale!",
                    points: 0,
                    nextStep: "step_03"
                }
            ]
        },
        
        // DINAMICA + RILEVATORE!
        {
            id: "step_03",
            phase: "VALUTAZIONE SCENA - SICUREZZA",
            situation: "💬 Amico riferisce: 'Sono rientrato e ho trovato il mio amico NON COSCIENTE!' Bracere ORMAI SPENTO ma ambiente saturo CO.",
            vitalSigns: {
                dinamica: "Trovato incosciente",
                bracere: "Spento ma CO presente"
            },
            question: "Cosa fai per SICUREZZA?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Faccio APRIRE FINESTRE! Verifico se ci sono ALTRE PERSONE. Con DPI entro: RILEVATORE MONOSSIDO SUONA!",
                    correct: true,
                    feedback: "✅ CRITICO! Rilevatore conferma CO! Finestre aperte = salvavita! Verifico altri coinvolti.",
                    points: 30,
                    nextStep: "step_04"
                },
                {
                    id: "b",
                    text: "Entro senza aprire finestre",
                    correct: false,
                    feedback: "❌ PERICOLOSO! CO può intossicare soccorritori!",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "c",
                    text: "Non ho rilevatore",
                    correct: false,
                    feedback: "⚠️ Se presente SUONA! Conferma CO.",
                    points: 10,
                    nextStep: "step_04"
                },
                {
                    id: "d",
                    text: "Solo apro finestre",
                    correct: false,
                    feedback: "⚠️ Manca verifica altri coinvolti!",
                    points: 15,
                    nextStep: "step_04"
                }
            ]
        },
        
        // FASE A - INCOSCIENTE
        {
            id: "step_04",
            phase: "A - VIE AEREE",
            situation: "Finestre aperte, bracere identificato. Con DPI ti avvicini.",
            question: "Come valuti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Chiamo, mi presento, qualificomi, tranquillizzo, verifico vie aeree",
                    correct: true,
                    feedback: "✅ Paziente NON COSCIENTE! Vie aeree pervie. Tenti cannula OF → NON TOLLERA (riflesso presente).",
                    points: 20,
                    nextStep: "step_05"
                },
                {
                    id: "b",
                    text: "Solo vie aeree",
                    correct: false,
                    feedback: "⚠️ Prima presentazione!",
                    points: 8,
                    nextStep: "step_05"
                },
                {
                    id: "c",
                    text: "Forzo cannula",
                    correct: false,
                    feedback: "❌ Non tollera = NON forzare!",
                    points: 0,
                    nextStep: "step_05"
                },
                {
                    id: "d",
                    text: "Non tento cannula",
                    correct: false,
                    feedback: "⚠️ Va sempre TENTATA con incosciente.",
                    points: 5,
                    nextStep: "step_05"
                }
            ]
        },
        
        // FASE B
        {
            id: "step_05",
            phase: "B - RESPIRO",
            situation: "🫁 Incosciente, vie aeree pervie. Valuti respiro.",
            question: "Cosa rilevi?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Torace normale, respiro superficiale, FR 22, SpO2 94% → O2 alti flussi → saturazione sale a 100%",
                    correct: true,
                    feedback: "✅ PERFETTO! Tachipnea + ipossia da CO. O2 ALTI FLUSSI fondamentale!",
                    points: 25,
                    nextStep: "step_06"
                },
                {
                    id: "b",
                    text: "Non respira",
                    correct: false,
                    feedback: "❌ Respira! FR 22.",
                    points: 0,
                    nextStep: "step_06"
                },
                {
                    id: "c",
                    text: "O2 a bassi flussi",
                    correct: false,
                    feedback: "❌ In CO serve ALTI FLUSSI!",
                    points: 5,
                    nextStep: "step_06"
                },
                {
                    id: "d",
                    text: "Non serve O2",
                    correct: false,
                    feedback: "❌ O2 è VITALE!",
                    points: 0,
                    nextStep: "step_06"
                }
            ]
        },
        
        // FASE C - TACHICARDIA
        {
            id: "step_06",
            phase: "C - CIRCOLO",
            situation: "💓 O2 in corso. Valuti circolo.",
            question: "Cosa rilevi?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Polso presente/pieno/ritmico ma FC 140 (tachicardia!), cute normale, PA 90/65 (limite basso)",
                    correct: true,
                    feedback: "✅ CRITICO! Tachicardia compensatoria + PA al limite = CO severa!",
                    points: 25,
                    nextStep: "step_07"
                },
                {
                    id: "b",
                    text: "Parametri normali",
                    correct: false,
                    feedback: "❌ FC 140 è tachicardia! PA 90/65 è bassa!",
                    points: 0,
                    nextStep: "step_07"
                },
                {
                    id: "c",
                    text: "Polso assente",
                    correct: false,
                    feedback: "❌ Polso presente FC 140!",
                    points: 0,
                    nextStep: "step_07"
                },
                {
                    id: "d",
                    text: "Non valuto",
                    correct: false,
                    feedback: "❌ C è obbligatoria!",
                    points: 0,
                    nextStep: "step_07"
                }
            ]
        },
        
        // FASE D - AVPU P!
        {
            id: "step_07",
            phase: "D - NEUROLOGICO",
            situation: "🧠 FC 140, PA 90/65. Valuti neurologico.",
            question: "Cosa rilevi?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "AVPU: P! Paziente emette SUONI INCOMPRENSIBILI allo stimolo doloroso. Muove i 4 arti allo stimolo.",
                    correct: true,
                    feedback: "✅ GRAVISSIMO! AVPU: P = intossicazione CO SEVERA! GCS molto basso!",
                    points: 30,
                    nextStep: "step_08"
                },
                {
                    id: "b",
                    text: "AVPU: A",
                    correct: false,
                    feedback: "❌ È incosciente! AVPU: P!",
                    points: 0,
                    nextStep: "step_08"
                },
                {
                    id: "c",
                    text: "AVPU: V",
                    correct: false,
                    feedback: "❌ Non risponde a voce! Solo a dolore = P!",
                    points: 0,
                    nextStep: "step_08"
                },
                {
                    id: "d",
                    text: "AVPU: U",
                    correct: false,
                    feedback: "❌ Risponde a dolore con suoni = P!",
                    points: 0,
                    nextStep: "step_08"
                }
            ]
        },
        
        // AMPIA
        {
            id: "step_08",
            phase: "E - ANAMNESI",
            situation: "📋 AVPU P, FC 140. Chiedi all'amico.",
            question: "Cosa riferisce?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Uomo circa 30 anni, nessuna patologia/terapia, nessun altro coinvolto. Trovato incosciente a letto.",
                    correct: true,
                    feedback: "✅ Corretto! AMPIA negativa.",
                    points: 15,
                    nextStep: "step_09"
                },
                {
                    id: "b",
                    text: "Non chiedo",
                    correct: false,
                    feedback: "❌ AMPIA è obbligatoria!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "c",
                    text: "Solo età",
                    correct: false,
                    feedback: "⚠️ Serve AMPIA completa!",
                    points: 5,
                    nextStep: "step_09"
                },
                {
                    id: "d",
                    text: "Ha patologie",
                    correct: false,
                    feedback: "❌ Nessuna patologia!",
                    points: 0,
                    nextStep: "step_09"
                }
            ]
        },
        
        // COMUNICAZIONE - VV.FF. + MSA!
        {
            id: "step_09",
            phase: "COMUNICAZIONE SOREU - VV.FF. + MSA",
            situation: "📞 Devi comunicare URGENTEMENTE.",
            question: "Cosa comunichi?",
            timeLimit: 45,
            choices: [
                {
                    id: "a",
                    text: "INTOSSICAZIONE CO SEVERA! Uomo 30aa AVPU P, FC 140, PA 90/65, SpO2 100% O2, bracere in camera, rilevatore suonato, finestre aperte",
                    correct: true,
                    feedback: "✅ PERFETTO! SOREU: VV.FF. ALLERTATI + INVIO MSA! Paziente gravissimo!",
                    points: 30,
                    nextStep: "step_10"
                },
                {
                    id: "b",
                    text: "Uomo incosciente",
                    correct: false,
                    feedback: "❌ Troppo vago! INTOSSICAZIONE CO!",
                    points: 0,
                    nextStep: "step_10"
                },
                {
                    id: "c",
                    text: "Non comunico bracere",
                    correct: false,
                    feedback: "❌ FONTE CO è critica per VV.FF.!",
                    points: 5,
                    nextStep: "step_10"
                },
                {
                    id: "d",
                    text: "Non chiedo MSA",
                    correct: false,
                    feedback: "❌ AVPU P richiede MSA!",
                    points: 0,
                    nextStep: "step_10"
                }
            ]
        },
        
        // FINALE
        {
            id: "step_10",
            phase: "RIVALUTAZIONE + ATTESA MSA",
            situation: "⏱️ VV.FF. + MSA in arrivo.",
            vitalSigns: {
                diagnosi: "CO severa AVPU P"
            },
            question: "Cosa fai?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Rivaluto ABCDE continuo, mantengo O2 ALTI FLUSSI, monitoro coscienza (può peggiorare!), preparo per trasporto urgente",
                    correct: true,
                    feedback: "✅ PERFETTO! AVPU P può degenerare a U! Monitoraggio stretto. Camera iperbarica possibile. SCENARIO COMPLETATO!",
                    points: 20,
                    nextStep: "end"
                },
                {
                    id: "b",
                    text: "Riduco O2",
                    correct: false,
                    feedback: "❌ O2 ALTI FLUSSI continui!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "c",
                    text: "Non rivaluto",
                    correct: false,
                    feedback: "❌ Può peggiorare rapidamente!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "d",
                    text: "Aspetto VV.FF.",
                    correct: false,
                    feedback: "⚠️ Paziente va trasportato urgente con MSA!",
                    points: 5,
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

window.scenario_14_co_uomo = scenario_14_co_uomo;
