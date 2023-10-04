// document.getElementById("add_user").addEventListener("submit", function(event) {
//     event.preventDefault();
//     alert("Data Inserted Successfully!");
// });
// document.getElementById("add_user").addEventListener("submit", function(event) {
//     event.preventDefault();
//     alert("Data Inserted Successfully!");
// });

// document.getElementById("update_user").addEventListener("submit", function(event) {
//     event.preventDefault();

//     var form = event.target;
//     var unindexed_array = new FormData(form);
//     var data = {};

//     unindexed_array.forEach(function(value, key) {
//         data[key] = value;
//     });

//     var id = data.id;
//     var request = {
//         url: `http://localhost:8080/api/users/${id}`,
//         method: "PUT",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     };

//     fetch(request)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             alert("Data Updated Successfully!");
//         });
// });


// if (window.location.pathname === "/") {
//     var onDeleteButtons = document.querySelectorAll(".table tbody td a.delete");

//     onDeleteButtons.forEach(function(button) {
//         button.addEventListener("click", function() {
//             var id = button.getAttribute("data-id");

//             var request = {
//                 url: `http://localhost:/api/users/${id}`,
//                 method: "DELETE"
//             };

//             if (confirm("Do you really want to delete this record?")) {
//                 fetch(request)
//                     .then(function(response) {
//                         return response.json();
//                     })
//                     .then(function(data) {
//                         alert("Data Deleted Successfully!");
//                         location.reload();
//                     });
//             }
//         });
//     });
// }





$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:8080/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

if(window.location.pathname == "/"){
    $ondelete = $("#delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:8080/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}