document.getElementById("add_money_btn")
    .addEventListener("click",function(e){
        e.preventDefault();
        
        const addMoney = getInputFieldValueById("input_amount")
        const pinNumber = getInputFieldValueById("input_pin_number")

        if(isNaN(addMoney)){
            alert("Please enter right amount")
            return;
        }
        
        if(pinNumber === 1234){
            const mainBalance = getTextFieldValueById("main_balance");
            const newBalance = mainBalance + addMoney;
            document.getElementById("main_balance").innerText = newBalance;

            
            const entry = document.createElement("p");
            entry.innerText = `Added: ${addMoney} Tk. Balance: ${newBalance}`;
            console.log(entry);
             
            document.getElementById("transaction_container").appendChild(entry)
        }
        else{
            alert("failed to add money")
        }
        
        
    })