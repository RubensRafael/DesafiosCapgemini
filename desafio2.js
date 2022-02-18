let prompt = require('prompt-sync')({sigint:true})

const checkPassword = ()=>{
  /*
    Este código contém basicamente duas entregas, a básica, requerida no desafio,
    que consiste em exibir quantos caracteres faltam para a senha poder ser validada. 
    E a adicional, que é a continuação da validação, seguindo as regras dispostas no desafio.
  */

  /*
    Todas as outras validações são feitas com expressões regulares, 
    você pode sabe mais sobre ela aqui: https://tableless.com.br/o-basico-sobre-expressoes-regulares/ .
    basicamente o construtor RegExp retorna um objeto que contém um método chamado "test".
    quando chamado, verificará a compatibilidade com a expressão passada ao construtor e a string passada ao método.
    Retornando true ou false, como se estivesse respondendo as seguintes perguntas "feitas para a string" :
  */

  //Existe uma letra minúscula?
  let minCheck = new RegExp('[a-z]')
  // Existe uma letra maiúscula?
  let maxCheck = new RegExp('[A-Z]')
  //Existe um número?
  let numCheck = new RegExp('[0-9]')
  //Existe algum dos caracteres a seguir?
  let espCheck = new RegExp('[!@#$%^&*()-+]')

  // Aqui obtemos a senha.
  let password = prompt('Digite sua senha: ')

  //*Para testes*
  //let password = input

  /* 
   Este loop "infinito" serve para emular o comportamento de um evento "onChange" de um input de texto. 
   A intenção aqui é forçar o usuário alterar a senha a cada erro,e a cada alteração, as verificações serão refeitas.
   Isso não causará um loop incontrolável, já que a cada verificação, o código para,
   e se todas verificações forem aprovadas, o loop encontra um break no final.
  */
  while(true){
    // Essa é a entrega básica.
  if(password.length < 6){
    // *PARA TESTES*
    //return 6 - password.length
    password = prompt(`A senha é muito curta para ser validada, faltam ${6 - password.length} caracteres, tente novamente: `,password)
    continue
    }
    
    /* 
      O "continue" faz com que o loop reinicie, forçando uma nova verificação, se a correção realmente aconteceu,
       o "if" não será disparado na segunda verificação, e o código seguirá para o próximo bloco if.
       Esse comportamento faz com que a senha tenha que atender todos os requisitos, ao mesmo tempo, para ser validada.
    */
    /*
      Os próximos IFs tem praticamente o mesmo comportamento,
      dessa vez usando seus respectivos métodos de teste das expressões regulares.
      Se o teste falhar, a senha deve ser inserida novamente.
    */
    
  if(!(minCheck.test(password))){
      // *PARA TESTES*
      //return password
      password = prompt('A senha deve ter ao menos uma letra minúscula: ',password)
      continue
    }
    
  if(!(maxCheck.test(password))){
      // *PARA TESTES*
      //return password
      password = prompt('A senha deve ter ao menos uma letra maiúscula: ',password)
      continue
    }
    
  if(!(numCheck.test(password))){
      // *PARA TESTES*
      //return password
      password = prompt('A senha deve ter ao menos um número: ',password)
      continue
    }
    
  if(!(espCheck.test(password))){
      // *PARA TESTES*
      //return password
      password = prompt('A senha deve ter ao menos um dos caracteres especiais a seguir, entre aspas: "  !@#$%^&*()-+ " : ',password)
      continue
    }
    
    // O loop só alcançará o break quando a senha tiver sucesso em todas as validações.
    break
  }
  console.log("Parabéns, você criou uma senha forte!")
}

checkPassword()

// *PARA TESTES*
//module.exports = checkPassword
