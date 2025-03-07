import {connect} from 'mongoose';

const dbConnect = async () => {
    try{
        const mongoDbConnection = await connect(process.env.MONGO);
        console.log(`Database connected : ${mongoDbConnection.connection.name}`)
    }catch(error){
        console.log(`db connection failed ${error}`);
        process.exit(1);
    }
}

export default dbConnect;