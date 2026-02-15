// ========================================
// SCENARIO 10: ACC CON ROSC
// Arresto cardiaco con ritorno circolazione - Fedele alla scheda AREU
// ========================================

const scenario_10_rosc = {
    id: "scenario_10",
    code: "MEDICO_08",
    title: "ACC CON ROSC (arresto cardiaco)",
    category: "Emergenza Cardiologica",
    difficulty: "Alta",
    estimatedTime: "15-20 minuti",
    
    // Info iniziali dalla centrale
    briefing: {
        centralCall: "Uomo 40 anni circa incosciente sul campo da tennis.",
        msaMsi: false,
        forzeOrdine: false
    },
    
    // Steps dello scenario - Fedele con RCP e DAE
    steps: [
        // ===== PRE-ARRIVO =====
        {
            id: "step_01",
            phase: "PRE-ARRIVO",
            situation: "🚑 Centrale: 'Uomo 40 anni incosciente sul campo da tennis'.",
            question: "Cosa fai durante il tragitto?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Assegno incarichi, preparo DAE, materiale RCP, O2",
                    correct: true,
                    feedback: "✅ Perfetto! 'Incosciente' = possibile arresto cardiaco. Preparazione completa RCP.",
                    points: 15,
                    nextStep: "step_02"
                },
                {
                    id: "b",
                    text: "Solo incarichi generici",
                    correct: false,
                    feedback: "⚠️ 'Incosciente' richiede preparazione per ARRESTO!",
                    points: 5,
                    nextStep: "step_02"
                },
                {
                    id: "c",
                    text: "Preparo solo O2",
                    correct: false,
                    feedback: "⚠️ Serve DAE e materiale RCP!",
                    points: 3,
                    nextStep: "step_02"
                },
                {
                    id: "d",
                    text: "Non faccio nulla",
                    correct: false,
                    feedback: "❌ Preparazione essenziale!",
                    points: 0,
                    nextStep: "step_02"
                }
            ]
        },
        
        // ===== ARRIVO SCENA - ASTANTE FA CTE =====
        {
            id: "step_02",
            phase: "VALUTAZIONE SCENA",
            situation: "📍 Arrivi sul campo da tennis. Vedi: uomo giovane steso a terra, ASTANTE che sta eseguendo le COMPRESSIONI TORACICHE! Nessun ostacolo.",
            vitalSigns: {
                posizione: "Steso a terra",
                astante: "Fa compressioni toraciche",
                ambiente: "Campo tennis, libero"
            },
            question: "Cosa fai IMMEDIATAMENTE dopo DPI?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Mi AFFIANCO all'astante e mi SOSTITUISCO nelle compressioni toraciche, valuto rapidamente coscienza/respiro",
                    correct: true,
                    feedback: "✅ PERFETTO! Continui RCP senza interruzioni mentre valuti.",
                    points: 20,
                    nextStep: "step_03"
                },
                {
                    id: "b",
                    text: "Fermo l'astante per valutare",
                    correct: false,
                    feedback: "❌ MAI interrompere RCP! Ti sostituisci mentre continua.",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "c",
                    text: "Applico subito il DAE",
                    correct: false,
                    feedback: "⚠️ Prima ti sostituisci nelle CTE, POI applichi DAE!",
                    points: 8,
                    nextStep: "step_03"
                },
                {
                    id: "d",
                    text: "Chiamo SOREU prima",
                    correct: false,
                    feedback: "❌ RCP ha priorità! Deleghi collega a chiamare.",
                    points: 0,
                    nextStep: "step_03"
                }
            ]
        },
        
        // ===== ALLERTA SOREU + DAE =====
        {
            id: "step_03",
            phase: "RCP IN CORSO",
            situation: "Stai facendo compressioni toraciche. Valutazione rapida: incosciente, non respira.",
            vitalSigns: {
                coscienza: "Incosciente",
                respiro: "Assente",
                RCP: "In corso"
            },
            question: "Cosa fai mentre continui CTE?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Faccio allertare SOREU da collega e faccio applicare il DAE",
                    correct: true,
                    feedback: "✅ Corretto! SOREU + DAE mentre continui RCP senza interruzioni.",
                    points: 20,
                    nextStep: "step_04"
                },
                {
                    id: "b",
                    text: "Interrompo per chiamare SOREU",
                    correct: false,
                    feedback: "❌ MAI interrompere CTE! Deleghi a collega.",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "c",
                    text: "Solo continuo CTE",
                    correct: false,
                    feedback: "⚠️ Devi anche allertare SOREU e applicare DAE!",
                    points: 10,
                    nextStep: "step_04"
                },
                {
                    id: "d",
                    text: "Interrompo per dare ventilazioni",
                    correct: false,
                    feedback: "⚠️ Prima applica DAE per analisi ritmo!",
                    points: 5,
                    nextStep: "step_04"
                }
            ]
        },
        
        // ===== DAE - PRIMA ANALISI =====
        {
            id: "step_04",
            phase: "DAE - 1ª ANALISI",
            situation: "⚡ DAE applicato. Elettrodi posizionati. DAE analizza...",
            vitalSigns: {
                RCP: "In corso",
                DAE: "Analisi in corso"
            },
            question: "DAE dice: 'SHOCK INDICATO'. Cosa fai?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "TUTTI LONTANO! Verifico nessuno tocca paziente, premo bottone shock",
                    correct: true,
                    feedback: "✅ PERFETTO! Shock erogato. DAE dice: '2 minuti di RCP'. Inizi subito CTE.",
                    points: 25,
                    nextStep: "step_05"
                },
                {
                    id: "b",
                    text: "Continuo CTE senza dare shock",
                    correct: false,
                    feedback: "❌ Se shock INDICATO devi erogarlo!",
                    points: 0,
                    nextStep: "step_05"
                },
                {
                    id: "c",
                    text: "Erogo shock mentre tocco paziente",
                    correct: false,
                    feedback: "❌ PERICOLOSO! Nessuno deve toccare durante shock!",
                    points: 0,
                    nextStep: "step_05"
                },
                {
                    id: "d",
                    text: "Aspetto MSA per shock",
                    correct: false,
                    feedback: "❌ Shock va dato SUBITO quando indicato!",
                    points: 0,
                    nextStep: "step_05"
                }
            ]
        },
        
        // ===== 2 MINUTI RCP =====
        {
            id: "step_05",
            phase: "RCP POST-SHOCK",
            situation: "Dopo shock, riprendi IMMEDIATAMENTE le compressioni toraciche.",
            vitalSigns: {
                shock: "Erogato",
                RCP: "2 minuti in corso"
            },
            question: "Cosa fai per 2 minuti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "CTE continue 30:2 (compressioni:ventilazioni) per 2 minuti completi",
                    correct: true,
                    feedback: "✅ Corretto! RCP di qualità per 2 minuti.",
                    points: 20,
                    nextStep: "step_06"
                },
                {
                    id: "b",
                    text: "Interrompo per controllare polso",
                    correct: false,
                    feedback: "❌ NON interrompere! DAE ti dirà quando rianalizzare.",
                    points: 0,
                    nextStep: "step_06"
                },
                {
                    id: "c",
                    text: "Solo compressioni senza ventilazioni",
                    correct: false,
                    feedback: "⚠️ Serve anche ventilazione 30:2!",
                    points: 10,
                    nextStep: "step_06"
                },
                {
                    id: "d",
                    text: "Aspetto che DAE mi dica cosa fare",
                    correct: false,
                    feedback: "❌ Dopo shock = RCP immediata per 2 min!",
                    points: 0,
                    nextStep: "step_06"
                }
            ]
        },
        
        // ===== DAE - SECONDA ANALISI + ROSC! =====
        {
            id: "step_06",
            phase: "DAE - 2ª ANALISI + ROSC",
            situation: "⚡ 2 minuti passati. DAE: 'Analisi ritmo'. Analizza... 'SHOCK NON INDICATO'. Improvvisamente noti qualcosa...",
            vitalSigns: {
                DAE: "Shock NON indicato"
            },
            question: "Cosa noti di FONDAMENTALE?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "PRESENZA DI SEGNI DI VITA! Paziente RESPIRA e ha MOVIMENTI! INTERROMPO RCP → ROSC!",
                    correct: true,
                    feedback: "✅ ROSC! Ritorno di Circolazione Spontanea! Paziente respira e si muove. Interrompi RCP e valuta ABCDE!",
                    points: 30,
                    nextStep: "step_07"
                },
                {
                    id: "b",
                    text: "Continuo RCP senza controllare",
                    correct: false,
                    feedback: "❌ Se ci sono segni di vita (respiro/movimenti) DEVI valutare!",
                    points: 0,
                    nextStep: "step_07"
                },
                {
                    id: "c",
                    text: "Aspetto 3° analisi DAE",
                    correct: false,
                    feedback: "❌ Segni di vita = ROSC! Interrompi e valuta!",
                    points: 0,
                    nextStep: "step_07"
                },
                {
                    id: "d",
                    text: "Nessun segno, continuo",
                    correct: false,
                    feedback: "❌ Ci SONO segni vita (respiro + movimenti)!",
                    points: 0,
                    nextStep: "step_07"
                }
            ]
        },
        
        // ===== FASE A POST-ROSC =====
        {
            id: "step_07",
            phase: "A - VIE AEREE POST-ROSC",
            situation: "ROSC ottenuto! Paziente respira e si muove. Valuti vie aeree.",
            vitalSigns: {
                ROSC: "Presente",
                respiro: "Presente",
                movimenti: "Presenti"
            },
            question: "Cosa fai per le vie aeree?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Chiamo/scuoto paziente: INCOSCIENTE. Pervietà vie aeree: OK. Posiziono cannula OF → la TRATTIENE",
                    correct: true,
                    feedback: "✅ PERFETTO! Incosciente ma vie aeree pervie. Cannula OF trattenuta = buon segno.",
                    points: 20,
                    nextStep: "step_08"
                },
                {
                    id: "b",
                    text: "Non metto cannula",
                    correct: false,
                    feedback: "⚠️ Incosciente post-ROSC = cannula OF necessaria!",
                    points: 8,
                    nextStep: "step_08"
                },
                {
                    id: "c",
                    text: "Metto cannula anche se non trattiene",
                    correct: false,
                    feedback: "❌ Se non trattiene significa riflesso faringeo presente, non forzare!",
                    points: 5,
                    nextStep: "step_08"
                },
                {
                    id: "d",
                    text: "Intubo il paziente",
                    correct: false,
                    feedback: "❌ Intubazione è manovra medica! Non MSB.",
                    points: 0,
                    nextStep: "step_08"
                }
            ]
        },
        
        // ===== FASE B POST-ROSC =====
        {
            id: "step_08",
            phase: "B - RESPIRO POST-ROSC",
            situation: "🫁 Cannula OF in sede. Valuti respiro.",
            vitalSigns: {
                vie_aeree: "Pervie + cannula OF",
                coscienza: "Incosciente"
            },
            question: "Cosa rilevi?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Respiro PRESENTE, meccanica bilaterale, nessun rumore (cannula OF), FR 10 atti/min, SpO2 NON rilevabile → O2 alti flussi",
                    correct: true,
                    feedback: "✅ Perfetto! FR 10 è bradipnea post-ROSC. O2 ad alti flussi sempre dopo arresto!",
                    points: 20,
                    nextStep: "step_09"
                },
                {
                    id: "b",
                    text: "Respiro assente",
                    correct: false,
                    feedback: "❌ C'È respiro! FR 10. È bradipnea ma respira.",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "c",
                    text: "Non metto O2, respira da solo",
                    correct: false,
                    feedback: "❌ Post-ROSC = O2 ad alti flussi SEMPRE!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "d",
                    text: "O2 a bassi flussi",
                    correct: false,
                    feedback: "⚠️ Post-arresto serve O2 ad ALTI flussi!",
                    points: 8,
                    nextStep: "step_09"
                }
            ]
        },
        
        // ===== FASE C POST-ROSC - POLSO =====
        {
            id: "step_09",
            phase: "C - CIRCOLO POST-ROSC",
            situation: "💓 Con O2 in corso, valuti circolo. MOMENTO CRITICO.",
            vitalSigns: {
                respiro: "FR 10, O2 alti flussi"
            },
            question: "Cosa rilevi di PARTICOLARE al polso?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Polso RADIALE ASSENTE! Palpo CAROTIDEO: PRESENTE FC 100 bpm",
                    correct: true,
                    feedback: "✅ CRITICO! Radiale assente ma carotideo presente = circolo ancora instabile post-ROSC.",
                    points: 25,
                    nextStep: "step_10"
                },
                {
                    id: "b",
                    text: "Radiale presente normale",
                    correct: false,
                    feedback: "❌ Radiale è ASSENTE! Solo carotideo presente.",
                    points: 0,
                    nextStep: "step_10"
                },
                {
                    id: "c",
                    text: "Nessun polso, è ancora in arresto",
                    correct: false,
                    feedback: "❌ Carotideo C'È! FC 100. Non è più arresto.",
                    points: 0,
                    nextStep: "step_10"
                },
                {
                    id: "d",
                    text: "Non controllo il polso",
                    correct: false,
                    feedback: "❌ Valutazione polso è fondamentale post-ROSC!",
                    points: 0,
                    nextStep: "step_10"
                }
            ]
        },
        
        // ===== PA + CUTE =====
        {
            id: "step_10",
            phase: "C - CIRCOLO POST-ROSC",
            situation: "📊 Carotideo presente FC 100, radiale assente. Valuti PA e cute.",
            vitalSigns: {
                polso: "Solo carotideo",
                FC: "100 bpm"
            },
            question: "Cosa rilevi?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "PA 80/40 (ipotensione post-ROSC), cute FREDDA e PALLIDA",
                    correct: true,
                    feedback: "✅ CRITICO! Ipotensione + cute fredda/pallida = circolo instabile. Allerta SOREU per ROSC!",
                    points: 20,
                    nextStep: "step_11"
                },
                {
                    id: "b",
                    text: "PA normale",
                    correct: false,
                    feedback: "❌ PA 80/40 è IPOTENSIONE!",
                    points: 0,
                    nextStep: "step_11"
                },
                {
                    id: "c",
                    text: "Cute rosea calda",
                    correct: false,
                    feedback: "❌ Cute è FREDDA e PALLIDA!",
                    points: 0,
                    nextStep: "step_11"
                },
                {
                    id: "d",
                    text: "Non misuro PA",
                    correct: false,
                    feedback: "❌ PA è fondamentale post-ROSC!",
                    points: 0,
                    nextStep: "step_11"
                }
            ]
        },
        
        // ===== FASE D POST-ROSC =====
        {
            id: "step_11",
            phase: "D - NEUROLOGICO POST-ROSC",
            situation: "🧠 Circolo instabile (PA 80/40). Valuti neurologico.",
            vitalSigns: {
                PA: "80/40",
                cute: "Fredda, pallida"
            },
            question: "Cosa rilevi?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Paziente INCOSCIENTE, AVPU: U (non risponde), sensibilità/motilità NON valutabili",
                    correct: true,
                    feedback: "✅ Corretto! Post-arresto = spesso coma. AVPU: U è comune.",
                    points: 15,
                    nextStep: "step_12"
                },
                {
                    id: "b",
                    text: "Paziente cosciente",
                    correct: false,
                    feedback: "❌ È INCOSCIENTE (AVPU: U)!",
                    points: 0,
                    nextStep: "step_12"
                },
                {
                    id: "c",
                    text: "AVPU: P",
                    correct: false,
                    feedback: "❌ Non risponde nemmeno a dolore = U!",
                    points: 0,
                    nextStep: "step_12"
                },
                {
                    id: "d",
                    text: "Non valuto neurologico",
                    correct: false,
                    feedback: "❌ D è sempre obbligatoria!",
                    points: 0,
                    nextStep: "step_12"
                }
            ]
        },
        
        // ===== FASE E + AMPIA =====
        {
            id: "step_12",
            phase: "E - ANAMNESI",
            situation: "💬 Chiedi agli astanti cosa è successo.",
            question: "Cosa riferiscono?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Durante partita tennis all'improvviso si ACCASCIA A TERRA privo coscienza. NESSUN sintomo prima. Sportivo, nessuna patologia. ALLERGICO ASPIRINA!",
                    correct: true,
                    feedback: "✅ Perfetto! Arresto improvviso in giovane sportivo = probabile aritmia/IMA. ALLERGIA ASPIRINA importante!",
                    points: 20,
                    nextStep: "step_13"
                },
                {
                    id: "b",
                    text: "Aveva dolore toracico prima",
                    correct: false,
                    feedback: "❌ Scheda dice NESSUN sintomo prima!",
                    points: 0,
                    nextStep: "step_13"
                },
                {
                    id: "c",
                    text: "Non chiedo anamnesi",
                    correct: false,
                    feedback: "❌ AMPIA è fondamentale!",
                    points: 0,
                    nextStep: "step_13"
                },
                {
                    id: "d",
                    text: "Cardiopatico noto",
                    correct: false,
                    feedback: "❌ Nessuna patologia nota!",
                    points: 0,
                    nextStep: "step_13"
                }
            ]
        },
        
        // ===== COMUNICAZIONE SOREU =====
        {
            id: "step_13",
            phase: "COMUNICAZIONE SOREU - ROSC",
            situation: "📞 Devi comunicare il ROSC urgentemente.",
            question: "Cosa comunichi?",
            timeLimit: 45,
            choices: [
                {
                    id: "a",
                    text: "ROSC! Uomo 40aa, arresto tennis, 1 shock+RCP, AVPU U, FR 10, FC 100 carotideo (radiale assente), PA 80/40, allergico aspirina, MSA urgente",
                    correct: true,
                    feedback: "✅ PERFETTO! SOREU invia MSA urgente. ROSC instabile richiede terapia intensiva!",
                    points: 25,
                    nextStep: "step_14"
                },
                {
                    id: "b",
                    text: "Paziente ripreso",
                    correct: false,
                    feedback: "❌ Troppo vago! Serve comunicazione dettagliata ROSC!",
                    points: 0,
                    nextStep: "step_14"
                },
                {
                    id: "c",
                    text: "Solo che è in arresto",
                    correct: false,
                    feedback: "❌ NON è più in arresto! È ROSC!",
                    points: 0,
                    nextStep: "step_14"
                },
                {
                    id: "d",
                    text: "Non comunico ROSC",
                    correct: false,
                    feedback: "❌ ROSC va comunicato SUBITO!",
                    points: 0,
                    nextStep: "step_14"
                }
            ]
        },
        
        // ===== FINALE =====
        {
            id: "step_14",
            phase: "RIVALUTAZIONE POST-ROSC",
            situation: "⏱️ MSA in arrivo. ROSC instabile.",
            vitalSigns: {
                stato: "ROSC instabile"
            },
            question: "Cosa fai?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Rivaluto ABCDE continuo, monitoro FC/PA/SpO2, mantengo O2/cannula OF, preparo per riarresto (DAE pronto), posizione laterale sicurezza se stabile",
                    correct: true,
                    feedback: "✅ PERFETTO! Post-ROSC può riarrestare! Monitoraggio stretto. SCENARIO COMPLETATO!",
                    points: 20,
                    nextStep: "end"
                },
                {
                    id: "b",
                    text: "Aspetto senza monitorare",
                    correct: false,
                    feedback: "❌ Può riarrestare! Monitoraggio continuo vitale!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "c",
                    text: "Tolgo cannula OF",
                    correct: false,
                    feedback: "❌ Mantieni cannula! È incosciente!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "d",
                    text: "Spengo DAE",
                    correct: false,
                    feedback: "❌ DAE deve restare pronto per eventuale riarresto!",
                    points: 0,
                    nextStep: "end"
                }
            ]
        }
    ],
    
    // Scoring
    scoring: {
        maxScore: 315,
        thresholds: {
            excellent: 285,
            good: 255,
            sufficient: 220,
            insufficient: 0
        }
    }
};

window.scenario_10_rosc = scenario_10_rosc;
