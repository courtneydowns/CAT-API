let fetchResults = {
  breeds: [],
};

fetch(
  "https://api.thecatapi.com/v1/breeds?api_key=5c39ffec-91f9-41c9-ab0f-c2131d3563a6"
)
  .then((resp) => resp.json())
  .then((jsonData) => {
    fetchResults.breeds = jsonData;
    displayResults(0);
  });

let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  let option = document.getElementById("breeds").value;
  displayResults(option.split("-")[1]);
});

function displayResults(arrayBucket) {
  let results = document.getElementById("results");

  results.innerHTML = null;

  let breeds = fetchResults.breeds;

  let image = breeds[arrayBucket].image;
  let name = breeds[arrayBucket].name;
  let about = breeds[arrayBucket].description;
  let temperament = breeds[arrayBucket].temperament;
  let affection_level = breeds[arrayBucket].affection_level;
  let adaptability = breeds[arrayBucket].adaptability;
  let child_friendly = breeds[arrayBucket].child_friendly;
  let dog_friendly = breeds[arrayBucket].dog_friendly;
  let energy_level = breeds[arrayBucket].energy_level;
  let grooming = breeds[arrayBucket].grooming;
  let health_issues = breeds[arrayBucket].health_issues;
  let intelligence = breeds[arrayBucket].intelligence;
  let shedding_level = breeds[arrayBucket].shedding_level;
  let social_needs = breeds[arrayBucket].social_needs;
  let stranger_friendly = breeds[arrayBucket].stranger_friendly;
  let vocalisation = breeds[arrayBucket].vocalisation;

  let displayImage = document.createElement("img");
  let displayName = document.createElement("h1");
  let displayAbout = document.createElement("h2");
  let displayTemperament = document.createElement("h3");
  let displayAffection_level = document.createElement("p");
  let displayAdaptability = document.createElement("p");
  let displayChild_friendly = document.createElement("p");
  let displayDog_friendly = document.createElement("p");
  let displayEnergy_level = document.createElement("p");
  let displayGrooming = document.createElement("p");
  let displayHealth_issues = document.createElement("p");
  let displayIntelligence = document.createElement("p");
  let displayShedding_level = document.createElement("p");
  let displaySocial_needs = document.createElement("p");
  let displayStranger_friendly = document.createElement("p");
  let displayVocalisation = document.createElement("p");

  let card = document.createElement("div");
  let cardBody = document.createElement("div");
  card.setAttribute("class", "card");
  cardBody.setAttribute("class", "cardBody");

  displayImage.src = image.url;
  displayName.innerHTML = `${name}`;
  displayAbout.innerHTML = `${about}`;
  displayTemperament.innerHTML = `${temperament}`;
  displayAffection_level.innerHTML = `Affection Level: ${affection_level}`;
  displayAdaptability.innerHTML = `Adaptability: ${adaptability}`;
  displayChild_friendly.innerHTML = `Child Friendly: ${child_friendly}`;
  displayDog_friendly.innerHTML = `Dog Friendly: ${dog_friendly}`;
  displayEnergy_level.innerHTML = `Energy Level: ${energy_level}`;
  displayGrooming.innerHTML = `Grooming: ${grooming}`;
  displayHealth_issues.innerHTML = `Health Issues: ${health_issues}`;
  displayIntelligence.innerHTML = `Intelligence: ${intelligence}`;
  displayShedding_level.innerHTML = `Shedding Level: ${shedding_level}`;
  displaySocial_needs.innerHTML = `Social Needs: ${social_needs}`;
  displayStranger_friendly.innerHTML = `Stranger Friendly: ${stranger_friendly}`;
  displayVocalisation.innerHTML = `Vocalisation: ${vocalisation}`;

  cardBody.appendChild(displayName);
  cardBody.appendChild(displayAbout);
  cardBody.appendChild(displayTemperament);
  cardBody.appendChild(displayAffection_level);
  cardBody.appendChild(displayAdaptability);
  cardBody.appendChild(displayChild_friendly);
  cardBody.appendChild(displayDog_friendly);
  cardBody.appendChild(displayEnergy_level);
  cardBody.appendChild(displayGrooming);
  cardBody.appendChild(displayHealth_issues);
  cardBody.appendChild(displayIntelligence);
  cardBody.appendChild(displayShedding_level);
  cardBody.appendChild(displaySocial_needs);
  cardBody.appendChild(displayStranger_friendly);
  cardBody.appendChild(displayVocalisation);

  card.appendChild(displayImage);
  card.appendChild(cardBody);

  results.appendChild(card);
}
