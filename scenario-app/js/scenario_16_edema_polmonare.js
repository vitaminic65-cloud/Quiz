// ========================================
// SCENARIO 16: EDEMA POLMONARE
// Scompenso cardiaco acuto - Fedele alla scheda AREU
// ========================================

const scenario_16_edema_polmonare = {
    id: "scenario_16",
    code: "MEDICO_15",
    title: "Edema Polmonare (scompenso)",
    category: "Emergenza Respiratoria",
    difficulty: "Alta",
    estimatedTime: "15-18 minuti",
    
    // Info iniziali dalla centrale
    briefing: {
        centralCall: "Uomo 80 anni con importante difficoltà respiratoria.",
        msaMsi: false,
        forzeOrdine: false
    },
    
    // Steps dello scenario
    steps: [
        // PRE-ARRIVO
        {
            id: "step_01",
            phase: "PRE-ARRIVO",
            situation: "🚑 Centrale: 'Uomo 80 anni con IMPORTANTE difficoltà respiratoria'.",
            question: "Cosa fai?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Assegno incarichi, preparo materiale per emergenza respiratoria",
                    correct: true,
                    feedback: "✅ Corretto! 'Importante' = grave.",
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
        
        // SCENA - FAME D'ARIA
        {
            id: "step_02",
            phase: "VALUTAZIONE SCENA",
            situation: "📍 Vedi: uomo anziano SEDUTO sulla sedia con evidente 'FAME D'ARIA'. Nessun pericolo/ostacolo.",
            vitalSigns: {
                posizione: "Seduto (ortopnea)",
                sintomo: "FAME D'ARIA"
            },
            question: "Dopo scena e DPI?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Mi avvicino e inizio ABCDE",
                    correct: true,
                    feedback: "✅ Corretto! Fame d'aria = dispnea severa.",
                    points: 10,
                    nextStep: "step_03"
                },
                {
                    id: "b",
                    text: "Aspetto che stia meglio",
                    correct: false,
                    feedback: "❌ Valuta subito!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "c",
                    text: "Lo faccio sdraiare",
                    correct: false,
                    feedback: "❌ Posizione seduta è necessaria per respirare!",
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
        
        // FASE A - NON FINISCE FRASI
        {
            id: "step_03",
            phase: "A - VIE AEREE",
            situation: "Ti avvicini.",
            question: "Come valuti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Mi presento, qualificomi, tranquillizzo, verifico vie aeree",
                    correct: true,
                    feedback: "✅ Corretto! Paziente cosciente, parla ma NON è in grado di FINIRE LE FRASI (dispnea severa!). Vie aeree pervie.",
                    points: 20,
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
                    text: "Solo tranquillizzo",
                    correct: false,
                    feedback: "⚠️ Serve valutazione completa!",
                    points: 3,
                    nextStep: "step_04"
                }
            ]
        },
        
        // FASE B - CRITICISSIMA!
        {
            id: "step_04",
            phase: "B - RESPIRO - CRITICO",
            situation: "🫁 Non finisce frasi. Valuti respiro. FASE CRITICA.",
            question: "Cosa rilevi di GRAVISSIMO?",
            timeLimit: 50,
            choices: [
                {
                    id: "a",
                    text: "Meccanica bilaterale con USO MUSCOLATURA ACCESSORIA! RANTOLI (liquido!), FR 34 (tachipnea severa!), SpO2 82% (ipossia grave!) → O2 alti flussi → 90%",
                    correct: true,
                    feedback: "✅ CRITICO! FR 34 + SpO2 82% = insufficienza respiratoria severa! Rantoli = liquido polmoni (edema)! Muscolatura accessoria = sforzo massimo!",
                    points: 30,
                    nextStep: "step_05"
                },
                {
                    id: "b",
                    text: "Respiro normale",
                    correct: false,
                    feedback: "❌ FR 34 e SpO2 82% sono GRAVISSIMI!",
                    points: 0,
                    nextStep: "step_05"
                },
                {
                    id: "c",
                    text: "Solo tachipnea lieve",
                    correct: false,
                    feedback: "❌ FR 34 è SEVERA! + SpO2 82% + rantoli + muscolatura accessoria!",
                    points: 0,
                    nextStep: "step_05"
                },
                {
                    id: "d",
                    text: "Non serve O2",
                    correct: false,
                    feedback: "❌ SpO2 82% è EMERGENZA! O2 vitale!",
                    points: 0,
                    nextStep: "step_05"
                }
            ]
        },
        
        // FASE C - ARITMIA + CIANOSI!
        {
            id: "step_05",
            phase: "C - CIRCOLO - CRITICO",
            situation: "💓 O2 in corso. Valuti circolo.",
            question: "Cosa rilevi di GRAVISSIMO?",
            timeLimit: 50,
            choices: [
                {
                    id: "a",
                    text: "Polso presente/tachicardico ma NON REGOLARE (aritmia!), FC 130, cute FREDDA/SUDATA + ESTREMITÀ CIANOTICHE!, PA 200/100 (ipertensione!)",
                    correct: true,
                    feedback: "✅ CRITICO! Aritmia + tachicardia + PA altissima = scompenso! Cianosi estremità = ipossia tissutale grave!",
                    points: 30,
                    nextStep: "step_06"
                },
                {
                    id: "b",
                    text: "Parametri normali",
                    correct: false,
                    feedback: "❌ Tutti parametri CRITICI!",
                    points: 0,
                    nextStep: "step_06"
                },
                {
                    id: "c",
                    text: "Solo tachicardia",
                    correct: false,
                    feedback: "❌ Mancano: aritmia, PA 200/100, cianosi!",
                    points: 5,
                    nextStep: "step_06"
                },
                {
                    id: "d",
                    text: "Polso regolare",
                    correct: false,
                    feedback: "❌ Polso NON regolare (aritmia)!",
                    points: 0,
                    nextStep: "step_06"
                }
            ]
        },
        
        // FASE D
        {
            id: "step_06",
            phase: "D - NEUROLOGICO",
            situation: "🧠 Aritmia, PA 200/100, cianosi. Valuti neurologico.",
            question: "Cosa rilevi?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Cosciente AVPU: A, risponde con difficoltà (dispnea), orientato, nessun deficit",
                    correct: true,
                    feedback: "✅ Corretto! Coscienza conservata nonostante grave ipossia.",
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
        
        // FASE E - EDEMI!
        {
            id: "step_07",
            phase: "E - ESAME OBIETTIVO",
            situation: "👁️ Osservi il paziente attentamente.",
            vitalSigns: {
                età: "80 anni"
            },
            question: "Cosa noti di IMPORTANTE?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Uomo OBESO, molto sofferente/affaticato, EDEMI ALLE CAVIGLIE!, difficoltà deambulazione",
                    correct: true,
                    feedback: "✅ FONDAMENTALE! Edemi caviglie = ritenzione liquidi = scompenso cardiaco!",
                    points: 25,
                    nextStep: "step_08"
                },
                {
                    id: "b",
                    text: "Niente particolare",
                    correct: false,
                    feedback: "❌ EDEMI caviglie sono segno chiave!",
                    points: 0,
                    nextStep: "step_08"
                },
                {
                    id: "c",
                    text: "Solo che è anziano",
                    correct: false,
                    feedback: "❌ Mancano: obesità, edemi, affaticamento!",
                    points: 3,
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
        
        // STORIA - URINA POCO!
        {
            id: "step_08",
            phase: "E - ANAMNESI",
            situation: "💬 Chiedi cosa è successo.",
            question: "Cosa riferiscono?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Da ALCUNI GIORNI affanno, PEGGIORATO nelle ultime ore. Moglie: 'URINA POCO nonostante terapia DIURETICA!'",
                    correct: true,
                    feedback: "✅ CRITICO! Urina poco + diuretico = reni non funzionano! Liquidi si accumulano → edema polmonare!",
                    points: 30,
                    nextStep: "step_09"
                },
                {
                    id: "b",
                    text: "Sintomi da poche ore",
                    correct: false,
                    feedback: "❌ Da ALCUNI GIORNI!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "c",
                    text: "Urina normalmente",
                    correct: false,
                    feedback: "❌ URINA POCO! Info critica!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "d",
                    text: "Non chiedo storia",
                    correct: false,
                    feedback: "❌ Storia è fondamentale!",
                    points: 0,
                    nextStep: "step_09"
                }
            ]
        },
        
        // AMPIA - SCOMPENSO PREGRESSO!
        {
            id: "step_09",
            phase: "E - AMPIA CRITICA",
            situation: "📋 Edemi, urina poco. Raccogli AMPIA.",
            question: "Cosa scopri di CRITICO?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "CARDIOPATICO, IPERTESO, DIABETICO in terapia. PRECEDENTE EPISODIO SCOMPENSO CARDIACO! Moglie consegna terapia.",
                    correct: true,
                    feedback: "✅ FONDAMENTALE! Precedente scompenso = recidiva! Triade: cardiopatia + ipertensione + diabete = alto rischio!",
                    points: 25,
                    nextStep: "step_10"
                },
                {
                    id: "b",
                    text: "Nessuna patologia",
                    correct: false,
                    feedback: "❌ Cardiopatico + iperteso + diabetico!",
                    points: 0,
                    nextStep: "step_10"
                },
                {
                    id: "c",
                    text: "Solo iperteso",
                    correct: false,
                    feedback: "❌ Anche cardiopatico + diabetico + SCOMPENSO PREGRESSO!",
                    points: 5,
                    nextStep: "step_10"
                },
                {
                    id: "d",
                    text: "Non chiedo AMPIA",
                    correct: false,
                    feedback: "❌ AMPIA è obbligatoria!",
                    points: 0,
                    nextStep: "step_10"
                }
            ]
        },
        
        // COMUNICAZIONE - MSA!
        {
            id: "step_10",
            phase: "COMUNICAZIONE SOREU - MSA",
            situation: "📞 Devi comunicare URGENTEMENTE.",
            question: "Cosa comunichi?",
            timeLimit: 50,
            choices: [
                {
                    id: "a",
                    text: "EDEMA POLMONARE! Uomo 80aa obeso, FR 34, SpO2 90% O2, rantoli, FC 130 aritmico, PA 200/100, cianosi, edemi caviglie, urina poco, pregresso scompenso",
                    correct: true,
                    feedback: "✅ PERFETTO! SOREU INVIA MSA! Edema polmonare = emergenza cardiologica! Serve terapia diuretica EV + nitroderivati!",
                    points: 30,
                    nextStep: "step_11"
                },
                {
                    id: "b",
                    text: "Anziano con dispnea",
                    correct: false,
                    feedback: "❌ Troppo vago! Devi dire EDEMA POLMONARE!",
                    points: 0,
                    nextStep: "step_11"
                },
                {
                    id: "c",
                    text: "Non comunico edemi",
                    correct: false,
                    feedback: "❌ Edemi + urina poco sono INFO CRITICHE!",
                    points: 8,
                    nextStep: "step_11"
                },
                {
                    id: "d",
                    text: "Non chiedo MSA",
                    correct: false,
                    feedback: "❌ Edema polmonare richiede MSA!",
                    points: 0,
                    nextStep: "step_11"
                }
            ]
        },
        
        // FINALE
        {
            id: "step_11",
            phase: "RIVALUTAZIONE + ATTESA MSA",
            situation: "⏱️ MSA in arrivo.",
            vitalSigns: {
                diagnosi: "Edema polmonare acuto"
            },
            question: "Cosa fai?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Rivaluto ABCDE continuo (può peggiorare!), mantengo O2 ALTI FLUSSI, posizione SEDUTA (ortopnea!), monitoro SpO2/aritmia, tranquillizzo (ansia peggiora!)",
                    correct: true,
                    feedback: "✅ PERFETTO! Posizione seduta vitale per edema! MSA farà furosemide EV. SCENARIO COMPLETATO!",
                    points: 20,
                    nextStep: "end"
                },
                {
                    id: "b",
                    text: "Lo faccio sdraiare",
                    correct: false,
                    feedback: "❌ MAI sdraiare! Posizione seduta è VITALE!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "c",
                    text: "Riduco O2",
                    correct: false,
                    feedback: "❌ O2 alti flussi continui!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "d",
                    text: "Non rivaluto",
                    correct: false,
                    feedback: "❌ Può degenerare rapidamente!",
                    points: 0,
                    nextStep: "end"
                }
            ]
        }
    ],
    
    // Scoring
    scoring: {
        maxScore: 300,
        thresholds: {
            excellent: 275,
            good: 245,
            sufficient: 215,
            insufficient: 0
        }
    }
};

window.scenario_16_edema_polmonare = scenario_16_edema_polmonare;
