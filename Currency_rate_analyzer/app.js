const btn = document.getElementById("fetchData");
const currency = document.getElementById("currencySelect");
const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
const main = document.getElementById("main");





const ctx = document.getElementById('myChart');

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [], 
        datasets: [{
            label: 'Курс валюти',
            data: [],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false 
            }
        }
    }
});

btn.addEventListener("click", function () {
    const start = startDate.value.replaceAll("-", "");
    const end = endDate.value.replaceAll("-", "");
    const currVal = currency.value;
    const URI = `https://bank.gov.ua/NBU_Exchange/exchange_site?start=${start}&end=${end}&valcode=${currVal}&sort=exchangedate&order=desc&json`;
    console.log(URI);
    const XHR = new XMLHttpRequest();
    XHR.open("GET",URI,);
    XHR.send();


    XHR.addEventListener("readystatechange", function () {
    if (XHR.readyState === 4 && XHR.status === 200) {
        const data = JSON.parse(XHR.responseText);
        const toDisplay = (data.length !== 0) ? `<h2>${data[0].rate}</h2>` : `<h2>No data</h2>`;
        main.innerHTML = toDisplay;
    const dates = data.map(item => item.exchangedate).reverse();
    const rates = data.map(item => item.rate).reverse();
    myChart.data.labels = dates;
    myChart.data.datasets[0].data = rates;
    myChart.update();
    }
    })
})
