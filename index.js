var date = new Date();
var dateString = date.toString();

var textInput1 = document.getElementById("text_input1");
var textInput2 = document.getElementById("text_input2");

var submitBtn = document.getElementById("submit_btn");

// Get a reference to the database service
var database = firebase.database();
var reference = database.ref();

function submitOnClick() {
    var message1 = textInput1.value;
    var message2 = textInput2.value;

    reference.child(dateString).set({
        TableNo: message1,
        Name: message2
      });

    alert("Order Details Sent");
    location.reload();  
}

function currentDateTime(){
    console.log(date); 
}