// ========================================
// GESTIONE STATO APPLICAZIONE
// ========================================
const AppState = {
    currentQuiz: null,
    currentQuestionIndex: 0,
    questions: [],
    answers: [],
    timer: null,
    timeLeft: 10,
    score: 0,
    quizStartTime: null
};

// ========================================
// GESTIONE LOCAL STORAGE
// ========================================
const Storage = {
    saveProgress(quizId, score, total) {
        const stats = this.getStats();
        const quizKey = `quiz_${quizId}`;
        
        if (!stats[quizKey]) {
            stats[quizKey] = {
                attempts: 0,
                bestScore: 0,
                lastScore: 0,
                totalQuestions: total
            };
        }
        
        stats[quizKey].attempts++;
        stats[quizKey].lastScore = score;
        if (score > stats[quizKey].bestScore) {
            stats[quizKey].bestScore = score;
        }
        
        localStorage.setItem('quizStats', JSON.stringify(stats));
    },
    
    getStats() {
        const stats = localStorage.getItem('quizStats');
        return stats ? JSON.parse(stats) : {};
    },
    
    clearStats() {
        localStorage.removeItem('quizStats');
    }
};

// ========================================
// GESTIONE SCHERMATE
// ========================================
const Screen = {
    show(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        setTimeout(() => {
            document.getElementById(screenId).classList.add('active');
        }, 100);
    },
    
    showMenu() {
        this.show('menuScreen');
        this.resetQuizState();
    },
    
    showQuiz() {
        this.show('quizScreen');
    },
    
    showResults() {
        this.show('resultsScreen');
    },
    
    resetQuizState() {
        AppState.currentQuiz = null;
        AppState.currentQuestionIndex = 0;
        AppState.questions = [];
        AppState.answers = [];
        AppState.score = 0;
        AppState.timeLeft = 10;
        if (AppState.timer) {
            clearInterval(AppState.timer);
            AppState.timer = null;
        }
    }
};

// ========================================
// GESTIONE QUIZ
// ========================================
const Quiz = {
    // Carica le domande per un quiz specifico
    loadQuestions(quizId) {
        if (quizId === 'general') {
            return this.generateGeneralQuiz();
        }
        
        // Ottieni le domande dal quiz specifico
        const quizData = window[`capitolo${quizId}Questions`];
        
        if (!quizData || quizData.length === 0) {
            alert('Questo quiz non contiene ancora domande. Sarà disponibile a breve!');
            return null;
        }
        
        // Mescola le domande
        return this.shuffleArray([...quizData]);
    },
    
    // Genera il quiz generale con 50 domande casuali
    generateGeneralQuiz() {
        const allQuestions = [];
        
        // Raccogli tutte le domande da tutti i capitoli
        for (let i = 1; i <= 8; i++) {
            const quizData = window[`capitolo${i}Questions`];
            if (quizData && quizData.length > 0) {
                allQuestions.push(...quizData);
            }
        }
        
        if (allQuestions.length < 50) {
            alert(`Non ci sono abbastanza domande disponibili. Attualmente disponibili: ${allQuestions.length} domande.`);
            return null;
        }
        
        // Mescola e prendi le prime 50
        const shuffled = this.shuffleArray(allQuestions);
        return shuffled.slice(0, 50);
    },
    
    // Mescola un array (algoritmo Fisher-Yates)
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },
    
    // Avvia un quiz
    start(quizId) {
        AppState.currentQuiz = quizId;
        AppState.questions = this.loadQuestions(quizId);
        
        if (!AppState.questions) {
            return;
        }
        
        AppState.currentQuestionIndex = 0;
        AppState.answers = new Array(AppState.questions.length).fill(null);
        AppState.score = 0;
        AppState.quizStartTime = Date.now();
        
        Screen.showQuiz();
        this.displayQuestion();
    },
    
    // Mostra la domanda corrente
    displayQuestion() {
        const question = AppState.questions[AppState.currentQuestionIndex];
        const totalQuestions = AppState.questions.length;
        
        // Aggiorna progresso
        document.getElementById('questionProgress').textContent = 
            `Domanda ${AppState.currentQuestionIndex + 1} / ${totalQuestions}`;
        
        // Aggiorna barra progresso
        const progressPercentage = ((AppState.currentQuestionIndex + 1) / totalQuestions) * 100;
        document.getElementById('progressFill').style.width = `${progressPercentage}%`;
        
        // Mostra domanda
        document.getElementById('questionText').textContent = question.question;
        
        // Crea pulsanti risposta
        const answersContainer = document.getElementById('answersContainer');
        answersContainer.innerHTML = '';
        
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer-btn fade-in';
            button.textContent = answer;
            button.style.animationDelay = `${index * 0.1}s`;
            button.onclick = () => this.selectAnswer(index);
            answersContainer.appendChild(button);
        });
        
        // Avvia timer
        this.startTimer();
    },
    
    // Gestisce la selezione di una risposta
    selectAnswer(answerIndex) {
        // Ferma il timer
        this.stopTimer();
        
        const question = AppState.questions[AppState.currentQuestionIndex];
        const isCorrect = answerIndex === question.correctAnswer;
        
        // Salva risposta
        AppState.answers[AppState.currentQuestionIndex] = answerIndex;
        
        if (isCorrect) {
            AppState.score++;
        }
        
        // Mostra feedback visivo
        const buttons = document.querySelectorAll('.answer-btn');
        buttons.forEach((btn, idx) => {
            btn.classList.add('disabled');
            if (idx === question.correctAnswer) {
                btn.classList.add('correct');
            } else if (idx === answerIndex && !isCorrect) {
                btn.classList.add('wrong');
            }
        });
        
        // Passa alla prossima domanda dopo 1.5 secondi
        setTimeout(() => {
            this.nextQuestion();
        }, 1500);
    },
    
    // Passa alla domanda successiva o mostra i risultati
    nextQuestion() {
        AppState.currentQuestionIndex++;
        
        if (AppState.currentQuestionIndex < AppState.questions.length) {
            this.displayQuestion();
        } else {
            this.showResults();
        }
    },
    
    // Gestisce il timeout del timer
    handleTimeout() {
        this.stopTimer();
        
        // Considera come risposta errata
        AppState.answers[AppState.currentQuestionIndex] = -1;
        
        // Mostra la risposta corretta
        const question = AppState.questions[AppState.currentQuestionIndex];
        const buttons = document.querySelectorAll('.answer-btn');
        buttons.forEach((btn, idx) => {
            btn.classList.add('disabled');
            if (idx === question.correctAnswer) {
                btn.classList.add('correct');
            }
        });
        
        // Passa alla prossima domanda
        setTimeout(() => {
            this.nextQuestion();
        }, 1500);
    },
    
    // Avvia il timer
    startTimer() {
        AppState.timeLeft = 10;
        this.updateTimerDisplay();
        
        AppState.timer = setInterval(() => {
            AppState.timeLeft--;
            this.updateTimerDisplay();
            
            if (AppState.timeLeft <= 0) {
                this.handleTimeout();
            }
        }, 1000);
    },
    
    // Ferma il timer
    stopTimer() {
        if (AppState.timer) {
            clearInterval(AppState.timer);
            AppState.timer = null;
        }
    },
    
    // Aggiorna il display del timer
    updateTimerDisplay() {
        const timerText = document.getElementById('timerText');
        const timerCircle = document.getElementById('timerCircle');
        
        timerText.textContent = AppState.timeLeft;
        
        // Cambia colore in base al tempo rimanente
        timerCircle.classList.remove('warning', 'danger');
        if (AppState.timeLeft <= 3) {
            timerCircle.classList.add('danger');
        } else if (AppState.timeLeft <= 5) {
            timerCircle.classList.add('warning');
        }
    },
    
    // Mostra i risultati del quiz
    showResults() {
        const totalQuestions = AppState.questions.length;
        const correctAnswers = AppState.score;
        const wrongAnswers = totalQuestions - correctAnswers;
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);
        
        // Salva statistiche
        Storage.saveProgress(AppState.currentQuiz, correctAnswers, totalQuestions);
        
        // Aggiorna UI
        document.getElementById('scorePercentage').textContent = percentage;
        document.getElementById('correctAnswers').textContent = correctAnswers;
        document.getElementById('wrongAnswers').textContent = wrongAnswers;
        document.getElementById('totalQuestions').textContent = totalQuestions;
        
        // Anima l'anello del punteggio
        const circumference = 2 * Math.PI * 90;
        const offset = circumference - (percentage / 100) * circumference;
        document.getElementById('scoreRingProgress').style.strokeDashoffset = offset;
        
        // Messaggio personalizzato
        let message = '';
        if (percentage >= 90) {
            message = '🎉 Eccellente! Ottima conoscenza della materia!';
        } else if (percentage >= 75) {
            message = '👏 Molto bene! Buona preparazione!';
        } else if (percentage >= 60) {
            message = '👍 Discreto! Continua a studiare!';
        } else {
            message = '📚 Devi ripassare ancora un po\'!';
        }
        document.getElementById('resultMessage').textContent = message;
        
        Screen.showResults();
    }
};

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Pulsanti menu - avvio quiz
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const quizId = e.currentTarget.dataset.quiz;
            Quiz.start(quizId);
        });
    });
    
    // Pulsante back durante il quiz
    document.getElementById('backBtn').addEventListener('click', () => {
        if (confirm('Sei sicuro di voler tornare al menu? Il progresso andrà perso.')) {
            Screen.showMenu();
        }
    });
    
    // Pulsanti schermata risultati
    document.getElementById('retryBtn').addEventListener('click', () => {
        Quiz.start(AppState.currentQuiz);
    });
    
    document.getElementById('menuBtn').addEventListener('click', () => {
        Screen.showMenu();
    });
    
    // Pulsante cancella statistiche
    document.getElementById('clearStatsBtn').addEventListener('click', () => {
        if (confirm('Sei sicuro di voler cancellare tutte le statistiche?')) {
            Storage.clearStats();
            alert('Statistiche cancellate con successo!');
        }
    });
    
    // Previeni zoom su doppio tap (iOS)
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
});

// ========================================
// GESTIONE VISIBILITÀ PAGINA
// ========================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden && AppState.timer) {
        // Pausa il timer quando l'app va in background
        Quiz.stopTimer();
    }
});
