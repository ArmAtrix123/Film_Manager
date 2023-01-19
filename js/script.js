const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++){
    const a = prompt('Один из фильмов вы смотреи в последний раз?', ''),
          b = prompt('На сколько вы его оцениваете?', '');
    if (a != null && b != null && a != '' && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('xd');
    } else {
        console.log('ne xd(');
        i--;
    }
}
if (personalMovieDB.count < 10){
    console.log('Ебать ты лох, так мало');
} else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('ну нормас нормас');
} else if ( personalMovieDB.count >= 30) {
    console.log('Ты че ваще ебнутый?');
} else {
    console.log('пошел нахуй');
}

console.log(personalMovieDB);


