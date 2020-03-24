const connect = require('../database/connection')

module.exports = {
    async create(request, response){
        const {id} = request.body
        const ong = await connect('ongs')
            .where('id', id)
            .select('name')
            .first()

        if (!ong) {
            return response.status(400).json({
                error: 'No ONG found.'
            })
        }
        
        return response.json(ong)
    }
}