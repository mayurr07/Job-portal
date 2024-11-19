import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Wohooo! Database Connected Succesfully')
    } catch (error) {
        console.log(`${error}, Database connection issue`)
    }
}
export default connectDB;