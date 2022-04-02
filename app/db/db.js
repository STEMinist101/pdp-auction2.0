const mongoose = require('mongoose');
const {bgGreen, bgRed, black} = require('colors');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://Devendu:12345@cluster0.vctyv.mongodb.net/auction?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => console.log(bgGreen(black('Connected to MongoDb successfully'))))
.catch((err) => console.log(bgRed('Failed to connect to MongoDb',JSON.stringify(err, undefined, 3))));
    
module.exports = {mongoose};