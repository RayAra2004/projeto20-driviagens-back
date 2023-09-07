import httpStatus from "http-status";

export default function errorHandlingMiddleware(error, req, res, next){
    switch(error.code){
        case "23505":
            return res.status(httpStatus.CONFLICT).send("Informação já existente");
        case "23503":
            return res.status(httpStatus.NOT_FOUND).send(error.detail);
    }
    switch(error.type){
        case "notFound":
            return res.status(httpStatus.NOT_FOUND).send(error.message);
        case "conflict":
            return res.status(httpStatus.CONFLICT).send(error.message);
        case "unprocessable":
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
        default:
            console.log(error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Erro interno do servidor!!");
    }
}