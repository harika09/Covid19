const totalCases = document.getElementById("activeCases");
const recovered = document.getElementById("recovered");
const deceased = document.getElementById("deceased");


function formatNumber(value){ //data.cases adding format the number correctly
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //Adding Commas to number
}

async function worldCases(){
    const api_URL = "https://coronavirus-19-api.herokuapp.com/all";
    const response = await fetch(api_URL)
    const data = await response.json()

    totalCases.innerHTML = formatNumber(data.cases);
    recovered.innerHTML = formatNumber(data.recovered);
    deceased.innerHTML = formatNumber(data.deaths)

    //console.log(data.cases);
}

worldCases();