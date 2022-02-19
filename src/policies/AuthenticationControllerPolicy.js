const Joi = require('joi')

module.exports ={
    register: (req,res,next) => {
        const schema = Joi.object({
            userName: Joi.string(),
            firstName: Joi.string(),
            lastName: Joi.string(),
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        })
        const {error, value} = schema.validate(req.body)
        console.log("what the fuck is value")
        console.log(value)
        if(error){
            switch (error.details[0].context.key) {
                case 'firstName':
                    res.status(400).send({
                        error: 'You must provide a valid first name'
                    })
                    break;
                case 'lastName':
                    res.status(400).send({
                        error: 'You must provide a valid last name'
                    })
                    break;
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email adress'
                    })
                    break;
                case 'password':
                    res.status(400).send({
                        error: 'You must provide a valid password'
                    })
                    break;
                default:
                    res.status(400).send({
                        error: 'You must provide a valid information'
                    })
                    break;
            }
        }
        else{
            next()
        }
    }
}