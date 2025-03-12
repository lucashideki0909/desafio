let resultado = factorialize(4);

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  factorialize(4);
  console.log(resultado);


let dolares = 100;
function convertorDolar(dolares) {
    let valorReais = dolares * 4.8;
    return valorReais;
}

let resultadoConversao = convertorDolar(dolares);
console.log(resultadoConversao);

function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
  let altura = 3;
  let largura = 5;
  calcularAreaPerimetroSalaRetangular(altura, largura);

  function areaPerimetroCirculo(raio) {
    let areaCirculo = 3.14 * (raio**2);
    let perimetroCirculo = (3.14 * 2 * raio);
    console.log(`Area do circulo:${areaCirculo}, Perimetro do Circulo ${perimetroCirculo}`);
  }

  let raio = 5 
  areaPerimetroCirculo(raio)

  function taboada(numero) {
 for (let i = 1;i<=10;i++) {
    let resultado = numero * i
    console.log(`${numero} x ${i} = ${resultado}`);
 }
  }

  let numero = 7;
  taboada(numero);

  let listaVazia = [];
  let linguagensProgramacao = ['JavaScript','C','C++','Kotlin','Python'];
  linguagensProgramacao.push ('Java','Ruby','GoLang');
  console.log (linguagensProgramacao);

  let lista123 = ['1','2','3'];
  console.log(lista123[0]);
  console.log(lista123[1]);
  console.log(lista123[2]);

  