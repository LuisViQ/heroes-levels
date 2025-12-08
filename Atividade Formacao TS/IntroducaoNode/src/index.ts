import express, { Request, Response } from 'express'

const db = [
    {
        name: 'Luis',
        email: 'fileps2009@gmail.com'
    }
]

const server = express()

server.use(express.json())
server.get('/', (request: Request, response: Response) => {
    return response.status(200).json({ message: 'DioBank API'})
})
server.post('/user', (request:Request, response:Response) =>{
    const body = request.body
    console.log(body)
    return response.status(201).json({message:'DioBank'})
}) 
server.listen(5000, () => console.log('Server on'))