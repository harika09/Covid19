const totalCases = document.getElementById("activeCases");
const recovered = document.getElementById("recovered");
const deceased = document.getElementById("deceased");
const button = document.getElementById("submitCountry");
const countryList = document.getElementById("countryList");
let countryName = document.getElementById("country");
let Searchcountry = document.getElementById("list-country");
let emptyArray = []; //Empty Array this will contain all the data to pass on.



function formatNumber(value){ //data.cases adding format the number correctly
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //Adding Commas to number
}


Searchcountry.addEventListener('keyup', (e) =>{ //Search data on API

        const searhCountry = e.target.value.toLowerCase(); //accept lowercase
        const filteredCountries = emptyArray.filter((datas) => {

            return(
               datas.country.toLowerCase().includes(searhCountry)
               
            );
           
        });
            displayCharacters(filteredCountries);
        
});


const loadCountry = async() =>{ //parsing data
    try{
        const api_URL = "https://disease.sh/v3/covid-19/countries" //"https://coronavirus-19-api.herokuapp.com/countries";
        const response = await fetch(api_URL)
        emptyArray = await response.json();
        displayCharacters(emptyArray)
    } catch(err){
        console.error(err);
    }
};


const displayCharacters = (data) => {

    const htmlString = data.map((datas) => {
            return `
            <li class="list-of-countries">
                <div class="country-name">
                    <h2 class="country">${datas.country}</h2> 
                    <img class="flag" src="${datas.countryInfo.flag}" alt="${datas.country}">
                </div>

                <div class="list-of-cases">
                <p>Total Cases: ${formatNumber(datas.cases)}</p>
                <p>Today's Case: ${formatNumber(datas.todayCases)}</p>
                <p>Recovered: ${formatNumber(datas.recovered)} </p>
                <p> Deaths: ${formatNumber(datas.deaths)} </p>
                </div>
            </li>
        `;
        })
        .join('');

    countryList.innerHTML = htmlString; //display info on html
};

loadCountry().catch(error =>{
    console.log('error');
});;


async function worldCases(){
    const api_URL = "https://coronavirus-19-api.herokuapp.com/all";
    const response = await fetch(api_URL)
    let data = await response.json()
   
    totalCases.innerHTML = formatNumber(data.cases);
    recovered.innerHTML = formatNumber(data.recovered);
    deceased.innerHTML = formatNumber(data.deaths)
  

   // console.log(data[32].country)

    $(totalCases).counterUp({delay:10, time:1000});
    $(recovered).counterUp({delay:10, time:1000});
    $(deceased).counterUp({delay:10, time:1000});
    
    displayData(data)
    //console.log(data.cases);
}

worldCases().catch(error => {
    console.log('error');
});





