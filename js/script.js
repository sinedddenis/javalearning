const numberOfFilms = +prompt('How many film have you watched?','');
const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres: [],
    private: false
};
 const a = prompt('Last movie?',''),
 b = prompt('Rating',''),
 c = prompt('Last movie?',''),
 d = prompt('Rating','');
 personalMovieDB.movies[a] = b;
 personalMovieDB.movies[c] = d;
//hello;

 console.log(personalMovieDB);