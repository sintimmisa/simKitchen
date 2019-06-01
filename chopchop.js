let sendBtn=document.querySelector("#send"),
    orderBtn=document.querySelector(".orderBtn"),
    fname=document.querySelector("#fname").value,
    email=document.querySelector("#email").value;



    function send(){
        if(fname===" " || email===""){
            alert("Enter First name and Email");

        }
        else{
            alert("Sent");
        }
        
    }
    
    function order(){
        alert("Your order has being placed");
    }