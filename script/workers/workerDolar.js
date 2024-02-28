async function conectaAPI() {
  const conecta = await fetch(
    "https://economia.awesomeapi.com.br/json/last/USD-BRL",
    {
      cache: "force-cache",
    }
  );
  const conectaTraduzido = await conecta.json();
  postMessage(conectaTraduzido.USDBRL);
}

addEventListener("message", () => {
  conectaAPI();
  setInterval(() => conectaAPI(), 60000);
});
