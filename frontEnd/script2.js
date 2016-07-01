var list = document.getElementById("activeUsers")

$(document).ready(function(){
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:3000/",
    "method": "GET",
    "headers": {
      "cache-control": "no-cache",
      "postman-token": "89a92717-70da-54a6-6eee-06f78d3c0d7d"
    }
  }

  $.ajax(settings).done(function (response) {
    var users = response.user_data
    console.log(users);
    for (var i = 0; i < users.length; i++) {
      if (users[i].user_data.active === 1) {
        var addUser = document.createElement("li")
        addUser.innerHTML = users[i].user_data.first_name + " " + users[i].user_data.last_name
      }
      list.appendChild(addUser)
    }
  });
})
