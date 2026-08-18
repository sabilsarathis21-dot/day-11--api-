async function getTodo(){
    try{
        let resp = await fetch("https://jsonplaceholder.typicode.com/todos");
        let data = await resp.json();
        console.log(data);
    }catch(err){
        console.log(err)
    }
}
getTodo();




// POST

async function postTodo() {
    try{
        let response=await fetch("https://jsonplaceholder.typicode.com/todos",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title : "Create todo app",
                userId: 29,
                completed: false
            })
            

        });
        let data = await response.json();
        console.log(data);
    }catch(err){
        console.log(err)
    }
    }

    postTodo();




    //PUT


async function putTodo() {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/21",{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title : "Create todo app",
                userId: 29,
                completed: false

            })

        });
        let data = await response.json();
        console.log(data);
    }   catch(err){
        console.log(err)
    }
    
}
putTodo();





//PATCH

async function patchTodo() {
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/21',{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title: "Updated JavaScript",
                    userId: 2
            
        })
            

        });
        let data = await response.json();
        console.log(data);

        
        

    }catch(err){
            console.log(err);
    
}
}

patchTodo();



// DELETE

async function deleteTodo(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/99',{
            method: "DELETE"
        });
        if(response){
            console.log("Activity deleted success");
        }else{
            console.log("Delete Failed");
        }
    }catch(err){
        console.log(err);
    }
}
deleteTodo();