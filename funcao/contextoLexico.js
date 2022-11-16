var valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local' //Local está dentro do escopo
    minhaFuncao()
}

exec()