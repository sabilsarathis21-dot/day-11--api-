//GET

// get async await userData

async function getUser() {
    try {
        let response= await fetch("https://jsonplaceholder.typicode.com/users,");
        let data = await response.json();
        console.log(data);


    }catch(error){          //any error

    }console.log(error)
    
}

getUser();




//POST

// post async await userData




async function postUser() {
    try {
        let response= await fetch("https://jsonplaceholder.typicode.com/users",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                title:"javascript",
                body:"fetch API",
                userId:1

            })
    });


let data = await response.json();
console.log(data);
}catch(error){          

    console.log(error)
    }
}

postUser();



//PUT

// async await using PUT UserData


async function putUser() {
    try {
        let response= await fetch("https://jsonplaceholder.typicode.com/posts/1",{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                
                title:"Updated javascript",
                body:"updated fetch API",
                userId:2

            })
    })


let data = await response.json();
console.log(data);


    }catch(error){          

    console.log(error)
    }
}

putUser();




//PATCH

// PATCH method using async/await

async function patchUser() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "PATCH",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    title: "Updated JavaScript",
                    userId: 2
                })
            }
        );

        let data = await response.json();

        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

patchUser();





//DELETE


//async await using delete method
async function DeleteUser() {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
            method:"DELETE"

        })
        if(response){
            console.log("post deleted successful")
        }else{
            console.log("delete fail")
        }
        
    }catch{(error)
        console.log(error)
    }
}
