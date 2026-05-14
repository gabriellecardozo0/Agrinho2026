let waterLevel = 0;
let score = 0;
const statusText = document.getElementById('status');
const plantImg = document.getElementById('plant');

function waterPlant() {
    waterLevel += 20;
    score += 10;
    
    if (waterLevel <= 100) {
        statusText.innerText = `Nível de Hidratação: ${waterLevel}% | Pontuação: ${score}`;
        statusText.style.color = "var(--neon-green)";
        
        // Simula o crescimento
        let size = 100 + (waterLevel / 2);
        plantImg.style.width = size + "px";
    } else {
        statusText.innerText = "ALERTA: Você desperdiçou água! Solo encharcado. Recomeçando...";
        statusText.style.color = "#ff4444";
        resetGame();
    }
}

function resetGame() {
    waterLevel = 0;
    score = 0;
    setTimeout(() => {
        plantImg.style.width = "100px";
        statusText.innerText = "Clique para irrigar com precisão!";
        statusText.style.color = "white";
    }, 2000);
}