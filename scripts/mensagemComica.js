export function mensagemComica(percentil) {
    if (percentil < 0.001) {
        return 'Você desbloqueou o modo “Miséria Lendária”.';
    }
    else if (percentil < 0.01) {
        return 'Você está na luta: sobrevivência hardcore ativada.';
    }
    else if (percentil < 0.03) {
        return 'Sua conta bancária parece temporada final de novela: puro sofrimento.';
    }
    else if (percentil < 0.05) {
        return 'Você sobrevive com cupons e sonhos.';
    }
    else if (percentil < 0.08) {
        return 'Você já comemorou encontrar moeda no sofá.';
    }
    else if (percentil < 0.1) {
        return 'Você é tão pobre que até o banco esqueceu de cobrar tarifa.';
    }
    else if (percentil < 0.15) {
        return 'Você tem orgulho de não parcelar o pastel da feira.';
    }
    else if (percentil < 0.2) {
        return 'Você ri pra não chorar quando recebe o extrato bancário.';
    }
    else if (percentil < 0.25) {
        return 'Você tem dinheiro pra pizza, mas só se dividir com amigos.';
    }
    else if (percentil < 0.3) {
        return 'Você sobrevive, mas sua geladeira já viu dias melhores.';
    }
    else if (percentil < 0.35) {
        return 'Você já pesquisou “como ficar rico rápido” no Google.';
    }
    else if (percentil < 0.4) {
        return 'Você é rico em boletos e pobre em descanso.';
    }
    else if (percentil < 0.45) {
        return 'Você é classe média aspirante: já quis comprar uma airfryer em 12x.';
    }
    else if (percentil < 0.5) {
        return 'Você é classe média sofredora: rico demais pra Bolsa Família, pobre demais pro iPhone novo.';
    }
    else if (percentil < 0.55) {
        return 'Você tá no meio do caminho: nem chora nem ri, só paga boleto.';
    }
    else if (percentil < 0.6) {
        return 'Você é aquele amigo que paga o rodízio, mas reclama da gorjeta.';
    }
    else if (percentil < 0.65) {
        return 'Você já pensou em fazer investimento, mas parou no cadastro da corretora.';
    }
    else if (percentil < 0.7) {
        return 'Você consegue viajar… mas só pra casa da sua tia em Osasco.';
    }
    else if (percentil < 0.75) {
        return 'Você já considera “luxo” pedir delivery duas vezes na mesma semana.';
    }
    else if (percentil < 0.8) {
        return 'Você tem “dinheiro de conforto”, mas ainda teme o preço do dentista.';
    }
    else if (percentil < 0.85) {
        return 'Você compra café especial, mas ainda sofre quando o aluguel vence.';
    }
    else if (percentil < 0.875) {
        return 'Você já compra vinho que não vem em garrafa de plástico.';
    }
    else if (percentil < 0.9) {
        return 'Você está quase lá, só falta herdar uma cobertura na praia.';
    }
    else if (percentil < 0.93) {
        return 'Você já cogitou abrir uma startup só pra aparecer no LinkedIn.';
    }
    else if (percentil < 0.95) {
        return 'Você é oficialmente considerado “rico” pelo resto da população (mesmo negando).';
    }
    else if (percentil < 0.97) {
        return 'Você pode comprar iPhone no lançamento sem chorar.';
    }
    else if (percentil < 0.98) {
        return 'Você tem mais dinheiro que tempo pra gastar.';
    }
    else if (percentil < 0.99) {
        return 'Você é tipo o “chefão secreto” da vida real.';
    }
    else if (percentil < 0.995) {
        return 'Você é tão rico que virou personagem secundário de série da Netflix.';
    }
    else {
        return 'Parabéns, você é o 1%. Agora todos os outros te odeiam em silêncio.';
    }
}
