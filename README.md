# Quiz di Addestramento - Web App

## 📁 Struttura del Progetto

```
quiz-app/
│
├── index.html              # File principale HTML
├── css/
│   └── style.css          # Stili CSS dell'applicazione
├── js/
│   ├── app.js             # Logica principale dell'applicazione
│   └── quizzes/           # Cartella contenente i quiz
│       ├── capitolo1.js   # Domande Capitolo 1 (con 3 domande esempio)
│       ├── capitolo2.js   # Domande Capitolo 2 (vuoto)
│       ├── capitolo3.js   # Domande Capitolo 3 (vuoto)
│       ├── capitolo4.js   # Domande Capitolo 4 (vuoto)
│       ├── capitolo5.js   # Domande Capitolo 5 (vuoto)
│       ├── capitolo6.js   # Domande Capitolo 6 (vuoto)
│       ├── capitolo7.js   # Domande Capitolo 7 (vuoto)
│       └── capitolo8.js   # Domande Capitolo 8 (vuoto)
└── README.md              # Questo file
```

## 🚀 Deploy su Netlify

### Metodo 1: Drag & Drop
1. Vai su https://app.netlify.com/
2. Trascina l'intera cartella `quiz-app` nell'area di upload
3. Il sito sarà pubblicato automaticamente

### Metodo 2: GitHub
1. Carica il progetto su GitHub
2. Collega il repository a Netlify
3. Deploy automatico ad ogni push

## ✏️ Come Aggiungere Nuove Domande

### Aggiungere domande a un Capitolo Esistente

1. Apri il file del capitolo desiderato (es. `js/quizzes/capitolo1.js`)
2. Trova l'array delle domande
3. Copia il template fornito nel file
4. Compila il template con la nuova domanda
5. Assicurati di aggiungere una virgola dopo l'ultima domanda esistente

**Esempio:**

```javascript
const capitolo1Questions = [
    {
        question: "Domanda esistente?",
        answers: ["A", "B", "C", "D"],
        correctAnswer: 0
    },  // ← VIRGOLA IMPORTANTE!
    {
        question: "NUOVA DOMANDA QUI?",
        answers: [
            "Risposta A",
            "Risposta B",
            "Risposta C",
            "Risposta D"
        ],
        correctAnswer: 1  // 0=A, 1=B, 2=C, 3=D
    }
];
```

### Indicare la Risposta Corretta

L'indice `correctAnswer` parte da **0**:
- `0` = Risposta A (prima risposta)
- `1` = Risposta B (seconda risposta)
- `2` = Risposta C (terza risposta)
- `3` = Risposta D (quarta risposta)

### Esempio Completo

```javascript
{
    question: "Qual è la capitale d'Italia?",
    answers: [
        "Milano",      // Indice 0
        "Roma",        // Indice 1 ← CORRETTA
        "Napoli",      // Indice 2
        "Torino"       // Indice 3
    ],
    correctAnswer: 1   // Roma è corretta
}
```

## 🆕 Come Aggiungere Nuove Dispense/Capitoli

Se in futuro vuoi aggiungere un **Capitolo 9, 10, 11, ecc.**:

### 1. Crea il file JavaScript

Crea un nuovo file: `js/quizzes/capitolo9.js`

```javascript
const capitolo9Questions = [
    {
        question: "Domanda del capitolo 9?",
        answers: ["A", "B", "C", "D"],
        correctAnswer: 0
    }
    // Aggiungi altre domande...
];

window.capitolo9Questions = capitolo9Questions;
```

### 2. Aggiungi il file all'index.html

Apri `index.html` e aggiungi lo script prima della chiusura `</body>`:

```html
<script src="js/quizzes/capitolo9.js"></script>
```

### 3. Aggiungi il pulsante nel menu

Nell'`index.html`, trova la sezione `<div class="menu-buttons">` e aggiungi:

```html
<button class="menu-btn" data-quiz="9">
    <span class="quiz-number">09</span>
    <span class="quiz-title">Capitolo 9</span>
</button>
```

### 4. Aggiorna il Quiz Generale

Il quiz generale raccoglierà **automaticamente** le domande dal nuovo capitolo.
Non serve modificare altro codice!

## 🎯 Come Funziona il Quiz Generale

Il quiz generale:
1. Raccoglie tutte le domande da **tutti i capitoli** (1-8)
2. Le mescola casualmente
3. Seleziona le prime **50 domande**
4. Se ci sono meno di 50 domande totali, mostra un avviso

**Non devi fare nulla di speciale** - basta inserire domande nei singoli capitoli e il quiz generale le troverà automaticamente.

## 📱 Funzionalità Implementate

✅ **8 Quiz Specifici** - Uno per ogni capitolo  
✅ **Quiz Generale** - 50 domande casuali da tutti i capitoli  
✅ **Timer 10 Secondi** - Conta alla rovescia con feedback visivo  
✅ **Domande Mescolate** - Ad ogni avvio del quiz  
✅ **Barra Progresso** - "Domanda X / Totale"  
✅ **Feedback Visivo** - Verde per corrette, rosso per errate  
✅ **Risultati Finali** - Con punteggio e percentuale  
✅ **Salvataggio Statistiche** - Usa localStorage per salvare i progressi  
✅ **Mobile-First** - Ottimizzato per smartphone  
✅ **Timeout Automatico** - Se il timer scade, conta come errore  
✅ **Design Moderno** - Interfaccia pulita e professionale

## 🔧 Personalizzazioni Possibili

### Modificare il Tempo del Timer

Apri `js/app.js` e cerca questa riga (circa riga 8):

```javascript
timeLeft: 10,  // Cambia questo numero
```

E anche nella funzione `startTimer()` (circa riga 181):

```javascript
AppState.timeLeft = 10;  // Cambia anche qui
```

### Modificare il Numero di Domande del Quiz Generale

Apri `js/app.js` e cerca la funzione `generateGeneralQuiz()` (circa riga 68):

```javascript
return shuffled.slice(0, 50);  // Cambia 50 con il numero desiderato
```

### Cambiare i Colori

Apri `css/style.css` e modifica le variabili CSS all'inizio del file:

```css
:root {
    --primary-color: #2563eb;     /* Colore principale */
    --secondary-color: #10b981;   /* Colore secondario */
    --error-color: #ef4444;       /* Colore errore */
    /* ... */
}
```

## 📝 Note Importanti

- **Nessuna dipendenza esterna**: L'app funziona completamente offline dopo il primo caricamento
- **Compatibilità**: Funziona su tutti i browser moderni (Chrome, Safari, Firefox, Edge)
- **Performance**: Progettata per gestire centinaia di domande senza problemi
- **Responsive**: Si adatta automaticamente a smartphone, tablet e desktop

## 🐛 Troubleshooting

### Il quiz non parte
- Controlla che ci siano almeno 1 domanda nel capitolo
- Verifica che l'indice `correctAnswer` sia tra 0 e 3
- Controlla la console del browser per errori (F12)

### Le domande non appaiono
- Verifica che il file del capitolo sia correttamente linkato in `index.html`
- Assicurati che l'ultima riga del file sia `window.capitoloXQuestions = capitoloXQuestions;`
- Controlla che non ci siano virgole mancanti tra le domande

### Il timer non funziona
- Verifica che JavaScript sia abilitato nel browser
- Controlla che non ci siano errori nella console

## 📞 Supporto

Per problemi o domande, controlla che:
1. Tutti i file siano nella struttura corretta
2. Non ci siano errori di sintassi JavaScript
3. I nomi dei file corrispondano esattamente a quelli indicati

## 📄 Licenza

Progetto educativo - Uso libero
