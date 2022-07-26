class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getPG(){
        let data = `
        Title: ${this.title};
        Studio: ${this.studio};
        Rating: ${this.rating};`
        return data;
    }
}
let movie1 = new Movie("Casino Royale","Eon Productions","PG13");
let movie2 = new Movie("Spiderman","Walt Disney Productions","PG");
let movie3 = new Movie("Twilight Saga","Summit Productions","R");
let movie4 = new Movie("Tom amd Jerry","Dolby Productions","UA");
let movie5 = new Movie("Avengers","Marvel Productions","PG");

let movieArr = [movie1, movie2, movie3, movie4, movie5];
for(let i=0; i<movieArr.length; i++){
    if(movieArr[i].rating == "PG"){
        console.log(movieArr[i].getPG());
    }
}