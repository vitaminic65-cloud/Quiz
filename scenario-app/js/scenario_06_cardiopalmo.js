// ========================================
// SCENARIO 06: DOLORE TORACICO (Cardiopalmo)
// Tachicardia severa - Fedele alla scheda AREU
// ========================================

const scenario_06_cardiopalmo = {
    id: "scenario_06",
    code: "MEDICO_04",
    title: "DOLORE TORACICO (cardiopalmo)",
    category: "Emergenza Cardiologica",
    difficulty: "Alta",
    estimatedTime: "15-20 minuti",
    
    // Info iniziali dalla centrale
    briefing: {
        centralCall: "Donna a domicilio con cardiopalmo e difficoltà respiratoria.",
        msaMsi: false,
        forzeOrdine: false
    },
    
    // Steps dello scenario - ABCDE fedele
    steps: [
        // ===== PRE-ARRIVO =====
        {
            id: "step_01",
            phase: "PRE-ARRIVO",
            situation: "🚑 Sei in ambulanza. Centrale: 'Cardiopalmo e difficoltà respiratoria'.",
            question: "Cosa fai durante il tragitto?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Assegno incarichi e preparo materiale per emergenza cardiologica (O2, monitor, DAE)",
                    correct: true,
                    feedback: "✅ Perfetto! Cardiopalmo = possibile aritmia. Preparazione cardiologica completa.",
                    points: 15,
                    nextStep: "step_02"
                },
                {
                    id: "b",
                    text: "Solo incarichi generici",
                    correct: false,
                    feedback: "⚠️ 'Cardiopalmo' richiede preparazione CARDIOLOGICA specifica!",
                    points: 5,
                    nextStep: "step_02"
                },
                {
                    id: "c",
                    text: "Preparo solo DAE",
                    correct: false,
                    feedback: "⚠️ Serve anche O2, monitor, materiale completo!",
                    points: 7,
                    nextStep: "step_02"
                },
                {
                    id: "d",
                    text: "Chiedo alla centrale di far camminare la paziente",
                    correct: false,
                    feedback: "❌ Con cardiopalmo NO sforzi! Rischio peggioramento aritmia.",
                    points: 0,
                    nextStep: "step_02"
                }
            ]
        },
        
        // ===== ARRIVO - VALUTAZIONE SCENA =====
        {
            id: "step_02",
            phase: "VALUTAZIONE DELLA SCENA",
            situation: "📍 Arrivi all'abitazione. Camera da letto al piano superiore, scala stretta.",
            question: "Cosa fai prima di salire?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Chiedo descrizione, faccio colpo d'occhio, valuto difficoltà scala",
                    correct: true,
                    feedback: "✅ Corretto! Scala stretta = ostacolo potenziale per trasporto.",
                    points: 10,
                    nextStep: "step_03"
                },
                {
                    id: "b",
                    text: "Salgo subito",
                    correct: false,
                    feedback: "❌ Prima: valutazione scena, ostacoli, DPI!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "c",
                    text: "Chiamo MSA prima di salire",
                    correct: false,
                    feedback: "❌ Prima valuti la paziente, POI comunichi!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "d",
                    text: "Chiedo solo dove si trova",
                    correct: false,
                    feedback: "⚠️ Serve valutazione completa scena e ostacoli!",
                    points: 5,
                    nextStep: "step_03"
                }
            ]
        },
        
        // ===== SCENA =====
        {
            id: "step_03",
            phase: "VALUTAZIONE DELLA SCENA",
            situation: "👀 Sali in camera. Vedi: donna a letto, SEDUTA, cosciente, AFFANNO RESPIRATORIO evidente. Scala stretta confermata.",
            vitalSigns: {
                posizione: "Seduta a letto (ortopnea)",
                stato: "Affanno respiratorio",
                coscienza: "Vigile",
                ambiente: "Scala stretta"
            },
            question: "Dopo valutazione scena, cosa fai?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Indosso DPI e mi avvicino",
                    correct: true,
                    feedback: "✅ Corretto! Autoprotezione sempre.",
                    points: 10,
                    nextStep: "step_04"
                },
                {
                    id: "b",
                    text: "Vado senza DPI per fare prima",
                    correct: false,
                    feedback: "❌ DPI sempre obbligatori!",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "c",
                    text: "La faccio sdraiare subito",
                    correct: false,
                    feedback: "❌ Posizione seduta (ortopnea) = scelta della paziente per respirare meglio. Non modificare!",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "d",
                    text: "Preparo DAE prima di avvicinarmi",
                    correct: false,
                    feedback: "⚠️ Prima DPI e valutazione, poi eventualmente DAE se necessario.",
                    points: 3,
                    nextStep: "step_04"
                }
            ]
        },
        
        // ===== FASE A - VIE AEREE =====
        {
            id: "step_04",
            phase: "A - VIE AEREE",
            situation: "Ti avvicini. La donna ti guarda con espressione spaventata e affannata.",
            vitalSigns: {
                aspetto: "Agitata, affannata"
            },
            question: "Come ti presenti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Mi presento, qualificomi, tranquillizzo e verifico vie aeree",
                    correct: true,
                    feedback: "✅ Perfetto! Donna cosciente, AGITATA con sensazione di 'cuore in gola' e 'fame d'aria'. Vie aeree pervie.",
                    points: 15,
                    nextStep: "step_05"
                },
                {
                    id: "b",
                    text: "Chiedo subito cosa sente",
                    correct: false,
                    feedback: "⚠️ Prima ti presenti e tranquillizzi!",
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
                    text: '"Stia calma, non è nulla"',
                    correct: false,
                    feedback: "❌ Non minimizzare! Cardiopalmo può essere grave. Serve empatia.",
                    points: 0,
                    nextStep: "step_05"
                }
            ]
        },
        
        // ===== FASE B - RESPIRO =====
        {
            id: "step_05",
            phase: "B - RESPIRO",
            situation: "🫁 La paziente respira con affanno. Riferisce 'fame d'aria'.",
            vitalSigns: {
                vie_aeree: "Pervie",
                sintomo: "Fame d'aria"
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
                    text: "Vedo solo che è affannata",
                    correct: false,
                    feedback: "❌ Serve valutazione COMPLETA con parametri!",
                    points: 3,
                    nextStep: "step_06"
                },
                {
                    id: "c",
                    text: "Metto O2 senza valutare",
                    correct: false,
                    feedback: "❌ Prima VALUTI (meccanica, FR, SpO2), poi O2!",
                    points: 0,
                    nextStep: "step_06"
                },
                {
                    id: "d",
                    text: "Le chiedo solo se respira male",
                    correct: false,
                    feedback: "❌ Serve valutazione OGGETTIVA!",
                    points: 2,
                    nextStep: "step_06"
                }
            ]
        },
        
        // ===== PARAMETRI RESPIRATORI =====
        {
            id: "step_06",
            phase: "B - RESPIRO",
            situation: "📊 Rilevi parametri respiratori.",
            vitalSigns: {
                meccanica: "Respiro superficiale, espansione normale",
                palpazione: "Nessun dolore all'ispezione",
                rumori: "Nessun rumore patologico",
                FR: "30 atti/min",
                SpO2: "90% in aria"
            },
            question: "Cosa noti di CRITICO?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "FR 30 (tachipnea) e SpO2 90% (IPOSSIA!) → somministro O2 ad alti flussi SUBITO",
                    correct: true,
                    feedback: "✅ PERFETTO! Tachipnea + ipossia = O2 urgente! Saturazione sale a 95% con O2.",
                    points: 20,
                    nextStep: "step_07"
                },
                {
                    id: "b",
                    text: "Tutto normale",
                    correct: false,
                    feedback: "❌ FR 30 è tachipnea! SpO2 90% è IPOSSIA CRITICA!",
                    points: 0,
                    nextStep: "step_07"
                },
                {
                    id: "c",
                    text: "O2 a bassi flussi",
                    correct: false,
                    feedback: "❌ Con SpO2 90% serve O2 ad ALTI FLUSSI (10-15 L/min)!",
                    points: 5,
                    nextStep: "step_07"
                },
                {
                    id: "d",
                    text: "Aspetto che peggiori",
                    correct: false,
                    feedback: "❌ SpO2 90% è GIÀ critico! O2 immediato!",
                    points: 0,
                    nextStep: "step_07"
                }
            ]
        },
        
        // ===== FASE C - CIRCOLO =====
        {
            id: "step_07",
            phase: "C - CIRCOLO",
            situation: "💓 Con O2 in corso (SpO2 sale a 95%), valuti il circolo. Questo è il momento CRITICO.",
            vitalSigns: {
                respiro: "FR 30, SpO2 95% con O2"
            },
            question: "Come procedi con la valutazione circolatoria?",
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
                    feedback: "⚠️ Serve COMPLETA: polso, cute E PA!",
                    points: 5,
                    nextStep: "step_08"
                },
                {
                    id: "c",
                    text: "Salto per risparmiare tempo",
                    correct: false,
                    feedback: "❌ La C è FONDAMENTALE in sospetto cardiopalmo!",
                    points: 0,
                    nextStep: "step_08"
                },
                {
                    id: "d",
                    text: "Solo PA",
                    correct: false,
                    feedback: "⚠️ Il POLSO è critico nel cardiopalmo!",
                    points: 3,
                    nextStep: "step_08"
                }
            ]
        },
        
        // ===== PARAMETRI CIRCOLO - TACHICARDIA SEVERA =====
        {
            id: "step_08",
            phase: "C - CIRCOLO",
            situation: "📊 Rilevi il polso radiale...",
            vitalSigns: {
                SpO2: "95% con O2"
            },
            question: "Cosa rilevi di GRAVISSIMO?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Polso presente, regolare, ma FC 170 BPM! TACHICARDIA SEVERA! Cute fredda e sudata. PA 100/70.",
                    correct: true,
                    feedback: "✅ CRITICO! FC 170 è TACHICARDIA SEVERA! Rischio aritmia grave. Cute fredda/sudata = scarsa perfusione.",
                    points: 25,
                    nextStep: "step_09"
                },
                {
                    id: "b",
                    text: "Tutto normale",
                    correct: false,
                    feedback: "❌ FC 170 è GRAVISSIMA tachicardia! Emergenza cardiologica!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "c",
                    text: "Solo leggera tachicardia",
                    correct: false,
                    feedback: "❌ FC 170 NON è 'leggera'! È tachicardia SEVERA!",
                    points: 0,
                    nextStep: "step_09"
                },
                {
                    id: "d",
                    text: "Polso assente, arresto cardiaco",
                    correct: false,
                    feedback: "❌ Il polso C'È! Ma FC 170 indica aritmia severa.",
                    points: 0,
                    nextStep: "step_09"
                }
            ]
        },
        
        // ===== FASE D - NEUROLOGICO =====
        {
            id: "step_09",
            phase: "D - CONTROLLO NEUROLOGICO",
            situation: "🧠 Paziente con FC 170, ipossia corretta con O2. Valuti neurologico.",
            vitalSigns: {
                FC: "170 bpm (CRITICA)",
                cute: "Fredda, sudata"
            },
            question: "Cosa valuti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "AVPU, dialogo, sensibilità e motilità",
                    correct: true,
                    feedback: "✅ Perfetto! AVPU: A (cosciente). Sensibilità e motilità conservate ai 4 arti.",
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
                    text: "Non valuto, focus sul cuore",
                    correct: false,
                    feedback: "❌ La D è OBBLIGATORIA nell'ABCDE!",
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
        
        // ===== FASE E - ANAMNESI =====
        {
            id: "step_10",
            phase: "E - ESAME OBIETTIVO + ANAMNESI",
            situation: "💬 La paziente, affannata, riferisce: 'Da 30 minuti sento il cuore in gola... batte fortissimo... oppressione... non riesco a respirare bene...'",
            vitalSigns: {
                sintomi: "Cuore in gola, oppressione, dispnea",
                durata: "30 minuti"
            },
            question: "Cosa chiedi per la storia dell'evento?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Quando iniziato, primi episodi simili, cosa faceva, evoluzione sintomi",
                    correct: true,
                    feedback: "✅ Ottimo! Da 30 min, oppressione alla gola, senso palpitazione. PRIMO EPISODIO.",
                    points: 15,
                    nextStep: "step_11"
                },
                {
                    id: "b",
                    text: "Non chiedo, è ovvio",
                    correct: false,
                    feedback: "❌ La storia è FONDAMENTALE! Primo episodio vs recidiva cambia tutto.",
                    points: 0,
                    nextStep: "step_11"
                },
                {
                    id: "c",
                    text: "Chiedo solo quando è iniziato",
                    correct: false,
                    feedback: "⚠️ Mancano: episodi precedenti, attività, evoluzione!",
                    points: 5,
                    nextStep: "step_11"
                },
                {
                    id: "d",
                    text: "Solo se ha dolore toracico",
                    correct: false,
                    feedback: "⚠️ Cardiopalmo può essere senza dolore! Serve storia completa.",
                    points: 7,
                    nextStep: "step_11"
                }
            ]
        },
        
        // ===== AMPIA =====
        {
            id: "step_11",
            phase: "E - AMPIA",
            situation: "📋 Osservi: donna sovrappeso. Primo episodio di cardiopalmo. Raccogli AMPIA.",
            vitalSigns: {
                aspetto: "Sovrappeso",
                evento: "Primo episodio"
            },
            question: "Cosa chiedi per l'AMPIA?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Allergie, Medicinali, Patologie, Ingestione, Altro",
                    correct: true,
                    feedback: "✅ Perfetto! IPERTENSIONE e IPERTIROIDISMO (in terapia). Due patologie che favoriscono aritmie!",
                    points: 20,
                    nextStep: "step_12"
                },
                {
                    id: "b",
                    text: "Non c'è tempo",
                    correct: false,
                    feedback: "❌ L'AMPIA è CRITICA! Ipertiroidismo può causare tachicardia!",
                    points: 0,
                    nextStep: "step_12"
                },
                {
                    id: "c",
                    text: "Solo patologie",
                    correct: false,
                    feedback: "⚠️ Serve COMPLETA: A-M-P-I-A!",
                    points: 8,
                    nextStep: "step_12"
                },
                {
                    id: "d",
                    text: "Solo farmaci",
                    correct: false,
                    feedback: "⚠️ Mancano A-P-I-A!",
                    points: 7,
                    nextStep: "step_12"
                }
            ]
        },
        
        // ===== COMUNICAZIONE SOREU =====
        {
            id: "step_13",
            phase: "COMUNICAZIONE SOREU",
            situation: "📞 Devi comunicare URGENTEMENTE con SOREU questa emergenza cardiologica.",
            question: "Cosa comunichi?",
            timeLimit: 45,
            choices: [
                {
                    id: "a",
                    text: "Donna cardiopalmo FC 170 (tachicardia severa!), ipertesa/ipertiroidea, primo episodio, FR 30, SpO2 95% con O2, PA 100/70 → EMERGENZA",
                    correct: true,
                    feedback: "✅ PERFETTO! SOREU allerta MSA urgente. Tachicardia 170 = emergenza cardiologica!",
                    points: 25,
                    nextStep: "step_14"
                },
                {
                    id: "b",
                    text: "Donna con cuore veloce",
                    correct: false,
                    feedback: "❌ Troppo vago! FC 170 è CRITICA, serve comunicazione dettagliata!",
                    points: 0,
                    nextStep: "step_14"
                },
                {
                    id: "c",
                    text: "Solo che ha tachicardia",
                    correct: false,
                    feedback: "❌ Mancano: FC esatta, parametri, patologie, MSA urgente!",
                    points: 5,
                    nextStep: "step_14"
                },
                {
                    id: "d",
                    text: "Chiedo MSA senza dare parametri",
                    correct: false,
                    feedback: "❌ SOREU decide urgenza DOPO aver ricevuto tutti i dati!",
                    points: 3,
                    nextStep: "step_14"
                }
            ]
        },
        
        // ===== FINALE =====
        {
            id: "step_14",
            phase: "RIVALUTAZIONE",
            situation: "⏱️ MSA in arrivo urgente. Devi stabilizzare e monitorare.",
            vitalSigns: {
                diagnosi: "Tachicardia severa (FC 170)"
            },
            question: "Cosa fai in attesa MSA?",
            timeLimit: 40,
            choices: [
                {
                    id: "a",
                    text: "Rivaluto ABCDE continuo, monitoro FC/SpO2/PA, mantengo O2, posizione seduta, tranquillizzo, preparo DAE se peggiora",
                    correct: true,
                    feedback: "✅ PERFETTO! Gestione ottimale aritmia severa. MSA potrà cardiovertire se necessario. SCENARIO COMPLETATO!",
                    points: 20,
                    nextStep: "end"
                },
                {
                    id: "b",
                    text: "Aspetto MSA senza fare nulla",
                    correct: false,
                    feedback: "❌ Devi monitorare CONTINUAMENTE! FC 170 può degenerare!",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "c",
                    text: "Faccio sdraiare la paziente",
                    correct: false,
                    feedback: "❌ Posizione SEDUTA è per respirare meglio (ortopnea)! Non modificare.",
                    points: 0,
                    nextStep: "end"
                },
                {
                    id: "d",
                    text: "Carico e parto verso ospedale",
                    correct: false,
                    feedback: "⚠️ Con FC 170 meglio attendere MSA che può intervenire farmacologicamente!",
                    points: 5,
                    nextStep: "end"
                }
            ]
        }
    ],
    
    // Scoring
    scoring: {
        maxScore: 280,
        thresholds: {
            excellent: 255,
            good: 225,
            sufficient: 195,
            insufficient: 0
        }
    }
};

window.scenario_06_cardiopalmo = scenario_06_cardiopalmo;
