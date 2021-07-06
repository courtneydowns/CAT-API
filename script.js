//BREEDS


// let breedResults = document.getElementById("breedsResults");
// let option = document.querySelector('option');


// const fetchBreed = () => {

//     fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${option.value}&api_key=5c39ffec-91f9-41c9-ab0f-c2131d3563a6`)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data)
//             displayResults(data)
//         })
let fetchResults = [];

fetch('https://api.thecatapi.com/v1/breeds?api_key=5c39ffec-91f9-41c9-ab0f-c2131d3563a6')

    .then(function (response) {
        return response.json();
    }).then(function (breeds) {
            // fetchResults = (breeds);
            console.log(breeds);
            displayResults();

        }

    )
// console.log(fetchResults);
// console.log(fetchResults);
// const displayResults = (data) => {
//     data.map((breed) => {
//         breed.breeds.map((cat) => {
//             console.log(cat)
//             let breedName = document.createElement('p')
//             let bengalImage = document.getElementById('Bengalimage')
//             breedName.innerHTML = cat.name
//             bengalImage.src = 'https://cdn2.thecatapi.com/images/8pCFG7gCV.jpg';


//             breedResults.appendChild(breedName)
//             breedResults.appendChild(bengalImage);
//         })
//     })
// }


// function getBreeds() {
// console.log(e);
// submit.addEventListener("click", "submit")
// submit.addEventListener("click", () => displayResults())
// submit.addEventListener("click", () => fetchBreed())
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    let option = document.getElementById("breeds").value
    switch (option) {

        case "breed-1":
            diplayResults(0);
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

        default:
            console.log(`error${option}`);
            break;
    }
})

async function displayResults(arrayBucket = 0) {
    console.log('is this working?')
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
        results.removeChild(breedsResults.childNodes[3]);
    };

    let breeds = fetchResults[arrayBucket].breeds;
    let name = fetchResults[arrayBucket].name;
    let about = fetchResults[arrayBucket].about;
    let temperament = fetchResults[arrayBucket].temperament;
    let affection_level = fetchResults[arrayBucket].affection_level;
    let adaptability = fetchResults[arrayBucket].adaptability;
    let child_friendly = fetchResults[arrayBucket].child_friendly;
    let dog_friendly = fetchResults[arrayBucket].dog_friendly;
    let energy_level = fetchResults[arrayBucket].energy_level;
    let grooming = fetchResults[arrayBucket].grooming;
    let health_issues = fetchResults[arrayBucket].health_issues;
    let intelligence = fetchResults[arrayBucket].intelligence;
    let shedding_level = fetchResults[arrayBucket].shedding_level;
    let social_needs = fetchResults[arrayBucket].social_needs;
    let stranger_friendly = fetchResults[arrayBucket].stranger_friendly;
    let vocalisation = fetchResults[arrayBucket].vocalisation;

    let displayImage = document.createElement("img");
    let displayName = document.createElement("h1")
    let displayAbout = document.createElement("h3");
    let displayTemperament = document.createElement("p");
    let displayAffection_level = document.createElement("p")
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
    console.log("is this broken?")

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

    console.log("help!")

    for (let i = 0; i < breeds; i++) {
        let imageFetch = await fetch(breeds[i]);
        let resultImageFetch = await imageFetch.json()

        let image = resultImageFetch.image;

        displayImage.src = image;

        let card = document.createElement("div");
        let cardBody = document.createElement("div");

        card.setAttribute("class", "card")
        cardBody.setAttribute("class", "cardBody")

        console.log("please work.")

        card.appendChild(displayImage);
        card.appendChild(cardBody);
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
        results.appendChild(card);
    }






    // card.appendChild(abyssinianImage);
    // card.appendChild(aeganImage);
    // card.appendChild(americanBobtailImage);
    // card.appendChild(americanCurlImage);
    // card.appendChild(americanShorthairImage);
    // card.appendChild(americanWirehairImage);
    // card.appendChild(arabianMauImage);
    // card.appendChild(balineseImage);
    // card.appendChild(bambinoImage);
    // card.appendChild(bengalImage);
    // card.appendChild(birmanImage);
    // card.appendChild(bombayImage);
    // card.appendChild(britishLonghairImage);
    // card.appendChild(britishShorthairImage);
    // card.appendChild(burmeseImage);
    // card.appendChild(burmillaImage);
    // card.appendChild(californiaSpangledImage);
    // card.appendChild(chantillyTiffanyImage);
    // card.appendChild(chartreuxImage);
    // card.appendChild(chausieImage);
    // card.appendChild(cheetohImage);
    // card.appendChild(colorpointShorthairImage);
    // card.appendChild(cornishRexImage);
    // card.appendChild(cymricImage);
    // card.appendChild(cyprusImage);
    // card.appendChild(devonRexImage);
    // card.appendChild(donskoyImage);
    // card.appendChild(dragonLiImage);
    // card.appendChild(egyptianMauImage);
    // card.appendChild(europeanBurmeseImage);
    // card.appendChild(exoticShorthairImage);
    // card.appendChild(havanaBrownImage);
    // card.appendChild(himalayanImage);
    // card.appendChild(japaneseBobtailImage);
    // card.appendChild(javaneseImage);
    // card.appendChild(khaoManeeImage);
    // card.appendChild(koratImage);
    // card.appendChild(kurilianImage);
    // card.appendChild(laPermImage);
    // card.appendChild(maineCoonImage);
    // card.appendChild(malayanImage);
    // card.appendChild(manxImage);
    // card.appendChild(munchkinImage);
    // card.appendChild(norwegianForestCatImage);
    // card.appendChild(ocicatImage);
    // card.appendChild(orientalImage);
    // card.appendChild(persianImage);
    // card.appendChild(ragamuffinImage);
    // card.appendChild(ragdollImage);
    // card.appendChild(russianBlueImage);
    // card.appendChild(savannahImage);
    // card.appendChild(scottishFoldImage);
    // card.appendChild(selkirkRexImage);
    // card.appendChild(siameseImage);
    // card.appendChild(siberianImage);
    // card.appendChild(singapuraImage);
    // card.appendChild(snowshoeImage);
    // card.appendChild(somaliImage);
    // card.appendChild(sphynxImage);
    // card.appendChild(tonkineseImage);
    // card.appendChild(toygerImage);
    // card.appendChild(turkishAngoraImage);
    // card.appendChild(turkishVanImage);
    // card.appendChild(yorkChocolateImage);
}