// 1. http://api.alquran.cloud/v1/surah

// Prayer Times Calendar by city - https://api.pray.zone/v2/times/today.json?city=khulna

const loadCity = () => {
    const prayerTime = document.getElementById("prayerTime");
    const prayerText = prayerTime.value;
    prayerTime.value = '';

    const url = `https://api.pray.zone/v2/times/today.json?city=${prayerText}`

    fetch(url)
        .then(res => res.json())
        .then(data => showCity(data))
}

const showCity = city => {
    const showPrayer = document.getElementById("show-prayer");
    showPrayer.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <h3 class="fw-bold">আপনার এলাকা : ${city.results.location.city}</h3>
    <h6 class="fw-bold">আজকের তারিখ : ${city.results.datetime[0].date.gregorian}</h6>
    <p>ফজর :  ${city.results.datetime[0].times.Fajr}</p>
    <p>যোহর :  ${city.results.datetime[0].times.Dhuhr}</p>
    <p>আসর :  ${city.results.datetime[0].times.Asr}</p>
    <p>মাগরিব :  ${city.results.datetime[0].times.Maghrib}</p>
    <p>এশা :  ${city.results.datetime[0].times.Isha}</p>
    
 `
    showPrayer.appendChild(div);
}




const loadSura = () => {
    const url = `http://api.alquran.cloud/v1/surah`

    fetch(url)
        .then(res => res.json())
        .then(data => showSura(data))
}

loadSura();


const showSura = sura => {
    const showSura = document.getElementById("showSura");
    sura.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML = `
    <div class="card-header">${element.data[0].englishName}</div>
    <div class="card-body text-primary">
        <h5 class="card-title">${element.data[0].englishNameTranslation}</h5>
        <p class="card-text">${element.data[0].numberOfAyahs}</p>
    </div>
    `
        showSura.appendChild(div);
    });

}

