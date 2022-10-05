/*Teste folgenden und die Befehle der nächsten Folie sowie die Befehle der w3schools-Website:

window.alert("Hallo Welt");
window.prompt("Bitte geben Sie Ihren Namen ein.");
window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
window.confirm("Stimmen Sie meiner Meinung zu?"); 
*/

/*let alter = prompt( "Gib mir bitte dein Alter:" );
console.log(alter);

let b = 5;
let a = b * 5 -3;
alert(a);

let mann = "Robert Wadlow ist der größte Mann der Welt : ";
let grosse = "2,72m";
alert(mann + grosse);
*/

/* let alter = prompt("Gib mir bitte dein Alter:")

let b = 5;
let a = b * 5 - 3;
alert(a);

alert("Hello! I am an alert box!!"); */

let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
    document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
}
confirm("Press a button!");

confirm("Press a button!\nEither OK or Cancel.");