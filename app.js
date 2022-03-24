const btn1 = document.getElementById("prevQuote");
const btn2 = document.getElementById("getQuote");
const outputQuote = document.getElementById("quoteDisplay");


let quotes = [
{ 
    quote: "All animals are equal, but some animals are more equal than others.",
    author: "-George Orwell",
},
{
    quote: "Blessed are the hearts that can bend, they shall never be broken. ",
    author: "-Albert Camus",
},
{
    quote: "Your children are not your children. They are the sons and daughters of Life's longing for itself.",
    author: "-Khalil Gibran" ,
},
{ 
    quote : "Love knows not its own depth until the hour of separation.",    
    author: "―Khalil Gibran",
},
{
    quote: "Doublethink means the power of holding two contradictory beliefs in one's mind simultaneously, and accepting both of them.",
    author: "―George Orwell",
},
{ 
    quote: "Life is priceless even to an ant.",
    author: "―Liu Xiaobo", 
},
{
    quote: "In a post-totalitarian dictatorship, the grins of the people are the nightmares of the dictators.",
    author: "-Liu Xiaobo" ,
},    
{

    quote: "In the depth of winter, I finally learned that within me there lay an invincible summer. ",
    author: "―Albert Camus",
},   
{    quote: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
     author: "―Albert Camus",
},
{   quote: "Political language is designed to make lies sound truthful and murder respectable, and to give an appearance of solidity to pure wind.",
    author: "―George Orwell" ,
},
{   quote:  "The difference between a developped and an under-developped nation is that corruption only exists in the high levels of         government in the former, while it exists on every level in the latter.",
    author: "-Samah Soussi"
},
];

let viewedQuotes = [];
let randomQuote;

const newQuote = () => {
    randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
    if (viewedQuotes.length === quotes.length){
        viewedQuotes = [];
    }
    if(viewedQuotes.includes(randomQuote) === true){
        newQuote();
    } else {
        viewedQuotes.push(randomQuote);
        console.log(randomQuote);
        return randomQuote;
    }
}

const printQuote = () => {
    newQuote();
    let fullQuote = '' ;
    fullQuote += randomQuote.quote + '</p>';
    fullQuote +=  randomQuote.author;
    
    i = viewedQuotes.length +1;
    outputQuote.innerHTML = fullQuote;
    
}

const displayButton = () => {
    if (printQuote) {
        btn1.style.display = "inline-block";
    }else {
        btn1.style.display = "none";
    }
}

const previousQuote = () => {
   if (i !== 0 && viewedQuotes.length !== 0 ){
   --i;  
   if (viewedQuotes[i] !== undefined){
    let fullQuote = ' ' ;
  
       fullQuote +=viewedQuotes [i-1].quote + '</p>' ;
       fullQuote += viewedQuotes [i-1].author;
       outputQuote.innerHTML = fullQuote;
       
       console.log (fullQuote);
       return ;
       
   }  else {
      previousQuote(); 
   }
   } 
}


btn1.addEventListener("click", previousQuote, true);
btn2.addEventListener('click',() => 
{
    printQuote();
    displayButton();

});
window.addEventListener("load" , printQuote);