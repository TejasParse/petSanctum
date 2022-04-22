const mongoose = require("mongoose");
const { Profile }  = require("../models/Profile");
const { Blog } = require("../models/Blogs");
const { Pet } = require("../models/Pets");
const path = require("path");
const sqlite3 = require("sqlite3");

const db_name = path.join(__dirname, "database.db");
const db = new sqlite3.Database(db_name, err => {
    if (err) {
        return console.log(err.message);
    }
    console.log("FSD Database Connected");
});

mongoose.connect('mongodb://localhost:27017/PetSanctum')
    .then(()=>{
        console.log("Mongo DB Connected");
        // addLogin();
        // addBLog();
        addPet();
    })
    .catch((err)=>{
        console.log("Mongo DB Failed");
    });

async function DataFetchedLogin(rows) {

    await Profile.deleteMany({});
    for(let i=0;i<rows.length;i++)
    {
        rows[i].adopted=[]
        rows[i].rescued=[]
    }
    const temp = await Profile.insertMany(rows);

}

const addLogin = async ()=>{
    const sql = `SELECT * FROM Profile`;

    db.all(sql, async (err, rows)=>{
        if (err){
            return console.log(err.message);
        }
        DataFetchedLogin(rows);
    })
};


async function DataFetchedBlog(rows) {

    await Blog.deleteMany({});
    const temp = await Blog.insertMany(rows);

}

const addBLog = async ()=>{
    const sql = `SELECT * FROM blogs`;

    db.all(sql, async (err, rows)=>{
        if (err){
            return console.log(err.message);
        }
        DataFetchedBlog(rows);
    })
};

async function DataFetchedPet(rows) {

    await Pet.deleteMany({});
    const temp = await Pet.insertMany(rows);

}

const addPet = async ()=>{
    const sql = `SELECT * FROM Pets`;

    db.all(sql, async (err, rows)=>{
        if (err){
            return console.log(err.message);
        }
        DataFetchedPet(rows);
    })
};

