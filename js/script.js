
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

'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const removeAdv = document.querySelectorAll(".promo__adv img"),
          poster = document.querySelector(".promo__bg"),
          changeGenre = poster.querySelector(".promo__genre"),
          changeListMovie = document.querySelector(".promo__interactive-list"),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');


    addForm.addEventListener('submit', (event) =>{

        event.preventDefault();
        
        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if(newFilm) {

            if(newFilm.length > 21){
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if(favorite){
                console.log('Добавляем любимый фильм');
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, changeListMovie);
        }
        event.target.reset();
        
    });
    
    const sortArr = (arr) => {
        arr.sort();
    };

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        changeGenre.textContent = 'Драма';
    };

    function createMovieList(film, parent) {
        sortArr(film);
        parent.innerHTML = '';
        film.forEach((film, i) =>{
            parent.innerHTML += `
                <li class="promo__interactive-item"> ${i+1}) ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
        
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                film.splice(i, 1);
                createMovieList(film, parent);
            })
        });

    };
    createMovieList(movieDB.movies, changeListMovie);
    deleteAdv(removeAdv);
    makeChanges();  
})
