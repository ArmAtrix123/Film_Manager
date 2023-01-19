const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// const a = prompt('Один из фильмов вы смотреи в последний раз?', ''),
//       b = prompt('На сколько вы его оцениваете?', ''),
//       c = prompt('Один из фильмов вы смотреи в последний раз?', ' '),
//       d = prompt('На сколько вы его оцениваете?', '');
for (i = 0; i < 2; i++){
    const a = prompt('Один из фильмов вы смотреи в последний раз?', '');
    for (j = 0; j < i; j++){
        const b = prompt('На сколько вы его оцениваете?', '');
    }
}

personalMovieDB.movies[a] = b;

console.log(personalMovieDB);