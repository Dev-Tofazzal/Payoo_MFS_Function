document.getElementById("add_money_btn")
    .addEventListener("click",function(e){
        e.preventDefault();
        
        const addMoney = getInputFieldValueById("input_amount")
        const pinNumber = getInputFieldValueById("input_pin_number")
        
        if(pinNumber === 1234){
            const mainBalance = getTextFieldValueById("main_balance");
            const newBalance = mainBalance + addMoney;
            document.getElementById("main_balance").innerText = newBalance;
            
            
        }
        else{
            alert("failed to add money")
        }
        
        
    })