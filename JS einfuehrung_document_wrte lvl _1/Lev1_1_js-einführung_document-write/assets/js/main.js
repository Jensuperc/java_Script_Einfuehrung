/*Schreibe mithilfe des Befehls document.write() folgendes in dein HTML-Dokument:


h1 - Hello World!
p - Have a nice day!
Deklariere die Variable myText und fülle sie mit “Hello again”. Schreibe die Variable anschließend in dein Dokument.
Deklariere Variablen: vorname, nachname und fülle sie mit deinem Namen. Schreibe sie anschließend in dein Dokument.
*/

/* let h1 = "Hello World<br>"
let p = "Have a nice Day<br>"
let myText = "Hello again<br>"
let vorname = "Name: Jens<br>"
let nachname = "Nachname: neu"
let me = h1 + p + myText + vorname + nachname;
document.write(me) */

/* 
let < h1 > = "Hello World"
let < p > = "Have a nice Day" */
let myText = "Hello again<br>"
let vorname = "Name: Jens<br>"
let nachname = "Nachname: neu<br>"

document.write("<h1>Hello World</h1><p>Have a nice Day</p>" + myText + vorname + nachname);