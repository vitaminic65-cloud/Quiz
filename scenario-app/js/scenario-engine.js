// ========================================
// SCENARIO ENGINE
// Gestisce l'esecuzione degli scenari
// ========================================

const ScenarioEngine = {
    currentScenario: null,
    currentStepIndex: 0,
    totalScore: 0,
    userChoices: [],
    timer: null,
    timeLeft: 0,
    
    // Inizializza scenario
    init(scenarioData) {
        this.currentScenario = scenarioData;
        this.currentStepIndex = 0;
        this.totalScore = 0;
        this.userChoices = [];
        this.showBriefing();
    },
    
    // Mostra briefing iniziale
    showBriefing() {
        document.getElementById('scenarioTitle').textContent = this.currentScenario.code + ": " + this.currentScenario.title;
        document.getElementById('centralCall').textContent = this.currentScenario.briefing.centralCall;
        document.getElementById('msaMsiCheck').textContent = this.currentScenario.briefing.msaMsi ? "✅" : "❌";
        document.getElementById('foCheck').textContent = this.currentScenario.briefing.forzeOrdine ? "✅" : "❌";
        
        document.getElementById('scenarioBriefing').style.display = 'block';
        document.getElementById('scenarioInProgress').style.display = 'none';
        document.getElementById('scenarioResults').style.display = 'none';
    },
    
    // Inizia scenario
    start() {
        document.getElementById('scenarioBriefing').style.display = 'none';
        document.getElementById('scenarioInProgress').style.display = 'block';
        this.showStep(0);
    },
    
    // Mostra step corrente
    showStep(stepIndex) {
        if (stepIndex >= this.currentScenario.steps.length) {
            this.showResults();
            return;
        }
        
        const step = this.currentScenario.steps[stepIndex];
        this.currentStepIndex = stepIndex;
        
        // Update header
        document.getElementById('currentPhase').textContent = step.phase;
        document.getElementById('currentScore').textContent = this.totalScore;
        
        // Situation
        document.getElementById('situationPhase').textContent = step.phase;
        document.getElementById('situationText').textContent = step.situation;
        
        // Vital signs (se presenti)
        if (step.vitalSigns) {
            document.getElementById('vitalSignsBox').style.display = 'block';
            let vitalHTML = '';
            for (const [key, value] of Object.entries(step.vitalSigns)) {
                vitalHTML += `<div><strong>${key}:</strong> ${value}</div>`;
            }
            document.getElementById('vitalSignsContent').innerHTML = vitalHTML;
        } else {
            document.getElementById('vitalSignsBox').style.display = 'none';
        }
        
        // Question
        document.getElementById('questionText').textContent = step.question;
        
        // Timer (se presente)
        if (step.timeLimit && step.timeLimit > 0) {
            document.getElementById('timerBox').style.display = 'flex';
            this.startTimer(step.timeLimit);
        } else {
            document.getElementById('timerBox').style.display = 'none';
        }
        
        // Choices
        this.renderChoices(step.choices);
        
        // Hide feedback
        document.getElementById('feedbackBox').style.display = 'none';
    },
    
    // Render scelte
    renderChoices(choices) {
        const container = document.getElementById('choicesContainer');
        container.innerHTML = '';
        
        choices.forEach((choice, index) => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = `${choice.id.toUpperCase()}) ${choice.text}`;
            btn.onclick = () => this.selectChoice(choice);
            container.appendChild(btn);
        });
    },
    
    // Seleziona risposta
    selectChoice(choice) {
        this.stopTimer();
        
        // Disabilita tutti i pulsanti
        document.querySelectorAll('.choice-btn').forEach(btn => {
            btn.classList.add('disabled');
            btn.onclick = null;
        });
        
        // Salva scelta
        this.userChoices.push({
            stepId: this.currentScenario.steps[this.currentStepIndex].id,
            choiceId: choice.id,
            correct: choice.correct,
            points: choice.points
        });
        
        // Aggiorna punteggio
        this.totalScore += choice.points;
        document.getElementById('currentScore').textContent = this.totalScore;
        
        // Mostra feedback
        this.showFeedback(choice);
    },
    
    // Mostra feedback
    showFeedback(choice) {
        const feedbackBox = document.getElementById('feedbackBox');
        const icon = document.getElementById('feedbackIcon');
        const text = document.getElementById('feedbackText');
        const consequence = document.getElementById('consequenceText');
        
        // Icona e colore
        if (choice.correct) {
            icon.textContent = '✅';
            icon.style.color = 'var(--success)';
        } else {
            icon.textContent = '❌';
            icon.style.color = 'var(--error)';
        }
        
        text.textContent = choice.feedback;
        
        if (choice.consequence) {
            consequence.textContent = '💭 ' + choice.consequence;
            consequence.style.display = 'block';
        } else {
            consequence.style.display = 'none';
        }
        
        feedbackBox.style.display = 'block';
        
        // Scroll to feedback
        setTimeout(() => {
            feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    },
    
    // Continua al prossimo step
    continue() {
        const currentStep = this.currentScenario.steps[this.currentStepIndex];
        const lastChoice = this.userChoices[this.userChoices.length - 1];
        
        // Trova il prossimo step
        const selectedChoice = currentStep.choices.find(c => c.id === lastChoice.choiceId);
        
        if (selectedChoice.nextStep === 'end') {
            this.showResults();
        } else {
            // Trova l'indice del prossimo step
            const nextStepId = selectedChoice.nextStep;
            const nextIndex = this.currentScenario.steps.findIndex(s => s.id === nextStepId);
            
            if (nextIndex !== -1) {
                this.showStep(nextIndex);
            } else {
                // Se non trova lo step successivo, va al prossimo nell'array
                this.showStep(this.currentStepIndex + 1);
            }
        }
    },
    
    // Timer
    startTimer(seconds) {
        this.timeLeft = seconds;
        this.updateTimerDisplay();
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 0) {
                this.handleTimeout();
            }
        }, 1000);
    },
    
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    },
    
    updateTimerDisplay() {
        const display = document.getElementById('timerDisplay');
        display.textContent = this.timeLeft + 's';
        
        if (this.timeLeft <= 5) {
            display.style.color = 'var(--error)';
        } else if (this.timeLeft <= 10) {
            display.style.color = 'var(--warning)';
        }
    },
    
    handleTimeout() {
        this.stopTimer();
        // Timeout = scelta errata automatica con 0 punti
        alert('⏰ Tempo scaduto! Devi decidere più velocemente in un intervento reale.');
        const currentStep = this.currentScenario.steps[this.currentStepIndex];
        const firstChoice = currentStep.choices[0];
        this.selectChoice({
            ...firstChoice,
            correct: false,
            points: 0,
            feedback: '⏰ Tempo scaduto! Troppo lento nella decisione.'
        });
    },
    
    // Mostra risultati finali
    showResults() {
        document.getElementById('scenarioInProgress').style.display = 'none';
        document.getElementById('scenarioResults').style.display = 'block';
        
        const maxScore = this.currentScenario.scoring.maxScore;
        const percentage = Math.round((this.totalScore / maxScore) * 100);
        
        document.getElementById('finalScore').textContent = this.totalScore;
        document.getElementById('scorePercentage').textContent = percentage + '%';
        
        // Badge performance
        let badge, label, emoji;
        if (percentage >= 90) {
            badge = '🏆';
            label = 'ECCELLENTE';
            emoji = '🎉';
        } else if (percentage >= 80) {
            badge = '⭐';
            label = 'OTTIMO';
            emoji = '🎯';
        } else if (percentage >= 70) {
            badge = '👍';
            label = 'BUONO';
            emoji = '👏';
        } else if (percentage >= 60) {
            badge = '📚';
            label = 'SUFFICIENTE';
            emoji = '🤔';
        } else {
            badge = '📖';
            label = 'DA MIGLIORARE';
            emoji = '💪';
        }
        
        document.getElementById('performanceBadge').textContent = badge;
        document.getElementById('performanceLabel').textContent = label;
        document.getElementById('resultsEmoji').textContent = emoji;
        
        // Feedback
        this.generateFeedback();
        
        // Confetti se 90%+
        if (percentage >= 90 && typeof confetti !== 'undefined') {
            setTimeout(() => {
                confetti({
                    particleCount: 150,
                    spread: 80,
                    origin: { y: 0.6 }
                });
            }, 500);
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    
    // Genera feedback personalizzato
    generateFeedback() {
        const strengthsList = document.getElementById('strengthsList');
        const improveList = document.getElementById('improveList');
        
        strengthsList.innerHTML = '';
        improveList.innerHTML = '';
        
        // Analizza le scelte
        let correctChoices = 0;
        let phases = {};
        
        this.userChoices.forEach(choice => {
            if (choice.correct) correctChoices++;
            
            const step = this.currentScenario.steps.find(s => s.id === choice.stepId);
            if (step) {
                if (!phases[step.phase]) {
                    phases[step.phase] = { correct: 0, total: 0 };
                }
                phases[step.phase].total++;
                if (choice.correct) phases[step.phase].correct++;
            }
        });
        
        // Punti di forza
        const strengths = [];
        for (const [phase, data] of Object.entries(phases)) {
            if (data.correct / data.total >= 0.8) {
                strengths.push(`Ottima gestione fase: ${phase}`);
            }
        }
        
        if (correctChoices / this.userChoices.length >= 0.9) {
            strengths.push('Eccellente capacità decisionale');
        }
        
        if (strengths.length === 0) {
            strengths.push('Hai completato lo scenario');
        }
        
        strengths.forEach(s => {
            const li = document.createElement('li');
            li.textContent = s;
            strengthsList.appendChild(li);
        });
        
        // Aree di miglioramento
        const improvements = [];
        for (const [phase, data] of Object.entries(phases)) {
            if (data.correct / data.total < 0.6) {
                improvements.push(`Ripassa la fase: ${phase}`);
            }
        }
        
        if (improvements.length === 0) {
            improvements.push('Continua così! Ripeti lo scenario per perfezionarti');
        }
        
        improvements.forEach(i => {
            const li = document.createElement('li');
            li.textContent = i;
            improveList.appendChild(li);
        });
    },
    
    // Reset scenario
    reset() {
        this.currentStepIndex = 0;
        this.totalScore = 0;
        this.userChoices = [];
        this.stopTimer();
        this.showBriefing();
    },
    
    // Exit
    exit() {
        if (confirm('Sei sicuro di voler uscire? Il progresso andrà perso.')) {
            window.location.href = 'index.html';
        }
    }
};

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Rileva quale scenario caricare dall'URL
    const urlParams = new URLSearchParams(window.location.search);
    const scenarioId = urlParams.get('scenario');
    
    let scenarioToLoad;
    
    if (scenarioId === '01') {
        scenarioToLoad = window.scenario_01_abuso_alcoolico;
    } else if (scenarioId === '02') {
        scenarioToLoad = window.scenario_02_tuffo_scogli;
    } else if (scenarioId === '03') {
        scenarioToLoad = window.scenario_03_donna_gravida;
    } else if (scenarioId === '04') {
        scenarioToLoad = window.scenario_04_diabete_ipoglicemia;
    } else if (scenarioId === '05') {
        scenarioToLoad = window.scenario_05_dolore_addominale;
    } else if (scenarioId === '06') {
        scenarioToLoad = window.scenario_06_cardiopalmo;
    } else if (scenarioId === '07') {
        scenarioToLoad = window.scenario_07_ipertensione;
    } else if (scenarioId === '08') {
        scenarioToLoad = window.scenario_08_ima;
    } else if (scenarioId === '09') {
        scenarioToLoad = window.scenario_09_ima2;
    } else if (scenarioId === '10') {
        scenarioToLoad = window.scenario_10_rosc;
    } else if (scenarioId === '11') {
        scenarioToLoad = window.scenario_11_convulsiva;
    } else if (scenarioId === '12') {
        scenarioToLoad = window.scenario_12_ictus;
    } else if (scenarioId === '13') {
        scenarioToLoad = window.scenario_13_co_ragazza;
    } else if (scenarioId === '14') {
        scenarioToLoad = window.scenario_14_co_uomo;
    } else if (scenarioId === '15') {
        scenarioToLoad = window.scenario_15_polmonite;
    } else if (scenarioId === '16') {
        scenarioToLoad = window.scenario_16_edema_polmonare;
    } else if (scenarioId === '17') {
        scenarioToLoad = window.scenario_17_asma;
    } else if (scenarioId === '18') {
        scenarioToLoad = window.scenario_18_allergia;
    } else {
        // Default: scenario 01
        scenarioToLoad = window.scenario_01_abuso_alcoolico;
    }
    
    // Carica lo scenario selezionato
    ScenarioEngine.init(scenarioToLoad);
    
    // Start scenario
    document.getElementById('startScenarioBtn').addEventListener('click', () => {
        ScenarioEngine.start();
    });
    
    // Continue
    document.getElementById('continueBtn').addEventListener('click', () => {
        ScenarioEngine.continue();
    });
    
    // Exit
    document.getElementById('exitScenarioBtn').addEventListener('click', () => {
        ScenarioEngine.exit();
    });
    
    // Retry
    document.getElementById('retryScenarioBtn').addEventListener('click', () => {
        ScenarioEngine.reset();
    });
    
    // Back to menu
    document.getElementById('backToMenuBtn').addEventListener('click', () => {
        window.location.href = 'menu-scenari.html';
    });
});
