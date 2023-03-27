// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeXxkoaw1zOh96K0Ke1hh2WOoAYnfHdQE",
  authDomain: "social-website-ad223.firebaseapp.com",
  projectId: "social-website-ad223",
  storageBucket: "social-website-ad223.appspot.com",
  messagingSenderId: "89372807142",
  appId: "1:89372807142:web:9ff923c40e406418d85027",
  measurementId: "G-T912YMN47M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    firebase.database().ref("/").child(user_name).update({purpose : "adding user"});
    window.location = "kwitter_room.html";
}