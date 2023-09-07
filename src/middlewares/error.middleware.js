import httpStatus from "http-status";

export default function errorHandlingMiddleware(error, req, res, next){
    switch(error.type){
        case "notFound":
            return res.status(httpStatus.NOT_FOUND).send("Não encontrado!!")
        default:
            console.log(error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Erro interno do servidor!!")
    }
}