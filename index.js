const nomeDoHeroi = "Baguá";
const xpDoBagua = 8001;

let nivelPrevisto;
if (xpDoBagua <= 1000) {
    nivelPrevisto = "ferro";
} else if (xpDoBagua >= 1001 && xpDoBagua <= 2000) {
    nivelPrevisto = "bronze";
} else if (xpDoBagua >= 2001 && xpDoBagua <= 3000) {
    nivelPrevisto = "prata";
} else if (xpDoBagua >= 3001 && xpDoBagua <= 4000) {
    nivelPrevisto = "ouro";
} else if (xpDoBagua >= 4001 && xpDoBagua <= 5000) {
    nivelPrevisto = "platina";
} else if (xpDoBagua >= 5001 && xpDoBagua <= 6000) {
    nivelPrevisto = "ascendente";
} else if (xpDoBagua >= 6001 && xpDoBagua <= 7000) {
    nivelPrevisto = 'imortal';
} else if (xpDoBagua >= 7001 && xpDoBagua <= 8000) {
    nivelPrevisto = 'radiante';
} else if (xpDoBagua > 8000) {
    nivelPrevisto = "Sayajin";
} else {
    nivelPrevisto = 'Deu ruim!';
}

const nivelDefinido = nivelPrevisto;
console.log(`O Herói ${nomeDoHeroi} está no nível ${nivelPrevisto}`);