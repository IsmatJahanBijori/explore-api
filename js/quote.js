// function loadQuote(){
//     fetch('https://api.kanye.rest/')
//     .then(res=>res.json())
//     .then(quote=>displayQuote(quote))
// }
// function displayQuote(quote){
//     // console.log(quote)
//     const quoteDisplay=document.getElementById('quote')
//     quoteDisplay.innerHTML=quote.quote;

// }

const loadQuote=()=>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(quote=>displayQuote(quote))
}
const displayQuote=(quote)=>{
    // console.log(quote)
    const quoteDisplay=document.getElementById('quote')
    quoteDisplay.innerHTML=quote.quote;

}

loadQuote()