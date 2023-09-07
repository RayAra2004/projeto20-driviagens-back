function unprocessableContent(resource = "Requisição não processada!"){
    return {
        type: "unprocessable", message: `${resource}`
    };
}

function conflict(resource = "Item"){
    return {
        type: "conflict", message: `${resource} já existente!`
    };
}

function conflictCity(){
    return {
        type: "conflict", message: "As cidades de origem e destino devem ser diferentes!!"
    };
}

function badRequest(){
    return{
        type: "badRequest", message: "Dados inválidos!!"
    }
}

export const errors = {
    unprocessableContent,
    conflict, conflictCity,
    badRequest
}