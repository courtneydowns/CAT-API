//BREEDS
let fetchResults = [];


fetch('https://api.thecatapi.com/v1/breeds?5c39ffec-91f9-41c9-ab0f-c2131d3563a6')

    .then(function (response) {
        return response.json();
    }).then(function (breeds) {
        console.log(breeds);
        fetchResults = (breeds)
        displayResults(fetchResults);
    })

let submit = document.getElementById("submit")
submit.addEventListener("click", () => {
    let option = document.getElementById("breeds").value
    switch (option) {
        case "breed-one":
            displayResults(0);
            break;

        case "breed-two":
            displayResults(1)
            break;

        case "breed-three":
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
            console.log("I want chicken. I want dinner. Meow Mix, Meow Mix, please deliver!")
            break;
    }
})



async function displayResults(arrayBucket = 0) {

    // while (results.firstChild) {
    //     results.removeChild(results.firstChild);
    // }

    let results = document.getElementById("breed-results");

    let breeds = fetchResults
    let displayBreeds = document.createElement("h2");

    results.appendChild(displayBreeds);

    // for (let i = 0; i < breeds.length; i++) 
    breeds.forEach(resultBreedsFetch => {
        // let breedsFetch = await fetch(breeds[i]);

        // let resultBreedsFetch = await breedsFetch.json()

        let breedCategories = []

        let image = resultBreedsFetch.image;
        breedCategories.push(image);
        let origin = resultBreedsFetch.origin;
        breedCategories.push(origin);
        let hypoallergenic = resultBreedsFetch.hypoallergenic;
        breedCategories.push(hypoallergenic);
        let name = resultBreedsFetch.name;
        breedCategories.push(name);
        let description = resultBreedsFetch.description;
        breedCategories.push(description);
        let temperament = resultBreedsFetch.temperament;
        breedCategories.push(temperament);
        let adaptability = resultBreedsFetch.adaptability;
        breedCategories.push(adaptability);
        let affection_level = resultBreedsFetch.affection_level;
        breedCategories.push(affection_level);
        let child_friendly = resultBreedsFetch.child_friendly;
        breedCategories.push(child_friendly);
        let dog_friendly = resultBreedsFetch.dog_friendly;
        breedCategories.push(dog_friendly);
        let energy_level = resultBreedsFetch.energy_level;
        breedCategories.push(energy_level);
        let grooming = resultBreedsFetch.grooming;
        breedCategories.push(grooming);
        let health_issues = resultBreedsFetch.health_issues;
        breedCategories.push(health_issues);
        let intelligence = resultBreedsFetch.intelligence;
        breedCategories.push(intelligence);
        let shedding_level = resultBreedsFetch.shedding_level;
        breedCategories.push(shedding_level);
        let social_needs = resultBreedsFetch.social_needs;
        breedCategories.push(social_needs);
        let stranger_friendly = resultBreedsFetch.stranger_friendly;
        breedCategories.push(stranger_friendly);
        let vocalisation = resultBreedsFetch.vocalisation;
        breedCategories.push(vocalisation);
        let wikipedia_url = resultBreedsFetch.wikipedia_url;
        breedCategories.push(wikipedia_url);

        let displayImage = document.createElement("img");
        // document.getElementById("img").style.height = "288px";
        // document.getElementById("img").style.width = "288px";
        let displayName = document.createElement("h1");
        displayName.setAttribute("class", "name");
        let displayOrigin = document.createElement("h2");
        displayOrigin.setAttribute("class", "origin");
        let displayHypoallergenic = document.createElement("h2");
        displayHypoallergenic.setAttribute("class", "hypoallergenic");
        let displayDescription = document.createElement("h2");
        displayDescription.setAttribute("class", "description");
        let displayTemperament = document.createElement("h2");
        displayTemperament.setAttribute("class", "temperament");
        let displayAdaptability = document.createElement("h2");
        displayAdaptability.setAttribute("class", "adaptability");
        let displayAffection_Level = document.createElement("h2");
        displayAffection_Level.setAttribute("class", "affection-level");
        let displayChild_Friendly = document.createElement("h2");
        displayChild_Friendly.setAttribute("class", "child-friendly");
        let displayDog_Friendly = document.createElement("h2");
        displayDog_Friendly.setAttribute("class", "dog-friendly");
        let displayEnergy_Level = document.createElement("h2");
        displayEnergy_Level.setAttribute("class", "energy-level");
        let displayGrooming = document.createElement("h2");
        displayGrooming.setAttribute("class", "grooming");
        let displayHealth_Issues = document.createElement("h2");
        displayHealth_Issues.setAttribute("class", "health-issues");
        let displayIntelligence = document.createElement("h2");
        displayIntelligence.setAttribute("class", "intelligence");
        let displayShedding_Level = document.createElement("h2");
        displayShedding_Level.setAttribute("class", "shedding-level");
        let displaySocial_Needs = document.createElement("h2");
        displaySocial_Needs.setAttribute("class", "social-needs");
        let displayStranger_Friendly = document.createElement("h2");
        displayStranger_Friendly.setAttribute("class", "stranger-friendly");
        let displayVocalisation = document.createElement("h2");
        displayVocalisation.setAttribute("class", "vocalisation");
        let displayWikipedia_URL = document.createElement("h2");
        displayWikipedia_URL.setAttribute("class", "vocalisation");

        displayImage.src = image;
        displayName.innerHTML = `${name}`;
        displayOrigin.innerHTML = `${origin}`;
        displayHypoallergenic.innerHTML = `Hypoallergenic: ${hypoallergenic}`;
        displayDescription.innerHTML = `${description}`;
        displayTemperament.innerHTML = `${temperament}`;
        displayAdaptability.innerHTML = `Adaptability: ${adaptability}`;
        displayAffection_Level.innerHTML = `Affection Level: ${affection_level}`;
        displayChild_Friendly.innerHTML = `Child Friendly: ${child_friendly}`;
        displayDog_Friendly.innerHTML = `Dog Friendly: ${dog_friendly}`;
        displayEnergy_Level.innerHTML = `Energy Level: ${energy_level}`;
        displayGrooming.innerHTML = `Grooming: ${grooming}`;
        displayHealth_Issues.innerHTML = `Health Issues: ${health_issues}`;
        displayIntelligence.innerHTML = `Intelligence: ${intelligence}`;
        displayShedding_Level.innerHTML = `Shedding Level: ${shedding_level}`;
        displaySocial_Needs.innerHTML = `Social Needs: ${social_needs}`;
        displayStranger_Friendly.innerHTML = `Stranger Friendly: ${stranger_friendly}`;
        displayVocalisation.innerHTML = `Vocalisation: ${vocalisation}`;
        displayWikipedia_URL.innerHTML = `Wikipedia: ${wikipedia_url}`;

        let attributeList = document.createElement("ul")

        breedCategories.forEach(attributes => {
            let attribute = document.createElement("li")
            attribute.innerHTML = attributes
            attributeList.appendChild(attribute);

            // let card = document.createElement("div");
            // card.setAttribute("class", "card");
            // document.getElementById("card").style.width = "288px";
            // let img = document.createElement("img");
            // img.setAttribute("img");
            // let cardImgTop = document.createElement("div");
            // cardImgTop.setAttribute("class", "card-img-top");
            // let cardBody = document.createElement("div");
            // cardBody.setAttribute("class", "card-body");
            // let cardTitle = document.createElement("div");
            // cardTitle.setAttribute("class", "card-title");
            // let cardText = document.createElement("p");
            // cardText.setAttribute("class", "card-text");

            // function removeButton() {
            //     let btn = document.getElementById("button")
            //     btn.remove();
            // }

            // removeButton();

            // let card = document.createElement("div");
            // card.setAttribute("class", "card");

            // let cardBody = document.createElement("div");
            // cardBody.setAttribute("class", "card-body");

            // results.appendChild(card);
            // card.appendChild(cardBody);
            // cardBody.appendChild(displayImage);
            // cardBody.appendChild(displayName);
            // cardBody.appendChild(attributeList);

        })
    })
}

//CATEGORIES
let fetchResults = [];


fetch('https://api.thecatapi.com/v1/categories?5c39ffec-91f9-41c9-ab0f-c2131d3563a6')

    .then(function (response) {
        return response.json();
    }).then(function (breeds) {
        console.log(breeds);
        fetchResults = (breeds)
        displayResults(fetchResults);
    })

let submit = document.getElementById("submit")
submit.addEventListener("click", () => {
            let option = document.getElementById("breeds").value
            switch (option) {
                case "breed-one":
                    displayResults(0);
                    break;

                case "breed-two":
                    displayResults(1)
                    break;

                case "breed-three":
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