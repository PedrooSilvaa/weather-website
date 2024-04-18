let chave = "777fd6c175f16899b669ab9b22be7638";

function verTemp(){
    
    var selectCorpo = document.getElementById('local');
    var local = selectCorpo.options[selectCorpo.selectedIndex].value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${local}&lang=pt_br&appid=${chave}&units=metric`

fetch(url)
    .then(resposta =>{
    // console.log(resposta);
    return resposta.json();

    // document.getElementById('testeTexto').innerText = json.resposta;
    })
    .then(dados =>{
        console.log(dados)
        document.getElementById('temperatura').innerText = dados.main.temp + "°C";
        document.getElementById('tempMin').innerText = "Min: " + dados.main.temp_min + "°C";
        document.getElementById('tempMax').innerText = "Max: " + dados.main.temp_max + "°C";
        document.getElementById('tempSensacao').innerText = "Sensação Termica: " + dados.main.feels_like + "°C";
        document.getElementById('tempUmidade').innerText = "Umidade: " + dados.main.humidity;
        document.getElementById('tempDescricao').innerText = "Descrição: " + dados.weather[0].description;
        icone = dados.weather[0].icon;
        console.log(icone);
        document.getElementById('icone').src = `https://openweathermap.org/img/wn/${icone}@2x.png`;
        
    })
    .catch(erro => {
        console.log(erro)
    })
}