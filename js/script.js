
// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: () => {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: () => {
//         for (let i = 0; i < 2; i++){
//             const a = prompt('Один из фильмов вы смотреи в последний раз?', ''),
//                   b = prompt('На сколько вы его оцениваете?', '');
//             if (a != null && b != null && a != '' && b != null && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('xd');
//             } else {
//                 console.log('ne xd(');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: () => {
//         if (personalMovieDB.count < 10){
//             console.log('Маловато');
//         } else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//             console.log('Приемлимо');
//         } else if ( personalMovieDB.count >= 30) {
//             console.log('Да вы киноман');
//         } else {
//             console.log('Ошибка, такого значения нет');
//         }
//     },
//     showMyDB: (hidden) => {
//         if (!hidden) {    
//             console.log(personalMovieDB);
//         }
//     },
//     writeYourGenres: () => {
//         for (let i = 1; i < 2; i++){
//             // let genre = prompt(`Ваш любимый жанр по порядку ${i}` );

//         //     if (genre === '' || genre === null) {
//         //         console.log('Не те данные');
//         //         i--;
//         //     }else{
//         //         personalMovieDB.genres[i - 1] = genre;
//         //     }
//         // }
//         // personalMovieDB.genres.forEach((item, i) => {
//         //     console.log(`Любимый жанр # ${i + 1} - это ${item}`);
//         // });
//             let genres = prompt(`Введите ваши любимые жанры через запятую`);
//             if (genres === '' || genres === null) {
//                 console.log('Не те данные');
//                 i--;
//             }else{
//                 personalMovieDB.genres = genres.split(', ');
//                 personalMovieDB.genres.sort();
//             }
//             personalMovieDB.genres.forEach((item, i) => {
//                 console.log(`Любимый жанр # ${i + 1} - это ${item}`);
//             });
//         }
//     },
//     toggleVisibleMyDB: () =>{
//         if(personalMovieDB.privat){
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     }
// };




/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

