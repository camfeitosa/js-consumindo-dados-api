console.log("Mandando oi pro amigo");

function mandaMensagem(){
  console.log('tudo bem?')
  console.log('vou te mandar uma solicitação')
  console.log('solicitação recebida')
}

// callbacks -> funções que são enviadas como parâmetro para outras funções 
setTimeout(mandaMensagem, 5000) // roda tudo e dps espera 5 segundos pra chamar função

console.log('tchau');