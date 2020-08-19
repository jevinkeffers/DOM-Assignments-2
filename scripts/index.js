const h1 = document.createElement("h1");
h1.innerHTML = "Your H1 text";
document.body.appendChild(h1);

const h2 = document.createElement("h2");
h2.innerHTML = "Your H2 text";
document.body.appendChild(h2);

const p1 = document.createElement("p");
p1.innerHTML = "First paragraph here.";
document.body.appendChild(p1);

const p2 = document.createElement("p");
p2.innerHTML = "Second paragraph here.";
document.body.appendChild(p2);

const p3 = document.createElement("p");
p3.innerHTML = "Third paragraph here.";
document.body.appendChild(p3);

// Create an unordered list
const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
document.body.appendChild(ul)
li1.innerHTML = "List Item 1"
ul.appendChild(li1);
li2.innerHTML = "List Item 2"
ul.appendChild(li2);
li3.innerHTML = "List Item 3"
ul.appendChild(li3);