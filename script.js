let segredo = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
const maxTentativas = 10;
let acertou = false;

function verificarPalpite() {
    if (acertou || tentativas >= maxTentativas) return;

    const palpite = parseInt(document.getElementById('palpite').value);
    let feedback = '';
    tentativas++;

    if (palpite === segredo) {
        feedback = ' Parabéns! Você acertou!';
        acertou = true;
    } else if (palpite > segredo) {
        feedback = 'Tente um número menor.';
    } else {
        feedback = 'Tente um número maior.';
    }

    if (tentativas >= maxTentativas && !acertou) {
        feedback = ` Fim de jogo! O número era ${segredo}.`;
        acertou = true;
    }

    // Mostrar feedback
    const feedbackEl = document.getElementById('feedback');
    feedbackEl.style.display = 'inline-block';
    feedbackEl.textContent = feedback;

    // Atualizar tentativas restantes com cor
    const tentativasRestantes = maxTentativas - tentativas;
    const tentativasEl = document.getElementById('tentativas');
    tentativasEl.style.display = 'inline-block';
    tentativasEl.textContent = `Tentativas restantes: ${tentativasRestantes}`;

    if (tentativasRestantes >= 4) {
        tentativasEl.style.backgroundColor = '#2ecc71'; // verde
    } else if (tentativasRestantes >= 2) {
        tentativasEl.style.backgroundColor = '#f39c12'; // laranja
    } else {
        tentativasEl.style.backgroundColor = '#e74c3c'; // vermelho
    }

    // Se o jogo acabou, esconde o botão e desabilita o input
    if (acertou || tentativas >= maxTentativas) {
        document.querySelector('button[type="submit"]').style.display = 'none';
        document.getElementById('palpite').disabled = true;
        document.getElementById('reiniciar').style.display = 'inline-block';
    }
}
function reiniciarJogo() {
    segredo = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    acertou = false;

    document.getElementById('palpite').value = '';
    document.getElementById('palpite').disabled = false;

    document.getElementById('feedback').style.display = 'none';
    document.getElementById('tentativas').style.display = 'none';
    document.getElementById('reiniciar').style.display = 'none';

    document.querySelector('button[type="submit"]').style.display = 'inline-block';
}