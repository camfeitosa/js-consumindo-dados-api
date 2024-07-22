async function buscaPersonagens(){
  const consultaPersonagem = await fetch('https://rickandmortyapi.com/api/character')
  const converteConsultaPersonagem = await consultaPersonagem.json()

  return converteConsultaPersonagem
}

const personagens = document.querySelector('.personagens')

function exibeInfo(nome, imagem, location){
  const divPersonagem = document.createElement('div')
  const cidade = JSON.stringify(location.name)
  
  divPersonagem.innerHTML = `<img src='${imagem}'></img>
  <h1>${nome}</h1>
  <p>${cidade}</p>
  `
  return divPersonagem
}

async function listarPersonagens(){
  const listaApi = await buscaPersonagens()

  await listaApi.results.forEach(e => personagens.appendChild(exibeInfo(e.name, e.image, e.location)))
}

listarPersonagens()