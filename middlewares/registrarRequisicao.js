const registraRequisicao =(req,res,next) => {
    console.log(`resgistro da requisição: ${req.ip} - ${(new Date()).toISOString()} - ${req.url}`);
    next()

}


module.exports = registraRequisicao