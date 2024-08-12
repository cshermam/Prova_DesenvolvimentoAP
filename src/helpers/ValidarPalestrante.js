const validarPalestrante = (request, response, next) =>{

    const{nome, expertise} = request.body;
    if(!nome){
        response.status(400).json({message: "O nome é obrigatório"})
        return
    }
    if(!expertise){
        response.status(400).json({message: "A aréa de especialização é obrigatória"})
        return
    }
    next()
}

export default validarPalestrante;