// app.js(root folder)
const bodyParser = require('body-parser');

const path =require('path');

const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

})


app.listen(4000);

#views:
//add-product.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Product</title>
    <style>
        body {
            padding:0;
            margin:0;
        }
        main {
            padding: 1rem;
        }
        .main-header {
            width:100%;
            height:3.5m;
            background-color: #dbc441;
            padding:0 1.5rem;
        }
        .main-header__nav {
            height:100%;
            display:flex;
            align-items: center;
        }
        .main-header__item-list {
            list-style:none;
            margin:0;
            padding:0;
            display: flex;
        }
        .main-header__item {
            margin: 0 1rem;
            padding:0;
        }
        .main-header__item a {
            text-decoration: none;
            color: black;
        }
        .main-header__item a:hover,
        .main-header__item a:active,
        .main-header__item a:active {
            color:#3e00a1;
        }

        .product-form {
            width:20rem;
            max-width:90%;
            margin:auto;

        }

        .form-control {
            margin: 1rem 0;
        }

        .form-control label,
        .form-control input {
            display:block;
            width:100%;

        }

        .form-control input {
            border: 1px solid#dbc441;
            font:inherit;
            border-radius: 2px;
        }

        button{
            font: inherit;
            border: 1px solid#3e00a1;
            color: #3e00a1;
            background: white;
            border-radius: 3px;
            cursor: pointer;
        }

        button:hover,
        button:active {
            background-color: #3e00a1;
            color: white;
        }

    </style>
</head>
<body>
    <header class="main-header">
        <nav class="main-header__nav">
            <ul class="main-header__item-list">
                <li class="main-header__item"><a href = "/">Shop</a></li>
                <li class="main-header__item"><a class="active" href="/admin/add-product">Add Product</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <form class="product-form" action="/admin/add-product" method="POST">
            <div class="form-control" >
                <label for="title"></label>Title</label>
            </div>

            <input type="text" name="title">
            <button type="submit">Add Product</button>
        </form>

    </main>
</body>
</html>

//shop.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Product</title>
    <style>
        body {
            padding:0;
            margin:0;
        }
        main {
            padding: 1rem;
        }
        .main-header {
            width:100%;
            height:3.5m;
            background-color: #dbc441;
            padding:0 1.5rem;
        }
        .main-header__nav {
            height:100%;
            display:flex;
            align-items: center;
        }
        .main-header__item-list {
            list-style:none;
            margin:0;
            padding:0;
            display: flex;
        }
        .main-header__item {
            margin: 0 1rem;
            padding:0;
        }
        .main-header__item a {
            text-decoration: none;
            color: white;
        }
        .main-header__item a:hover,
        .main-header__item a:active,
        .main-header__item a:active {
            color:#6200ff;
        }

    </style>
</head>
<body>
    <header class="main-header">
        <nav class="main-header__nav">
            <ul class="main-header__item-list">
                <li class="main-header__item"><a class="active" href = "/">Shop</a></li>
                <li class="main-header__item"><a href="/admin/add-product">Add Product</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <h1>My Products</h1>
        <p>List of all the products...></p>

    </main>
</body>
</html>

//404.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>page not found</title>
    <style>
        body {
            padding:0;
            margin:0;
        }
        main {
            padding: 1rem;
        }
        .main-header {
            width:100%;
            height:3.5m;
            background-color: #dbc441;
            padding:0 1.5rem;
        }
        .main-header__nav {
            height:100%;
            display:flex;
            align-items: center;
        }
        .main-header__item-list {
            list-style:none;
            margin:0;
            padding:0;
            display: flex;
        }
        .main-header__item {
            margin: 0 1rem;
            padding:0;
        }
        .main-header__item a {
            text-decoration: none;
            color: white;
        }
        .main-header__item a:hover,
        .main-header__item a:active,
        .main-header__item a:active {
            color:#6200ff;
        }

    </style>
</head>
<body>
    <header class="main-header">
        <nav class="main-header__nav">
            <ul class="main-header__item-list">
                <li class="main-header__item"><a class="active" href = "/">Shop</a></li>
                <li class="main-header__item"><a href="/admin/add-product">Add Product</a></li>
            </ul>
        </nav>
    </header>
    <h1> Page Not Found!</h1>
</body>
</html>

#util
//path.js
const path = require('path');

module.exports = path.dirname(process.mainModule.filename);

#routes
//admin.js
const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',(req,res,next) => {
    
    res.sendFile(path.join(rootDir, 'views', '/add-product.html'));
    
});

// /admin/add-product => POST
router.post('/add-product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;

//shop.js
const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();


router.get('/',(req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', '/shop.html'));
});


module.exports = router;
