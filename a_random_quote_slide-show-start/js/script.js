/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
const quotes = [
    {
        quote : "I have not failed. I've just found 10,000 ways that won't work.",
        source: "Thomas A. Edison",
        year: 1847
    },
    {
        quote : "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
        source : "James Cameron",
    },
    {
        quote : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
        source : "Steve Jobs",
        citation: "Commencement at Stanford University",
        year: 2005,
    },
    {
        quote : "It is during our darkest moments that we must focus to see the light",
        source : "Aristotle",
    },
    {
        quote : "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        source : "Benjamin Franklin",
    }
  ];

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    let randomNumber = () => { 
//Returning a random number within 0 and quotes array length
        return (Math.floor(Math.random()*quotes.length));
    }
//Get and return the object using the above generated number
    let obj = quotes[randomNumber()];
    return obj;
}


/***
 * `printQuote` function
***/
//Get the webpage elements
let pageQuote = document.getElementsByClassName("quote")[0];
let pageSource = document.getElementsByClassName("source")[0];
let pageCitation = document.getElementsByClassName("citation")[0];
let pageYear = document.getElementsByClassName("year")[0];

function printQuote() {
//Get the object to be displayed
    let obj = getRandomQuote();
//Define the quote properties (quote, source, citation, year) to be displayed
    let quote = obj.quote;
    let source = obj.source;
    let citation = obj.citation;
    let year = obj.year;

// Define the webpage quote element content
    pageQuote.innerHTML = quote;

//Analyze the extracted object to define which elements will be printed
//In case of no empty fields
    if(citation == null && year == null) {
        pageSource.innerHTML = source;
//Defining the source element with a citation child element only
    } else if(year == null) {
        pageSource.innerHTML = ` ${source}<span class="citation"></span>`;
        pageCitation = document.getElementsByClassName("citation")[0];
        pageCitation.innerHTML = citation;
//Defining the source element with a year child element only
    } else if(citation == null) {
        pageSource.innerHTML = ` ${source}<span class="year"></span>`;
        pageYear = document.getElementsByClassName("year")[0];
        pageYear.innerHTML = year;
//Defining the source element with both citation and year children elements
    } else {
        pageSource.innerHTML = ` ${source}<span class="citation"></span><span class="year"></span>`;
        pageCitation = document.getElementsByClassName("citation")[0];
        pageCitation.innerHTML = citation;
        pageYear = document.getElementsByClassName("year")[0];
        pageYear.innerHTML = year;
    }
}

/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.
***/

//Add a clicking event listener (nextQuote function) to the Next Quote button
document.getElementById('load-quote').addEventListener("click", nextQuote);

//Scope of nextQuote function
function nextQuote(){
    printQuote();
};