//sign_up form

const signpform=document.getElementById("sign_upForm");
if(signpform){
    signpform.addEventListener("submit",function(e){
       e.preventDefault();

       const name=document.getElementById("name").value;
       const email=document.getElementById("email").value;
       const password=document.getElementById("password").value;

       const jsonData=localStorage.getItem("users")
       const users=JSON.parse(jsonData) || [];

       if(users.some((u)=>u.email===email)){
      alert("This email is already exist....");
      return;
       }
       
       users.push({name,email,password})
       localStorage.setItem("users",JSON.stringify(users));
       alert("sign_up succesful... ")
       window.location.href="login.html";
    })
}



//login form

const loginform=document.getElementById("loginForm");
if(loginform){
    loginform.addEventListener("submit",function(e){
       e.preventDefault();
   
       const email=document.getElementById("loginEmail").value;
       const password=document.getElementById("loginPassword").value;
       
       const jsonData=localStorage.getItem("users");
       const users=JSON.parse(jsonData) || [];
    
       const validuser=users.find((user)=> user.email === email && user.password === password )

       if(validuser){
        localStorage.setItem("loggedinuser", JSON.stringify(validuser))
        window.location.href="index.html";

       }else{
        document.getElementById("errorMsg").innerHTML="Invalid uder and password";

       }

    }
)}

//home tab

if(window.location.pathname.includes('index.html')){
    const loggeduser=JSON.parse(localStorage.getItem("loggedinuser"));
    if(!loggeduser){
        window.location.href='login.html'

    }else{
        document.getElementById("welcomeMsg").textContent=`Welcome , ${loggeduser.name} ! you are successfully logged in...`;
        document.getElementById("logoutbtn").addEventListener("click",()=>{
            localStorage.removeItem("loggedinuser");
            window.location.href="login.html";

        })
    }
}

