const express = require("express");
const req = require("express/lib/request");
const app = express();
const path = require("path");
const sqlite3 = require("sqlite3");
const mongoose = require("mongoose");
const { Profile }  = require("./models/Profile");
const { Blog } = require("./models/Blogs");
const { Pet } = require("./models/Pets");

const { storage } = require("./cloud");
const multer = require("multer");

const upload = multer({storage});


mongoose.connect('mongodb://localhost:27017/PetSanctum')
    .then(()=>{
        console.log("Mongo DB Connected");
    })
    .catch((err)=>{
        console.log("Mogno DB connection failed");
    });


let LoginStatus = 0;
let LoginProfile = null;
let isAdmin = -1;


const PORT = 3000;

app.use(express.static(path.join(__dirname, "Static")));

app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/Views"));

app.listen(PORT, () => {
    console.log(`Listening to port number ${PORT}`);
})


app.get("/", (req, res) => {

    console.log("Welcome to Home Page");
    res.render("home",{LoginStatus,LoginProfile,isAdmin});

});

app.get("/Adopt",async (req,res)=>{


    const temp = req.query;
    console.log(temp);

    if(temp.type == "All")
    {
        const PetsData = await Pet.find({isAdopt:-1});
        res.render("adopt",{ animalList: PetsData,LoginStatus,LoginProfile,isAdmin});
    }
    else
    {
        const PetsData = await Pet.find({type:temp.type});
        res.render("adopt",{ animalList: PetsData,LoginStatus,LoginProfile,isAdmin});
    }
});

// To be Done
app.get("/Upload",(req,res)=>{

    if(LoginStatus==0)
    {
        res.send("<script>alert('Please Login to view this page'); window.location.href='/Login'</script>");
    }
    else
    {
        res.render("upload",{LoginStatus,LoginProfile,isAdmin});
    }
});

app.post("/Upload",upload.single("image"),async (req,res)=>{


    console.log(req.body);

    const temp = req.body;
    temp.owner = LoginProfile.fname + " " + LoginProfile.lname;
    temp.phone = LoginProfile.phone;
    temp.address = LoginProfile.address;
    temp.isAdopt = -1;
    temp.imageUrl = req.file.path;
    console.log(req.file);

    const pet = new Pet(temp);
    const tp1 = await Profile.updateOne({_id:LoginProfile._id}, { $push: { rescued: pet._id } } , {new: true});
    LoginProfile.adopted.push(pet._id);


    pet.save()
        .then(()=>{
            console.log("Saved");
            res.send("<script>alert('Pet Added! Thank you'); window.location.href='/adopt'</script>");         
        })
        .catch(()=>{
            console.log("Failed");
            res.send("<script>alert('Failed to Add Pet please try again.'); window.location.href='/Upload'</script>");         
        })


});
//

app.get("/LogIn",(req,res)=>{
    res.render("login");
}); 

app.post("/LogIn",async (req,res)=>{

    console.log(req.body);

    const row = await Profile.findOne({username: req.body.username});

    
    console.log(row);
    if(row==undefined || row.password!==req.body.password)
    {
        res.send("<script>alert('Log In Failed! Enter Correct username and Password'); window.location.href = 'http://localhost:3000/LogIn'; </script>");
    } 
    else 
    {
        LoginStatus=1;
        LoginProfile=row;
        isAdmin = LoginProfile.isAdmin;
        res.send("<script>alert('Logged In Successfully'); window.location.href = 'http://localhost:3000/'; </script>");
    }


});

app.get("/ContactUs",(req,res)=>{
    res.render("CONTACT-PAGE");
});

app.get("/Blogs", async (req, res) => {


    const sql = "SELECT * FROM blogs ORDER by uid";
    const rows = await Blog.find({});
    console.log(rows);
    
    res.render("blogs",{"blogList":rows,LoginStatus,LoginProfile,isAdmin});
});

app.get("/DonateUs", (req, res) => {
    res.render("donate",{LoginStatus,LoginProfile,isAdmin});
});

app.get("/Pet", async (req, res) => {

    
    temp1 = req.query;

    uid = temp1["id"]
    
    if(uid==undefined) {
        uid=1;
    }

    const petData = await Pet.findById(uid);
    console.log(petData);
    res.render("petinformation",{data:petData,LoginStatus,LoginProfile,isAdmin});

});

app.get("/adoptPet",async (req,res)=>{

    console.log(req.query);

    if(LoginStatus===0) {
        res.redirect("/Login");
        
    }
    
    const { id } = req.query;

    console.log(LoginProfile);

    const temp = await Pet.updateOne({_id:id},{$set: {isAdopt: LoginProfile._id} });
    const tp1 = await Profile.updateOne({_id:LoginProfile._id}, { $push: { adopted: id } } , {new: true});
    LoginProfile.adopted.push(id);
    console.log(LoginProfile);

    res.send("hola");

});

app.get("/Profile", async(req, res) => {

    if(LoginStatus==0)
    {
        res.redirect("/Login");
    }

    console.log(LoginProfile);
    console.log(LoginStatus);

    const profiles = await Profile.find({});
    const animals = await Pet.find({});
    const blogs = await Blog.find({});
    
    const adopted = await Pet.find({ "_id": { $in: LoginProfile.adopted } });
    console.log(adopted);

    const rescued = await Pet.find({ "_id": { $in: LoginProfile.rescued } });
    console.log(rescued);

    // console.log(blogs);
    const temp = req.query;
    console.log(temp);
        
    res.render("profile",{profileList:profiles,animals,blogs,LoginStatus,LoginProfile,isAdmin,adopted,rescued});
    

});

app.get("/SignUp",(req,res)=>{

    
    res.render("signup");
});

app.post("/SignUp",(req,res)=> {

    console.log(req.body);
    const temp = req.body;
    temp.imageUrl = "../Resources/images/empty_profile.webp";

    let ProfileData = new Profile(temp);
    ProfileData.save()
        .then(()=>{
            console.log("Profile Data inserted successfully");
            res.send("<script>alert('Signed Up Successfully. Please Login Now'); window.location.href = '/LogIn'; </script>");
        })
        .catch((err)=>{
            res.send("<script>alert('Sign Up Failed. Username already exists'); window.location.href = '/SignUp'; </script>");
            return console.log(err.message)
        })


});

app.post("/AddBlog",upload.single("blogImage"),async (req,res)=>{

    console.log(req.body);
    console.log(req.file);

    const newBlog = new Blog({
        imageUrl: req.file.path,
        title: req.body.title,
        description: req.body.description
    })

    await newBlog.save()
        .then((hmm)=>{
            console.log(hmm);
            res.send(`<script>alert('New Blog Added'); window.location.href='/BlogRead?uid=${hmm._id}'</script>`)
        })
        .catch((err)=>{
            console.log(err);
            res.send(`<script>alert('Error inserting new blog'); window.location.href='/'</script>`)
        })

});

app.get("/BlogRead",async (req,res)=> {

    const id = req.query.uid;


    const row = await Blog.findById(id);

    console.log(row);
    res.render("BlogRead",{row:row,LoginStatus,LoginProfile,isAdmin});

});

app.post("/Rescue",upload.single("image"),async (req,res)=>{

    console.log(req.body);
    console.log(req.file);

    const temp = req.body;
    temp.age = 6;
    temp.vaccinated = "NA";
    temp.otherpets = "NA";
    temp.otherhumans = "NA";
    temp.trained = "NA";
    temp.owner = "Team Pet Sanctum";
    temp.isAdopt = "-1";
    // temp.owner = LoginProfile.fname + " " + LoginProfile.lname;
    // temp.phone = LoginProfile.phone;
    // temp.address = LoginProfile.address;
    // temp.isAdopt = -1;
    temp.imageUrl = req.file.path;
    console.log(req.file);

    const pet = new Pet(temp);
    const tp1 = await Profile.updateOne({_id:LoginProfile._id}, { $push: { rescued: pet._id } } , {new: true});
    LoginProfile.rescued.push(pet._id);


    pet.save()
        .then(()=>{
            console.log("Saved");
            res.send("<script>alert('Pet Added! Thank you'); window.location.href='/adopt?type=all'</script>");         
        })
        .catch(()=>{
            console.log("Failed");
            res.send("<script>alert('Failed to Add Pet please try again.'); window.location.href='/Upload'</script>");         
        })

    

});

app.get("/Rescue",(req,res)=>{

    if(LoginStatus==0)
    {
        res.send("<script>alert('Please Login to view this page'); window.location.href='/Login'</script>");
    }
    else
    {
        res.render("rescuestray",{LoginStatus,LoginProfile,isAdmin});
    }

});

app.get("/AddBlog",(req,res)=>{
    res.render("addblog",{LoginStatus,LoginProfile,isAdmin});
});

app.get("/Logout",(req,res)=>{

    LoginProfile=null;
    LoginStatus=0;
    isAdmin=-1;

    res.send("<script>alert('Logged out successfully'); window.location.href='/' </script>");

});

app.get("/deleteProfile",async (req,res)=>{

    if(LoginStatus==0)
    {
        res.send("<script>alert('Please Login to View this Page'); window.location.href='/Login'</script>")
        return;
    }
    
    if(isAdmin==0)
    {
        res.send("<script>alert('You are not authorized to view this page'); window.location.href='/'</script>")
        return;
    }

    const { id } = req.query;

    const temp = await Profile.findByIdAndDelete(id);

    res.redirect("/Profile");
}); 

app.get("/makeadmin", async (req,res)=>{
    if(LoginStatus==0)
    {
        res.send("<script>alert('Please Login to View this Page'); window.location.href='/Login'</script>")
        return;
    }
    
    if(isAdmin==0)
    {
        res.send("<script>alert('You are not authorized to view this page'); window.location.href='/'</script>")
        return;
    }
    
    const { id } = req.query;
    
    const temp = await Profile.updateOne({_id:id},{isAdmin:1});

    const profile = await Profile.findById(id);

    res.send(`<script>alert('Admin status for ${profile.username} updated'); window.location.href='/Profile'</script>`);

})

app.get("/deleteBlog",async (req,res)=>{

    const { id } = req.query;

    if(LoginStatus==0)
    {
        res.send("<script>alert('Please Login to View this Page'); window.location.href='/Login'</script>")
        return;
    }
    
    if(isAdmin==0)
    {
        res.send("<script>alert('You are not authorized to view this page'); window.location.href='/'</script>")
        return;
    }

    const tmp = await Blog.findByIdAndDelete(id);

    res.send(`<script>alert('Blog Deleted Successfully'); window.location.href='/Profile'</script>`);
    
})

app.get("/deletePet",async (req,res)=>{
    
    const { id } = req.query;
    
    if(LoginStatus==0)
    {
        res.send("<script>alert('Please Login to View this Page'); window.location.href='/Login'</script>")
        return;
    }
    
    if(isAdmin==0)
    {
        res.send("<script>alert('You are not authorized to view this page'); window.location.href='/'</script>")
        return;
    }
    
    const temp = await Pet.findByIdAndDelete(id);
    
    res.send(`<script>alert('Pet Removed Successfully'); window.location.href='/Profile'</script>`);
})

app.post("/editProfileInfo", upload.single('ProfileImage'),async (req,res)=>{

    // console.log(req.body);
    // console.log(req.file);
    const { id } = req.query;

    const temp = req.body;

    if(req.file!==undefined) {

        temp.imageUrl = req.file.path;

    }    
    console.log("Below this");
    const uff = await Profile.updateOne({_id:id},{ $set: temp },{runValidators:true,new:true});
    console.log(uff);
    
    LoginProfile=await Profile.findById(id);

    res.send("<script>alert('Profile Info Edited'); window.location.href='/Profile'</script>");

});

app.get("*",(req,res)=>{

    res.send("<h1> 404 Error: Page does not exist</h1>");

 
});