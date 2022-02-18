let prompt = require('prompt-sync')({sigint:true})

/* 
	A pirâmide é composta por espaços e asteriscos.
	A quantidade de espaços(x) equivale à : (n-1) na primeira linha,
	(n-2) na segunda, e assim, até que o resultado da subtração for 0.
	Enquanto quantidade de asteriscos, cresce, de forma inversa, tendo como base,
	a queda no número de espaços : (n-x).

	
*/
const makePyramid = () =>{
	let n = Number(prompt("Digite quantos asteriscos devem ser empilhados: "))
	// Esse loop previne a inserção de letras no input.
	while(isNaN(n)){
		n = prompt("O valor a ser digitado deve ser numérico: ")
	}
	/*
		Dentro desse loop, os espaços vazios são inseridos usando o "repeat",
		e calculados com a sentença mencionada anteriormente.
		Depois são concatenados com asteriscos, que simplesmente acompanham o crescinento do "i", contador do loop.

	*/
	for(let i=1;i<=n;i++){
		console.log(" ".repeat(n-i) + "*".repeat(i))
		/*
			* para testes *
			const espacos = " ".repeat(n-i).length
			const asteriscos  = "*".repeat(i).length
			const resposta = `${" ".repeat(n-i)+"*".repeat(i)}`.length
			return resposta || asteriscos || espacos
		*/
	}
}

makePyramid()


// * para testes *
//module.exports = makePyramid