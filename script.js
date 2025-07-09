const segredo = Math.floor(Math.random() * 100) + 1;

function verificarPalpite() {
    const palpite = parseInt(document.getElementById('palpite').value);
    let feedback = '';

    if (palpite === segredo) {
        feedback = 'Parabéns! Você acertou!';
    } else if (palpite > segredo) {
        feedback = 'Tente um número menor.';
    } else {
        feedback = 'Tente um número maior.';
    }

    const feedbackEl = document.getElementById('feedback');
    feedbackEl.style.display = 'inline-block';
    feedbackEl.textContent = feedback;
}