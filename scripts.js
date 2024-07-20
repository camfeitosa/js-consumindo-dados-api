async function buscaEndereco(cep) {
  let mensagemErro = document.getElementById('erro')
  mensagemErro.innerHTML = ''
  try { // tenta -> se der errado -> entra no catch
    let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    let consultaConvertida = await consultaCEP.json()

    if(consultaConvertida.erro){
      throw Error('CEP não existente!')
    }

    const cidade = document.getElementById('cidade')
    const logradouro = document.getElementById('endereco')
    const estado = document.getElementById('estado')
    const bairro = document.getElementById('bairro')

    cidade.value = consultaConvertida.localidade
    logradouro.value = consultaConvertida.logradouro
    estado.value = consultaConvertida.uf
    bairro.value = consultaConvertida.bairro

    console.log(consultaConvertida);
    return consultaConvertida
  } catch (erro) {
    mensagemErro.innerHTML = `<p>CEP inválido, tente novamente</p>`
    console.log(erro)
  }
}

const cep = document.getElementById('cep')
// focusout - depois que tirar o foco do input
cep.addEventListener('focusout', () => buscaEndereco(cep.value))