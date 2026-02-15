// ========================================
// SCENARIO 08: DOLORE TORACICO (IMA)
// Infarto miocardico acuto - Fedele alla scheda AREU
// ========================================

const scenario_08_ima = {
    id: "scenario_08",
    code: "MEDICO_06",
    title: "DOLORE TORACICO (IMA)",
    category: "Emergenza Cardiologica",
    difficulty: "Alta",
    estimatedTime: "15-20 minuti",
    
    // Info iniziali dalla centrale
    briefing: {
        centralCall: "Uomo con forte dolore toracico a domicilio. Situazione critica.",
        msaMsi: false,
        forzeOrdine: false
    },
    
    // Steps dello scenario - ABCDE fedele
    steps: [
        // ===== PRE-ARRIVO =====
        {
            id: "step_01",
            phase: "PRE-ARRIVO",
            situation: "🚑 Sei in ambulanza. Centrale: 'Forte dolore toracico, situazione critica'.",
            question: "Cosa fai durante il tragitto?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Assegno incarichi, preparo materiale cardiologico completo (O2, monitor, DAE, aspirina)",
                    correct: true,
                    feedback: "✅ Perfetto! 'Dolore toracico critico' = sospetto IMA. Preparazione completa.",
                    points: 15,
                    nextStep: "step_02"
                },
                {
                    id: "b",
                    text: "Solo incarichi generici",
                    correct: false,
                    feedback: "⚠️ 'Critico + dolore toracico' = probabile IMA! Serve preparazione specifica!",
                    points: 5,
                    nextStep: "step_02"
                },
                {
                    id: "c",
                    text: "Preparo solo DAE",
                    correct: false,
                    feedback: "⚠️ Serve materiale COMPLETO: O2, monitor, aspirina!",
                    points: 7,
                    nextStep: "step_02"
                },
                {
                    id: "d",
                    text: "Chiedo MSA subito senza valutare",
                    correct: false,
                    feedback: "⚠️ Prima valuti il paziente, POI comunichi con SOREU!",
                    points: 3,
                    nextStep: "step_02"
                }
            ]
        },
        
        // ===== VALUTAZIONE SCENA =====
        {
            id: "step_02",
            phase: "VALUTAZIONE DELLA SCENA",
            situation: "📍 Arrivi a domicilio.",
            question: "Cosa fai prima di entrare?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Chiedo descrizione, colpo d'occhio, verifico ostacoli",
                    correct: true,
                    feedback: "✅ Corretto! Valutazione scena completa.",
                    points: 10,
                    nextStep: "step_03"
                },
                {
                    id: "b",
                    text: "Entro subito, è critico",
                    correct: false,
                    feedback: "❌ Anche in emergenza: scena, DPI prima!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "c",
                    text: "Chiedo solo dove si trova",
                    correct: false,
                    feedback: "⚠️ Serve valutazione completa!",
                    points: 5,
                    nextStep: "step_03"
                },
                {
                    id: "d",
                    text: "Preparo DAE fuori prima di entrare",
                    correct: false,
                    feedback: "⚠️ Prima valutazione scena e DPI!",
                    points: 3,
                    nextStep: "step_03"
                }
            ]
        },
        
        // ===== SCENA =====
        {
            id: "step_03",
            phase: "VALUTAZIONE DELLA SCENA",
            situation: "👀 Vedi: uomo sdraiato sul divano con occhi aperti, SOFFERENTE. Cosciente, si lamenta, tiene le MANI AL TORACE. Nessun ostacolo.",
            vitalSigns: {
                posizione: "Sdraiato sul divano",
                stato: "Sofferente, si lamenta",
                gesto: "Mani al torace",
                coscienza: "Occhi aperti"
            },
            question: "Dopo valutazione scena, cosa fai?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Indosso DPI e mi avvicino rapidamente",
                    correct: true,
                    feedback: "✅ Corretto! Situazione critica ma autoprotezione sempre necessaria.",
                    points: 10,
                    nextStep: "step_04"
                },
                {
                    id: "b",
                    text: "Vado senza DPI per fare prima",
                    correct: false,
                    feedback: "❌ DPI SEMPRE obbligatori, anche in emergenza!",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "c",
                    text: "Collego subito il DAE",
                    correct: false,
                    feedback: "❌ Prima DPI, poi valutazione ABCDE, poi eventualmente DAE!",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "d",
                    text: "Chiamo MSA prima di avvicinarmi",
                    correct: false,
                    feedback: "⚠️ Prima valuti con ABCDE, POI comunichi!",
                    points: 2,
                    nextStep: "step_04"
                }
            ]
        },
        
        // ===== FASE A =====
        {
            id: "step_04",
            phase: "A - VIE AEREE",
            situation: "Ti avvicini. L'uomo ti guarda con espressione sofferente e agitata.",
            question: "Come ti presenti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Mi presento, qualificomi, tranquillizzo e verifico vie aeree",
                    correct: true,
                    feedback: "✅ Perfetto! Cosciente, AGITATO. Vie aeree pervie.",
                    points: 15,
                    nextStep: "step_05"
                },
                {
                    id: "b",
                    text: "Chiedo subito dove fa male",
                    correct: false,
                    feedback: "⚠️ Prima presentazione e vie aeree!",
                    points: 5,
                    nextStep: "step_05"
                },
                {
                    id: "c",
                    text: "Metto subito ossigeno",
                    correct: false,
                    feedback: "❌ Prima A (vie aeree), POI B (respiro e O2)!",
                    points: 0,
                    nextStep: "step_05"
                },
                {
                    id: "d",
                    text: '"Stia calmo, passerà"',
                    correct: false,
                    feedback: "❌ Non minimizzare! IMA è emergenza grave. Serve empatia e professionalità.",
                    points: 0,
                    nextStep: "step_05"
                }
            ]
        },
        
        // ===== FASE B =====
        {
            id: "step_05",
            phase: "B - RESPIRO",
            situation: "🫁 Il paziente respira con difficoltà (dispnea).",
            vitalSigns: {
                vie_aeree: "Pervie",
                stato: "Agitato, dispnea"
            },
            question: "Come valuti il respiro?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Osservo meccanica, palpo torace, ascolto, conto FR, saturimetro",
                    correct: true,
                    feedback: "✅ Ottimo! Valutazione completa respiratoria.",
                    points: 15,
                    nextStep: "step_06"
                },
                {
                    id: "b",
                    text: "Vedo solo che respira male",
                    correct: false,
                    feedback: "❌ Serve valutazione COMPLETA con parametri!",
                    points: 3,
                    nextStep: "step_06"
                },
                {
                    id: "c",
                    text: "Metto O2 subito senza valutare",
                    correct: false,
                    feedback: "❌ Prima VALUTI (FR, SpO2), poi O2!",
                    points: 0,
                    nextStep: "step_06"
                },
                {
                    id: "d",
                    text: "Solo saturimetro",
                    correct: false,
                    feedback: "⚠️ Mancano: meccanica, palpazione, auscultazione, FR!",
                    points: 7,
                    nextStep: "step_06"
                }
            ]
        },
        
        // ===== PARAMETRI B CRITICI =====
        {
            id: "step_06",
            phase: "B - RESPIRO",
            situation: "📊 Rilevi parametri respiratori.",
            vitalSigns: {
                meccanica: "Respiro difficoltoso (dispnea)",
                palpazione: "Nessun dolore alla digitopressione",
                rumori: "Non rumori patologici",
                FR: "30 atti/min",
                SpO2: "92% in aria"
            },
            question: "Cosa noti di CRITICO?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "FR 30 (tachipnea) e SpO2 92% (ipossia) → somministro O2 ad alti flussi IMMEDIATO",
                    correct: true,
                    feedback: "✅ PERFETTO! Tachipnea + ipossia in IMA = O2 urgente! SpO2 sale a 97% con O2.",
                    points: 20,
                    nextStep: "step_07"
                },
                {
                    id: "b",
                    text: "Tutto normale",
                    correct: false,
                    feedback: "❌ FR 30 è tachipnea! SpO2 92% è ipossia! Critici in sospetto IMA!",
                    points: 0,
                    nextStep: "step_07"
                },
                {
                    id: "c",
                    text: "O2 a bassi flussi",
                    correct: false,
                    feedback: "❌ Con SpO2 92% serve O2 ad ALTI FLUSSI!",
                    points: 5,
                    nextStep: "step_07"
                },
                {
                    id: "d",
                    text: "Aspetto che peggiori",
                    correct: false,
                    feedback: "❌ È GIÀ critico! O2 immediato!",
                    points: 0,
                    nextStep: "step_07"
                }
            ]
        },
        
        // ===== FASE C - SHOCK =====
        {
            id: "step_07",
            phase: "C - CIRCOLO",
            situation: "💓 Con O2 in corso (SpO2 97%), valuti il circolo. MOMENTO CRITICO.",
            vitalSigns: {
                respiro: "FR 30, SpO2 97% con O2"
            },
            question: "Come procedi?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Rilevo polso radiale, valuto cute, misuro PA",
                    correct: true,
                    feedback: "✅ Corretto! Valutazione completa circolatoria.",
                    points: 15,
                    nextStep: "step_08"
                },
                {
                    id: "b",
                    text: "Solo polso",
                    correct: false,
                    feedback: "⚠️ Cute e PA sono CRITICHE in sospetto IMA!",
                    points: 5,
                    nextStep: "step_08"
                },
                {
                    id: "c",
                    text: "Salto per risparmiare tempo",
                    correct: false,
                    feedback: "❌ La C è FONDAMENTALE in IMA!",
                    points: 0,
                    nextStep: "step_08"
                },
                {
                    id: "d",
                    text: "Collego subito il monitor",
                    correct: false,
                    feedback: "⚠️ Prima valutazione manuale completa, poi monitor!",
                    points: 7,
                    nextStep: "step_08"
                }
            ]
        },
        
        // ===== PARAMETRI C - SHOCK! =====
        {
            id: "step_08",
            phase: "C - CIRCOLO",
            situation: "📊 Rilevi parametri circolatori...",
            question: "Cosa rilevi di GRAVISSIMO?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Polso FLEBILE/ritmico, FC 120, cute PALLIDA E SUDATA, PA 85/50 → SHOCK CARDIOGENO!",
                    correct: true,
                    feedback: "✅ CRITICO! Polso flebile + PA 85/50 + pallore/sudore = SHOCK da IMA esteso! Emergenza assoluta!",
                    points: 25,
                    nextStep: "step_09"
                },
                {
                    id: "b",
                    text: "Tutto normale",
                    correct: false,
                    feedback: "❌ PA 85/50 è IPOTENSIONE SEVERA! Segni di SHOCK!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "c",
                    text: "Solo tachicardia lieve",
                    correct: false,
                    feedback: "❌ PA 85/50 + polso flebile + pallore/sudore = SHOCK CARDIOGENO!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "d",
                    text: "Paziente in arresto",
                    correct: false,
                    feedback: "❌ Ha polso! Ma è in SHOCK (ipotensione severa da IMA).",
                    points: 0,
                    nextStep: "step_09"
                }
            ]
        },
        
        // ===== FASE D =====
        {
            id: "step_09",
            phase: "D - CONTROLLO NEUROLOGICO",
            situation: "🧠 Paziente in SHOCK (PA 85/50). Valuti neurologico.",
            vitalSigns: {
                shock: "PA 85/50, polso flebile, pallore/sudore"
            },
            question: "Cosa valuti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "AVPU, dialogo, sensibilità e motilità",
                    correct: true,
                    feedback: "✅ Perfetto! AVPU: A (cosciente). Sensibilità/motilità conservate ai 4 arti.",
                    points: 15,
                    nextStep: "step_10"
                },
                {
                    id: "b",
                    text: "Solo se è cosciente",
                    correct: false,
                    feedback: "❌ Serve valutazione COMPLETA!",
                    points: 3,
                    nextStep: "step_10"
                },
                {
                    id: "c",
                    text: "Non valuto, è in shock",
                    correct: false,
                    feedback: "❌ La D è OBBLIGATORIA anche in shock!",
                    points: 0,
                    nextStep: "step_10"
                },
                {
                    id: "d",
                    text: "Solo AVPU",
                    correct: false,
                    feedback: "⚠️ Manca sensibilità/motilità!",
                    points: 7,
                    nextStep: "step_10"
                }
            ]
        },
        
        // ===== FASE E - DOLORE MORSA =====
        {
            id: "step_10",
            phase: "E - ESAME OBIETTIVO",
            situation: "💬 Paziente in shock. Chiedi del dolore.",
            vitalSigns: {
                stato: "Shock cardiogeno"
            },
            question: "Cosa descrive il paziente?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Dolore CENTRO TORACE tipo 'MORSA', irradia a BRACCIO SX e GOLA, NON varia con respiro. Da 20 min.",
                    correct: true,
                    feedback: "✅ CLASSICO IMA! Dolore 'a morsa' retrosternale con irradiazione. VAS 7/10. Dolore NON varia = NO pleuritico.",
                    points: 25,
                    nextStep: "step_11"
                },
                {
                    id: "b",
                    text: "Dolore che peggiora respirando",
                    correct: false,
                    feedback: "❌ IMA NON varia con respiro! Dolore pleuritico è altro.",
                    points: 0,
                    nextStep: "step_11"
                },
                {
                    id: "c",
                    text: "Solo dice che fa male",
                    correct: false,
                    feedback: "❌ Serve descrizione DETTAGLIATA: sede, tipo, irradiazione!",
                    points: 3,
                    nextStep: "step_11"
                },
                {
                    id: "d",
                    text: "Non chiedo, è ovvio che è infarto",
                    correct: false,
                    feedback: "❌ La descrizione del dolore è FONDAMENTALE per diagnosi!",
                    points: 0,
                    nextStep: "step_11"
                }
            ]
        },
        
        // ===== AMPIA =====
        {
            id: "step_11",
            phase: "E - AMPIA",
            situation: "📋 Dolore 'a morsa' retrosternale, irradiazione braccio SX/gola, da 20 min. Raccogli AMPIA.",
            vitalSigns: {
                dolore: "Tipico IMA, VAS 7/10"
            },
            question: "Cosa scopri nell'AMPIA?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "NESSUNA patologia nota! Da ieri sera, DOPO ALLENAMENTO FISICO, malessere generale. VAS 7/10.",
                    correct: true,
                    feedback: "✅ CRITICO! Giovane, nessuna patologia nota, ma IMA dopo sforzo fisico! Possibile primo evento cardiaco.",
                    points: 20,
                    nextStep: "step_12"
                },
                {
                    id: "b",
                    text: "Non chiedo AMPIA",
                    correct: false,
                    feedback: "❌ L'AMPIA è FONDAMENTALE! 'Dopo allenamento' è info critica!",
                    points: 0,
                    nextStep: "step_12"
                },
                {
                    id: "c",
                    text: "Solo patologie",
                    correct: false,
                    feedback: "⚠️ Manca storia evento! 'Dopo allenamento' è CHIAVE!",
                    points: 7,
                    nextStep: "step_12"
                },
                {
                    id: "d",
                    text: "Solo farmaci",
                    correct: false,
                    feedback: "⚠️ Serve AMPIA COMPLETA + storia evento!",
                    points: 5,
                    nextStep: "step_12"
                }
            ]
        },
        
        // ===== COMUNICAZIONE SOREU =====
        {
            id: "step_13",
            phase: "COMUNICAZIONE SOREU",
            situation: "📞 Devi comunicare URGENTEMENTE questa emergenza cardiologica.",
            question: "Cosa comunichi?",
            timeLimit: 45,
            choices: [
                {
                    id: "a",
                    text: "IMA con SHOCK: dolore 'morsa' retrosternale → braccio SX/gola, FR 30, SpO2 97% O2, FC 120, PA 85/50, nessuna patologia, post-sforzo",
                    correct: true,
                    feedback: "✅ PERFETTO! SOREU allerta MSA URGENTE + UTIC. Possibile PPCI (angioplastica primaria)!",
                    points: 25,
                    nextStep: "step_14"
                },
                {
                    id: "b",
                    text: "Uomo con dolore al petto",
                    correct: false,
                    feedback: "❌ NON rende l'urgenza! SHOCK + IMA è CODE RED!",
                    points: 0,
                    nextStep: "step_14"
                },
                {
                    id: "c",
                    text: "Solo che ha PA bassa",
                    correct: false,
                    feedback: "❌ Mancano: dolore tipico, shock, parametri completi!",
                    points: 3,
                    nextStep: "step_14"
                },
                {
                    id: "d",
                    text: "Chiedo MSA senza dettagli",
                    correct: false,
                    feedback: "❌ SOREU ha bisogno di TUTTI i dati per attivare UTIC!",
                    points: 5,
                    nextStep: "step_14"
                }
            ]
        },
        
        // ===== FINALE =====
        {
            id: "step_14",
            phase: "RIVALUTAZIONE",
            situation: "⏱️ MSA in arrivo URGENTE. Paziente in SHOCK da IMA.",
            vitalSigns: {
                diagnosi: "IMA con shock cardiogeno"
            },
            question: "Cosa fai in attesa MSA?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Rivaluto ABCDE continuo, monitoro FC/PA/SpO2, mantengo O2, posizione antalgica, preparo DAE, tranquillizzo, NO sforzi",
                    correct: true,
                    feedback: "✅ PERFETTO! Gestione ottimale IMA con shock. MSA farà ECG 12 derivazioni e terapia. SCENARIO COMPLETATO!",
                    points: 20,
                    nextStep: "end"
                },
                {
                    id: "b",
                    text: "Aspetto MSA senza fare nulla",
                    correct: false,
                    feedback: "❌ Paziente in SHOCK! Monitoraggio continuo vitale!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "c",
                    text: "Lo faccio camminare per caricarlo",
                    correct: false,
                    feedback: "❌ MAI far camminare in IMA! Rischio arresto cardiaco!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "d",
                    text: "Carico e parto verso ospedale",
                    correct: false,
                    feedback: "⚠️ Con shock cardiogeno meglio attendere MSA per stabilizzazione!",
                    points: 5,
                    nextStep: "end"
                }
            ]
        }
    ],
    
    // Scoring
    scoring: {
        maxScore: 295,
        thresholds: {
            excellent: 270,
            good: 240,
            sufficient: 210,
            insufficient: 0
        }
    }
};

window.scenario_08_ima = scenario_08_ima;
