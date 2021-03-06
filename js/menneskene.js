function sortNames(person1, person2) {
  if (person1.name > person2.name) {
    return 1;
  } else if (person1.name < person2.name) {
    return -1;
  }

  return 0;
}

var peoples = [
  {
    name: "Eirik Larsen",
    img: "assets/peoples/eirik.jpg",
    title: "Seniorkonsulent / Daglig Leder",
    email: "eirik@kodeworks.no",
    page: "folk/eirik.html",
  },
  {
    name: "Christian Neverdal",
    img: "assets/peoples/christian.jpg",
    title: "Seniorkonsulent",
    email: "christian@kodeworks.no",
    page: "folk/christian.html",
  },
  {
    name: "Ole Johan Andersen",
    img: "assets/peoples/ole.jpg",
    title: "Seniorkonsulent",
    email: "ole@kodeworks.no",
    page: "folk/ole.html",
  },
  {
    name: "Tri Nguyen",
    img: "assets/peoples/tmn.jpg",
    title: "Seniorkonsulent",
    email: "tri@kodeworks.no",
    page: "folk/tri.html",
  },
  {
    name: "Erik Kjosavik",
    img: "assets/peoples/erik.jpg",
    title: "Konsulent",
    email: "erik@kodeworks.no",
    page: "folk/erik.html",
  },
  {
    name: "Vegard Stengrundet",
    img: "assets/peoples/vegard.jpg",
    title: "Konsulent",
    email: "vegard@kodeworks.no",
    page: "folk/vegard.html",
  },
  {
    name: "Sindre Stephansen",
    img: "assets/peoples/sindre.jpg",
    title: "Konsulent",
    email: "sindre@kodeworks.no",
    page: "folk/sindre.html",
  },
  {
    name: "John Hansen",
    img: "assets/peoples/john.jpg",
    title: "Konsulent",
    email: "john@kodeworks.no",
    page: "folk/john.html",
  },
  {
    name: "Ingrid Skar",
    img: "assets/peoples/ingrid.jpg",
    title: "Konsulent",
    email: "ingrid@kodeworks.no",
    page: "folk/ingrid.html",
  },
  {
    name: "Ørjan Bostad Vesterlid",
    img: "assets/peoples/orjan.jpg",
    title: "Konsulent",
    email: "orjan@kodeworks.no",
    page: "folk/orjan.html",
  },
  {
    name: "Nicolaj Nielsen",
    img: "assets/peoples/nicolaj.jpg",
    title: "Konsulent",
    email: "nicolaj@kodeworks.no",
    page: "folk/nicolaj.html",
  },
  {
    name: "Aleksander Skraastad",
    img: "assets/peoples/aleksander.jpg",
    title: "Konsulent",
    email: "aleksander@kodeworks.no",
    page: "folk/aleksander.html",
  },
  {
    name: "Dag Olav Prestegarden",
    img: "assets/peoples/dagolav.jpg",
    title: "Seniorkonsulent",
    email: "dag@kodeworks.no",
    page: "folk/dagolav.html",
  },
  {
    name: "Joachim Fasting",
    img: "assets/peoples/joachim.jpg",
    title: "Konsulent",
    email: "joachim@kodeworks.no",
    page: "folk/joachim.html",
  },
  {
    name: "Lars Ødegaard",
    img: "assets/peoples/lars.jpg",
    title: "Konsulent",
    email: "lars@kodeworks.no",
    page: "folk/lars.html",
  },
  {
    name: "Martin A. Wilhelmsen",
    img: "assets/peoples/martin.jpg",
    title: "Konsulent",
    email: "martin@kodeworks.no",
    page: "folk/martin.html",
  },
  {
    name: "Håkon Hesselberg",
    img: "assets/peoples/person2.png",
    title: "Konsulent",
    email: "hakon.hesselberg@kodeworks.no",
    page: "folk/hakon.html",
  },
  {
    name: "Erik Skår",
    img: "assets/peoples/person2.png",
    title: "Konsulent",
    email: "erik.skar@kodeworks.no",
    page: "folk/erikskar.html",
  },
  {
    name: "Rune Holmgren",
    img: "assets/peoples/rune.jpg",
    title: "Konsulent",
    email: "rune@kodeworks.no",
    page: "folk/rune.html",
  },
  {
    name: "Eivind Kristiansen Skjelmo",
    img: "assets/peoples/person2.png",
    title: "Konsulent",
    email: "eivind@kodeworks.no",
    page: "folk/eivind.html",
  },
  {
    name: "Nina Aalberg Johannessen",
    img: "assets/peoples/person2.png",
    title: "Administrasjon",
    email: "nina@kodeworks.no",
    page: "folk/nina.html",
  },
  {
    name: "Andreas Norstein",
    img: "assets/peoples/person2.png",
    title: "Konsulent",
    email: "andreas@kodeworks.no",
    page: "folk/andreas.html",
  },
  {
    name: "Simen Moen Storvik",
    img: "assets/peoples/person2.png",
    title: "Konsulent",
    email: "simen@kodeworks.no",
    page: "folk/simen.html",
  },
  {
    name: "Jan Burak",
    img: "assets/peoples/person2.png",
    title: "Konsulent",
    email: "jan@kodeworks.no",
    page: "folk/jan.html",
  },
  {
    name: "Ferdy Wessing",
    img: "assets/peoples/person2.png",
    title: "Konsulent",
    email: "ferdy@kodeworks.no",
    page: "folk/ferdy.html",
  },
];

var peopleCount = document.getElementById("people-count");
peopleCount.innerHTML = peoples.length;

var peopleList = document.getElementById("people-list");

peoples.sort(sortNames).forEach(function (person) {
  var peopleItem = document.createElement("article");

  var peopleImg = document.createElement("img");
  peopleImg.setAttribute("alt", "");
  peopleImg.setAttribute("src", person.img);

  var peopleInfo = document.createElement("div");
  peopleInfo.setAttribute("class", "people-info");

  var peopleName = document.createElement("div");
  peopleName.className += "people-name";
  peopleName.textContent = person.name;

  var peopleTitle = document.createElement("div");
  peopleTitle.className += "people-title";
  peopleTitle.textContent = person.title;

  var peopleEmail = document.createElement("div");
  peopleEmail.className += "people-email";
  peopleEmail.textContent = person.email;

  peopleInfo.appendChild(peopleName);
  peopleInfo.appendChild(peopleTitle);
  peopleInfo.appendChild(peopleEmail);

  peopleItem.appendChild(peopleImg);
  peopleItem.appendChild(peopleInfo);

  var peopleLink = document.createElement("a");
  peopleLink.setAttribute("href", person.page);
  peopleLink.appendChild(peopleItem);
  peopleLink.className = "people-list--item cf";

  peopleLink.addEventListener("click", function (event) {
    event.preventDefault();
    document.body.className = "fadeOut";

    setTimeout(function () {
      document.body.className = "fadeIn";
      window.location = person.page;
    }, 150);
  });

  peopleList.appendChild(peopleLink);
});
