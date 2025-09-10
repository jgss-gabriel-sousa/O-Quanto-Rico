import { mensagemComica } from './mensagemComica.js';

const SalarioMinimoEl = document.getElementById('salario-minimo');
const rendaEl = document.getElementById('renda');
const percentilEl = document.getElementById('percentil');
const msgEl = document.getElementById('msg');

const SM = 1500; // Salário Mínimo

let x_m = null;
let alpha = null;
let lowA = null; // intercepto do logit
let lowB = null; // coeficiente do logit

function ajustarPareto(){
    // tabela PNAD (acumulada até o ponto)
    const pontosPNAD = [
        { p: 0.0695, R: 0.5 * SM },
        { p: 0.2390, R: 1   * SM },
        { p: 0.5875, R: 2   * SM },
        { p: 0.7111, R: 3   * SM },
        { p: 0.7980, R: 5   * SM },
        { p: 0.8545, R: 10  * SM },
        { p: 0.8742, R: 20  * SM }
    ];

    // ---------- Ajuste Pareto (cauda) ----------
    const xs = [];
    const ys = [];
    pontosPNAD.forEach(pt => {
        if(pt.p > 0 && pt.p < 1 && pt.R > 0){
            xs.push(Math.log(1 - pt.p));
            ys.push(Math.log(pt.R));
        }
    });

    if(xs.length < 2){
        alert("Poucos pontos válidos para ajuste.");
        return;
    }

    // mínimos quadrados
    const n = xs.length;
    const meanX = xs.reduce((a,b)=>a+b,0)/n;
    const meanY = ys.reduce((a,b)=>a+b,0)/n;
    let num=0, den=0;
    for(let i=0;i<n;i++){
        num += (xs[i]-meanX)*(ys[i]-meanY);
        den += (xs[i]-meanX)**2;
    }
    const b = num/den;
    const a = meanY - b*meanX;

    x_m = Math.exp(a);
    alpha = -1 / b;

    // ---------- Ajuste Logit (parte baixa: até 1 SM) ----------
    const lowPts = pontosPNAD.filter(pt => pt.R <= 1 * SM && pt.p > 0 && pt.p < 1);
    if(lowPts.length >= 2){
        const LX = lowPts.map(pt => Math.log(pt.R));
        const LY = lowPts.map(pt => Math.log(pt.p / (1 - pt.p))); // logit(p)
        const m = LX.length;
        const meanLX = LX.reduce((a,b)=>a+b,0)/m;
        const meanLY = LY.reduce((a,b)=>a+b,0)/m;
        let num2=0, den2=0;
        for(let i=0;i<m;i++){
            num2 += (LX[i]-meanLX)*(LY[i]-meanLY);
            den2 += (LX[i]-meanLX)**2;
        }
        lowB = num2/den2;
        lowA = meanLY - lowB*meanLX;
    } else {
        lowA = null;
        lowB = null;
    }
}

function percentilPorLogit(R){
    if(lowA === null || lowB === null) return null;
    const lx = Math.log(R);
    const logit = lowA + lowB * lx;
    const p = 1 / (1 + Math.exp(-logit));
    return p;
}

export function calcularPercentil(){
    if(x_m === null || alpha === null){ ajustarPareto(); }
    const R = parseFloat(rendaEl.value.replace(/\D/g, ''));
    if(Number.isNaN(R) || R <= 0){ alert('Informe uma renda válida.'); return; }

    // caso 1: abaixo de 1 SM -> logit
    if(R <= 1 * SM){
        const pLogit = percentilPorLogit(R);
        if(pLogit !== null){
            mensagemResultado(pLogit);
            return;
        }
    }

    // caso 2: entre 1 SM e 2 SM -> interpolação linear entre logit(1 SM) e Pareto(2 SM)
    if(R > 1*SM && R < 2*SM){
        const p1 = percentilPorLogit(1*SM);
        const p2 = 1 - Math.pow(x_m / (2*SM), alpha);
        const t = (R - 1*SM) / (1*SM); // [0..1] entre 1 e 2 SM
        const p = p1 + t*(p2 - p1);

        mensagemResultado(p);
        return;
    }

    // caso 3: acima de 2 SM -> Pareto
    const p = 1 - Math.pow(x_m / R, alpha);
    mensagemResultado(p);
}

function mensagemResultado(percentil){
    percentilEl.textContent = (percentil*100).toFixed(1) + '%';
    msgEl.textContent = mensagemComica(percentil);
}

ajustarPareto();
calcularPercentil();