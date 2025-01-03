//importing model from model.js

import users from '../model/model.js'



export const create=async(req,res)=>{           // POST method , create is a variable
    let userdata=new users(req.body);       //userdata is variable , users is imported from model.js , data from users are stored in userdata
    const {email}=userdata;          // email will be unique , so to avoid duplicates , from userdata we are getting email and stored in email variable
    
       // check with email using findOne , so await becoz it has to search in db and come 
    const userExist = await users.findOne({ email }); 
    if(userExist)     // if true, then user already exist
    {
        return res.status(400).json({message:"Email already exist"});
    }
    if (Array.isArray(req.body)) { 
        // If the request body is an array of users, we need to insert them all
        const savedUsers = await users.insertMany(req.body);  // Insert multiple users
        return res.status(200).json({ savedUsers }); // Respond with all saved users
    }
    //const saveduser = await users.insertMany(usersData);
    const saveduser=await userdata.save();  // if not, then it will save that data
    res.status(200).json({saveduser});      // success code - 200
}

export const fetch= async(req,res)=>{   // fetch is a variable          //GET method
    // try{  
    // res.send("Hello world");
    // }

    try{
        const user=await users.find();
        if(user.length===0){                 // to check whether user exist
            return res.status(404).json({message:"No user exist"})
        }
        res.status(200).json({user});
    }
    catch{
        res.status(500).json({error:"internal server error"});
    }
}


//update
export const update= async(req,res)=>{   // update is a variable          //PUT method
    
    try{
        const id=req.params.id;
        const userExist=await users.findOne({_id:id})        // to check whether user exist
        if(!userExist){
            return res.status(400).json({message:"No user exist"});
        }
        const updateUser=await users.findByIdAndUpdate(id, req.body,{new:true});
        res.status(200).json({updateUser});
    }
    catch{
        res.status(500).json({error:"internal server error"});
    }
}

//delete
export const del= async(req,res)=>{

    try{
         const id=req.params.id;
         const userExist=await users.findById(id);
         if(!userExist){
            return res.status(400).json({message:"No user exist to delete"});
         }
         await users.findByIdAndDelete(id);
         res.status(200).json({message:"Deleted user"});
    }
    catch{
        res.status(500).json({error:"internal server error"});
    }
}

// get by id
export const details = async(req,res)=>{   // details is a variable          //GET method

    try{
        const id=req.params.id;
        const user=await users.findById(id);
        if(user.length===0){                 // to check whether user exist
            return res.status(404).json({message:"No user exist"})
        }
        res.status(200).json({user});
    }
    catch{
        res.status(500).json({error:"internal server error"});
    }
}

