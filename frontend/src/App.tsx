
import './App.css'
import { initializeApp } from "firebase/app";
import {Signin}  from "./components/Signin";

const firebaseConfig = {
  apiKey: "AIzaSyCOcnAnLQDIgjF6F2sgRuLRxtpQRt7sATU",
  authDomain: "leetcode-clone-178af.firebaseapp.com",
  projectId: "leetcode-clone-178af",
  storageBucket: "leetcode-clone-178af.appspot.com",
  messagingSenderId: "910278171726",
  appId: "1:910278171726:web:3fd447d70833dcd3ecb71f",
  measurementId: "G-NT4BZ04BYN"
};
const app = initializeApp(firebaseConfig);

function App() {

  return (
    <>
      <div>
        < Signin/>
      </div>
    </>
  )
}

export default App
