exports.get = (req, res ) =>{
    //todo
    res.send({
        result:{
            id: 123,
            type: 'DocType',
            content : {
                name: 'myname',
                phone: 'myphone',
                address: 'myAdd'
            }
        }
    })
}