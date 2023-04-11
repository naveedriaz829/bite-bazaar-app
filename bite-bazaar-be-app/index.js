const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const connectDB = require('./db/connect');
const Userrouter = require('./routes/user-route');
const WishListRouter = require('./routes/user-wishlist');
const HistoryRouter = require('./routes/user-history');
const ProductsRouter = require('./routes/user-products');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));

app.use(cookieParser());

app.use('/authentication', Userrouter);
app.use('/user', WishListRouter);
app.use('/user',HistoryRouter)
app.use('/user',ProductsRouter )

app.use('/', (req, res) => {
    res.send('express')
})

const start = async () => {
    try {
        await connectDB();
        app.listen(process.env.PORT, () => { console.log(`Server listening on port ${process.env.PORT}`) });
    } catch (error) {
        console.log(error);
    }
}
start();