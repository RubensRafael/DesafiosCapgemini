const makePyramid = require('./desafio1')


//Use test.only para selecionar o teste a ser feito.

test('saber se os espaços vazios correspondem a fórmula "(n-1),(n-2)..." ', () => {
	
	let n = 6 //5, 4 , 3, 2, 1...
  	expect(makePyramid(n)).toBe(n-1);//5
  		
	
});

test('saber se os asteriscos correspondem a fórmula "(n-x),(n-x)..." ', () => {
	//x é a quantidade de espaços, se na primeira volta são 5 espaços(teste acima), x= 5

	let n = 5 //5, 4 , 3, 2, 1
	let x = 4 //4, 3, 2, 1
  	expect(makePyramid(n)).toBe(n-x);
  		
	
});

test('saber se a resposta final tem o tamanho do valor passado', () => {
	

	let n = 6 //5, 4 , 3, 2, 1
	 //4, 3, 2, 1
  	expect(makePyramid(n)).toBe(n);
  		
	
});