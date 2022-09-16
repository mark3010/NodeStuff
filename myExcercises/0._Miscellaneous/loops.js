const barbieMovies = [{ name: "Swan Lake", year: 2004},{ name: "Princess and the pauper", year: 2011},{ name: "Fairies", year: 2014}];

// Use map below to give all the movies a 10/10 rating

const ratedBarbieMovies = barbieMovies.map(movie => {
    movie.rating = "10/10";
    return movie;
});
console.log(ratedBarbieMovies);

// Task give me movies more recent than 2005

const newestBarbieMovies = barbieMovies.filter(movie => movie.year > 2005);
console.log(newestBarbieMovies);

// TLDR dont use for loops unless you're retarded or are doing "finger counting"

// dont use enhanced for loops

//only use for each when we dont care about the outcome, like populating the DOM

//use functional loops if possible