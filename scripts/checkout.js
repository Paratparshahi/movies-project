// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
mov=JSON.parse(localStorage.getItem("movies"));
div=document.createElement('div');
title=document.createElement("h1")
title.innerText=mov.Title;
images=document.createElement('img');
images.src=mov.Image;
div.append(title,images);
document.getElementById("movie").append(div);

function show(){
   let s=document.getElementById("number_of_seats").value;
   amount=localStorage.getItem("totalamount");
   if((100*s)>amount){
       alert("Insufficient Balance");
   }else{
       alert("Booking Successfull");
       res=amount-(100*s)
       localStorage.setItem("totalamount",res);
       document.getElementById('wallet').innerText=localStorage.getItem("totalamount");
   }
}
document.getElementById('wallet').innerText=localStorage.getItem("totalamount");