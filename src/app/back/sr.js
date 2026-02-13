"use server"
import { MongoClient } from "mongodb";
 let client = null;
async function connect() {
    client  = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    let db = client.db("contect");
    let user = db.collection("user");
    return user; 
}

export const store = async(name,email,des)=>{
try{
let store = await connect();
store.insertOne({name:name,email:email,description:des});
    return({sucess:true})
}
 catch(er){
    return({sucess:false})
 }
}