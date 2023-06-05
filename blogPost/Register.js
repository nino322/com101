import {initializeApp} from "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
import{getDatabase} from "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
import{getAuth,creeteUserWithEmailAndPassword} from "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCXbINQxUXPt6lqNBPrZqhnsudMSw0KiG8",
    authDomain: "comm101-79fea.firebaseapp.com",
    projectId: "comm101-79fea",
    storageBucket: "comm101-79fea.appspot.com",
    messagingSenderId: "333970919211",
    appId: "1:333970919211:web:38600c17be2193281f3f6e"
  };

  const app = initializeApp(firebaseConfig);


  const auth = getAuth();
 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


  /*** */
  const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));