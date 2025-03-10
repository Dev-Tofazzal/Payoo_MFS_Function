document.getElementById("cash_out_btn")
    .addEventListener("click",function(e){
        e.preventDefault();
        const cashOut = getInputFieldValueById("cash_out_amount");
        const cashOut_pin = getInputFieldValueById("cash_out_pin");
        if(cashOut_pin === 1234){
            const mainBalance = getTextFieldValueById("main_balance");
            const newBalance = mainBalance - cashOut;
            document.getElementById("main_balance").innerText = newBalance;
        }
        else{
            alert("Field the correct pin")
        }
        
    })