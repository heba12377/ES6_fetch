
// var promUser = new Promise((res, rej) => {
//     setTimeout(()=>{
//         var promiseCarriesResponse = fetch("https://jsonplaceholder.typicode.com/users");
//         if (promiseCarriesResponse) {
//             //console.log(promiseCarriesResponse);
//             res(promiseCarriesResponse);
//         }
//         else{rej("Users data not found");}
//     },1000);
// });

// function getPosts(user) {
//     var promPosts = new Promise ((res,rej)=>{
//         setTimeout(()=>{
//             var posts = fetch("https://jsonplaceholder.typicode.com/posts?userId="+user+"");
//             console.log(posts);
//             //var posts = fetch("https://jsonplaceholder.typicode.com/posts?userId="+user[id]+"");
//             if(posts){
//                 res(posts);
//             }
//             else{"Posts not found"}
//         },1000);
//     });
//     return promPosts;
// }

// async function myPromises(userId) {
//     try {
//         var x = await promUser;
//         console.log(x);
//         var y = x.json();
//         console.log(y); 
//     } catch (error) {console.log(error);}
// }

//promUser.then((responseFromUserPromise)=>responseFromUserPromise.json()) // promise ( result --> data of users )
// promiseCarriesResponse.then((response)=>response.json()) //promise ( result --> data of users )


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


async function getUsers() {
    var promiseCarriesResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    return promiseCarriesResponse;
}


getUsers()
    .then((response) => response.json()) //promise ( result --> data of users )
    .then((users) => {
        console.log(users);
        var x = document.getElementById("header");
        users.forEach(function (ele) {
            x.innerHTML += "<button onclick='getPosts(this.id)' id='" + ele.id + "' class='names'>" + ele.name + "</button>";
        });
        var y = document.querySelector(".names").focus();
        getPosts(1);
    })
    .catch((err) => console.log(err))


async function getPosts(userId) {
    try {
        var responseOfUserPromise = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId + "");
        //console.log(responseOfUserPromise);
        var userData = await responseOfUserPromise.json();
        console.log(userData);
        var y = document.querySelector("#posts");
        y.innerHTML = "<ul id='list'></ul>";
        userData.forEach((ele) => {
            if (ele.userId == userId) {
                var z = document.querySelector("#list");
                z.innerHTML += "<li>" + ele.title + "</li>";
            }
        })
    } catch (error) { console.log(error); }
}


