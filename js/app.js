// ========================================
// QUIZ APP ULTIMATE - VERSIONE 3.0
// ========================================

// ========================================
// GESTIONE STATO APPLICAZIONE
// ========================================
const AppState = {
    currentQuiz: null,
    currentQuestionIndex: 0,
    questions: [],
    answers: [],
    wrongQuestions: [],
    timer: null,
    timeLeft: 10,
    timerDuration: 10,
    score: 0,
    quizStartTime: null,
    soundEnabled: true,
    userName: null
};

// ========================================
// SISTEMA SUONI
// ========================================
const Sounds = {
    correct: null,
    wrong: null,
    
    init() {
        // Crea suoni sintetici (no file esterni)
        this.correct = this.createBeep(800, 0.1, 'sine');
        this.wrong = this.createBeep(200, 0.2, 'sawtooth');
    },
    
    createBeep(frequency, duration, type = 'sine') {
        return () => {
            if (!AppState.soundEnabled) return;
            
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = type;
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + duration);
        };
    },
    
    play(type) {
        if (this[type]) {
            this[type]();
        }
    }
};

// ========================================
// SISTEMA ACHIEVEMENTS/BADGES
// ========================================
const Badges = {
    definitions: [
        { id: 'perfect', name: 'Perfezionista', icon: '💯', desc: '100% di risposte corrette', condition: (score, total) => score === total },
        { id: 'speed90', name: 'Velocista', icon: '⚡', desc: 'Completato in meno di 5 min', condition: (score, total, time) => time < 300000 },
        { id: 'streak7', name: 'Settimana di Fuoco', icon: '🔥', desc: '7 giorni consecutivi', condition: () => Streak.get() >= 7 },
        { id: 'streak30', name: 'Mese di Fuoco', icon: '🌟', desc: '30 giorni consecutivi', condition: () => Streak.get() >= 30 },
        { id: 'first_quiz', name: 'Primo Passo', icon: '🎓', desc: 'Completato il primo quiz', condition: () => true },
        { id: 'master', name: 'Maestro', icon: '👑', desc: '90%+ su tutti i capitoli', condition: () => Stats.checkMasterStatus() }
    ],
    
    check(score, total, duration) {
        const unlocked = [];
        const current = this.getUnlocked();
        
        this.definitions.forEach(badge => {
            if (!current.includes(badge.id) && badge.condition(score, total, duration)) {
                unlocked.push(badge);
                current.push(badge.id);
            }
        });
        
        if (unlocked.length > 0) {
            localStorage.setItem('unlockedBadges', JSON.stringify(current));
        }
        
        return unlocked;
    },
    
    getUnlocked() {
        return JSON.parse(localStorage.getItem('unlockedBadges') || '[]');
    },
    
    display() {
        const unlocked = this.getUnlocked();
        const container = document.getElementById('badgesContainer');
        const list = document.getElementById('badgesList');
        
        if (unlocked.length === 0) {
            container.style.display = 'none';
            return;
        }
        
        container.style.display = 'block';
        list.innerHTML = '';
        
        unlocked.forEach(id => {
            const badge = this.definitions.find(b => b.id === id);
            if (badge) {
                const el = document.createElement('div');
                el.className = 'badge-item';
                el.innerHTML = `
                    <span class="badge-icon">${badge.icon}</span>
                    <span class="badge-name">${badge.name}</span>
                `;
                el.title = badge.desc;
                list.appendChild(el);
            }
        });
    }
};

// ========================================
// SISTEMA STREAK (GIORNI CONSECUTIVI)
// ========================================
const Streak = {
    update() {
        const today = new Date().toDateString();
        const data = this.getData();
        
        if (data.lastDate === today) {
            return data.count;
        }
        
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toDateString();
        
        if (data.lastDate === yesterdayStr) {
            data.count++;
        } else {
            data.count = 1;
        }
        
        data.lastDate = today;
        localStorage.setItem('streak', JSON.stringify(data));
        this.display();
        
        return data.count;
    },
    
    get() {
        return this.getData().count;
    },
    
    getData() {
        return JSON.parse(localStorage.getItem('streak') || '{"count":0,"lastDate":""}');
    },
    
    display() {
        const count = this.get();
        const badge = document.getElementById('streakBadge');
        const countEl = document.getElementById('streakCount');
        
        if (count > 0) {
            badge.style.display = 'flex';
            countEl.textContent = count;
        } else {
            badge.style.display = 'none';
        }
    }
};

// ========================================
// SISTEMA STATISTICHE CAPITOLI
// ========================================
const Stats = {
    save(chapter, score, total) {
        if (!chapter || chapter === 'general' || chapter === 'speed' || chapter === 'review') return;
        
        const stats = this.getAll();
        if (!stats[chapter]) {
            stats[chapter] = { attempts: 0, bestScore: 0, bestPercentage: 0 };
        }
        
        stats[chapter].attempts++;
        const percentage = Math.round((score / total) * 100);
        
        if (percentage > stats[chapter].bestPercentage) {
            stats[chapter].bestScore = score;
            stats[chapter].bestPercentage = percentage;
        }
        
        localStorage.setItem('chapterStats', JSON.stringify(stats));
        this.updateProgressRings();
    },
    
    getAll() {
        return JSON.parse(localStorage.getItem('chapterStats') || '{}');
    },
    
    get(chapter) {
        return this.getAll()[chapter] || { attempts: 0, bestScore: 0, bestPercentage: 0 };
    },
    
    checkMasterStatus() {
        const stats = this.getAll();
        const chapters = Object.keys(stats);
        if (chapters.length < 8) return false;
        
        return chapters.every(ch => stats[ch].bestPercentage >= 90);
    },
    
    updateProgressRings() {
        const stats = this.getAll();
        document.querySelectorAll('.progress-ring-fill').forEach(circle => {
            const chapter = circle.getAttribute('data-chapter');
            const stat = stats[chapter];
            
            if (stat && stat.bestPercentage > 0) {
                const circumference = 87.96;
                const offset = circumference - (stat.bestPercentage / 100) * circumference;
                circle.style.strokeDashoffset = offset;
            }
        });
    }
};

// ========================================
// GESTIONE ERRORI PER REVISIONE
// ========================================
const ErrorReview = {
    save(wrongQuestions) {
        localStorage.setItem('reviewQuestions', JSON.stringify(wrongQuestions));
        this.updateButton();
    },
    
    get() {
        return JSON.parse(localStorage.getItem('reviewQuestions') || '[]');
    },
    
    clear() {
        localStorage.removeItem('reviewQuestions');
        this.updateButton();
    },
    
    updateButton() {
        const questions = this.get();
        const btn = document.getElementById('reviewErrorsBtn');
        const count = document.getElementById('reviewCount');
        
        if (questions.length > 0) {
            btn.style.display = 'flex';
            count.textContent = `${questions.length} domande`;
        } else {
            btn.style.display = 'none';
        }
    }
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
        localStorage.removeItem('chapterStats');
        localStorage.removeItem('unlockedBadges');
        localStorage.removeItem('streak');
        localStorage.removeItem('reviewQuestions');
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
        Stats.updateProgressRings();
        Badges.display();
        ErrorReview.updateButton();
    },
    
    showQuiz() {
        this.show('quizScreen');
    },
    
    showResults() {
        this.show('resultsScreen');
    },
    
    resetQuizState() {
        if (AppState.timer) {
            clearInterval(AppState.timer);
            AppState.timer = null;
        }
        
        AppState.currentQuiz = null;
        AppState.currentQuestionIndex = 0;
        AppState.questions = [];
        AppState.answers = [];
        AppState.wrongQuestions = [];
        AppState.score = 0;
        AppState.timeLeft = AppState.timerDuration;
        
        // Reset sfondo
        document.body.style.background = '';
    }
};

// ========================================
// GESTIONE TEMA
// ========================================
const Theme = {
    init() {
        const saved = localStorage.getItem('theme') || 'light';
        if (saved === 'dark') {
            document.body.classList.add('dark-mode');
        }
    },
    
    toggle() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
};

// ========================================
// MODAL TIMER SETTINGS
// ========================================
const TimerModal = {
    selectedQuiz: null,
    
    show(quizId) {
        this.selectedQuiz = quizId;
        document.getElementById('timerModal').classList.add('active');
    },
    
    hide() {
        document.getElementById('timerModal').classList.remove('active');
    },
    
    selectTime(time) {
        document.querySelectorAll('.timer-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        event.target.closest('.timer-option').classList.add('selected');
        AppState.timerDuration = parseInt(time);
        AppState.timeLeft = parseInt(time);
    },
    
    start() {
        this.hide();
        Quiz.start(this.selectedQuiz);
    }
};

// ========================================
// GESTIONE QUIZ
// ========================================
const Quiz = {
    loadQuestions(quizId) {
        if (quizId === 'general') {
            return this.generateGeneralQuiz();
        }
        
        if (quizId === 'speed') {
            return this.generateSpeedQuiz();
        }
        
        if (quizId === 'review') {
            return this.generateReviewQuiz();
        }
        
        const quizData = window[`capitolo${quizId}Questions`];
        
        if (!quizData || quizData.length === 0) {
            alert('Questo quiz non contiene ancora domande!');
            return null;
        }
        
        let selectedQuestions;
        
        if (quizData.length < 20) {
            selectedQuestions = [...quizData];
        } else {
            const shuffled = this.shuffleArray([...quizData]);
            selectedQuestions = shuffled.slice(0, 20);
        }
        
        return this.shuffleArray(selectedQuestions);
    },
    
    generateGeneralQuiz() {
        const allQuestions = [];
        
        for (let i = 1; i <= 8; i++) {
            const quizData = window[`capitolo${i}Questions`];
            if (quizData && quizData.length > 0) {
                allQuestions.push(...quizData);
            }
        }
        
        if (allQuestions.length === 0) {
            alert('Nessuna domanda disponibile!');
            return null;
        }
        
        if (allQuestions.length < 50) {
            return this.shuffleArray(allQuestions);
        }
        
        const shuffled = this.shuffleArray(allQuestions);
        return shuffled.slice(0, 50);
    },
    
    generateSpeedQuiz() {
        const allQuestions = [];
        
        for (let i = 1; i <= 8; i++) {
            const quizData = window[`capitolo${i}Questions`];
            if (quizData && quizData.length > 0) {
                allQuestions.push(...quizData);
            }
        }
        
        if (allQuestions.length < 5) {
            alert('Non ci sono abbastanza domande disponibili!');
            return null;
        }
        
        const shuffled = this.shuffleArray(allQuestions);
        return shuffled.slice(0, 5);
    },
    
    generateReviewQuiz() {
        const questions = ErrorReview.get();
        
        if (questions.length === 0) {
            alert('Non ci sono errori da ripassare!');
            return null;
        }
        
        return this.shuffleArray([...questions]);
    },
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },
    
    start(quizId) {
        this.stopTimer();
        
        AppState.currentQuiz = quizId;
        AppState.questions = this.loadQuestions(quizId);
        
        if (!AppState.questions) {
            return;
        }
        
        AppState.currentQuestionIndex = 0;
        AppState.answers = new Array(AppState.questions.length).fill(null);
        AppState.wrongQuestions = [];
        AppState.score = 0;
        AppState.quizStartTime = Date.now();
        
        // Nascondi timer se durata = 0
        const timerContainer = document.getElementById('timerContainer');
        if (AppState.timerDuration === 0) {
            timerContainer.classList.add('hidden');
        } else {
            timerContainer.classList.remove('hidden');
        }
        
        Screen.showQuiz();
        this.displayQuestion();
    },
    
    displayQuestion() {
        const question = AppState.questions[AppState.currentQuestionIndex];
        const totalQuestions = AppState.questions.length;
        
        document.getElementById('questionProgress').textContent = 
            `Domanda ${AppState.currentQuestionIndex + 1} / ${totalQuestions}`;
        
        const progressPercentage = ((AppState.currentQuestionIndex + 1) / totalQuestions) * 100;
        document.getElementById('progressFill').style.width = `${progressPercentage}%`;
        
        document.getElementById('questionText').textContent = question.question;
        
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
        
        if (AppState.timerDuration > 0) {
            this.startTimer();
        }
    },
    
    selectAnswer(answerIndex) {
        this.stopTimer();
        
        const question = AppState.questions[AppState.currentQuestionIndex];
        const isCorrect = answerIndex === question.correctAnswer;
        
        AppState.answers[AppState.currentQuestionIndex] = answerIndex;
        
        if (isCorrect) {
            AppState.score++;
            Sounds.play('correct');
        } else {
            AppState.wrongQuestions.push(question);
            Sounds.play('wrong');
        }
        
        const buttons = document.querySelectorAll('.answer-btn');
        buttons.forEach((btn, idx) => {
            btn.classList.add('disabled');
            btn.onclick = null;
            
            if (idx === question.correctAnswer) {
                btn.classList.add('correct');
            } else if (idx === answerIndex && !isCorrect) {
                btn.classList.add('wrong');
            }
        });
        
        setTimeout(() => {
            this.nextQuestion();
        }, 1500);
    },
    
    nextQuestion() {
        AppState.currentQuestionIndex++;
        
        if (AppState.currentQuestionIndex < AppState.questions.length) {
            this.displayQuestion();
        } else {
            this.showResults();
        }
    },
    
    handleTimeout() {
        if (!AppState.timer) return;
        
        this.stopTimer();
        
        const question = AppState.questions[AppState.currentQuestionIndex];
        AppState.answers[AppState.currentQuestionIndex] = -1;
        AppState.wrongQuestions.push(question);
        
        Sounds.play('wrong');
        
        const buttons = document.querySelectorAll('.answer-btn');
        buttons.forEach((btn, idx) => {
            btn.classList.add('disabled');
            btn.onclick = null;
            
            if (idx === question.correctAnswer) {
                btn.classList.add('correct');
            }
        });
        
        setTimeout(() => {
            this.nextQuestion();
        }, 1500);
    },
    
    startTimer() {
        this.stopTimer();
        
        AppState.timeLeft = AppState.timerDuration;
        this.updateTimerDisplay();
        
        AppState.timer = setInterval(() => {
            AppState.timeLeft--;
            this.updateTimerDisplay();
            
            if (AppState.timeLeft <= 0) {
                this.handleTimeout();
            }
        }, 1000);
    },
    
    stopTimer() {
        if (AppState.timer) {
            clearInterval(AppState.timer);
            AppState.timer = null;
        }
    },
    
    updateTimerDisplay() {
        const timerText = document.getElementById('timerText');
        const timerCircle = document.getElementById('timerCircle');
        
        if (!timerText || !timerCircle) return;
        
        timerText.textContent = AppState.timeLeft;
        
        const circumference = 2 * Math.PI * 26;
        const offset = circumference - (AppState.timeLeft / AppState.timerDuration) * circumference;
        timerCircle.style.strokeDashoffset = offset;
        
        timerCircle.classList.remove('warning', 'danger');
        if (AppState.timeLeft <= 3) {
            timerCircle.classList.add('danger');
        } else if (AppState.timeLeft <= 5) {
            timerCircle.classList.add('warning');
        }
    },
    
    showResults() {
        this.stopTimer();
        
        const totalQuestions = AppState.questions.length;
        const correctAnswers = AppState.score;
        const wrongAnswers = totalQuestions - correctAnswers;
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);
        const duration = Date.now() - AppState.quizStartTime;
        
        // Salva statistiche
        Storage.saveProgress(AppState.currentQuiz, correctAnswers, totalQuestions);
        
        // Salva progresso capitolo
        const quizNum = parseInt(AppState.currentQuiz);
        if (!isNaN(quizNum) && quizNum >= 1 && quizNum <= 8) {
            Stats.save(quizNum.toString(), correctAnswers, totalQuestions);
        }
        
        // Salva errori
        if (AppState.wrongQuestions.length > 0) {
            ErrorReview.save(AppState.wrongQuestions);
        }
        
        // Aggiorna streak
        Streak.update();
        
        // Controlla badges
        const newBadges = Badges.check(correctAnswers, totalQuestions, duration);
        
        // Aggiorna UI
        document.getElementById('scorePercentage').textContent = percentage;
        document.getElementById('correctAnswers').textContent = correctAnswers;
        document.getElementById('wrongAnswers').textContent = wrongAnswers;
        document.getElementById('totalQuestions').textContent = totalQuestions;
        
        const circumference = 2 * Math.PI * 100;
        const offset = circumference - (percentage / 100) * circumference;
        document.getElementById('scoreRingProgress').style.strokeDashoffset = offset;
        
        // Messaggi motivazionali (STILE MEDICO)
        let message = '';
        if (percentage >= 90) {
            message = '🚑 Codice Verde! Sei pronto per il campo, dottore!';
        } else if (percentage >= 75) {
            message = '💉 Diagnosi: Bravo! Prescrizione: Continua così!';
        } else if (percentage >= 60) {
            message = '🩺 Paziente stabile ma richiede ulteriore monitoraggio!';
        } else {
            message = '🚨 Codice Rosso! Rianimazione urgente con le dispense!';
        }
        document.getElementById('resultMessage').textContent = message;
        
        // Sfondo dinamico basato su punteggio
        if (percentage >= 90) {
            document.body.style.background = 'linear-gradient(135deg, #10B981, #059669)';
        } else if (percentage >= 75) {
            document.body.style.background = 'linear-gradient(135deg, #3B82F6, #2563EB)';
        } else if (percentage >= 60) {
            document.body.style.background = 'linear-gradient(135deg, #F59E0B, #D97706)';
        } else {
            document.body.style.background = 'linear-gradient(135deg, #EF4444, #DC2626)';
        }
        
        // Mostra pulsante revisione errori
        const reviewBtn = document.getElementById('reviewErrorsResultBtn');
        const errorsCount = document.getElementById('errorsCountBtn');
        if (wrongAnswers > 0) {
            reviewBtn.style.display = 'flex';
            errorsCount.textContent = wrongAnswers;
        } else {
            reviewBtn.style.display = 'none';
        }
        
        // Mostra badge sbloccato
        if (newBadges.length > 0) {
            const alert = document.getElementById('newBadgeAlert');
            const badgeEl = document.getElementById('unlockedBadge');
            alert.style.display = 'block';
            badgeEl.innerHTML = `
                <span class="unlocked-badge-icon">${newBadges[0].icon}</span>
                <span class="unlocked-badge-name">${newBadges[0].name}</span>
            `;
        } else {
            document.getElementById('newBadgeAlert').style.display = 'none';
        }
        
        // Confetti per punteggi alti!
        if (percentage >= 90 && typeof confetti !== 'undefined') {
            setTimeout(() => {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }, 500);
        }
        
        Screen.showResults();
    }
};


// ========================================
// INIZIALIZZAZIONE E EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Inizializza sistemi
    Theme.init();
    Sounds.init();
    Streak.display();
    Stats.updateProgressRings();
    Badges.display();
    ErrorReview.updateButton();
    
    // Saluto personalizzato
    const userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('userGreeting').textContent = `Ciao ${userName}! Seleziona un quiz`;
    }
    
    // Toggle tema
    document.getElementById('themeToggle').addEventListener('click', () => {
        Theme.toggle();
    });
    
    // Toggle suoni
    document.getElementById('soundToggle').addEventListener('click', (e) => {
        AppState.soundEnabled = !AppState.soundEnabled;
        e.currentTarget.classList.toggle('sound-off');
        localStorage.setItem('soundEnabled', AppState.soundEnabled);
    });
    
    // Ripristina impostazioni suoni
    const savedSound = localStorage.getItem('soundEnabled');
    if (savedSound === 'false') {
        AppState.soundEnabled = false;
        document.getElementById('soundToggle').classList.add('sound-off');
    }
    
    // Pulsanti menu - Mostra modal timer
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const quizId = e.currentTarget.dataset.quiz;
            TimerModal.show(quizId);
        });
    });
    
    // Opzioni timer nel modal
    document.querySelectorAll('.timer-option').forEach(opt => {
        opt.addEventListener('click', (e) => {
            const time = e.currentTarget.dataset.time;
            TimerModal.selectTime(time);
        });
    });
    
    // Avvia quiz dal modal
    document.getElementById('startQuizBtn').addEventListener('click', () => {
        TimerModal.start();
    });
    
    // Chiudi modal cliccando fuori
    document.getElementById('timerModal').addEventListener('click', (e) => {
        if (e.target.id === 'timerModal') {
            TimerModal.hide();
        }
    });
    
    // Pulsante back durante il quiz
    document.getElementById('backBtn').addEventListener('click', () => {
        if (confirm('Sei sicuro? Il progresso andrà perso.')) {
            Screen.showMenu();
        }
    });
    
    // Pulsanti schermata risultati
    document.getElementById('retryBtn').addEventListener('click', () => {
        Quiz.start(AppState.currentQuiz);
    });
    
    document.getElementById('reviewErrorsResultBtn').addEventListener('click', () => {
        TimerModal.show('review');
    });
    
    document.getElementById('menuBtn').addEventListener('click', () => {
        Screen.showMenu();
    });
    
    // Pulsante cancella statistiche
    document.getElementById('clearStatsBtn').addEventListener('click', () => {
        if (confirm('Cancellare TUTTE le statistiche, badges e progressi?')) {
            Storage.clearStats();
            Stats.updateProgressRings();
            Badges.display();
            ErrorReview.updateButton();
            Streak.display();
            alert('Statistiche cancellate!');
        }
    });
    
    // Previeni zoom doppio tap (iOS)
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
        Quiz.stopTimer();
    }
});

