document.getElementById("cash_out_btn")
    .addEventListener("click",function(e){
        e.preventDefault();
        const cashOut = getInputFieldValueById("cash_out_amount");
        const cashOut_pin = getInputFieldValueById("cash_out_pin");
        if(isNaN(cashOut)){
            alert("failed to cash out");
            return;
        }
        if(cashOut_pin === 1234){
            const mainBalance = getTextFieldValueById("main_balance");

            if(cashOut>mainBalance){
                alert("You do not have enough money to cash out")
                return;
            }

            const newBalance = mainBalance - cashOut;
            document.getElementById("main_balance").innerText = newBalance;

            const div = document.createElement("div")
            div.classList.add("bg-yellow-300")
            div.innerHTML= ` 
                <div class="m-2 p-2">
                <h4 class="text-2xl font-bold">Cash Out</h4>
                <p>${cashOut} Money withdraw. New Balance ${newBalance}</p>
                </div>
            `

            console.log(div);
            
            document.getElementById("transaction_container").appendChild(div);
        }
        else{
            alert("Field the correct pin")
        }
        
    })