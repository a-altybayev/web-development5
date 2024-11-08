let heroes
async function fetchAllHeroes(){
    let url = "https://akabab.github.io/superhero-api/api/all.json"

    try{
        let response = await fetch(url)

        heroes = await response.json()
    }
    catch{
        console.log(`Getting some error ${error}`)
    }
}

function configureRandomHero() {
    let heroDataContainer = document.getElementById("hero-data");
    heroDataContainer.innerHTML = '';

    let randomIndex = Math.floor(Math.random() * 562)
    let firstHero = heroes[randomIndex]

    let firstHeroImage = `<img src="${firstHero.images.md}" alt="hero-avatar" class="hero-image">`;

    let firstHeroInfo = `<div class="hero-info">
            <h2>Hero Info</h2>
            ${firstHeroImage}
            <p>Name: ${firstHero.name}</p>
            <p>Full Name:${firstHero.biography.fullName}</p>
            <p>First Appearance:${firstHero.biography.firstAppearance}</p>
            <p>Publisher:${firstHero.biography.publisher}</p>
            <p>Gender: ${firstHero.appearance.gender}</p>
            <p>Race: ${firstHero.appearance.race}</p>
            <p>Height: ${firstHero.appearance.height.join(",")}</p>
            <p>Weight: ${firstHero.appearance.weight.join(",")}</p>
            <p>Intelligence: ${firstHero.powerstats.intelligence}</p>
            <p>Strength:${firstHero.powerstats.strength}</p>
        </div>`;
    heroDataContainer.innerHTML = firstHeroInfo;
}
addEventListener("onload", fetchAllHeroes())