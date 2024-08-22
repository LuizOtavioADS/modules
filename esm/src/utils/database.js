async function connectToDatabase(dataName){
    //LÓGICA DE CONEXÃO
    console.log(`Conectado ao ${dataName}`)
}

async function disconnectDatabase(){
    console.log(`Disconectando ao ${dataName}`)
}

export { connectToDatabase, disconnectDatabase };

