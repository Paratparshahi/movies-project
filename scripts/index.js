// Store the wallet amount to your local storage with key "amount"
function addmoney(){
    var amount=document.getElementById("amount").value;
    var temp=localStorage.getItem("totalamount")||0;
    var res= Number(amount)+Number(temp);
    localStorage.setItem("totalamount",res);
    document.getElementById("wallet").innerText=res;
    console.log(localStorage.getItem("totalamount"));
    
}