

let chave = "777fd6c175f16899b669ab9b22be7638";
let local;
let select = document.getElementById("localDistrito");
let temp = "";
let selectLocal;
let uf;

function leitorEstado(){
    selectLocal = document.getElementById('local');
    local = selectLocal.value;
    console.log(local)
    let url = "";

    switch (local) {
        case "Acre": uf = 'AC'
        break;
        case "Alagoas":
            uf = 'AL';
            break;
        case "Amapá":
            uf = 'AP';
            break;
        case "Amazonas":
            uf = 'AM';
            break;
        case "Bahia":
            uf = 'BA';
            break;
        case "Ceará":
            uf = 'CE';
            break;
        case "Distrito Federal":
            uf = 'DF';
            break;
        case "Espírito Santo":
            uf = 'ES';
            break;
        case "Goiás":
            uf = 'GO';
            break;
        case "Maranhão":
            uf = 'MA';
            break;
        case "Mato Grosso":
            uf = 'MT';
            break;
        case "Mato Grosso do Sul":
            uf = 'MS';
            break;
        case "Minas Gerais":
            uf = 'MG';
            break;
        case "Pará":
            uf = 'PA';
            break;
        case "Paraíba":
            uf = 'PB';
            break;
        case "Paraná":
            uf = 'PR';
            break;
        case "Pernambuco":
            uf = 'PE';
            break;
        case "Piauí":
            uf = 'PI';
            break;
        case "Rio de Janeiro":
            uf = 'RJ';
            break;
        case "Rio Grande do Norte":
            uf = 'RN';
            break;
        case "Rio Grande do Sul":
            uf = 'RS';
            break;
        case "Rondônia":
            uf = 'RO';
            break;
        case "Roraima":
            uf = 'RR';
            break;
        case "Santa Catarina":
            uf = 'SC';
            break;
        case "São Paulo":
            uf = 'SP';
            break;
        case "Sergipe":
            uf = 'SE';
            break;
        case "Tocantins":
            uf = 'TO';
            break;
        default:
            // Caso o nome do estado não seja encontrado
            console.error("Estado não encontrado:", local);
            break;
    }

    url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/distritos`

    fetch(url)
    .then(resposta => {
        return resposta.json();
    })
    .then(dados =>{
        console.log(dados);
        for(i = 0; i < dados.length; i++){
            temp += `<option value="${dados[i].nome}">${dados[i].nome}</option>`
        }
        select.innerHTML = temp;
        temp = "";
    })

}
function verTemp(){
    selectLocalDistrito = document.getElementById('localDistrito');
    localDistrito = selectLocalDistrito.value;
    console.log(localDistrito)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${localDistrito}&lang=pt_br&appid=${chave}&units=metric`

fetch(url)
    .then(resposta =>{
    // console.log(resposta); 
    return resposta.json();
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