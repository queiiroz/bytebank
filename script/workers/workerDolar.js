async function conectaAPI() {
  const conecta = await fetch(
    "https://economia.awesomeapi.com.br/json/last/USD-BRL",
    {
      cache: "force-cache",
      headers: new Headers({"Cache-Control":"max-age=3600"})
    }
  );
  const conectaTraduzido = await conecta.json();
  postMessage(conectaTraduzido.USDBRL);
}

addEventListener("message", () => {
  conectaAPI();
  setInterval(() => conectaAPI(), 60000);
});
