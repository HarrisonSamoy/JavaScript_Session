/*console.log("Hello from jscript file...")
alert("I am loaded now!")                       //ok*/

if (confirm("Do you want to proceed?") == true) { //ok and cancel
    //alert("You are selected for next round")
    document.getElementById("proceedStatus").innerHtml = "you are selected for next round"
}
else {
    //alert("false")
    document.getElementById("proceedStatus").innerHtml = "you are not selected for next round"
}

var age = prompt("Enter your age: ")
if(age < 18) {
    //alert("you are unable to vote")
    //document.write("you are unable to vote")
    document.getElementById("voteStatus").innerHTML = "you are unable to vote"
}
else {
   //alert("you are able to vote")
   //document.write("you are able to vote")
   document.getElementById("voteStatus").innerHTML = "you are able to vote"
}