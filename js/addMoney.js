document.getElementById("add_money_btn")
    .addEventListener("click",function(e){
        e.preventDefault();
        
        const addMoney = getInputFieldValueById("input_amount")
        const pinNumber = getInputFieldValueById("input_pin_number")
        console.log("input value and pin",addMoney,pinNumber);
        
        
    })