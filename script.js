// Datos mejorados con categorías
const messages = [
    // ... (mantener los 63 mensajes anteriores, añadir propiedad category a cada uno)
    {
        day: 1,
        message: "Tu sonrisa ilumina mis días más grises. Desde que estás en mi vida, todo tiene más color.",
        icon: "😊",
        category: "romantic"
    },
    // ... (añadir category: "romantic", "future", "funny", "deep" a todos)
    // Ejemplo de mensaje con categoría "funny":
    {
        day: 64,
        message: "Me robaste el corazón y ahora eres mi ladrona favorita. ¡Devuélvemelo nunca!",
        icon: "😏",
        category: "funny"
    }
];

// Añadir más mensajes hasta 100
for (let i = 64; i <= 100; i++) {
    const categories = ["romantic", "future", "funny", "deep"];
    const category = categories[Math.floor(Math.random() * categories.length)];
    const icons = ["💖", "✨", "🌟", "🥰", "😍", "💕", "💘", "💝", "💓", "💗"];
    
    messages.push({
        day: i,
        message: generateRandomMessage(),
        icon: icons[Math.floor(Math.random() * icons.length)],
        category: category
    });
}

// Estado de la aplicación
let state = {
    currentDay: 1,
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    viewedMessages: JSON.parse(localStorage.getItem('viewedMessages')) || [],
    theme: localStorage.getItem('theme') || 'light',
    loveLevel: parseInt(localStorage.getItem('loveLevel')) || 100
};

// Elementos DOM
const elements = {
    lettersContainer: document.getElementById('letters-container'),
    modal: document.getElementById('message-modal'),
    modalDay: document.getElementById('modal-day'),
    modalMessage: document.getElementById('modal-message'),
    modalIcon: document.getElementById('modal-icon'),
    closeModal: document.querySelector('.close-modal'),
    loveButton: document.getElementById('love-btn'),
    currentDayElement: document.getElementById('current-day'),
    fireworksCanvas: document.getElementById('fireworks-canvas'),
    heartsCanvas: document.getElementById('hearts-canvas'),
    floatingLove: document.getElementById('floating-love'),
    searchInput: document.getElementById('search-messages'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    progressBar: document.getElementById('love-progress'),
    progressPercent: document.getElementById('progress-percent'),
    daysTogether: document.getElementById('days-together'),
    loveLevel: document.getElementById('love-level'),
    secretSurprise: document.getElementById('secret-surprise'),
    printAll: document.getElementById('print-all'),
    themeBtn: document.getElementById('theme-btn'),
    notification: document.getElementById('notification'),
    notificationText: document.getElementById('notification-text'),
    heartSound: document.getElementById('heart-sound'),
    sparkleSound: document.getElementById('sparkle-sound'),
    copyBtn: document.getElementById('copy-message'),
    shareBtn: document.getElementById('share-message'),
    saveFavoriteBtn: document.getElementById('save-favorite'),
    nextBtn: document.getElementById('next-btn')
};

// Inicialización mejorada
document.addEventListener('DOMContentLoaded', () => {
    init();
    initParticles();
    initHearts();
    updateCounters();
    updateProgress();
});

function init() {
    createLetters();
    setupEventListeners();
    setupFilters();
    setupSearch();
    applyTheme();
    updateProgress();
}

// Crear cartitas mejoradas
function createLetters() {
    elements.lettersContainer.innerHTML = '';
    
    messages.forEach(msg => {
        const letter = document.createElement('div');
        letter.className = 'letter';
        letter.dataset.day = msg.day;
        letter.dataset.category = msg.category;
        
        const isViewed = state.viewedMessages.includes(msg.day);
        const isFavorite = state.favorites.includes(msg.day);
        
        if (isViewed) {
            letter.classList.add('viewed');
        }
        
        if (isFavorite) {
            letter.classList.add('favorite');
            letter.innerHTML += '<div class="favorite-star">⭐</div>';
        }
        
        letter.innerHTML += `
            <div class="letter-number">Día ${msg.day}</div>
            <div class="letter-icon">${msg.icon}</div>
            <div class="letter-content">${truncateText(msg.message, 60)}</div>
            <div class="letter-footer">
                <span class="letter-category">${msg.category}</span>
            </div>
        `;
        
        letter.addEventListener('click', () => openModal(msg.day));
        
        elements.lettersContainer.appendChild(letter);
    });
}

// Configurar event listeners mejorados
function setupEventListeners() {
    elements.closeModal.addEventListener('click', closeMessageModal);
    elements.loveButton.addEventListener('click', showLoveEffect);
    elements.secretSurprise.addEventListener('click', showSecretSurprise);
    elements.printAll.addEventListener('click', printAllMessages);
    elements.themeBtn.addEventListener('click', toggleTheme);
    elements.copyBtn.addEventListener('click', copyMessage);
    elements.shareBtn.addEventListener('click', shareMessage);
    elements.saveFavoriteBtn.addEventListener('click', toggleFavorite);
    elements.nextBtn.addEventListener('click', showNextMessage);
    
    window.addEventListener('resize', () => {
        resizeCanvas(elements.fireworksCanvas);
        resizeCanvas(elements.heartsCanvas);
    });
    
    elements.modal.addEventListener('click', (e) => {
        if (e.target === elements.modal) closeMessageModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMessageModal();
        if (e.key === 'ArrowRight' && elements.modal.style.display === 'block') {
            showNextMessage();
        }
    });
}

// Configurar filtros
function setupFilters() {
    elements.filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            filterLetters(filter);
        });
    });
}

// Configurar búsqueda
function setupSearch() {
    elements.searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterBySearch(searchTerm);
    });
}

// Filtrar cartitas
function filterLetters(category) {
    const letters = document.querySelectorAll('.letter');
    
    letters.forEach(letter => {
        if (category === 'all' || letter.dataset.category === category) {
            letter.style.display = 'flex';
        } else {
            letter.style.display = 'none';
        }
    });
}

// Filtrar por búsqueda
function filterBySearch(term) {
    const letters = document.querySelectorAll('.letter');
    
    letters.forEach(letter => {
        const day = letter.dataset.day;
        const message = messages.find(m => m.day == day);
        
        if (message.message.toLowerCase().includes(term) || term === '') {
            letter.style.display = 'flex';
        } else {
            letter.style.display = 'none';
        }
    });
}

// Abrir modal mejorado
function openModal(day) {
    const messageData = messages.find(msg => msg.day == day);
    if (messageData) {
        state.currentDay = day;
        
        elements.modalDay.textContent = `Día ${messageData.day}`;
        elements.modalMessage.textContent = messageData.message;
        elements.modalIcon.textContent = messageData.icon;
        
        // Marcar como visto
        if (!state.viewedMessages.includes(day)) {
            state.viewedMessages.push(day);
            localStorage.setItem('viewedMessages', JSON.stringify(state.viewedMessages));
            updateProgress();
        }
        
        // Actualizar botón de favorito
        updateFavoriteButton(day);
        
        elements.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        updateCurrentDay(day);
        
        // Efecto de entrada
        playSound(elements.sparkleSound);
        createConfetti(300);
    }
}

// Cerrar modal
function closeMessageModal() {
    elements.modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Actualizar botón de favorito
function updateFavoriteButton(day) {
    const isFavorite = state.favorites.includes(day);
    elements.saveFavoriteBtn.innerHTML = isFavorite ? 
        '<i class="fas fa-heart"></i>' : 
        '<i class="far fa-heart"></i>';
    elements.saveFavoriteBtn.style.color = isFavorite ? 'var(--accent-color)' : 'white';
}

// Alternar favorito
function toggleFavorite() {
    const day = state.currentDay;
    const index = state.favorites.indexOf(day);
    
    if (index > -1) {
        state.favorites.splice(index, 1);
        showNotification('Eliminado de favoritos 💔');
    } else {
        state.favorites.push(day);
        showNotification('¡Añadido a favoritos! 💖');
        
        // Efecto especial para favoritos
        createHearts(50);
        playSound(elements.heartSound);
        
        // Aumentar nivel de amor
        state.loveLevel = Math.min(state.loveLevel + 5, 200);
        localStorage.setItem('loveLevel', state.loveLevel);
        elements.loveLevel.textContent = state.loveLevel + '%';
    }
    
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
    updateFavoriteButton(day);
    createLetters(); // Actualizar vista
}

// Copiar mensaje
function copyMessage() {
    const text = `${elements.modalMessage.textContent}\n\nDía ${state.currentDay}`;
    navigator.clipboard.writeText(text)
        .then(() => showNotification('¡Mensaje copiado! 📋'))
        .catch(err => console.error('Error al copiar:', err));
}

// Compartir mensaje
function shareMessage() {
    const text = `Día ${state.currentDay}: ${elements.modalMessage.textContent}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Un mensaje de amor 💌',
            text: text,
            url: window.location.href
        });
    } else {
        copyMessage();
    }
}

// Mostrar siguiente mensaje
function showNextMessage() {
    const currentIndex = messages.findIndex(msg => msg.day == state.currentDay);
    const nextIndex = (currentIndex + 1) % messages.length;
    openModal(messages[nextIndex].day);
}

// Mostrar efecto de amor mejorado
function showLoveEffect() {
    createFireworks(10);
    showFloatingLove();
    createHearts(200);
    playSound(elements.heartSound);
    
    // Mostrar múltiples mensajes de amor
    const loveMessages = ["TE AMO", "ERES MI TODO", "MI CORAZÓN ES TUYO", "PARA SIEMPRE"];
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            showFloatingLove(loveMessages[i % loveMessages.length]);
        }, i * 300);
    }
    
    closeMessageModal();
    showNotification('¡TE AMO MÁS! 💖❤️💕');
}

// Mostrar sorpresa secreta
function showSecretSurprise() {
    // Crear lluvia de corazones
    createHearts(500);
    
    // Mostrar mensaje especial
    showNotification('¡SORPRESA! Eres el mejor regalo de mi vida 🎁💝');
    
    // Reproducir sonido especial
    playSound(elements.sparkleSound);
    
    // Cambiar fondo temporalmente
    document.body.style.background = 'linear-gradient(135deg, #ff0080, #ff8c00, #40e0d0)';
    document.body.style.backgroundSize = '400% 400%';
    document.body.style.animation = 'gradient 10s ease infinite';
    
    setTimeout(() => {
        document.body.style.background = '';
        document.body.style.animation = '';
    }, 5000);
}

// Imprimir todos los mensajes
function printAllMessages() {
    const printWindow = window.open('', '_blank');
    const printContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Mis 100 Mensajes de Amor - Para KIM</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { color: #ff2e63; text-align: center; }
                .message { margin: 20px 0; padding: 15px; border-left: 5px solid #ff6b8b; }
                .day { font-weight: bold; color: #ff2e63; }
            </style>
        </head>
        <body>
            <h1>💌 100 Mensajes de Amor para KIM 💌</h1>
            ${messages.map(msg => `
                <div class="message">
                    <div class="day">Día ${msg.day}</div>
                    <div>${msg.icon} ${msg.message}</div>
                </div>
            `).join('')}
        </body>
        </html>
    `;
    
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
}

// Alternar tema claro/oscuro
function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', state.theme);
    applyTheme();
    
    const icon = elements.themeBtn.querySelector('i');
    icon.className = state.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    
    showNotification(state.theme === 'light' ? 'Modo claro ☀️' : 'Modo romántico 🌙');
}

// Aplicar tema
function applyTheme() {
    if (state.theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Actualizar contadores
function updateCounters() {
    // Calcular días juntos (ejemplo: desde una fecha específica)
    const startDate = new Date('2024-01-01'); // Cambiar por tu fecha
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    elements.daysTogether.textContent = diffDays;
    elements.loveLevel.textContent = state.loveLevel + '%';
}

// Actualizar barra de progreso
function updateProgress() {
    const totalMessages = messages.length;
    const viewedCount = state.viewedMessages.length;
    const percentage = Math.round((viewedCount / totalMessages) * 100);
    
    elements.progressBar.style.setProperty('--progress', `${percentage}%`);
    elements.progressBar.style.width = `${percentage}%`;
    elements.progressPercent.textContent = `${percentage}%`;
}

// Mostrar notificación
function showNotification(text) {
    elements.notificationText.textContent = text;
    elements.notification.classList.add('show');
    
    setTimeout(() => {
        elements.notification.classList.remove('show');
    }, 3000);
}

// Reproducir sonido
function playSound(audioElement) {
    audioElement.currentTime = 0;
    audioElement.play().catch(e => console.log("Audio no pudo reproducirse:", e));
}

// Truncar texto
function truncateText(text, maxLength) {
    return text.length <= maxLength ? text : text.substring(0, maxLength) + '...';
}

// Actualizar día actual
function updateCurrentDay(day = 1) {
    elements.currentDayElement.textContent = day;
    state.currentDay = day;
}

// Generar mensaje aleatorio
function generateRandomMessage() {
    const messages = [
        "Tu risa es la melodía más hermosa que he escuchado",
        "Contigo cada amanecer tiene más sentido",
        "Eres mi refugio en este mundo loco",
        "Amo cómo tu mano encaja perfectamente en la mía",
        "Eres el sueño que no quiero despertar",
        "Tu amor me da alas para volar más alto",
        "Cada latido de mi corazón dice tu nombre",
        "Eres mi constante en un mundo de variables",
        "Amo cómo iluminas mi vida con tu presencia",
        "Contigo hasta el silencio es perfecto"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}

// ===== EFECTOS ESPECIALES =====

// Inicializar partículas
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ff6b8b" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffa8c2",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
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
}

// Sistema de corazones flotantes
function initHearts() {
    const canvas = elements.heartsCanvas;
    const ctx = canvas.getContext('2d');
    let hearts = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createHeart(x, y) {
        return {
            x, y,
            size: Math.random() * 20 + 10,
            speedX: Math.random() * 4 - 2,
            speedY: Math.random() * 3 + 1,
            color: `hsl(${Math.random() * 360}, 100%, 60%)`,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: Math.random() * 0.1 - 0.05,
            opacity: 1,
            decay: Math.random() * 0.02 + 0.005
        };
    }

    function drawHeart(ctx, heart) {
        ctx.save();
        ctx.translate(heart.x, heart.y);
        ctx.rotate(heart.rotation);
        ctx.scale(heart.size / 20, heart.size / 20);
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        for (let i = 0; i < 360; i++) {
            const angle = i * Math.PI / 180;
            const t = angle;
            const x = 16 * Math.pow(Math.sin(t), 3);
            const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
            ctx.lineTo(x, y);
        }
        
        ctx.fillStyle = heart.color;
        ctx.globalAlpha = heart.opacity;
        ctx.fill();
        ctx.restore();
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Actualizar y dibujar corazones
        hearts = hearts.filter(heart => {
            heart.x += heart.speedX;
            heart.y -= heart.speedY;
            heart.rotation += heart.rotationSpeed;
            heart.opacity -= heart.decay;
            
            if (heart.opacity > 0) {
                drawHeart(ctx, heart);
                return true;
            }
            return false;
        });
        
        requestAnimationFrame(animate);
    }

    // Crear corazones iniciales
    for (let i = 0; i < 20; i++) {
        hearts.push(createHeart(
            Math.random() * canvas.width,
            Math.random() * canvas.height
        ));
    }

    window.createHearts = function(count) {
        for (let i = 0; i < count; i++) {
            hearts.push(createHeart(
                Math.random() * canvas.width,
                canvas.height + 50
            ));
        }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();
}

// Crear corazones
function createHearts(count) {
    if (window.createHearts) {
        window.createHearts(count);
    }
}



// Explotar fuego artificial en partículas
function explodeFirework(firework) {
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 1;
        
        particles.push({
            x: firework.x,
            y: firework.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: Math.random() * 3 + 1,
            hue: Math.random() * 360,
            alpha: 1
        });
    }
}


// Mostrar mensaje flotante mejorado
function showFloatingLove(text = "TE AMO") {
    const love = elements.floatingLove.cloneNode(true);
    love.textContent = text;
    love.style.position = 'fixed';
    love.style.left = Math.random() * 80 + 10 + '%';
    love.style.top = Math.random() * 80 + 10 + '%';
    love.style.fontSize = Math.random() * 4 + 3 + 'rem';
    love.style.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
    love.style.opacity = '1';
    love.style.zIndex = '1001';
    
    document.body.appendChild(love);
    
    // Animación
    const duration = 2000 + Math.random() * 1000;
    const animation = love.animate([
        { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
        { transform: 'translate(-50%, -150%) scale(1.5)', opacity: 0 }
    ], {
        duration: duration,
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    });
    
    animation.onfinish = () => love.remove();
}
