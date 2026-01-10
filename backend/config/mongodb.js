import mongoose from 'mongoose'

const connectDB = async () => {
   mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log('Connect to database')
}).catch((err)=>{
    console.log(err)
})
}

export default connectDB
