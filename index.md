


```js
// variaveis
const mensagem = 'Oi, tudo joia?'
// tipos de dados
  // number
  // string
// funcao
alert(mensagem)


// objeto javascript
const participante = {
  nome: "Felipe Dias",
  email: "felipe@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
}

let participantes = [
  {
    nome: "Felipe Dias",
    email: "felipe@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
]

// estrutura de repeticao - loop
for(let participante of participantes) {
  // faça alguma coisa aqui
  // enquanto tiver pessoas nessa lista
}



// condicional
  if(participante.dataCheckIn == null) {
    dataCheckIn = `
    <button 
      data-email="${participante.email}"
      onclick='fazerCheckIn(event)'> 
      
      Confirmar check-in

    </button>
    `
  }