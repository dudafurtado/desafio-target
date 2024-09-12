// 1) Ao final do processamento, qual será o valor da variável SOMA?
let indice = 12;
let soma = 0;
let k = 1;

while(k < indice) {
  k = k + 1;
  soma = soma + k;
}

console.log(soma);
// 77

// -----------------------------------------

// 2) Descubra a lógica e complete o próximo elemento:

// a) Sequência de números ímpares
const a = [1, 3, 5, 7];
console.log(`a) O próximo número é: ${a[a.length - 1] + 2}`);
// 9

// b) Potências de 2
const b = [2, 4, 8, 16, 32, 64];
console.log(`b) O próximo número é: ${b[b.length - 1] * 2}`);
//128

// c) Quadrados perfeitos
const c = [0, 1, 4, 9, 16, 25, 36];
console.log(`c) O próximo número é: ${Math.pow(c.length, 2)}`);
// 49

// d) Quadrados de números pares
const d = [4, 16, 36, 64];
console.log(`d) O próximo número é: ${Math.pow((d.length + 1) * 2, 2)}`);
// 100

// e) Sequência de Fibonacci
const e = [1, 1, 2, 3, 5, 8];
console.log(`e) O próximo número é: ${e[e.length - 1] + e[e.length - 2]}`);
// 13

// f) Sequência mista (aumento variado)
const f = [2, 10, 12, 16, 17, 18, 19];
console.log(`f) O próximo número é: ${f[f.length - 1] + 1}`);
// 20

// -----------------------------------------

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora de todos os dias de um ano, faça um programa, na linguagem que desejar, que calcule e retorne:

const faturamentoDiario = [120, 200, 0, 150, 320, 0, 100, 50, 600, 0, 0, 800, 0, 220, 400, 1000];

function calcularFaturamento(faturamento) {
  let menorFaturamento = Infinity;
  let maiorFaturamento = -Infinity;
  let somaFaturamento = 0;
  let diasComFaturamento = 0;

  for (let i = 0; i < faturamento.length; i++) {
    let valor = faturamento[i];
    if (valor > 0) {
      somaFaturamento += valor;
      diasComFaturamento++;
      if (valor < menorFaturamento) menorFaturamento = valor;
      if (valor > maiorFaturamento) maiorFaturamento = valor;
    }
  }

  const mediaAnual = somaFaturamento / diasComFaturamento;
  let diasAcimaDaMedia = 0;

  for (let i = 0; i < faturamento.length; i++) {
    if (faturamento[i] > mediaAnual) {
      diasAcimaDaMedia++;
    }
  }

  return {
    menorFaturamento,
    // 50
    maiorFaturamento,
    // 1000
    diasAcimaDaMedia
    // 4
  };
}

const resultado = calcularFaturamento(faturamentoDiario);
console.log(resultado);

// -----------------------------------------

// 4) Banco de dados

// Clientes
// --------
// id_cliente (PK)
// razao_social
// id_estado (FK) -> Estados.id_estado

// Estados
// -------
// id_estado (PK)
// nome_estado
// codigo_estado

// Telefones
// ---------
// id_telefone (PK)
// numero
// id_cliente (FK) -> Clientes.id_cliente
// id_tipo_telefone (FK) -> TiposTelefone.id_tipo_telefone

// TiposTelefone
// -------------
// id_tipo_telefone (PK)
// descricao_tipo


// SELECT 
//     c.id_cliente, 
//     c.razao_social, 
//     t.numero AS telefone
// FROM 
//     Clientes c
// JOIN 
//     Estados e ON c.id_estado = e.id_estado
// JOIN 
//     Telefones t ON c.id_cliente = t.id_cliente
// WHERE 
//     e.codigo_estado = 'SP';

// -----------------------------------------

// 5) Dois veículos, um carro e um caminhão, saem respectivamente de cidades opostas pela mesma rodovia. O carro, de Ribeirão Preto em direção a Barretos, a uma velocidade constante de 90 km/h, e o caminhão, de Barretos em direção a Ribeirão Preto, a uma velocidade constante de 80 km/h. Quando eles se cruzarem no percurso, qual estará mais próximo da cidade de Ribeirão Preto?

const distanciaTotal = 125; 
const velocidadeCarro = 90; 
const velocidadeCaminhao = 80; 
const tempoPerdidoPorPedagioCarro = 5 / 60; 
const numeroPedagios = 3; 
const tempoPerdidoTotalCarro = tempoPerdidoPorPedagioCarro * numeroPedagios; 
const velocidadeEfetivaCarro = velocidadeCarro * (1 - (tempoPerdidoTotalCarro / (distanciaTotal / velocidadeCarro)));

const tempoAteEncontro = distanciaTotal / (velocidadeEfetivaCarro + velocidadeCaminhao);

const distanciaCarro = velocidadeEfetivaCarro * tempoAteEncontro;
const distanciaCaminhao = velocidadeCaminhao * tempoAteEncontro;
  
const distanciaRestanteCarro = distanciaTotal - distanciaCarro;
const distanciaRestanteCaminhao = distanciaTotal - distanciaCaminhao;


if (distanciaRestanteCarro < distanciaRestanteCaminhao) {
  return "O carro está mais próximo de Ribeirão Preto no momento do encontro.";
} else {
  return "O caminhão está mais próximo de Ribeirão Preto no momento do encontro.";
  // Resultado
}

// No momento em que o carro e o caminhão se cruzarem, o caminhão estará mais próximo de Ribeirão Preto porque ele percorreu uma distância maior que o carro até o ponto de encontro, já que o carro sofreu atrasos nos pedágios.
