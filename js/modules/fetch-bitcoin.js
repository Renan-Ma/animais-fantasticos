export default function fetchBitcoin(url, target){
  fetch(url)
  .then(response => response.json())
  .then(bitcoin => {
    const btcPreco = document.querySelector(target);
    btcPreco.innerText = (10000 / bitcoin.BRL.buy).toFixed(4);
  }).catch( erro => {
    console.log(Error(erro));
  })
}