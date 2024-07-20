let consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/') // fez requisição -> o corpo da resposta de uma requisição chega em formato de bytes
  .then(resposta => resposta.json()) // converteu a resposta que veio do objeto Response
  .then(r => {
    if (r.erro) {
      throw Error('Esse cep não existe')
    } else
      console.log(r) // vai dar console se o then anterior for aceito
  }) 
  .catch(erro => console.log(erro))
  .finally(mensagem => console.log('Processamento concluído!'))

console.log(consultaCEP)
