function unprocessableContent(resource = "Item"){
    return {
        type: "unprocessable", message: `${resource} não processado!`
    };
}

function conflict(resource = "Item"){
    return {
        type: "conflict", message: `${resource} já existente!`
    };
}

export const errors = {
    unprocessableContent,
    errors
}