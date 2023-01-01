
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


