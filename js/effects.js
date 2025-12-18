// Efectos especiales adicionales

class LoveEffects {
    constructor() {
        this.canvas = document.getElementById('fireworks-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.fireworks = [];
        this.particles = [];
        this.animationId = null;
        
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createFirework(x, y, color = null) {
        const firework = {
            x: x || Math.random() * this.canvas.width,
            y: this.canvas.height,
            targetY: y || Math.random() * this.canvas.height / 2,
            speed: 2 + Math.random() * 3,
            particles: [],
            exploded: false,
            color: color || `hsl(${Math.random() * 360}, 100%, 60%)`,
            size: Math.random() * 4 + 2
        };
        
        this.fireworks.push(firework);
        
        if (!this.animationId) {
            this.animate();
        }
    }
    
    createMultipleFireworks(count) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                this.createFirework();
            }, i * 200);
        }
    }
    
    explodeFirework(firework) {
        const particleCount = 100 + Math.random() * 50;
        
        for (let i = 0; i < particleCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 6 + 2;
            const size = Math.random() * 4 + 1;
            
            this.particles.push({
                x: firework.x,
                y: firework.y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                size: size,
                hue: Math.random() * 360,
                alpha: 1,
                decay: Math.random() * 0.02 + 0.01
            });
        }
    }
    
    animate() {
        // Fondo semi-transparente para efecto de rastro
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Actualizar y dibujar fuegos artificiales
        this.fireworks.forEach((firework, index) => {
            if (!firework.exploded) {
                // Mover hacia el objetivo
                firework.y -= firework.speed;
                
                // Dibujar trazo
                this.ctx.beginPath();
                this.ctx.arc(firework.x, firework.y, firework.size, 0, Math.PI * 2);
                this.ctx.fillStyle = firework.color;
                this.ctx.fill();
                
                // Dibujar cola
                this.ctx.beginPath();
                this.ctx.moveTo(firework.x, firework.y + firework.size);
                this.ctx.lineTo(firework.x, firework.y + 20);
                this.ctx.strokeStyle = firework.color;
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
                
                // Explotar cuando alcanza el objetivo
                if (firework.y <= firework.targetY) {
                    this.explodeFirework(firework);
                    this.fireworks.splice(index, 1);
                }
            }
        });
        
        // Actualizar y dibujar partículas
        this.particles.forEach((particle, index) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.05; // Gravedad
            particle.alpha -= particle.decay;
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `hsla(${particle.hue}, 100%, 50%, ${particle.alpha})`;
            this.ctx.fill();
            
            // Eliminar partículas que se han desvanecido
            if (particle.alpha <= 0) {
                this.particles.splice(index, 1);
            }
        });
        
        // Continuar animación si hay elementos activos
        if (this.fireworks.length > 0 || this.particles.length > 0) {
            this.animationId = requestAnimationFrame(() => this.animate());
        } else {
            this.animationId = null;
            // Limpiar canvas cuando termine la animación
            setTimeout(() => {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }, 500);
        }
    }
    
    // Efecto de confeti
    createConfetti(count = 50) {
        for (let i = 0; i < count; i++) {
            const x = Math.random() * this.canvas.width;
            const y = Math.random() * this.canvas.height;
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 4 + 1;
            
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 2,
                size: Math.random() * 10 + 5,
                hue: Math.random() * 360,
                alpha: 1,
                decay: 0.01,
                shape: Math.random() > 0.5 ? 'circle' : 'rect'
            });
        }
        
        if (!this.animationId) {
            this.animate();
        }
    }
    
    // Efecto de lluvia de corazones
    createHeartRain(count = 100) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const heart = {
                    x: Math.random() * this.canvas.width,
                    y: -50,
                    size: Math.random() * 30 + 20,
                    speed: Math.random() * 3 + 1,
                    color: `hsl(${Math.random() * 360}, 100%, 60%)`,
                    rotation: 0,
                    rotationSpeed: Math.random() * 0.1 - 0.05
                };
                
                // Animación especial para corazones
                const animateHeart = () => {
                    heart.y += heart.speed;
                    heart.rotation += heart.rotationSpeed;
                    
                    this.ctx.save();
                    this.ctx.translate(heart.x, heart.y);
                    this.ctx.rotate(heart.rotation);
                    
                    // Dibujar corazón
                    this.ctx.beginPath();
                    this.ctx.moveTo(0, 0);
                    for (let j = 0; j < 360; j++) {
                        const angle = j * Math.PI / 180;
                        const t = angle;
                        const x = 16 * Math.pow(Math.sin(t), 3);
                        const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
                        this.ctx.lineTo(x * (heart.size / 40), y * (heart.size / 40));
                    }
                    
                    this.ctx.fillStyle = heart.color;
                    this.ctx.fill();
                    this.ctx.restore();
                    
                    if (heart.y < this.canvas.height + 100) {
                        requestAnimationFrame(animateHeart);
                    }
                };
                
                animateHeart();
            }, i * 50);
        }
    }
}

// Inicializar efectos cuando el DOM esté listo
let loveEffects;

document.addEventListener('DOMContentLoaded', () => {
    loveEffects = new LoveEffects();
    
    // Hacer disponible globalmente
    window.createFireworks = (count) => loveEffects.createMultipleFireworks(count);
    window.createConfetti = (count) => loveEffects.createConfetti(count);
    window.createHeartRain = (count) => loveEffects.createHeartRain(count);
});
