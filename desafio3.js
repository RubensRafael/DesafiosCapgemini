let prompt = require('prompt-sync')({sigint:true})

/*
  Olá, antes de começar a executar o código,
  tenho um breve adendo a fazer.
  No enunciado, o número de pares da palavra "ovo" é igual a 2,
  sendo eles : ["o","o"] e ["ov","vo"], porém, o mesmo enunciado,
  trás como saída esperada o número 3, valor que poderia ser relacionado
  à quantidade de itens únicos nos pares ("o","ov","vo").
  Essa regra, aplicada ao segundo exemplo, falharia,
  pois a saída esperada era 3 também, mas ele tem quatro itens únicos
  nas repetições, porém com 3 pares. Por esse motivo, deixei um "console.log" adicional, comentado,
  no fim do código,para o caso de ser necessário saber a quantidade de itens individuais que formam os pares.

*/

// Vamos lá, a primeira coisa a se fazer, é gerar todas as substrings possíveis.
const  getSubstrings = (str) => {
  
  /*
     O primeiro loop pega o index de cada caractere da "str",
     e o segundo, o index dos próximos caracteres, e extrai uma parte da string baseado
     nesses dois índices (excluindo o segundo) com o metódo "slice".
     A cada iteração o segundo índice acumula, cobrindo uma parte maior da palavra.
     quando o segundo loop acaba, o primeiro itera novamente, mudando o ponto de partida das substrings
     gerando um resultado como esse:
     o > ov > ovo | v > vo | o 
      
  */
  var result = [];
  for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length + 1; j++) {
          result.push(str.slice(i, j));
      }
  }
  return result;
}

// Essa função define se duas strings são anagramas entre si.
// Ela apenas normaliza as strings, ordenando os caracteres alfabeticamente,
// Depois compara os dois valores, se são iguais, são anagramas.
const anagramCheck = (str1, str2) => {
    /*
     > Coloca tudo em caixa baixa
     > Transforma em array
     > Ordena o array
     > Transforma o array em string novamente
     > Finalmente, compara e retorna
   */ 
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')
  }



/* 
  Aqui é o coração do código, essa função recebe a lista de todas as substrings possíveis,
  mapeia cada uma e compara com todas as outras em dois metódos "map" aninhados,
  parecido com a lógica da primeira função.
  Mas dessa vez, caso as duas substrings forem anagramas E não forem exatamente a mesma substring,
  uma "tupla" com as duas é adicionada ao contador.
*/ 
const countPairs = (subStrList) =>{
  let counter = []
  subStrList.map((itemLvl1,indexLvl1)=>{
    subStrList.map((itemLvl2,indexLvl2)=>{
        //A comparação de index serve para garantir que substrings iguais não passem no teste.
        //Caso contrário, toda substring passaria no teste quando ela se encontrasse consigo mesmo no segundo map.
        if(anagramCheck(itemLvl1,itemLvl2) === true && indexLvl1 !== indexLvl2 ){
          counter.push([itemLvl1,itemLvl2]) 
        }
    })
  })
  //Nos loops acima, os pares são identificados pelo "ponto de vista" do primeiro item
  //E do segundo também (quando o loop os alcança), por isso ambos passam no teste, 
  //daí vem a necessidade de dividir o array e ficar apenas com a primeira parte.
  return counter.slice(0,counter.length/2)
}

let word = prompt("Digite a palavra que você quer verificar: ")
let allSubstrings = getSubstrings(word)
let result = countPairs(allSubstrings)

console.log("------------------------------------------------------")
console.log(`O total de pares encontrados : ${result.length} `)
console.log(`Os pares encontrados foram : ${JSON.stringify(result)}`)
console.log("------------------------------------------------------")


// Remova os comentários abaixo caso quiser saber quantos e quais foram os itens únicos encontrados.

/*
let flatResult = result.flat()
let singleItens = flatResult.filter((item,index)=>flatResult.indexOf(item)===index)
console.log(`O total de itens únicos encontrados foram : ${JSON.stringify(singleItens.length)}`)
console.log(`Os itens únicos encontrados foram : ${JSON.stringify(singleItens)}`)
console.log("------------------------------------------------------")
*/

// * PARA TESTES *
/*
 
  const objToexport = {
  getSubstrings : getSubstrings,
  anagramCheck : anagramCheck,
  countPairs : countPairs
}
module.exports = objToexport

*/

