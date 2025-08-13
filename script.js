// Configuración inicial
document.addEventListener('DOMContentLoaded', () => {
    // Ocultar pantalla de carga cuando todo esté listo
    setTimeout(() => {
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            initParticles();
            initGame();
        }, 1000);
    }, 2000);
});

// Inicializar partículas de fondo
function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: { value: 30, density: { enable: true, value_area: 800 } },
            color: { value: "#ff6b8b" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffb3c1", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });
}

// Variables del juego
let currentLevel = 0;
const totalLevels = 4;
let gameData = {
    forest: { score: 0, totalQuestions: 5 },
    maze: { attempts: 0, matches: 0, totalPairs: 8 },
    gallery: { revealed: 0, totalMessages: 12 }
};

// Preguntas para el Bosque de los Recuerdos
const questions = [
    {
        question: "¿Cuál fue nuestro primer viaje juntos?",
        options: ["A la playa", "A las montañas", "A la ciudad", "No hemos viajado aún"],
        answer: 1
    },
    {
        question: "¿Qué canción nos recuerda a nuestros primeros meses?",
        options: ["Perfect - Ed Sheeran", "Bailando - Enrique Iglesias", "Otra canción especial", "No tenemos una canción"],
        answer: 0
    },
    {
        question: "¿Cuál es mi comida favorita que tú preparas?",
        options: ["Pasta", "Ensalada", "Postre especial", "Todo lo que cocinas"],
        answer: 3
    },
    {
        question: "¿Qué momento nuestro te hizo sentir más amada/o?",
        options: ["Nuestro primer beso", "Cuando te apoyé en un momento difícil", "Ese detalle inesperado", "Todos los días contigo"],
        answer: 2
    },
    {
        question: "Si pudieras describir nuestro amor en una palabra, sería:",
        options: ["Pasión", "Complicidad", "Aventura", "Todo lo anterior"],
        answer: 3
    }
];

// Mensajes para la Galería de los Susurros
const loveMessages = [
    "Te quiero como se ama el primer rayo de sol en la mañana... con esperanza y calidez.",
    "Te quiero en silencio, cuando miro hacia otro lado y sonrío sin razón.",
    "Te quiero como se ama un café perfecto: reconfortante e indispensable.",
    "Te quiero con la intensidad de un atardecer en verano.",
    "Te quiero como se ama un libro favorito: siempre encontrando algo nuevo.",
    "Te quiero como se ama el olor a lluvia... fresco, nostálgico y lleno de vida.",
    "Te quiero como se ama un abrazo después de un mal día.",
    "Te quiero como se ama la canción que nunca cansa.",
    "Te quiero como se ama un secreto compartido a medianoche.",
    "Te quiero como se ama el silencio cómodo entre viejos amigos.",
    "Te quiero como si fueras mi lugar favorito en el mundo.",
    "Te quiero como se ama un viaje sin mapa... emocionante e incierto, pero siempre valioso.",
    "Te quiero como se ama el primer día de vacaciones: lleno de posibilidades.",
    "Te quiero como se ama el último bocado del postre más delicioso.",
    "Te quiero como se ama la manta favorita en una noche fría.",
    "Te quiero como se ama el viejo libro de páginas amarillentas.",
    "Te quiero como se ama la luz tenue de las velas en la intimidad.",
    "Te quiero como se ama el jardín secreto que pocos conocen.",
    "Te quiero como se ama el poema escrito en la primera página de un diario nuevo.",
    "Te quiero como se ama el momento en que todas las piezas del rompecabezas encajan.",
    "Te quiero como se ama la Vía Láctea en una noche despejada de verano.",
    "Te quiero como se ama la nota sostenida que hace cerrar los ojos.",
    "Te quiero como se ama la última vela que se niega a apagarse.",
    "Te quiero como se ama el libro que releemos aunque conozcamos el final.",
    "Te quiero como se ama la llave que abre la puerta que nadie más puede abrir.",
    "Te quiero como se ama el mar cuando cambia de azul a plateado al atardecer.",
    "Te quiero como se ama la paz después de una larga tormenta.",
    "Te quiero como se ama el hechizo que no debería funcionar... pero funciona.",
    "Te quiero como se ama la fórmula alquímica que convierte lo ordinario en oro.",
    "Te quiero como se ama el manuscrito perdido de un autor amado.",
    "Te quiero como se ama la llave maestra que abre todos los corazones.",
    "Te quiero como se ama el deseo hecho a las estrellas en una noche de agosto.",
    "Te quiero como se ama el amuleto que protegía a los antiguos viajeros.",
    "Te quiero como se ama la respuesta al enigma que nadie podía resolver.",
    "Te quiero como se ama el último fragmento del mapa del tesoro.",
    "Te quiero como se ama la gema perfecta que brilla con luz propia.",
    "Te quiero como se ama la rosa que florece contra todo pronóstico.",
    "Te quiero más que a todos mis recuerdos favoritos juntos.",
    "Eres el enigma que prefiero no resolver.",
    "Te quiero como se guarda el mejor regalo para el momento perfecto.",
    "Has encontrado uno de mis 'Te quiero' más preciados.",
    "Te quiero como se ama la tinta fresca en papel nuevo.",
    "Te quiero como se ama el norte en un mar sin horizonte.",
    "Te quiero como se ama un juramento hecho bajo la luna llena.",
    "Te quiero como se ama un futuro que aún no se revela.",
    "Te quiero como se ama la solución a todos los acertijos.",
    "Te quiero como se ama un tesoro que pocos pueden apreciar."
];

// Inicializar el juego
function initGame() {
    // Configurar botón de inicio
    document.getElementById('start-btn').addEventListener('click', startGame);
    
    // Configurar botones finales
    document.getElementById('final-yes').addEventListener('click', () => {
        createHearts(30);
        showFinalMessage("¡Sabía que dirías que sí! Porque nuestro amor está escrito en las estrellas ✨");
    });
    
    document.getElementById('final-no').addEventListener('click', () => {
        createHearts(20);
        showFinalMessage("¡Ja! Como si tuvieras opción. Te quiero demasiado para dejarte escapar ❤️");
    });
    
    // Reproducir música de fondo (opcional)
    const bgMusic = document.getElementById('background-music');
    bgMusic.volume = 0.3;
    document.addEventListener('click', () => {
        bgMusic.play().catch(e => console.log("La reproducción automática fue bloqueada"));
    }, { once: true });
}

// Comenzar el juego
function startGame() {
    currentLevel = 1;
    document.getElementById('start-screen').classList.remove('active');
    loadLevel(currentLevel);
}

// Cargar nivel específico
function loadLevel(level) {
    // Ocultar todos los niveles
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Cargar nivel específico
    switch(level) {
        case 1:
            loadForestLevel();
            break;
        case 2:
            loadMazeLevel();
            break;
        case 3:
            loadGalleryLevel();
            break;
        case 4:
            loadFinalLevel();
            break;
    }
}

// Nivel 1: Bosque de los Recuerdos
function loadForestLevel() {
    const levelElement = document.getElementById('forest-level');
    levelElement.classList.add('active');
    
    // Mostrar primera pregunta
    showQuestion(0);
}

function showQuestion(index) {
    if (index >= questions.length) {
        // Nivel completado
        gameData.forest.score = questions.length;
        updateForestProgress();
        setTimeout(() => {
            currentLevel = 2;
            loadLevel(currentLevel);
        }, 1500);
        return;
    }
    
    const question = questions[index];
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, i) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(i, question.answer, index));
        optionsContainer.appendChild(button);
    });
    
    // Actualizar progreso
    gameData.forest.score = index;
    updateForestProgress();
}

function checkAnswer(selected, correct, questionIndex) {
    const options = document.querySelectorAll('.option-btn');
    
    if (selected === correct) {
        // Respuesta correcta
        options[selected].style.background = '#a1e6a1';
        options[selected].style.borderColor = '#4caf50';
        options[selected].style.color = 'white';
        
        gameData.forest.score = questionIndex + 1;
        updateForestProgress();
        
        setTimeout(() => {
            showQuestion(questionIndex + 1);
        }, 1000);
    } else {
        // Respuesta incorrecta
        options[selected].style.background = '#ff9e9e';
        options[selected].style.borderColor = '#f44336';
        options[selected].style.color = 'white';
        
        // Mostrar la correcta
        options[correct].style.background = '#a1e6a1';
        options[correct].style.borderColor = '#4caf50';
        options[correct].style.color = 'white';
        
        setTimeout(() => {
            showQuestion(questionIndex + 1);
        }, 1500);
    }
}

function updateForestProgress() {
    const progress = (gameData.forest.score / gameData.forest.totalQuestions) * 100;
    document.getElementById('forest-progress').style.width = `${progress}%`;
    document.getElementById('forest-counter').textContent = `${gameData.forest.score}/${gameData.forest.totalQuestions}`;
    
    if (gameData.forest.score === gameData.forest.totalQuestions) {
        createHearts(10);
    }
}

// Nivel 2: Laberinto de los Secretos
function loadMazeLevel() {
    const levelElement = document.getElementById('maze-level');
    levelElement.classList.add('active');
    
    // Crear pares para el juego de memoria
    const symbols = ['🌹', '💌', '📷', '🎶', '🍽️', '🎁', '✈️', '🎭'];
    const pairs = [...symbols, ...symbols];
    
    // Barajar los pares
    for (let i = pairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
    }
    
    const mazeGrid = document.getElementById('maze-game');
    mazeGrid.innerHTML = '';
    
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
    
    pairs.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.className = 'maze-card';
        card.dataset.symbol = symbol;
        card.dataset.index = index;
        
        card.addEventListener('click', () => flipCard(card));
        mazeGrid.appendChild(card);
    });
    
    function flipCard(card) {
        if (lockBoard || card === firstCard || card.classList.contains('matched')) return;
        
        card.textContent = card.dataset.symbol;
        card.classList.add('flipped');
        
        if (!firstCard) {
            firstCard = card;
            return;
        }
        
        secondCard = card;
        gameData.maze.attempts++;
        document.getElementById('attempts').textContent = gameData.maze.attempts;
        
        checkForMatch();
    }
    
    function checkForMatch() {
        const isMatch = firstCard.dataset.symbol === secondCard.dataset.symbol;
        
        if (isMatch) {
            disableCards();
            gameData.maze.matches++;
            document.getElementById('matches').textContent = `${gameData.maze.matches}/${gameData.maze.totalPairs}`;
            
            if (gameData.maze.matches === gameData.maze.totalPairs) {
                // Nivel completado
                setTimeout(() => {
                    currentLevel = 3;
                    loadLevel(currentLevel);
                }, 1500);
            }
        } else {
            unflipCards();
        }
    }
    
    function disableCards() {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        
        resetBoard();
    }
    
    function unflipCards() {
        lockBoard = true;
        
        setTimeout(() => {
            firstCard.textContent = '';
            secondCard.textContent = '';
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            
            resetBoard();
        }, 1000);
    }
    
    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }
    
    // Actualizar contadores
    document.getElementById('attempts').textContent = gameData.maze.attempts;
    document.getElementById('matches').textContent = `${gameData.maze.matches}/${gameData.maze.totalPairs}`;
}

// Nivel 3: Galería de los Susurros
function loadGalleryLevel() {
    const levelElement = document.getElementById('gallery-level');
    levelElement.classList.add('active');
    
    // Seleccionar 12 mensajes aleatorios
    const selectedMessages = [];
    const usedIndices = new Set();
    
    while (selectedMessages.length < gameData.gallery.totalMessages) {
        const randomIndex = Math.floor(Math.random() * loveMessages.length);
        if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            selectedMessages.push(loveMessages[randomIndex]);
        }
    }
    
    const galleryGrid = document.getElementById('gallery-grid');
    galleryGrid.innerHTML = '';
    
    selectedMessages.forEach((message, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.index = index;
        
        const icon = document.createElement('div');
        icon.className = 'icon';
        icon.textContent = ['💖', '🌹', '✨', '📜', '🔐', '🎀', '🌸', '💌', '🔮', '🧿', '💎', '🗝️'][index % 12];
        
        const msg = document.createElement('div');
        msg.className = 'message';
        msg.textContent = message;
        
        item.appendChild(icon);
        item.appendChild(msg);
        
        item.addEventListener('click', () => revealMessage(item, index));
        galleryGrid.appendChild(item);
    });
    
    // Actualizar contador
    updateGalleryCounter();
}

function revealMessage(item, index) {
    if (item.classList.contains('revealed')) return;
    
    item.classList.add('revealed');
    gameData.gallery.revealed++;
    updateGalleryCounter();
    
    createHearts(2);
    
    if (gameData.gallery.revealed === gameData.gallery.totalMessages) {
        // Nivel completado
        setTimeout(() => {
            currentLevel = 4;
            loadLevel(currentLevel);
        }, 2000);
    }
}

function updateGalleryCounter() {
    const progress = (gameData.gallery.revealed / gameData.gallery.totalMessages) * 100;
    document.getElementById('gallery-progress').style.width = `${progress}%`;
    document.getElementById('gallery-counter').textContent = `${gameData.gallery.revealed}/${gameData.gallery.totalMessages}`;
    
    if (gameData.gallery.revealed === gameData.gallery.totalMessages) {
        createHearts(15);
    }
}

// Nivel Final: Cielo de las Promesas
function loadFinalLevel() {
    const levelElement = document.getElementById('final-level');
    levelElement.classList.add('active');
    
    const finalMessage = document.getElementById('final-message');
    finalMessage.innerHTML = `
        <p>Has completado nuestro mapa del amor...</p>
        <p>En el Bosque de los Recuerdos, revivimos nuestros momentos especiales.</p>
        <p>En el Laberinto de los Secretos, encontramos las piezas que nos unen.</p>
        <p>En la Galería de los Susurros, descubriste todos los "Te quiero" que escondí para ti.</p>
        <p>Y ahora hemos llegado al Cielo de las Promesas...</p>
    `;
    
    createHearts(20);
    setTimeout(() => {
        document.getElementById('final-question').style.display = 'block';
    }, 5000);
}

function showFinalMessage(message) {
    const finalMessage = document.getElementById('final-message');
    finalMessage.innerHTML = `<p>${message}</p>`;
    document.getElementById('final-question').style.display = 'none';
}

// Efectos especiales
function createHearts(count) {
    const container = document.getElementById('hearts-container');
    
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.innerHTML = '❤';
        
        // Posición aleatoria
        const startX = Math.random() * window.innerWidth;
        heart.style.left = `${startX}px`;
        heart.style.bottom = '-20px';
        
        // Tamaño aleatorio
        const size = Math.random() * 20 + 10;
        heart.style.fontSize = `${size}px`;
        
        // Duración aleatoria
        const duration = Math.random() * 3 + 2;
        heart.style.animationDuration = `${duration}s`;
        
        container.appendChild(heart);
        
        // Eliminar después de la animación
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
}