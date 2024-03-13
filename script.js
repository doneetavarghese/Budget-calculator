// REGISTER START

function register(){
    const useregister={
        name:username.value,
        emailadd:email.value,
        pswd:pswd.value
    }

    if(useregister.name=="" || useregister.emailadd=="" || useregister.pswd==""){
        alert('Please enter full details')
    }
    else{
        if(useregister.emailadd in localStorage){
      alert('User already exists')
        }
        else{
            localStorage.setItem(useregister.emailadd,JSON.stringify(useregister))
            alert('User details added successfully')
            window.location='./index.html'
        }
    }

}

// LOGIN START 
// function login(){
//     var data=userlogin.value
//     console.log(data);
//     if(data in localStorage)
//     {
//      let useregister=JSON.parse(localStorage.getItem(data))
//      if(useregister.pswd==pswdlogin.value ){
      
//          alert('Login Successfully')
//          window.location='home.html'
//         }
//         else{
//          alert('Login failed! Wrong password')
//         }
//      }
//      else{
//          alert('Login failed! Wrong user name')
//      }
  
     
//  }

// LOGIN START 
function login(){
    data=userlogin.value
    var pass=pswdlogin.value
    console.log(data);
    if(data in localStorage)
    {
     let useregister=JSON.parse(localStorage.getItem(data))
     if(useregister.pswd==pswdlogin.value ){
        
        
         alert('Login Successfully')
        //  localStorage.setItem('username', data);
         window.location='home.html'
        }
        else{
         alert('Login failed! Wrong password')
        }
     }
     else{
         alert('Login failed! Wrong user name')
        }

}


// HOME JAVA SCRIPT

let balance = 0;
 let totalSpent = 0;
 

        function addIncome() {
            let description = document.getElementById("desp1").value;
            console.log(description);
            let income = parseFloat(document.getElementById("inco").value);
            console.log(income);
        alert('Income added successfully')
            balance += income;

            let resultTable = document.getElementById("result");
            resultTable.innerHTML +=`
                                    <tr style="color:azure">
                                    <td>${description}</td>
                                    <td>${income}</td>
                                    <td>${balance}</td></tr>`
            
            updateBalance();
            
            
            
        }
        
        function addExpense() {
            let description = document.getElementById("expenseDescription").value;
            let expense = parseFloat(document.getElementById("expenseAmount").value);
            alert('Expense added successfully')
            balance -= expense;
            totalSpent += expense;
               
            let resultTable = document.getElementById("result1");
            resultTable.innerHTML += `
            <tr>
            <td>${description}</td>
            <td>${expense}</td>
            <td>${balance}</td></tr>`
            updateBalance();
            
            
           
        }

        function updateBalance() {
            document.getElementById("balance").innerText =` Income : ${ balance}`;
            document.getElementById("totalSpent").innerText =` Balance: ${totalSpent}`;
        }
function logOut(){
    window.location='./login.html'
}