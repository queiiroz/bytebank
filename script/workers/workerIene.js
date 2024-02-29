async function conectaAPI() {
  const conecta = await fetch(
    "https://economia.awesomeapi.com.br/json/last/JPY-BRL",
    {
      cache: "force-cache",
      headers: new Headers({"Cache-Control":"max-age=3600"})
    }
  );
  const conectaTraduzido = await conecta.json();
  postMessage(conectaTraduzido.JPYBRL);
}

addEventListener("message", () => {
  conectaAPI();
  setInterval(() => conectaAPI(), 60000);
});
