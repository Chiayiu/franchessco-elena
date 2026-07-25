// 1. Control del reproductor / vinilo animado, música y letras
let isPlaying = false;
const vinyl = document.getElementById('vinyl');
const audio = document.getElementById('loveAudio');
const lyricsBox = document.getElementById('lyricsBox');

function toggleMusic() {
    isPlaying = !isPlaying;
    const btn = event.target; 
    
    if (isPlaying) {
        audio.play().catch(error => {
            console.log("El navegador requiere interacción previa o el enlace de audio necesita revisión:", error);
        });
        vinyl.style.animationPlayState = 'running';
        btn.textContent = "Pausar ⏸️";
        lyricsBox.classList.remove('hidden');
    } else {
        audio.pause();
        vinyl.style.animationPlayState = 'paused';
        btn.textContent = "Reproducir 🎵";
        lyricsBox.classList.add('hidden');
    }
}

// 2. Generador natural de frases románticas estilo cartita
const quotes = [
    "\"Elena, eres la casualidad más bonita de mi vida y mi persona favorita en este mundo.\"",
    "\"Cada momento a tu lado se siente tan cálido y brillante como una tarde de verano.\"",
    "\"No importa el día ni la distancia, siempre quiero volar hacia ti.\"",
    "\"Tu sonrisa tiene el poder de iluminar hasta los días más grises.\"",
    "\"Contigo entendí lo que significa querer cuidar de alguien con todo el corazón.\""
];

function changeQuote() {
    const secureIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').textContent = quotes[secureIndex];
}

// 3. Generador natural de razones por las que la amas
const reasons = [
    "\"Amo la forma en que tu risa ilumina incluso mis días más pesados.\"",
    "\"Amo cómo compartimos nuestros gustos musicales y pequeños momentos cotidianos.\"",
    "\"Amo tu ternura, tu forma de ser y lo mucho que me haces sentir en casa.\"",
    "\"Amo cada ocurrencia tuya y cómo logras alegrarme con solo mirar tus ojos.\""
];

function changeReason() {
    const secureIndex = Math.floor(Math.random() * reasons.length);
    document.getElementById('reasonDisplay').textContent = reasons[secureIndex];
}

// 4. Juego Interactivo: Medidor Secreto de Amor
const gameMessages = [
    "¡Resultado: 100% de amor puro, infinito y sellado para siempre! 💙",
    "¡Resultado: Superamos el límite del universo, nuestro amor no tiene fin! ✨",
    "¡Resultado: 999.9% de compatibilidad, somos tal para cual! 🌸",
    "¡Resultado: Amarre exitoso, Elena y Franchessco unidos por siempre! 💫"
];

function playLoveGame() {
    const secureIndex = Math.floor(Math.random() * gameMessages.length);
    document.getElementById('gameResultDisplay').textContent = gameMessages[secureIndex];
}

// 5. Contador de tiempo juntos (16 de Marzo de 2024 -> Mes 2 es marzo)
const startDate = new Date(2026, 2, 16, 0, 0, 0); 

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);

    const counterContainer = document.getElementById('loveCounter');
    if (counterContainer) {
        counterContainer.innerHTML = `
            <div class="time-box"><span>${days}</span><label>Días</label></div>
            <div class="time-box"><span>${hours}</span><label>Horas</label></div>
            <div class="time-box"><span>${minutes}</span><label>Minutos</label></div>
        `;
    }
}

// 6. Animación interactiva de rosas flotantes
function spawnRoses() {
    const totalRoses = 14; // Cantidad de rosas que aparecen por cada clic
    const container = document.body;

    for (let i = 0; i < totalRoses; i++) {
        const rose = document.createElement('div');
        rose.classList.add('floating-rose');
        
        // Alternamos entre emojis aesthetic de rosas y destellos
        const symbols = ['🌹', '🌸', '✨', '🥀'];
        rose.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        
        // Posicionamiento horizontal aleatorio en la pantalla
        const randomX = Math.random() * window.innerWidth;
        rose.style.left = randomX + 'px';
        rose.style.top = (window.scrollY + 50) + 'px';
        
        // Tamaños variados para dar profundidad
        const size = Math.floor(Math.random() * 16) + 18; // entre 18px y 34px
        rose.style.fontSize = size + 'px';
        
        // Variaciones sutiles en la duración de la animación
        const duration = Math.random() * 1.5 + 2.5; // entre 2.5s y 4s
        rose.style.animationDuration = duration + 's';

        container.appendChild(rose);

        // Eliminamos el elemento del DOM al terminar la animación para no saturar la página
        setTimeout(() => {
            rose.remove();
        }, duration * 1000);
    }
}


setInterval(updateCounter, 1000);
updateCounter();