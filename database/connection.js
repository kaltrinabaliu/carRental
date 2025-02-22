import { MongoClient } from "mongodb"


const url='mongodb://localhost:27017'
const client= new MongoClient(url)
const dbName="carRental"
    client.connect().then(()=>{
        console.log('database connected')})
        .catch(()=>{
            console.log('database error')})
            export const db= client.db(dbName)
