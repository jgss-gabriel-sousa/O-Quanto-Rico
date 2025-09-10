import { calcularPercentil } from './calculo.js';

const calcBtn = document.getElementById('calcular');
const rendaEl = document.getElementById('renda');

calcBtn.addEventListener('click', calcularPercentil);

rendaEl.addEventListener('input', () => {
    let valor = rendaEl.value.replace(/\D/g, '');
    valor = new Intl.NumberFormat('pt-BR').format(valor);
    rendaEl.value = valor;
});