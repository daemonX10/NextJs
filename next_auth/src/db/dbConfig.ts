import mongoose from "mongoose";

export const connect = async ()=>{
    try {
        mongoose.connect(process.env.Mongo_url!)
        const connection = mongoose.connection;

        connection.on('connected', ()=>{
            console.log("Connected to the database");
        });
        connection.on('error', (error)=>{
            console.log("Error in connecting to the database", error);
            process.exit(1);
        });

    } catch (error){
        console.log("Error in dbConfig", error);
        console.log("Exiting the process");
    }
}