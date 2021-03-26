import { NextApiRequest, NextApiResponse} from 'next'


//Estratégicas de autenticação 

// JWT (Storage)
// NextAuth (Social com coisas de terceito, github, twitter, facebook)
// Cognito, Auth0 - Serviço de autenticação

export default (request:NextApiRequest, response:NextApiResponse) => {
    const users= [
        {id: 1, name: 'Diego'},
        {id: 1, name: 'Dani'},
        {id: 1, name: 'Rafa'},

    ]

    return response.json(users)
}