//BREEDS

let fetchResults = [];
let breedResults = document.getElementById("breed-results");


fetch('https://api.thecatapi.com/v1/breeds?api_key=5c39ffec-91f9-41c9-ab0f-c2131d3563a6')

    .then(function (response) {
        return response.json();
    }).then(function (breeds) {
        console.log(breeds);
        fetchResults = breeds;
        // displayResults(fetchResults);
    })

let submit = document.getElementById("submit")
submit.addEventListener("click", getBreeds)

function getBreeds(e) {
    console.log(e);
    let option = document.getElementById("breeds").value
    switch (option) {

        case "breed-1":
            displayResults(0);
            break;

        case "breed-2":
            displayResults(1)
            break;

        case "breed-3":
            displayResults(2)
            break;

        case "breed-4":
            displayResults(3)
            break;

        case "breed-5":
            displayResults(4)
            break;

        case "breed-6":
            displayResults(5)
            break;

        case "breed-7":
            displayResults(6)
            break;

        case "breed-8":
            displayResults(7)
            break;

        case "breed-9":
            displayResults(8)
            break;

        case "breed-10":
            displayResults(9)
            break;

        case "breed-11":
            displayResults(10)
            break;

        case "breed-12":
            displayResults(11)
            break;

        case "breed-13":
            displayResults(12)
            break;

        case "breed-14":
            displayResults(13)
            break;

        case "breed-15":
            displayResults(14)
            break;

        case "breed-16":
            displayResults(15)
            break;

        case "breed-17":
            displayResults(16)
            break;

        case "breed-18":
            displayResults(17)
            break;

        case "breed-19":
            displayResults(18)
            break;

        case "breed-20":
            displayResults(19)
            break;

        case "breed-21":
            displayResults(20)
            break;

        case "breed-22":
            displayResults(21)
            break;

        case "breed-23":
            displayResults(22)
            break;

        case "breed-24":
            displayResults(23)
            break;

        case "breed-25":
            displayResults(24)
            break;

        case "breed-26":
            displayResults(25)
            break;

        case "breed-27":
            displayResults(26)
            break;

        case "breed-28":
            displayResults(27)
            break;

        case "breed-29":
            displayResults(28)
            break;

        case "breed-30":
            displayResults(29)
            break;

        case "breed-31":
            displayResults(30)
            break;

        case "breed-32":
            displayResults(31)
            break;

        case "breed-33":
            displayResults(32)
            break;

        case "breed-34":
            displayResults(33)
            break;

        case "breed-35":
            displayResults(34)
            break;

        case "breed-36":
            displayResults(35)
            break;

        case "breed-37":
            displayResults(36)
            break;

        case "breed-38":
            displayResults(37)
            break;

        case "breed-39":
            displayResults(38)
            break;

        case "breed-40":
            displayResults(39)
            break;

        case "breed-41":
            displayResults(40)
            break;

        case "breed-42":
            displayResults(41)
            break;

        case "breed-43":
            displayResults(42)
            break;

        case "breed-44":
            displayResults(43)
            break;

        case "breed-45":
            displayResults(44)
            break;

        case "breed-46":
            displayResults(45)
            break;

        case "breed-47":
            displayResults(46)
            break;

        case "breed-48":
            displayResults(47)
            break;

        case "breed-49":
            displayResults(48)
            break;

        case "breed-50":
            displayResults(49)
            break;

        case "breed-51":
            displayResults(50)
            break;

        case "breed-52":
            displayResults(51)
            break;

        case "breed-53":
            displayResults(52)
            break;

        case "breed-54":
            displayResults(53)
            break;

        case "breed-55":
            displayResults(54)
            break;

        case "breed-56":
            displayResults(55)
            break;

        case "breed-57":
            displayResults(56)
            break;

        case "breed-58":
            displayResults(57)
            break;

        case "breed-59":
            displayResults(58)
            break;

        case "breed-60":
            displayResults(59)
            break;

        case "breed-61":
            displayResults(60)
            break;

        case "breed-62":
            displayResults(61)
            break;

        case "breed-63":
            displayResults(62)
            break;

        case "breed-64":
            displayResults(63)
            break;

        case "breed-65":
            displayResults(64)
            break;

        case "breed-66":
            displayResults(65)
            break;

        case "breed-67":
            displayResults(66)
            break;

        case "breed-68":
            displayResults(67)
            break;


        default:
            console.log(`error${option}`);
            break;
    }
}


async function displayResults(index) {


    let breeds = fetchResults[index];
    let card = document.createElement("div");
    let cardBody = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("h1");
    let about = document.createElement("p");
    let temperament = document.createElement("p");
    let affectionLevel = document.createElement("p");
    let affection_level = document.createElement("p");
    let adaptability = document.createElement("p");
    let child_friendly = document.createElement("p");
    let dog_friendly = document.createElement("p");
    let energy_level = document.createElement("p");
    let grooming = document.createElement("p");
    let health_issues = document.createElement("p");
    let intelligence = document.createElement("p");
    let shedding_level = document.createElement("p");
    let social_needs = document.createElement("p");
    let stranger_friendly = document.createElement("p");
    let vocalisation = document.createElement("p");

    if (breedResults.childNodes.length > 3) {
        breedResults.removeChild(breedResults.childNodes[3]);
    };

    console.log(breeds);
    console.log(fetchResults);
    console.log(index);
    console.log(breeds.intelligence);

    name.innerHTML = breeds.name;
    image.src = breeds.image.url;
    about.innerText = breeds.description;
    temperament.innerText = `  Temperament:  ${breeds.temperament}`;
    affection_level.innerText = `  Affection Level:  ${breeds.affection_level}`;
    adaptability.innerText = `  Adaptability:  ${breeds.adaptability}`;
    child_friendly.innerText = `  Child Friendly:  ${breeds.child_friendly}`;
    dog_friendly.innerText = `  Dog Friendly:  ${breeds.dog_friendly}`;
    energy_level.innerText = `  Energy Level:  ${breeds.energy_level}`;
    grooming.innerText = `  Grooming:  ${breeds.grooming}`;
    health_issues.innerText = `  Health Issues:  ${breeds.health_issues}`;
    intelligence.innerText = `  Intelligence:  ${breeds.intelligence}`;
    shedding_level.innerText = `  Shedding Level:  ${breeds.shedding_level}`;
    social_needs.innerText = `  Social Needs:  ${breeds.social_needs}`;
    stranger_friendly.innerText = `  Stranger Friendly:  ${breeds.stranger_friendly}`;
    vocalisation.innerText = `  Breeds:  ${breeds.vocalisation}`;

    // image.classList.add("image");
    card.classList.add("card-wrapper");
    cardBody.classList.add("card-div");
    image.classList.add("image");
    name.classList.add("name");
    about.classList.add("p-class");
    temperament.classList.add("p-class");
    affection_level.classList.add("p-class");
    adaptability.classList.add("p-class");
    child_friendly.classList.add("p-class");
    dog_friendly.classList.add("p-class");
    energy_level.classList.add("p-class");
    grooming.classList.add("p-class");
    health_issues.classList.add("p-class");
    intelligence.classList.add("p-class");
    shedding_level.classList.add("p-class");
    social_needs.classList.add("p-class");
    stranger_friendly.classList.add("p-class");
    // vocalisation.classList.add("card-text");

    card.appendChild(image);
    card.appendChild(cardBody);
    cardBody.appendChild(name);
    cardBody.appendChild(about);
    cardBody.appendChild(temperament);
    cardBody.appendChild(affectionLevel)
    cardBody.appendChild(affection_level);
    cardBody.appendChild(adaptability);
    cardBody.appendChild(child_friendly);
    cardBody.appendChild(dog_friendly);
    cardBody.appendChild(energy_level);
    cardBody.appendChild(grooming);
    cardBody.appendChild(health_issues);
    cardBody.appendChild(intelligence);
    cardBody.appendChild(shedding_level);
    cardBody.appendChild(social_needs);
    cardBody.appendChild(stranger_friendly);
    cardBody.appendChild(vocalisation);
    breedResults.appendChild(card);
}