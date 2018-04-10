// Initialize Firebase
var config = {
    apiKey: "AIzaSyCJwHz6zimEk9qZnI43wpzxcRSBiQqPt5I",
    authDomain: "walking-dead-6b01a.firebaseapp.com",
    databaseURL: "https://walking-dead-6b01a.firebaseio.com",
    projectId: "walking-dead-6b01a",
    storageBucket: "walking-dead-6b01a.appspot.com",
    messagingSenderId: "988412893912"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

var character = firebase.database().ref('Characters/');

character.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        console.log(childData);
        document.getElementById('liste_char').innerHTML += '<li>' + childData.name + '</li>';
    });
});

function writeUserData(Name) {
    firebase.database().ref('Characters/' + name).push({
        name: Name,
    });

}
function AddChar() {
    let name = document.getElementById("Name").value;
    writeUserData(name);
    window.location.reload();
}