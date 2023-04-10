const database = require ('../database/database')
const mysql = require('promise-mysql');

const getCategoryAll  = async(req,res)=>{
    const connection = await mysql.createConnection(database);
    try{
        const stmt = `SELECT
                a.idCategory,
                a.name,
                a.description
            FROM
                category a`;
        const myresult = await connection.query(stmt);
        if(myresult.length>0){
            res.json({'flag':0,'response':myresult});
        }else{
            res.json({'flag':1,'response':`No hay datos de categorias`})
        }
        connection.destroy();
    }catch(_){
        res.json({'flag':1,'response':_});
        connection.destroy();
    }
};
const getCategory  = async(req,res)=>{
    const connection = await mysql.createConnection(database);
    try{
        const {idCategory} = req.params;
        const stmt = `SELECT
                    a.idCategory,
                    a.name,
                    a.description
                FROM
                    category a
                WHERE
                    a.idCategory='${idCategory}'`;
        const myresult = await connection.query(stmt);
        if(myresult.length>0){
            res.json({'flag':0,'response':myresult});
        }else{
            res.json({'flag':1,'response':`No hay datos para la categoria ${idCategory}`})
        }
        connection.destroy();
    }catch(_){
        res.json({'flag':1,'response':_});
        connection.destroy();
    }
};
const getCategoryProducts  = async(req,res)=>{
    const connection = await mysql.createConnection(database);
    try{
        const {idCategory} = req.params;
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
                        a.idCategory='${idCategory}'`;
        const myresult = await connection.query(stmt);
        if(myresult.length>0){
            res.json({'flag':0,'response':myresult});
        }else{
            res.json({'flag':1,'response':`No hay datos para la categoria ${idCategory}`})
        }
        connection.destroy();
    }catch(_){
        res.json({'flag':1,'response':_});
        connection.destroy();
    }
};

const methods = {
    getCategoryAll,
    getCategory,
    getCategoryProducts
};

module.exports = methods;