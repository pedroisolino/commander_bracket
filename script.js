// --- Variáveis Globais ---
let htmlList, bodyList, mobileBox, fluxBox, darkButton;
let textArea1, textArea2;
let value;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// --- Inicialização do DOM ---
document.addEventListener('DOMContentLoaded', () => {
    // Elementos gerais
    htmlList = document.documentElement.classList;
    bodyList = document.body.classList;
    
    // Elementos específicos (com verificação)
    mobileBox = document.getElementById('mobileBox')?.classList;
    fluxBox = document.getElementById('fluxbox')?.classList;
    darkButton = document.getElementById('db')?.classList;

    // Elementos do formulário
    textArea1 = document.getElementById('commanderID');
    textArea2 = document.getElementById('deckListID');

    // Verificação crítica
    if (!textArea1 || !textArea2) {
        console.error('Elements not found!');
    }
});

// --- Funções de UI ---
function clearPhase() {
    if (mobileBox?.contains('flexOn')) {
        mobileBox.remove('flexOn');
        mobileBox.add('flexOff');
    } else {
        mobileBox?.remove('flexOff');
        mobileBox?.add('flexOn');
    }
}

function clearFlux() {
    if (fluxBox?.contains('flexOn')) {
        fluxBox.remove('flexOn');
        fluxBox.add('flexOff');
    } else {
        fluxBox?.remove('flexOff');
        fluxBox?.add('flexOn');
    }
}

// --- Função de Cálculo ---
function calculate() {
    if (!textArea1 || !textArea2) {
        alert('Please Refresh the Page');
        return;
    }

    if (textArea1.value.trim() && textArea2.value.trim()) {
        document.getElementById('bracketLevel').textContent = 'Optimized';
          // Exemplo: número entre 1 e 10
        document.getElementById('saltLevel').textContent = value;
        
    } else {
        alert('Please Fill all fields and try again.');
    }
}

// --- Dark Mode ---
function darkMode() {
    if (!htmlList || !darkButton) return;

    if (htmlList.contains('whiteMode')) {
        htmlList.replace('whiteMode', 'darkMode');
        darkButton.replace('buttonOn', 'buttonOff');
    } else {
        htmlList.replace('darkMode', 'whiteMode');
        darkButton.replace('buttonOff', 'buttonOn');
    }
}

// --- Navegação ---
function calculatorMenu() {
    const openMenu = document.querySelector('.openMenu');
    const calcMenu = document.querySelector('.calculatorMenu');
    const dbButton = document.getElementById('db');
    
    value = getRandomInt(1, 10);

    if (openMenu) openMenu.style.display = 'none';
    if (calcMenu) calcMenu.style.display = 'flex';
    if (dbButton) dbButton.style.display = 'flex';
}