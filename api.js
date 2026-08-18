// FETCH API

// syntax :- fetch(url)

// fetch(https://jsonplaceholder.typicode.com/users)

// fetch() -> sends request

//URL -> API endpoint
//returns -> promise 

// JSON - javascript object notation

// APIs usually return data in JSON format.

// {
// "id" :1,
// "name":"john",
// "email":"john@gmail,com"
// }

// GET REQUEST -- used to retrieve data from server


fetch("https://jsonplaceholder.typicode.com/users")

.then((res)=>{
    return res.json();    // return res.json()--- returns the Promise containing the converted JSON data to the next .then().
})

.then ((data)=>{
    console.log(data)
})



//READING JSON DATA -- response.json()  convert response object into js data

fetch ("https://jsonplaceholder.typicode.com/users")

.then ((response)=>{
            return response.json();

})
.then((data)=>{
    console.log(data.body);  // to get body data from api
});







// response.ok check - used to check whether request was successful.


// it returns -- true (success) / false(failed)


fetch("https://jsonplaceholder.typicode.com/users")

.then((response)=>{
    if(response.ok){  
        return response.json();    //  if  -->success it work 
    }else{
        throw new Error("request fail") //  else ---> error occur it show
    }
}).then((data)=>{
    console.log(data);

}).catch((error)=>{                    // the error fm else
    console.log(error);                     
})
//<----------------------------------------------------------------------------------------------------------->



// use ads for each get user data    user name change itrate  store indiv user name step by step get

// op is individually usee name step by step




fetch("https://jsonplaceholder.typicode.com/users")

.then((response)=>{
    if(response.ok){  
        return response.json();    //  if  -->success it work 
    }else{
        throw new Error("request fail") //  else ---> error occur it show
    }
}).then((data)=>{
    data.forEach((i)=>{                   // i store user data in oder wise 
            console.log(i.username);      // to get user name individually


    });

}).catch((error)=>{                    // the error fm else
    console.log(error);                     
})




// post request 

// syntax:-------

// fetch(URL,{
// method : "POST",
// header:{},
// body.json.stringfy({

// })
// })

// to post a content like gform



//POST

fetch("http://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    headers:{                                           // type of data
        "Content-Type":"application/json"   // it change according to pdf like
    },
    body:JSON.stringify({
        title:"javascript",
        body:"fetch API",
        userId:3
    })
})

.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
});









// .then not use use async await

// fetch using ASYNC / AWAIT

async function getUser() {
    try {
        let response= await fetch("https://jsonplaceholder.typicode.com/users,");
        let data = await response.json();
        console.log(data);


    }catch(error){          //any error

    }console.log(error)
    
}

getUser();














// use post async await


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







// PUT  METHOD   TO ADD EDIT NEW DATA

// PUT METHOD - EDIT / UPDATE DATA  WITH OUT DELAY WE USE THIS WE NEED DELAY ASYNC AWAIT USE




///await async function using put



// use post async await  

// async await using PUT


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





//PATCH................................................................

// this use edit one lines of data like 

fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method :"PATCH",
    
    headers :{
        "Content-Type":"application/json"
    },
    body:
        JSON.stringify({
            title:"java script"
        })
    })
        .then((response)=>{
            return response.json();
        })
        .then ((data)=>{
            console.log(data)
        })

        .catch((error)=>
        console.log(error))

//async await

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


















//DELETE ...................................................................

// .USING.THEN


fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:"DELETE"

})

.then((response) =>{
    if(response.ok){
        console.log("POST DELETE SUCCESSFULLY");}
        else{
            console.log("FAILED DELETE")

        }
    })

.catch((error)=>{
    console.log(error)
})







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
