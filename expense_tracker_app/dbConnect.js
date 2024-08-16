const mongoose = require('mongoose')

//const connect = mongoose.connect('mongodb+srv://sivakumarveerasekar98:MgtaiVq6CpUKpG9S@cluster0.jgto2sl.mongodb.net/expensetracker-dev')

mongoose.connect('mongodb+srv://root:root@cluster0.vb9scf4.mongodb.net/Amuthan');

const connection =  mongoose.connection
connection.on('error' , err => console.log(err))
connection.on('connected', () => console.log('MongoDB connection Successfull'))

//MgtaiVq6CpUKpG9S

  