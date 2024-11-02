//This is a simple code that will display a welcome message to the user based on the current month.

//Get the current month

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = new Date();
const month = date.getMonth();

//Create a personalize welcome message

const welcomeMessage = `Welcome to ${monthNames[month]}!`;

//Display the message

alert(welcomeMessage);

document.getElementById("monthly").innerText = welcomeMessage;

function playAudio() {
  const audioPlayer = new Audio(
    "https://open.spotify.com/artist/1z9u3vLr7gw6IBS8CP8c2X"
  );

  audioPlayer.play();

    document.getElementById("play").style.display = "none";

    document.getElementById("pause").style.display = "block";

    
}


//Get the element to display the message
