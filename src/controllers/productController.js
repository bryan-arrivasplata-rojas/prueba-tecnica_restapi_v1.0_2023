const database= require('../database/database');
const mysql = require('promise-mysql');

const getProductAll  = async(req,res)=>{
    const connection = await mysql.createConnection(database);
    try{
        const stmt = `SELECT
                        a.idProduct,
                        a.name,
                        a.description,
                        a.price,
                        a.cost,
                        a.price,
                        a.stock,
                        b.name 'name_category'
                    FROM
                        product a,
                        category b
                    WHERE
                        a.idCategory = b.idCategory`;
        const myresult = await connection.query(stmt);
        if(myresult.length>0){
            res.json({'flag':0,'response':myresult});
        }else{
            res.json({'flag':1,'response':`No hay datos de productos`})
        }
        connection.destroy();
    }catch(_){
        res.json({'flag':1,'response':_});
        connection.destroy();
    }
};
const getProduct  = async(req,res)=>{
    const connection = await mysql.createConnection(database);
    try{
        const {idProduct} = req.params;
        const stmt = `SELECT
                        a.idProduct,
                        a.name,
                        a.description,
                        a.price,
                        a.cost,
                        a.price,
                        a.stock,
                        b.name 'name_category'
                    FROM
                        product a,
                        category b
                    WHERE
                        a.idCategory = b.idCategory AND
                        a.idProduct='${idProduct}'`;
        const myresult = await connection.query(stmt);
        if(myresult.length>0){
            res.json({'flag':0,'response':myresult});
        }else{
            res.json({'flag':1,'response':`No hay datos para el producto ${idProduct}`})
        }
        connection.destroy();
    }catch(_){
        res.json({'flag':1,'response':_});
        connection.destroy();
    }
};

const postProduct  = async(req,res)=>{
    const connection = await mysql.createConnection(database);
    try{
        const {name,description,price,cost,stock,idCategory} = req.body;
        const stmt = `INSERT INTO
                        product (name,description,price,cost,stock,idCategory)
                    VALUES ('${name}','${description}','${price}','${cost}','${stock}','${idCategory}')`;
        const myresult = await connection.query(stmt);
        connection.commit();
        res.json({'flag':0,'response':myresult});
        connection.destroy();
    }catch(_){
        res.json({'flag':1,'response':_});
        connection.destroy();
    }
};
const putProduct = async(req,res)=>{
    const connection = await mysql.createConnection(database);
    try{
        const {idProduct} = req.params;
        const {description,price,cost,stock,idCategory} = req.body;
        const stmt = `UPDATE
                        product
                    SET
                        description = '${description}',
                        price = '${price}',
                        cost = '${cost}',
                        stock = '${stock}',
                        idCategory = '${idCategory}'

                    WHERE
                        idProduct='${idProduct}'`;
        const myresult = await connection.query(stmt);
        connection.commit();
        res.json({'flag':0,'response':myresult});
        connection.destroy();
    }catch(_){
        res.json({'flag':1,'response':_});
        connection.destroy();
    }
};
const deleteProduct  = async(req,res)=>{
    const connection = await mysql.createConnection(database);
    try{
        const {idProduct} = req.params;
        const stmt = `DELETE FROM
                        product
                    WHERE
                        idProduct = '${idProduct}'`;
        const myresult = await connection.query(stmt);
        connection.commit();
        res.json({'flag':0,'response':myresult});
        connection.destroy();
    }catch(_){
        res.json({'flag':1,'response':_});
        connection.destroy();
    }
};

const methods = {
    getProductAll,
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
};

module.exports = methods;