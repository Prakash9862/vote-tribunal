// CONFIG FIREBASE (Version compat)
const firebaseConfig = {
    apiKey: "AIzaSyBpTQPQBg1KVW8M_MfTMz7Vanjj01tegGc",
    authDomain: "jugement-56ec0.firebaseapp.com",
    databaseURL: "https://jugement-56ec0-default-rtdb.europe-west1.firebasedatabase.app", // 👈 Essentiel !
    projectId: "jugement-56ec0",
    storageBucket: "jugement-56ec0.appspot.com",
    messagingSenderId: "569033773523",
    appId: "1:569033773523:web:d8ea5d31aa044d5a6206ac"
  };
  
// INITIALISATION FIREBASE
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// DEBUG : CHECK INIT
console.log("✅ Firebase initialisé");

// SELECTION DES ELEMENTS HTML
const guiltyButton = document.getElementById('guilty');
const notGuiltyButton = document.getElementById('notGuilty');
const message = document.getElementById('message');

// DEBUG : CHECK ELEMENTS
if (!guiltyButton || !notGuiltyButton || !message) {
  console.error("❌ Problème : Les boutons ou le message ne sont pas trouvés dans le HTML !");
} else {
  console.log("✅ Les boutons sont bien trouvés !");
}

// EVENEMENTS SUR LES BOUTONS
guiltyButton.addEventListener('click', () => sendVote('coupable'));
notGuiltyButton.addEventListener('click', () => sendVote('nonCoupable'));

// ENVOI DES VOTES
function sendVote(verdict) {
  console.log(`📝 Tentative d'envoi de vote : ${verdict}`);

  const voteRef = database.ref('votes').push();

  voteRef.set({
    verdict: verdict,
    timestamp: Date.now()
  })
  .then(() => {
    console.log("✅ Vote envoyé avec succès !");
    message.textContent = `Vous avez voté : ${verdict === 'coupable' ? 'Coupable' : 'Non Coupable'}`;
  })
  .catch((error) => {
    console.error("❌ Erreur lors de l'envoi du vote :", error);
    message.textContent = "Erreur lors de l'envoi du vote...";
  });
}
