//BREEDS

let fetchResults = [];
let breedResults = document.getElementById("breedsResults");
// let option = document.querySelector('option');
submit.addEventListener("click", () => fetchBreed())

// const fetchBreed = () => {

//     fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${option.value}&api_key=5c39ffec-91f9-41c9-ab0f-c2131d3563a6`)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data)
//             displayResults(data)
//         })
const fetchBreed = () => {
    fetch('https://api.thecatapi.com/v1/breeds?api_key=5c39ffec-91f9-41c9-ab0f-c2131d3563a6')

        .then(function (response) {
            return response.json();
        }).then(function (breeds) {
                console.log(breeds);
                fetchResults = breeds;
                // displayResults(breeds);
                // displayResults(fetchResults);
                // displayResults(fetchBreed);
                // displayResults(breedResults);
                // displayResults();

            }

        )
}

// const displayResults = (data) => {
//     data.map((breed) => {
//         breed.breeds.map((cat) => {
//             console.log(cat)
//             let breedName = document.createElement('p')
//             let bengalImage = document.getElementById('Bengalimage')
//             breedName.innerText = cat.name
//             bengalImage.src = 'https://cdn2.thecatapi.com/images/8pCFG7gCV.jpg';


//             breedResults.appendChild(breedName)
//             breedResults.appendChild(bengalImage);
//         })
//     })
// }


function getBreeds(e) {
    console.log(e);
    // submit.addEventListener("click", "submit")
    // submit.addEventListener("click", () => displayResults())
    // submit.addEventListener("click", () => fetchBreed())
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
}

async function displayResults(index) {
    console.log('is this working?')

    // let image = document.createElement("img");
    // let abyssinianImage = document.createElement("img")
    // let aeganImage = document.createElement("img");
    // let americanBobtailImage = document.createElement("img");
    // let americanCurlImage = document.createElement("img");
    // let americanShorthairImage = document.createElement("img");
    // let americanWirehairImage = document.createElement("img");
    // let arabianMauImage = document.createElement("img");
    // let balineseImage = document.createElement("img");
    // let bambinoImage = document.createElement("img");
    // let bengalImage = document.createElement("img");
    // let birmanImage = document.createElement("img");
    // let bombayImage = document.createElement("img");
    // let britishLonghairImage = document.createElement("img");
    // let britishShorthairImage = document.createElement("img");
    // let burmeseImage = document.createElement("img");
    // let burmillaImage = document.createElement("img");
    // let californiaSpangledImage = document.createElement("img");
    // let chantillyTiffanyImage = document.createElement("img");
    // let chartreuxImage = document.createElement("img");
    // let chausieImage = document.createElement("img");
    // let cheetohImage = document.createElement("img");
    // let colorpointShorthairImage = document.createElement("img");
    // let cornishRexImage = document.createElement("img");
    // let cyprusImage = document.createElement("img");
    // let cymricImage = document.createElement("img");
    // let devonRexImage = document.createElement("img");
    // let donskoyImage = document.createElement("img");
    // let dragonLiImage = document.createElement("img");
    // let egyptianMauImage = document.createElement("img");
    // let europeanBurmeseImage = document.createElement("img");
    // let exoticShorthairImage = document.createElement("img");
    // let havanaBrownImage = document.createElement("img");
    // let himalayanImage = document.createElement("img");
    // let japaneseBobtailImage = document.createElement("img");
    // let javaneseImage = document.createElement("img");
    // let khaoManeeImage = document.createElement("img");
    // let koratImage = document.createElement("img");
    // let kurilianImage = document.createElement("img");
    // let laPermImage = document.createElement("img");
    // let maineCoonImage = document.createElement("img");
    // let malayanImage = document.createElement("img");
    // let manxImage = document.createElement("img");
    // let munchkinImage = document.createElement("img");
    // let nebelungImage = document.createElement("img");
    // let norwegianForestCatImage = document.createElement("img");
    // let ocicatImage = document.createElement("img");
    // let orientalImage = document.createElement("img");
    // let persianImage = document.createElement("img");
    // let pixieBobImage = document.createElement("img");
    // let ragamuffinImage = document.createElement("img");
    // let ragdollImage = document.createElement("img");
    // let russianBlueImage = document.createElement("img");
    // let savannahImage = document.createElement("img");
    // let scottishFoldImage = document.createElement("img");
    // let selkirkRexImage = document.createElement("img");
    // let siameseImage = document.createElement("img");
    // let siberianImage = document.createElement("img");
    // let singapuraImage = document.createElement("img");
    // let snowshoeImage = document.createElement("img");
    // let somaliImage = document.createElement("img");
    // let sphynxImage = document.createElement("img");
    // let tonkineseImage = document.createElement("img");
    // let toygerImage = document.createElement("img");
    // let turkishAngoraImage = document.createElement("img");
    // let turkishVanImage = document.createElement("img");
    // let yorkChocolateImage = document.createElement("img");
    // console.log(index);
    let breeds = fetchResults[index];
    let card = document.createElement("div");
    let cardBody = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("h1");
    let about = document.createElement("p");
    let temperament = document.createElement("p");
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

    function detach(node) {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }

    if (breedsResults.childNodes.length > 3) {
        breedsResults.removeChild(breedsResults.childNodes[3]);
    };

    // console.log(breeds);
    // console.log(breeds.intelligence);

    // console.log(fetchResults);
    // console.log(index);
    console.log("is this broken?");
    image.src = breeds.url.image;
    name.innerText = breeds.name;
    about.innerText = breeds.description;
    temperament.innerText = `${breeds.temperament}`;
    affection_level.innerText = `Affection Level: ${breeds.affection_level}`;
    adaptability.innerText = `Adaptability: ${breeds.adaptability}`;
    child_friendly.innerText = `Child Friendly: ${breeds.child_friendly}`;
    dog_friendly.innerText = `Dog Friendly: ${breeds.dog_friendly}`;
    energy_level.innerText = `Energy Level: ${breeds.energy_level}`;
    grooming.innerText = `Grooming: ${breeds.grooming}`;
    health_issues.innerText = `Health Issues: ${breeds.health_issues}`;
    intelligence.innerText = `Intelligence: ${breeds.intelligence}`;
    shedding_level.innerText = `Shedding Level: ${breeds.shedding_level}`;
    social_needs.innerText = `Social Needs: ${breeds.social_needs}`;
    stranger_friendly.innerText = `Stranger Friendly:  ${breeds.stranger_friendly}`;
    vocalisation.innerText = `Vocalisation: ${breeds.vocalisation}`;
    // abyssinianImage.src = breeds.image.url;
    // aeganImage.src = breeds.image.url;
    // americanBobtailImage.src = breeds.image.url;
    // americanCurlImage.src = breeds.image.url;
    // americanShorthairImage.src = breeds.image.url;
    // americanWirehairImage.src = breeds.image.url;
    // arabianMauImage.src = breeds.image.url;
    // balineseImage.src = breeds.image.url;
    // bambinoImage.src = breeds.image.url;
    // bengalImage.src = breeds.image.url;
    // birmanImage.src = breeds.image.url;
    // bombayImage.src = breeds.image.url;
    // britishLonghairImage.src = breeds.image.url;
    // britishShorthairImage.src = breeds.image.url;
    // burmeseImage.src = breeds.image.url;
    // burmillaImage.src = breeds.image.url;
    // californiaSpangledImage.src = breeds.image.url;
    // chantillyTiffanyImage.src = breeds.image.url;
    // chartreuxImage.src = breeds.image.url;
    // chausieImage.src = breeds.image.url;
    // cheetohImage.src = breeds.image.url;
    // colorpointShorthairImage.src = breeds.image.url;
    // cornishRexImage.src = breeds.image.url;
    // cymricImage.src = breeds.image.url;
    // cyprusImage.src = breeds.image.url;
    // devonRexImage.src = breeds.image.url;
    // donskoyImage.src = breeds.image.url;
    // dragonLiImage.src = breeds.image.url;
    // egyptianMauImage.src = breeds.image.url;
    // europeanBurmeseImage.src = breeds.image.url;
    // exoticShorthairImage.src = breeds.image.url;
    // havanaBrownImage.src = breeds.image.url;
    // himalayanImage.src = breeds.image.url;
    // japaneseBobtailImage.src = breeds.image.url;
    // javaneseImage.src = breeds.image.url;
    // khaoManeeImage.src = breeds.image.url;
    // koratImage.src = breeds.image.url;
    // kurilianImage.src = breeds.image.url;
    // laPermImage.src = breeds.image.url;
    // maineCoonImage.src = breeds.image.url;
    // malayanImage.src = breeds.image.url;
    // manxImage.src = breeds.image.url;
    // munchkinImage.src = breeds.image.url;
    // nebelungImage.src = breeds.image.url;
    // norwegianForestCatImage.src = breeds.image.url;
    // ocicatImage.src = breeds.image.url;
    // orientalImage.src = breeds.image.url;
    // persianImage.src = breeds.image.url;
    // pixieBobImage.src = breeds.image.url;
    // ragamuffinImage.src = breeds.image.url;
    // ragdollImage.src = breeds.image.url;
    // russianBlueImage.src = breeds.image.url;
    // savannahImage.src = breeds.image.url;
    // scottishFoldImage.src = breeds.image.url;
    // selkirkRexImage.src = breeds.image.url;
    // siameseImage.src = breeds.image.url;
    // siberianImage.src = breeds.image.url;
    // singapuraImage.src = breeds.image.url;
    // snowshoeImage.src = breeds.image.url;
    // somaliImage.src = breeds.image.url;
    // sphynxImage.src = breeds.image.url;
    // tonkineseImage.src = breeds.image.url;
    // toygerImage.src = breeds.image.url;
    // turkishAngoraImage.src = breeds.image.url;
    // turkishVanImage.src = breeds.image.url;
    // yorkChocolateImage.src = breeds.image.url;


    image.classList.add("image");
    card.classList.add("cardWrapper");
    cardBody.classList.add("cardDiv");
    name.classList.add("h1Class");
    about.classList.add("about");
    temperament.classList.add("temperament");
    affection_level.classList.add("pClass");
    adaptability.classList.add("pClass");
    child_friendly.classList.add("pClass");
    dog_friendly.classList.add("pClass");
    energy_level.classList.add("pClass");
    grooming.classList.add("pClass");
    health_issues.classList.add("pClass");
    intelligence.classList.add("pClass");
    shedding_level.classList.add("pClass");
    social_needs.classList.add("pClass");
    stranger_friendly.classList.add("pClass");
    vocalisation.classList.add("pClass");
    card.classList.add("breeds-results");
    // cardBody.classList.add("pClass");
    // abyssinianImage.classList.add("abysinnianImage");
    // aeganImage.classList.add("aeganImage");
    // americanBobtailImage.classList.add("americanBobtailImage");
    // americanCurlImage.classList.add("americanCurlImage");
    // americanShorthairImage.classList.add("americanShorthairImage");
    // americanWirehairImage.classList.add("americanWirehairImage");
    // arabianMauImage.classList.add("arabianMauImage")
    // balineseImage.classList.add("balineseImage");
    // bambinoImage.classList.add("bambinoImage");
    // bengalImage.classList.add("bengalImage");
    // birmanImage.classList.add("birmanImage");
    // bombayImage.classList.add("bombayImage");
    // britishLonghairImage.classList.add("britishLonghairImage");
    // britishShorthairImage.classList.add("britishShorthairImage");
    // burmeseImage.classList.add("burmeseImage");
    // burmillaImage.classList.add("burmillaImage");
    // californiaSpangledImage.classList.add("californiaSpangledImage")
    // chantillyTiffanyImage.classList.add("chantillyTiffanyImage");
    // chartreuxImage.classList.add("chartreuxImage");
    // chausieImage.classList.add("chausieImage");
    // cheetohImage.classList.add("cheetohImage");
    // colorpointShorthairImage.classList.add("colorpointShorthairImage");
    // cornishRexImage.classList.add("cornishRexImage");
    // cymricImage.classList.add("cymricImage");
    // cyprusImage.classList.add("cyprusImage");
    // devonRexImage.classList.add("devonRexImage");
    // donskoyImage.classList.add("donskoyImage");
    // dragonLiImage.classList.add("dragonLiImage");
    // egyptianMauImage.classList.add("dragonLiImage");
    // europeanBurmeseImage.classList.add("europeanBurmeseImage");
    // exoticShorthairImage.classList.add("exoticShorthairImage");
    // havanaBrownImage.classList.add("havanaBrownImage");
    // himalayanImage.classList.add("himalayanImage");
    // japaneseBobtailImage.classList.add("japaneseBobtailImage");
    // javaneseImage.classList.add("javaneseImage");
    // khaoManeeImage.classList.add("khaoManeeImage");
    // koratImage.classList.add("koratImage");
    // kurilianImage.classList.add("kurilianImage");
    // laPermImage.classList.add("laPermImage");
    // maineCoonImage.classList.add("maineCoonImage");
    // malayanImage.classList.add("malayanImage");
    // manxImage.classList.add("manxImage");
    // munchkinImage.classList.add("munchkinImage");
    // nebelungImage.classList.add("nebelungImage");
    // norwegianForestCatImage.classList.add("norwegianForestCatImage");
    // ocicatImage.classList.add("ocicatImage");
    // orientalImage.classList.add("orientalImage");
    // persianImage.classList.add("persianImage");
    // pixieBobImage.classList.add("pixieBobImage");
    // ragamuffinImage.classList.add("ragamuffinImage");
    // ragdollImage.classList.add("ragdollImage");
    // russianBlueImage.classList.add("russianBlueImage");
    // savannahImage.classList.add("savannahImage");
    // scottishFoldImage.classList.add("scottishFoldImage");
    // selkirkRexImage.classList.add("selkirkRexImage");
    // siameseImage.classList.add("siameseImage");
    // siberianImage.classList.add("siberianImage");
    // singapuraImage.classList.add("singapuraImage");
    // snowshoeImage.classList.add("snowshoeImage");
    // somaliImage.classList.add("somaliImage");
    // sphynxImage.classList.add("sphynxImage");
    // tonkineseImage.classList.add("tonkineseImage");
    // toygerImage.classList.add("toygerImage");
    // turkishAngoraImage.classList.add("turkishAngoraImage");
    // turkishVanImage.classList.add("turkishVanImage");
    // yorkChocolateImage.classList.add("yorkChocolateImage");

    card.appendChild(image);
    card.appendChild(cardBody);
    cardBody.appendChild(name);
    cardBody.appendChild(about);
    cardBody.appendChild(temperament);
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