'use strict';

let movieDb = [{
        id: 0,
        title: 'Moon',
        genre: 'sci-fi'
    },
    {
        id: 1,
        title: '2001: A Space Odyssey',
        genre: 'sci-fi'
    },
    {
        id: 2,
        title: 'Contact',
        genre: 'sci-fi'
    },
    {
        id: 3,
        title: 'Darkest Hour',
        genre: 'drama'
    },
    {
        id: 4,
        title: 'There Will Be Blood',
        genre: 'drama'
    },
    {
        id: 5,
        title: 'American Beauty',
        genre: 'drama'
    },
    {
        id: 6,
        title: 'Airplane!',
        genre: 'comedy'
    },
    {
        id: 7,
        title: 'Deadpool',
        genre: 'comedy'
    },
    {
        id: 8,
        title: `Wayne's World`,
        genre: 'comedy'
    }
];

let genres = document.querySelector('#genres');
let movies = document.querySelector('#movies');

console.log(genres);
console.log(movies);

let newmovie = document.createElement('option');
newmovie.innerText = 'test';
movies.appendChild(newmovie);