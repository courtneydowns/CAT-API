let fetchResults = [];

fetch(
  "https://api.thecatapi.com/v1/breeds?api_key=783f34e1-5fc9-49e1-b01e-b45073f00bc1"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (breeds) {
    fetchResults.breeds = breeds;
    console.log(breeds);
    console.log(fetchResults);
    displayResults();
  });

let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  let option = document.getElementById("breeds").value;
  switch (option) {
    case "breed-1":
      displayResults(0);
      break;

    case "breed-2":
      displayResults(1);
      break;

    case "breed-3":
      displayResults(2);
      break;

    case "breed-4":
      displayResults(3);
      break;

    case "breed-5":
      displayResults(4);
      break;

    case "breed-6":
      displayResults(5);
      break;

    case "breed-7":
      displayResults(6);
      break;

    case "breed-8":
      displayResults(7);
      break;

    case "breed-9":
      displayResults(8);
      break;

    case "breed-10":
      displayResults(9);
      break;

    case "breed-11":
      displayResults(10);
      break;

    case "breed-12":
      displayResults(11);
      break;

    case "breed-13":
      displayResults(12);
      break;

    case "breed-14":
      displayResults(13);
      break;

    case "breed-15":
      displayResults(14);
      break;

    case "breed-16":
      displayResults(15);
      break;

    case "breed-17":
      displayResults(16);
      break;

    case "breed-18":
      displayResults(17);
      break;

    case "breed-19":
      displayResults(18);
      break;

    case "breed-20":
      displayResults(19);
      break;

    case "breed-21":
      displayResults(20);
      break;

    case "breed-22":
      displayResults(21);
      break;

    case "breed-23":
      displayResults(22);
      break;

    case "breed-24":
      displayResults(23);
      break;

    case "breed-25":
      displayResults(24);
      break;

    case "breed-26":
      displayResults(25);
      break;

    case "breed-27":
      displayResults(26);
      break;

    case "breed-28":
      displayResults(27);
      break;

    case "breed-29":
      displayResults(28);
      break;

    case "breed-30":
      displayResults(29);
      break;

    case "breed-31":
      displayResults(30);
      break;

    case "breed-32":
      displayResults(31);
      break;

    case "breed-33":
      displayResults(32);
      break;

    case "breed-34":
      displayResults(33);
      break;

    case "breed-35":
      displayResults(34);
      break;

    case "breed-36":
      displayResults(35);
      break;

    case "breed-37":
      displayResults(36);
      break;

    case "breed-38":
      displayResults(37);
      break;

    case "breed-39":
      displayResults(38);
      break;

    case "breed-40":
      displayResults(39);
      break;

    case "breed-41":
      displayResults(40);
      break;

    case "breed-42":
      displayResults(41);
      break;

    case "breed-43":
      displayResults(42);
      break;

    case "breed-44":
      displayResults(43);
      break;

    case "breed-45":
      displayResults(44);
      break;

    case "breed-46":
      displayResults(45);
      break;

    case "breed-47":
      displayResults(46);
      break;

    case "breed-48":
      displayResults(47);
      break;

    case "breed-49":
      displayResults(48);
      break;

    case "breed-50":
      displayResults(49);
      break;

    case "breed-51":
      displayResults(50);
      break;

    case "breed-52":
      displayResults(51);
      break;

    case "breed-53":
      displayResults(52);
      break;

    case "breed-54":
      displayResults(53);
      break;

    case "breed-55":
      displayResults(54);
      break;

    case "breed-56":
      displayResults(55);
      break;

    case "breed-57":
      displayResults(56);
      break;

    case "breed-58":
      displayResults(57);
      break;

    case "breed-59":
      displayResults(58);
      break;

    case "breed-60":
      displayResults(59);
      break;

    case "breed-61":
      displayResults(60);
      break;

    case "breed-62":
      displayResults(61);
      break;

    case "breed-63":
      displayResults(62);
      break;

    case "breed-64":
      displayResults(63);
      break;

    case "breed-65":
      displayResults(64);
      break;

    case "breed-66":
      displayResults(65);
      break;

    case "breed-67":
      displayResults(66);
      break;

    default:
      console.log(`error${option}`);
      break;
  }
});

async function displayResults(arrayBucket = 0) {
  let results = document.getElementById("results");

  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }

  function detach(node) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }

  if (results.childNodes.length > 3) {
    results.removeChild(results.childNodes[3]);
  }

  let breeds = fetchResults.breeds;
  let image = fetchResults.breeds[arrayBucket].image;
  let name = fetchResults.breeds[arrayBucket].name;
  let about = fetchResults.breeds[arrayBucket].description;
  let temperament = fetchResults.breeds[arrayBucket].temperament;
  let affection_level = fetchResults.breeds[arrayBucket].affection_level;
  let adaptability = fetchResults.breeds[arrayBucket].adaptability;
  let child_friendly = fetchResults.breeds[arrayBucket].child_friendly;
  let dog_friendly = fetchResults.breeds[arrayBucket].dog_friendly;
  let energy_level = fetchResults.breeds[arrayBucket].energy_level;
  let grooming = fetchResults.breeds[arrayBucket].grooming;
  let health_issues = fetchResults.breeds[arrayBucket].health_issues;
  let intelligence = fetchResults.breeds[arrayBucket].intelligence;
  let shedding_level = fetchResults.breeds[arrayBucket].shedding_level;
  let social_needs = fetchResults.breeds[arrayBucket].social_needs;
  let stranger_friendly = fetchResults.breeds[arrayBucket].stranger_friendly;
  let vocalisation = fetchResults.breeds[arrayBucket].vocalisation;

  let card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("text-center");
  card.style.width = "40rem";

  card.innerHTML = `<img src="${image.url}" class="card-img-top" alt="${name}">
   <div class="card-body">
     <h5 class="card-title">${name}</h5>
     <p class="card-text">${about}</p>
   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item temperament" style="font-weight: bold";>${temperament}</li>
     <li class="list-group-item">Affection Level: ${affection_level}</li>
     <li class="list-group-item">Adaptability: ${adaptability}</li>
     <li class="list-group-item">Child Friendly: ${child_friendly}</li>
     <li class="list-group-item">Dog Friendly: ${dog_friendly}</li>
     <li class="list-group-item">Energy Level: ${energy_level}</li>
     <li class="list-group-item">Grooming: ${grooming}</li>
     <li class="list-group-item">Health Issues: ${health_issues}</li>
     <li class="list-group-item">Intelligence: ${intelligence}</li>
     <li class="list-group-item">Shedding Level: ${shedding_level}</li>
     <li class="list-group-item">Social Needs: ${social_needs}</li>
     <li class="list-group-item">Stranger Friendly: ${stranger_friendly}</li>
     <li class="list-group-item">Vocalisation: ${vocalisation}</li>
  </ul>`;

  results.appendChild(card);

  for (let i = 0; i < breeds.length; i++) {
    if (breeds[i].image) {
      let image = breeds[i].image.url;
      console.log(image);
    }
  }
}
