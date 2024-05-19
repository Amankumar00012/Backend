import Mongoose from "mongoose";

 const dbConnection = () => {
    Mongoose.connect('mongodb://localhost:27017/mydb')
    .then(() => {
        console.log("Conncetion Successfully");
    })
    .catch((err) => {
        console.log(`Connection failed.${err}`);
    });
};
export default dbConnection;