const firebaseConfig = {
    apiKey: "AIzaSyDNR7kK1E-aFwHW10wSpKX90fnSrbFevdg",
    authDomain: "kiitmarket.firebaseapp.com",
    databaseURL: "https://kiitmarket-default-rtdb.firebaseio.com",
    projectId: "kiitmarket",
    storageBucket: "kiitmarket.appspot.com",
    messagingSenderId: "168360156284",
    appId: "1:168360156284:web:179e71d2c03954950f3df9",
    measurementId: "G-5LZGF8WLBH"
    };
      
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Reference messages collection
var messagesRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('main').addEventListener('submit', submitForm);

//Submit Form
function submitForm(e){
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var model = getInputVal('model');
    var desc = getInputVal('desc');
    var price = getInputVal('price');
    
    //Save message
    saveMessage(name, model, desc, price); 
}

function getInputVal(id){
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, model, desc, price){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        model: model,
        desc: desc,
        price: price 
    }); 
}