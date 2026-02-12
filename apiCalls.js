import express from 'express';
const app = express();
app.use(express.json());
let users =[
    {
        id: 1,
        name: "Thaariq",
        email: "thaariq.hassan@gmail.com"
    },
    {
        id: 2,
        name: "Test",
        email: "test@gmail.com"
    }
];
app.get('/users',(req,res) =>{
    res.status(200).json(users);
});

app.get("/users/:id",(req,res) =>{
    const userId = parseInt(req.params.id);
    const requiredUser = users.find(u => u.id == userId);
    if (!requiredUser){
        res.status(404).json({
            "error": {
                        "code": "USER_NOT_FOUND",
                        "message": "User does not exist"
                    }
                });
    }
    else{
        res.status(200).json(requiredUser);
    }
})

app.post("/users",(req,res) =>{
    const {id,name,email} = req.body;
    if (users.some(u => u.id == id)){
        res.status(409).json({error: "ID already exists"})
        return
    }
    else if (users.some(u => u.name == name)){
        res.status(409).json({error: "Name already exists"})
        return
    }
    else if (users.some(u => u.email == email)){
        res.status(409).json({error: "Email already exists"})
        return
    }
    if (!name || !email){
        res.status(400).json({error: "Inavalid name or email"})
        return
    }

    users.push({
        id: id,
        name: name,
        email: email
    });
    
    res.status(201).json({message: "User inserted successfully"});

});

app.patch("/users/:id",(req,res) =>{
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id == id);
    if (index != -1){
        const updatedUser = {
            ...users[index],
            ...req.body
        }
        users[index] = updatedUser;
        res.status(200).json({message:"User updated successfully"});
    }
    else{
        res.status(404).json({
            "error": {
                        "code": "USER_NOT_FOUND",
                        "message": "User does not exist"
                    }
                });
    }
});

app.delete("/users/:id", (req,res) =>{
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id == id);
    if (index == -1){
        res.status(404).json({
            "error": {
                        "code": "USER_NOT_FOUND",
                        "message": "User does not exist"
                    }
                });
    }
    else{
        users.splice(index,1);
        res.status(202).json({message:"user deleted successfully"});
    }
});

app.listen(3000,() =>{
    console.log("Server listening at port 3000.....");
});
