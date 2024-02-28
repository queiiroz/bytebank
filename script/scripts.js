import selecionaCotacao from "./imprimeCotacao.js";

const graficoDolar = document.getElementById("graficoDolar");

const graficoParaDolar = new Chart(graficoDolar, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Dólar",
        data: [],
        borderWidth: 1,
        backgroundColor: "#00DEA3",
        pointRadius: "5"
      },
    ],
  },
});

function geraHorario() {
  let data = new Date();
  let horario =
    data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
  console.log(horario);
  return horario;
}

function adicionarDados(grafico, legenda, data) {
  grafico.data.labels.push(legenda);
  grafico.data.datasets.forEach((datasets) => {
    datasets.data.push(data);
  });

  grafico.update();
}

let workerDolar = new Worker("./script/workers/workerDolar.js");

workerDolar.postMessage("usd");

workerDolar.addEventListener("message", (event) => {
  let tempo = geraHorario();
  let valor = event.data.ask;
  selecionaCotacao("dolar", valor);
  adicionarDados(graficoParaDolar, tempo, valor);
});

const graficoIene = document.getElementById("graficoIene");

const graficoParaIene = new Chart(graficoIene, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Iene",
        data: [],
        borderWidth: 1,
        backgroundColor: "#783EFD",
        pointRadius: "5",
      },
    ],
  },
});

let workerIene = new Worker("./script/workers/workerIene.js");

workerIene.postMessage("iene");

workerIene.addEventListener("message", (event) => {
  let tempo = geraHorario();
  let valor = event.data.ask;
  selecionaCotacao("iene", valor);
  adicionarDados(graficoParaIene, tempo, valor);
});

const graficoEuro = document.getElementById("graficoEuro")

const graficoParaEuro = new Chart (graficoEuro,{
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Euro",
        data: [],
        borderWidth: 1,
        backgroundColor: "yellow",
        fill: "true",
        pointRadius: "5"
      },
    ],
  },
});

let workerEuro = new Worker("./script/workers/workerEuro.js")

workerEuro.postMessage("euro")

workerEuro.addEventListener("message", (event) => {
  let tempo = geraHorario();
  let valor = event.data.ask;
  selecionaCotacao("euro", valor);
  adicionarDados(graficoParaEuro, tempo, valor);
});

