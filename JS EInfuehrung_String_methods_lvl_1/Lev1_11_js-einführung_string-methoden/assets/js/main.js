/*Aufgabenstellung


Es gibt 3 verschiedene Methoden zur Verkettung in Javascript.
Deklariere zwei Variablen: x mit String "Hello " und y mit String "World<br>".

Addiere x mit y und speichere das Ergebnis als Variable z;
Nutze den Befehl document.write() mit Wert z zwischen Klammern um im Dokument Werte anzuzeigen. Es wird im HTML Dokument angezeigt.
Schreibe x + " " + y und speichere alles in der Variable n;
Nutze den Befehl document.write() mit Wert n;
Addiere x und String "World" mit dem passenden Zuweisungsoperator.
Nutze den Befehl document.write() mit Wert x den String im Dokument auszugeben;
*/

let x = "Hello"
let y = "World<br>"

let z = x + y

document.write(z)

let n = x + " " + y
document.write(n)

x = x + "world"

document.write(x)

/*Deklariere: meinString mit String "Ich bin Erster";

Nutze einen Zuweisungsoperator, um einen anderen String " Ich komme auf Platz zwei", zu meinString hinzuzufügen.
Gebe dann meinString in der Konsole aus.

 */

let meinString = "Ich bin Erster";

let nichtMeinString = "Ich komme auf Platz zwei";

meinString = meinString + " " + nichtMeinString
console.log(meinString)
