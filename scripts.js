
const app = document.getElementById("root");

const header = document.createElement("h1");
header.textContent = "Friends!";
header.setAttribute("class", "greeting");
app.append(header);

const container = document.createElement("div");
container.setAttribute("class", "container");
app.append(container);

const people = fetch("https://randomuser.me/api/?results=12")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.results.forEach((person) => {
            const card = document.createElement("div");
            card.setAttribute("class", "card");

            const { name, location } = person;

            const p = document.createElement("p");

            p.textContent = `${name.first}`;

            p.setAttribute("class", "name");
            const p2 = document.createElement("p");
            p2.textContent = `🏡 ${location.state}`;

            p2.setAttribute("class", "location");
            const img = document.createElement("img");
            img.src = person.picture.medium;

            const textContainer = document.createElement("div");
            container.append(card);
            card.append(textContainer);
            textContainer.append(p);
            textContainer.append(p2);

            const imgContainer = document.createElement("div");
            card.append(imgContainer);
            imgContainer.append(img);
        });
    })
    .catch((err) => console.log(err.toString()));
