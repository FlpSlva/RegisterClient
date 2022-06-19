import {v4 as uuidv4} from 'uuid';


class User {

    id?: string

    name: string

    email: string

    telefone: string
    
    cpf: string

    senha: string

    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }

}

export {User}