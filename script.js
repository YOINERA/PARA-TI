// Mensajes para cada cartita
const messages = [
    {
        day: 1,
        message: "Tu sonrisa ilumina mis días más grises. Desde que estás en mi vida, todo tiene más color.",
        icon: "😊"
    },
    {
        day: 2,
        message: "Contigo he descubierto un amor que no conocía. Un amor que sana, que comprende, que perdona.",
        icon: "❤️"
    },
    {
        day: 3,
        message: "Eres la razón por la que creo en el destino. No fue casualidad encontrarte, fue el universo conspirando a nuestro favor.",
        icon: "✨"
    },
    {
        day: 4,
        message: "Mi niño interior revive cuando estoy contigo. Esas ganas de jugar, de reír sin motivo, de soñar despierto.",
        icon: "👦"
    },
    {
        day: 5,
        message: "Me haces sentir que puedo conquistar el mundo. Tu fe en mí es mi mayor motivación.",
        icon: "🌎"
    },
    {
        day: 6,
        message: "Tu mirada despierta mariposas en mi estómago. Esos nervios que solo tú provocas en mí.",
        icon: "🦋"
    },
    {
        day: 7,
        message: "Cada momento a tu lado es un tesoro. Guardo cada risa, cada abrazo, cada mirada en el cofre de mis mejores recuerdos.",
        icon: "💎"
    },
    {
        day: 8,
        message: "Eres el sueño que nunca quise despertar. Contigo la realidad supera cualquier fantasía.",
        icon: "💭"
    },
    {
        day: 9,
        message: "Tu amor sana las heridas de mi pasado. Donde había dolor, ahora hay esperanza gracias a ti.",
        icon: "🩹"
    },
    {
        day: 10,
        message: "Contigo quiero construir un futuro lleno de risas. Un hogar donde el amor sea el cimiento más fuerte.",
        icon: "🏡"
    },
    {
        day: 11,
        message: "Eres mi refugio en los días difíciles. En tus brazos encuentro la paz que mi alma necesita.",
        icon: "🛡️"
    },
    {
        day: 12,
        message: "Tu voz es la melodía que calma mi alma. Podría escucharte hablar por horas sin cansarme.",
        icon: "🎵"
    },
    {
        day: 13,
        message: "Amo la persona que soy cuando estoy contigo. Me inspiras a ser mejor cada día.",
        icon: "🌟"
    },
    {
        day: 14,
        message: "Eres la respuesta a todas mis preguntas. En tu amor encontré el sentido que tanto buscaba.",
        icon: "❓"
    },
    {
        day: 15,
        message: "Tu amor me da fuerzas para ser mejor cada día. Quiero merecerte, quiero ser tu orgullo.",
        icon: "💪"
    },
    {
        day: 16,
        message: "Contigo hasta lo simple se vuelve mágico. Un paseo, una comida, una tarde en casa... todo es especial contigo.",
        icon: "🔮"
    },
    {
        day: 17,
        message: "Eres mi confidente y mi mejor amiga. Puedo contarte mis mayores sueños y mis peores miedos.",
        icon: "🤝"
    },
    {
        day: 18,
        message: "Tu risa es mi sonido favorito. Es contagiosa, auténtica, y llena mi corazón de alegría.",
        icon: "😂"
    },
    {
        day: 19,
        message: "Amo cómo me miras, como si fuera único. Esa mirada que me hace sentir el hombre más afortunado del mundo.",
        icon: "👀"
    },
    {
        day: 20,
        message: "Eres el regalo que la vida me dio después de tanto esperar. Valió la pena la espera.",
        icon: "🎁"
    },
    {
        day: 21,
        message: "Contigo quiero envejecer riendo. Ver cómo se nos llena el rostro de arrugas, pero el corazón de amor.",
        icon: "👵👴"
    },
    {
        day: 22,
        message: "Tu amor me hace sentir completo. Esas partes de mí que faltaban, ahora están aquí contigo.",
        icon: "🧩"
    },
    {
        day: 23,
        message: "Eres mi paz en medio del caos. Cuando el mundo gira demasiado rápido, tú eres mi centro.",
        icon: "🕊️"
    },
    {
        day: 24,
        message: "Amo cada detalle, cada gesto, cada mirada tuya. Me enamoro más de ti cada día.",
        icon: "📝"
    },
    {
        day: 25,
        message: "Contigo el tiempo vuela y se detiene a la vez. Los minutos pasan rápido, pero los momentos quedan para siempre.",
        icon: "⏳"
    },
    {
        day: 26,
        message: "Eres la dueña de mis pensamientos. Me despierto pensando en ti y me duermo soñando contigo.",
        icon: "🤔"
    },
    {
        day: 27,
        message: "Tu amor es el combustible de mis sueños. Contigo a mi lado, siento que puedo lograr cualquier cosa.",
        icon: "🚀"
    },
    {
        day: 28,
        message: "Eres mi inspiración para ser mejor. Quiero ser la versión más grandiosa de mí mismo para ti.",
        icon: "💡"
    },
    {
        day: 29,
        message: "Amo cómo encajas perfectamente en mi vida. Como si siempre hubieras estado destinada a estar aquí.",
        icon: "🔑"
    },
    {
        day: 30,
        message: "Contigo quiero compartir todos mis días. Los buenos, los malos, los simples, los extraordinarios.",
        icon: "📅"
    },
    {
        day: 31,
        message: "Eres la luz que guía mi camino. En la oscuridad, tú eres mi faro, mi esperanza.",
        icon: "💡"
    },
    {
        day: 32,
        message: "Tu amor es mi mayor fortuna. No cambiaría lo que siento por ti por todo el oro del mundo.",
        icon: "💰"
    },
    {
        day: 33,
        message: "Eres mi razón para sonreír sin motivo. Esa felicidad interna que brota cuando pienso en ti.",
        icon: "😄"
    },
    {
        day: 34,
        message: "Contigo todo tiene más sentido. Los planes, los esfuerzos, las luchas... todo vale la pena por nuestro amor.",
        icon: "🎯"
    },
    {
        day: 35,
        message: "Amo cómo me haces sentir amado. Esa seguridad de saber que soy importante para ti.",
        icon: "💖"
    },
    {
        day: 36,
        message: "Eres mi eterno y único amor. No imagino mi vida sin ti, no quiero mi vida sin ti. Eres mi todo.",
        icon: "∞"
    }
];

// Elementos DOM
const lettersContainer = document.getElementById('letters-container');
const modal = document.getElementById('message-modal');
const modalDay = document.getElementById('modal-day');
const modalMessage = document.getElementById('modal-message');
const closeModal = document.querySelector('.close-modal');
const loveButton = document.getElementById('love-btn');
const currentDayElement = document.getElementById('current-day');
const fireworksCanvas = document.getElementById('fireworks-canvas');
const floatingLove = document.getElementById('floating-love');

// Variables para fuegos artificiales
const ctx = fireworksCanvas.getContext('2d');
let fireworks = [];
let particles = [];
let animationId;

// Inicialización
document.addEventListener('DOMContentLoaded', init);

function init() {
    createLetters();
    setupEventListeners();
    resizeCanvas();
    updateCurrentDay();
}

// Crear las cartitas
function createLetters() {
    messages.forEach((msg, index) => {
        const letter = document.createElement('div');
        letter.className = 'letter';
        letter.dataset.day = msg.day;
        
        const number = document.createElement('div');
        number.className = 'letter-number';
        number.textContent = `Día ${msg.day}`;
        
        const icon = document.createElement('div');
        icon.className = 'letter-icon';
        icon.textContent = msg.icon;
        
        const content = document.createElement('div');
        content.className = 'letter-content';
        content.textContent = truncateText(msg.message, 80);
        
        letter.appendChild(number);
        letter.appendChild(icon);
        letter.appendChild(content);
        
        letter.addEventListener('click', () => openModal(msg.day));
        
        lettersContainer.appendChild(letter);
    });
}

// Configurar event listeners
function setupEventListeners() {
    closeModal.addEventListener('click', closeMessageModal);
    loveButton.addEventListener('click', showLoveEffect);
    window.addEventListener('resize', resizeCanvas);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeMessageModal();
    });
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMessageModal();
    });
}

// Abrir modal con mensaje
function openModal(day) {
    const messageData = messages.find(msg => msg.day === day);
    if (messageData) {
        modalDay.textContent = `Día ${messageData.day}`;
        modalMessage.textContent = messageData.message;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        updateCurrentDay(day);
    }
}

// Cerrar modal
function closeMessageModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Mostrar efecto de amor
function showLoveEffect() {
    createFireworks();
    showFloatingLove();
    closeMessageModal();
}

// Actualizar día actual
function updateCurrentDay(day = 1) {
    currentDayElement.textContent = day;
}

// Truncar texto para las cartitas
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// Configurar canvas para fuegos artificiales
function resizeCanvas() {
    fireworksCanvas.width = window.innerWidth;
    fireworksCanvas.height = window.innerHeight;
}

// Crear fuegos artificiales
function createFireworks() {
    // Limpiar animaciones anteriores
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
    
    // Crear múltiples fuegos artificiales
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createFirework(
                Math.random() * fireworksCanvas.width,
                Math.random() * fireworksCanvas.height / 2
            );
        }, i * 300);
    }
    
    // Iniciar animación
    animateFireworks();
}

// Crear un fuego artificial individual
function createFirework(x, y) {
    const firework = {
        x: x,
        y: fireworksCanvas.height,
        targetY: y,
        speed: 2 + Math.random() * 2,
        particles: [],
        exploded: false,
        color: `hsl(${Math.random() * 360}, 100%, 60%)`
    };
    
    fireworks.push(firework);
}

// Animar fuegos artificiales
function animateFireworks() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
    
    // Actualizar y dibujar fuegos artificiales
    fireworks.forEach((firework, index) => {
        if (!firework.exploded) {
            // Mover hacia el objetivo
            firework.y -= firework.speed;
            
            // Dibujar trazo
            ctx.beginPath();
            ctx.arc(firework.x, firework.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = firework.color;
            ctx.fill();
            
            // Explotar cuando alcanza el objetivo
            if (firework.y <= firework.targetY) {
                explodeFirework(firework);
                fireworks.splice(index, 1);
            }
        }
    });
    
    // Actualizar y dibujar partículas
    particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.05; // Gravedad
        particle.alpha -= 0.01;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 50%, ${particle.alpha})`;
        ctx.fill();
        
        // Eliminar partículas que se han desvanecido
        if (particle.alpha <= 0) {
            particles.splice(index, 1);
        }
    });
    
    // Continuar animación si hay elementos activos
    if (fireworks.length > 0 || particles.length > 0) {
        animationId = requestAnimationFrame(animateFireworks);
    } else {
        // Limpiar canvas cuando termine la animación
        setTimeout(() => {
            ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
        }, 500);
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

// Mostrar mensaje "TE AMO" flotante
function showFloatingLove() {
    floatingLove.style.opacity = '1';
    floatingLove.style.transform = 'translate(-50%, -50%) scale(1)';
    floatingLove.style.left = '50%';
    floatingLove.style.top = '50%';
    
    // Animación de desvanecimiento y movimiento
    setTimeout(() => {
        floatingLove.style.transition = 'all 2s ease-out';
        floatingLove.style.transform = 'translate(-50%, -150%) scale(1.5)';
        floatingLove.style.opacity = '0';
    }, 500);
    
    // Resetear después de la animación
    setTimeout(() => {
        floatingLove.style.transition = 'none';
        floatingLove.style.opacity = '0';
        floatingLove.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 2500);
}

// Efectos de confeti adicional al hacer clic en cartitas
lettersContainer.addEventListener('click', (e) => {
    if (e.target.closest('.letter')) {
        createConfetti(e.clientX, e.clientY);
    }
});

// Crear efecto de confeti
function createConfetti(x, y) {
    const confettiCount = 30;
    
    for (let i = 0; i < confettiCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        const size = Math.random() * 10 + 5;
        
        particles.push({
            x: x,
            y: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 2,
            size: size,
            hue: Math.random() * 360,
            alpha: 1
        });
    }
    
    // Iniciar animación si no está activa
    if (!animationId) {
        animateFireworks();
    }
}
