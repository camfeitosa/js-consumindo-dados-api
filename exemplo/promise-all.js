async function buscaEndereco(cep) {
  try { // tenta -> se der errado -> entra no catch
    let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

    let consultaConvertida = await consultaCEP.json()
    if(consultaConvertida.erro){
      throw Error('CEP não existente!')
    }
    console.log(consultaConvertida);
    return consultaConvertida
  } catch (erro) {
    console.log(erro)
  }
}

let ceps = ['01001000', '06535201']
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
console.log(conjuntoCeps) // retorna duas promisses
Promise.all(conjuntoCeps).then(respostas => console.log(respostas)) // ajuda a criar várias requisições ao mesmo tempo, retorna as duas promisses resolvidas + array com os resultados