// ========================================
// SCENARIO 01: ABUSO ALCOOLICO
// Scenario interattivo fedele alla scheda AREU
// ========================================

const scenario_01_abuso_alcoolico = {
    id: "scenario_01",
    code: "MEDICO_01",
    title: "ABUSO ALCOOLICO (rifiuta trasporto)",
    category: "Emergenza Medica",
    difficulty: "Media",
    estimatedTime: "15-20 minuti",
    
    // Info iniziali dalla centrale
    briefing: {
        centralCall: "Uomo agitato in un bar in via Roma. Sembra ubriaco e sta disturbando i clienti. Il gestore del locale chiede un intervento urgente.",
        msaMsi: false,
        forzeOrdine: false
    },
    
    // Steps dello scenario - ABCDE fedele
    steps: [
        // PRE-ARRIVO
        {
            id: "step_01",
            phase: "PRE-ARRIVO",
            situation: "🚑 Sei in ambulanza con il tuo team, diretti verso il locale in via Roma.",
            question: "Cosa fai durante il tragitto?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Preparo la barella e l'ossigeno per il trasporto",
                    correct: false,
                    feedback: "⚠️ È prematuro. Prima devi organizzare il team e valutare la scena.",
                    points: 3,
                    nextStep: "step_02"
                },
                {
                    id: "b",
                    text: "Assegno gli incarichi al team e preparo i DPI",
                    correct: true,
                    feedback: "✅ Ottimo! La preparazione del team e l'autoprotezione sono fondamentali.",
                    points: 10,
                    nextStep: "step_02"
                },
                {
                    id: "c",
                    text: "Richiamo la centrale per avere maggiori dettagli sul paziente",
                    correct: false,
                    feedback: "⚠️ Le informazioni ricevute sono già sufficienti per partire. Usa il tempo per preparare il team.",
                    points: 2,
                    nextStep: "step_02"
                },
                {
                    id: "d",
                    text: "Controllo che il materiale di emergenza sia pronto nel borsone",
                    correct: false,
                    feedback: "⚠️ Parzialmente corretto, ma l'assegnazione incarichi ha priorità maggiore.",
                    points: 5,
                    nextStep: "step_02"
                }
            ]
        },
        
        // VALUTAZIONE SCENA
        {
            id: "step_02",
            phase: "VALUTAZIONE SCENA",
            situation: "📍 Arrivi davanti al locale. Senti urlare dall'interno. Il gestore esce incontrandoti.",
            question: "Cosa fai PRIMA di entrare?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Entro immediatamente nel locale per raggiungere il paziente",
                    correct: false,
                    feedback: "❌ Mai entrare prima di valutare la scena e raccogliere informazioni!",
                    points: 0,
                    nextStep: "step_03"
                },
                {
                    id: "b",
                    text: "Chiedo al gestore una descrizione dettagliata della situazione",
                    correct: true,
                    feedback: "✅ Corretto! La valutazione della scena e raccolta informazioni sono priorità.",
                    points: 10,
                    nextStep: "step_03"
                },
                {
                    id: "c",
                    text: "Osservo la scena dall'esterno per valutare eventuali pericoli",
                    correct: false,
                    feedback: "⚠️ Giusto osservare, ma è più efficace chiedere prima al gestore cosa è successo.",
                    points: 5,
                    nextStep: "step_03"
                },
                {
                    id: "d",
                    text: "Chiamo subito le Forze dell'Ordine come supporto",
                    correct: false,
                    feedback: "❌ Prematuro. Prima devi valutare la situazione reale.",
                    points: 0,
                    nextStep: "step_03"
                }
            ]
        },
        
        // GESTORE
        {
            id: "step_03",
            phase: "VALUTAZIONE SCENA",
            situation: "💬 Gestore: \"C'è un uomo molto agitato. Ha bevuto troppo e infastidisce i clienti!\"",
            question: "Cosa fai ora prima di avvicinarti al paziente?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Entro nel locale senza DPI per non perdere tempo",
                    correct: false,
                    feedback: "❌ I DPI sono obbligatori! Non si entra mai senza autoprotezione.",
                    points: 0,
                    nextStep: "step_04"
                },
                {
                    id: "b",
                    text: "Indosso i DPI completi e faccio un 'colpo d'occhio' entrando",
                    correct: true,
                    feedback: "✅ Perfetto! Autoprotezione e osservazione rapida della scena.",
                    points: 10,
                    nextStep: "step_04"
                },
                {
                    id: "c",
                    text: "Indosso solo i guanti e entro per fare prima",
                    correct: false,
                    feedback: "❌ I DPI devono essere completi (guanti, mascherina, eventuale camice).",
                    points: 2,
                    nextStep: "step_04"
                },
                {
                    id: "d",
                    text: "Chiedo al gestore di far uscire il paziente all'esterno",
                    correct: false,
                    feedback: "⚠️ Con un paziente agitato e ubriaco è rischioso. Meglio gestirlo dove si trova.",
                    points: 3,
                    nextStep: "step_04"
                }
            ]
        },
        
        // COLPO D'OCCHIO
        {
            id: "step_04",
            phase: "VALUTAZIONE SCENA",
            situation: "👀 Entri nel locale. Vedi: uomo ~50 anni in piedi al bancone, urla, bicchiere in mano, barcolla. Forte odore alcool.",
            vitalSigns: { aspetto: "Agitato, odore alcool" },
            question: "Completi la valutazione della scena. Cosa verifichi?",
            timeLimit: 20,
            choices: [
                {
                    id: "a",
                    text: "Verifico la presenza di ostacoli al trasporto (porta, gradini, spazi)",
                    correct: true,
                    feedback: "✅ Ottimo! Completamento corretto della valutazione della scena.",
                    points: 10,
                    nextStep: "step_05"
                },
                {
                    id: "b",
                    text: "Mi avvicino subito al paziente per calmarlo",
                    correct: false,
                    feedback: "❌ Prima completa la valutazione della scena, poi approccio al paziente!",
                    points: 0,
                    nextStep: "step_05"
                },
                {
                    id: "c",
                    text: "Conto quante persone ci sono nel locale",
                    correct: false,
                    feedback: "⚠️ Non prioritario. Focus su ostacoli per eventuale trasporto.",
                    points: 3,
                    nextStep: "step_05"
                },
                {
                    id: "d",
                    text: "Chiedo agli altri clienti cosa è successo",
                    correct: false,
                    feedback: "⚠️ Hai già le info dal gestore. Ora devi completare valutazione scena (ostacoli).",
                    points: 2,
                    nextStep: "step_05"
                }
            ]
        },
        
        // FASE A
        {
            id: "step_05",
            phase: "A - VIE AEREE",
            situation: "👤 Ti avvicini. Occhi lucidi, viso arrossato, forte odore alcool.",
            vitalSigns: { coscienza: "Vigile (A)" },
            question: "Come ti presenti e approcci il paziente?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "\"Buongiorno, sono un soccorritore. Come si sente? Sono qui per aiutarla\"",
                    correct: true,
                    feedback: "✅ Perfetto! Ti presenti, ti qualifichi e mostri disponibilità.",
                    points: 15,
                    nextStep: "step_06"
                },
                {
                    id: "b",
                    text: "\"Salve, mi chiamo Marco. Il gestore ci ha chiamato, può venire con noi?\"",
                    correct: false,
                    feedback: "⚠️ Manca la qualifica professionale e l'approccio è troppo diretto.",
                    points: 5,
                    nextStep: "step_06"
                },
                {
                    id: "c",
                    text: "\"Signore, deve venire in ospedale. Ha bevuto troppo\"",
                    correct: false,
                    feedback: "❌ Troppo autoritario e giudicante! Rischi di agitarlo ulteriormente.",
                    points: 0,
                    nextStep: "step_06"
                },
                {
                    id: "d",
                    text: "Cerco di togliergli gentilmente il bicchiere dalle mani",
                    correct: false,
                    feedback: "❌ Mai iniziare con azioni fisiche prima di stabilire contatto verbale!",
                    points: 0,
                    nextStep: "step_06"
                }
            ]
        },
        
        // RISPOSTA PAZIENTE
        {
            id: "step_06",
            phase: "A - VIE AEREE",
            situation: "🗣️ Paziente: \"Ehilà! Tu sì che sei simpatico!\" Fa complimenti inappropriati. Tiene il bicchiere.",
            vitalSigns: { vie_aeree: "Pervie", linguaggio: "Disartrico" },
            question: "Valuti le vie aeree. Come procedi?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Vie aeree pervie, passo alla fase B",
                    correct: true,
                    feedback: "✅ Corretto! Paziente cosciente, vie aeree pervie.",
                    points: 10,
                    nextStep: "step_07"
                },
                {
                    id: "b",
                    text: "Cerco di fargli sputare qualcosa",
                    correct: false,
                    feedback: "❌ Non c'è ostruzione!",
                    points: 0,
                    nextStep: "step_07"
                }
            ]
        },
        
        // FASE B
        {
            id: "step_07",
            phase: "B - RESPIRO",
            situation: "🫁 Osservi il torace espandersi regolarmente mentre parla.",
            vitalSigns: { respiro: "Normale, regolare" },
            question: "Valuti il respiro?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Osservo la meccanica respiratoria",
                    correct: true,
                    feedback: "✅ Corretto! Respiro normale.",
                    points: 10,
                    nextStep: "step_08"
                },
                {
                    id: "b",
                    text: "Non è necessario",
                    correct: false,
                    feedback: "❌ Valutazione obbligatoria!",
                    points: 0,
                    nextStep: "step_08"
                }
            ]
        },
        
        // SATURIMETRO
        {
            id: "step_08",
            phase: "B - RESPIRO",
            situation: "📊 Tenti il saturimetro. Inizialmente rifiuta, poi dopo insistenze gentili accetta.",
            question: "Applichi il saturimetro?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Sì, insisto con gentilezza",
                    correct: true,
                    feedback: "✅ Ottimo! SpO₂ 99% in aria ambiente.",
                    points: 15,
                    nextStep: "step_09"
                },
                {
                    id: "b",
                    text: "No, se rifiuta non insisto",
                    correct: false,
                    feedback: "❌ Parametro importante!",
                    points: 0,
                    nextStep: "step_09"
                }
            ]
        },
        
        // FASE C
        {
            id: "step_09",
            phase: "C - CIRCOLO",
            situation: "💓 Tenti di rilevare il polso radiale.",
            vitalSigns: { SpO2: "99%" },
            question: "Come procedi?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Prendo il polso radiale",
                    correct: true,
                    feedback: "⚠️ Ritira il braccio: \"Non mi toccare!\" Minaccia di andarsene, barcolla.",
                    points: 5,
                    nextStep: "step_10"
                },
                {
                    id: "b",
                    text: "Valuto solo visivamente",
                    correct: false,
                    feedback: "⚠️ Tenta sempre la rilevazione.",
                    points: 3,
                    nextStep: "step_10"
                }
            ]
        },
        
        // FASE D
        {
            id: "step_10",
            phase: "D - NEUROLOGICO",
            situation: "🧠 Valuti lo stato di coscienza AVPU.",
            vitalSigns: { comportamento: "Vigile, agitato, ostile" },
            question: "Come classifichi il paziente?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "A - Alert (Vigile/Sveglio)",
                    correct: true,
                    feedback: "✅ Corretto! Cosciente e vigile.",
                    points: 15,
                    nextStep: "step_11"
                },
                {
                    id: "b",
                    text: "V - Verbal",
                    correct: false,
                    feedback: "❌ È già sveglio!",
                    points: 0,
                    nextStep: "step_11"
                }
            ]
        },
        
        // DIALOGO
        {
            id: "step_11",
            phase: "D - NEUROLOGICO",
            situation: "🗣️ Cerchi di parlare per valutare orientamento.",
            question: "Cosa chiedi?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "\"Che giorno è oggi?\"",
                    correct: true,
                    feedback: "⚠️ Paziente: \"Ma che vuoi?! Lasciami in pace!\" Diventa ostile.",
                    points: 10,
                    nextStep: "step_12"
                },
                {
                    id: "b",
                    text: "Non chiedo nulla",
                    correct: false,
                    feedback: "❌ Tenta sempre il dialogo!",
                    points: 0,
                    nextStep: "step_12"
                }
            ]
        },
        
        // FASE E
        {
            id: "step_12",
            phase: "E - ESAME OBIETTIVO",
            situation: "👁️ Osservi aspetto generale: barcolla, parla sconnesso.",
            vitalSigns: { aspetto: "Agitato, odore alcool, ~50 anni" },
            question: "Cosa noti?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Agitato, odore alcool, barcolla, ~50 anni",
                    correct: true,
                    feedback: "✅ Perfetta osservazione!",
                    points: 15,
                    nextStep: "step_13"
                },
                {
                    id: "b",
                    text: "Nulla di particolare",
                    correct: false,
                    feedback: "❌ Evidenti segni intossicazione!",
                    points: 0,
                    nextStep: "step_13"
                }
            ]
        },
        
        // ANAMNESI
        {
            id: "step_13",
            phase: "E - ANAMNESI",
            situation: "📝 Barista: \"Cliente abituale. Noto alcolista. Oggi ha bevuto troppo.\"",
            question: "Raccogli anamnesi AMPIA?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Sì, chiedo allergie, patologie, farmaci",
                    correct: true,
                    feedback: "⚠️ Risponde confuso e minaccia: \"Non vengo con voi! Sto bene!\"",
                    points: 10,
                    nextStep: "step_14"
                },
                {
                    id: "b",
                    text: "No, è inutile",
                    correct: false,
                    feedback: "❌ Anamnesi sempre necessaria!",
                    points: 0,
                    nextStep: "step_14"
                }
            ]
        },
        
        // RIFIUTO
        {
            id: "step_14",
            phase: "GESTIONE CRITICITÀ",
            situation: "🚫 Paziente rifiuta: \"Non vengo! Sto benissimo!\" Continua a barcollare.",
            vitalSigns: { decisione: "Compromessa da alcool" },
            question: "Come gestisci il rifiuto?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Rispetto il rifiuto e me ne vado",
                    correct: false,
                    feedback: "❌ Paziente alterato, rifiuto non valido!",
                    points: 0,
                    nextStep: "step_15"
                },
                {
                    id: "b",
                    text: "Contatto SOREU e spiego situazione",
                    correct: true,
                    feedback: "✅ Corretto! Informare centrale è fondamentale.",
                    points: 20,
                    nextStep: "step_15"
                }
            ]
        },
        
        // SOREU
        {
            id: "step_15",
            phase: "COMUNICAZIONE SOREU",
            situation: "📞 Contatti la SOREU per riferire.",
            question: "Cosa comunichi?",
            timeLimit: 45,
            choices: [
                {
                    id: "a",
                    text: "Solo che rifiuta",
                    correct: false,
                    feedback: "❌ Serve comunicazione completa!",
                    points: 0,
                    nextStep: "step_16"
                },
                {
                    id: "b",
                    text: "Coscienza (A-vigile), SpO₂ 99%, ostile, alcolista, rifiuta",
                    correct: true,
                    feedback: "✅ Perfetto! Comunicazione completa. SOREU invia Forze Ordine.",
                    points: 20,
                    nextStep: "step_16"
                }
            ]
        },
        
        // ATTESA
        {
            id: "step_16",
            phase: "RIVALUTAZIONE",
            situation: "📞 SOREU: \"Forze Ordine in arrivo. Rimanete e monitorate.\"",
            question: "Cosa fai in attesa?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Torno in ambulanza",
                    correct: false,
                    feedback: "❌ Devi rimanere e monitorare!",
                    points: 0,
                    nextStep: "step_17"
                },
                {
                    id: "b",
                    text: "Rimango vicino, monitoro ABCDE, dialogo",
                    correct: true,
                    feedback: "✅ Perfetto! Monitoraggio costante.",
                    points: 20,
                    nextStep: "step_17"
                }
            ]
        },
        
        // FINALE
        {
            id: "step_17",
            phase: "CONSEGNA",
            situation: "👮 Forze Ordine arrivano. Con loro supporto, paziente accetta trasporto.",
            question: "Come consegni il paziente?",
            timeLimit: 30,
            choices: [
                {
                    id: "a",
                    text: "Riferisco tutto: ABCDE, parametri, ostilità, rifiuto, anamnesi",
                    correct: true,
                    feedback: "✅ SCENARIO COMPLETATO! Consegna completa e professionale!",
                    points: 20,
                    nextStep: "end"
                },
                {
                    id: "b",
                    text: "\"È ubriaco, ecco tutto\"",
                    correct: false,
                    feedback: "❌ Consegna deve essere dettagliata!",
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
            good: 160,
            sufficient: 140,
            insufficient: 0
        }
    }
};

window.scenario_01_abuso_alcoolico = scenario_01_abuso_alcoolico;
