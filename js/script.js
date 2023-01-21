let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

function rememberMyFilms(){
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
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log('Ебать ты лох, так мало');
    } else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('ну нормас нормас');
    } else if ( personalMovieDB.count >= 30) {
        console.log('Ты че ваще ебнутый?');
    } else {
        console.log('пошел нахуй');
    }
}

function showMyDB(hidden) {
    if (!hidden) {    
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр по порядку ${i}` );
    }
}

showMyDB(personalMovieDB.privat);

start();

rememberMyFilms();

detectPersonalLevel();

writeYourGenres();




