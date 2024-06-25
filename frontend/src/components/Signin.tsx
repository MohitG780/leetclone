import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useState } from "react";


const actionCodeSettings = {
    url: 'http://localhost:3000',

    handleCodeInApp: true,
  };
export const Signin = () =>{
 
     const auth = getAuth();
     const [email,setEmail]=useState("");


      async function onSignin(){
      await sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
  
    window.localStorage.setItem('emailForSignIn', email);
    alert("sent email")
  })
  .catch((error) => {
    alert("not sent")
    const errorCode = error.code;
    const errorMessage = error.message;

  });

     }
    
    return <div>
      <input type="text" placeholder="email" onChange={(e)=>{
        setEmail(e.target.value);
      }}>
      </input>
      <button onClick={()=>{
        onSignin()
      }}>
        Signup
      </button>


    </div>
}