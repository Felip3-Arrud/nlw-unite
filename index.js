
let participantes = [
  {
    nome: "Felipe Dias",
    email: "felipe@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: "Usopp Arruda",
    email: "usopp@gmail.com",
    dataInscricao: new Date(2024, 2, 15, 19, 20),
    dataCheckIn: null
  },
  {
    nome: "Luffy Santos",
    email: "luffy@gmail.com",
    dataInscricao: new Date(2024, 2, 19, 19, 20),
    dataCheckIn: new Date(2024, 2, 23, 22, 00)
  },
  {
    nome: "Zoro Oliveira",
    email: "zoro@gmail.com",
    dataInscricao: new Date(2024, 2, 8, 19, 20),
    dataCheckIn: null
  },
  {
    nome: "Nami Almeida",
    email: "nami@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: null
  },
  {
    nome: "Sanji Silva",
    email: "sanji@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: "Chopper Costa",
    email: "chopper@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: "Robin Lima",
    email: "robin@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: "Franky Sousa",
    email: "franky@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: "Brook Castro",
    email: "brook@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  }
];


const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)
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

  return `  
  <tr>
    <td>
      <strong>${participante.nome}</strong>
      <br>
      <small>${participante.email}</small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
    </tr>
  `
}


const atualizarLista = (participantes) => { 
  let output = ""
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }
    // substituir informação do HTML
  document
  .querySelector('tbody')
  .innerHTML = output
} // arrow function

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }
  // verificar se o participante já existe
  const participanteExiste = participantes.find(
    (p) => {
    return p.email == participante.email
  }
  )

  if(participanteExiste) {
    alert('Email já cadastrado!')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  // limpar o formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""

}

const fazerCheckIn = (event) => {
  
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'


  if(confirm(mensagemConfirmacao) == false) {
    return 
  }

  //encontrar o participante dentro da lista
  const participante = participantes.find((p) => p.email == event.target.dataset.email
  )
  //atualizar o check-in do participante
  participante.dataCheckIn = new Date()

  //atualizar a lista de participantes
  atualizarLista(participantes)

}