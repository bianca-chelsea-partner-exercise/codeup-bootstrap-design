let nowPlayingMovies = [
    { "title" : "Batman Begins",
        "release_date": "Friday, August 7, 2020",
        // "trailer": embed movie trailer here,
        "synopsis": "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City. Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
        // "movie_poster": insert image here,
        "runtime": 140,
        "rating": "PG-13",
        "genre": "Action"
    },
    { "title": "Unhinged",
        "release_date": "Friday, August 21, 2020",
        // "trailer": embed movie trailer here,
        "synopsis": "After a confrontation with an unstable man at an intersection, a woman becomes the target of his rage.",
        // "movie_poster": insert image here,
        "runtime" : 90,
        "rating" : "R",
        "genre": "Thriller"
    },
    { "title": "The Goonies",
        "release_date": "Friday, November 15, 2019",
        // "trailer": embed movie trailer here,
        "synopsis": "The combined talents of two of today's most prominent filmmakers - Academy Award, Emmy and Golden Globe-winner Steven Spielberg (\"E.T.,\" \"Jaws\") and Richard Donner (\"Superman,\" \"Lethal Weapon\") -- created this box office hit that delights the young and the young at heart. When a group of ordinary kids discover a secret treasure map, their sleepy seaport lives are suddenly transformed into a fun-filled, roller-coaster ride filled with heart-pounding adventure and peril.",
        // "movie_poster": insert image here,
        "runtime" : 114,
        "rating": "PG",
        "genre": "Action"
    },
    { "title": "Words on Bathroom Walls",
        "release_date": "Friday, August 21, 2020",
        // "trailer": embed movie trailer here,
        "synopsis": "The story follows a student navigating high school life while living with paranoid schizophrenia and battling wild hallucinations. An experimental drug trial promises to help hide his illness from his peers and, most importantly, from the girl of his dreams.\n",
        // "movie_poster": insert image here,
        "runtime" : 111,
        "rating": "PG-13",
        "genre": "Drama"
    },
    { "title": "Tesla",
        "release_date": "Friday, August 21, 2020",
        // "trailer": embed movie trailer here,
        "synopsis": "The story of the Promethean struggles of Nikola Tesla, as he attempts to transcend entrenched technology—including his own previous work—by pioneering a system of wireless energy that would change the world.",
        // "movie_poster": insert image here,
        "runtime" : 102,
        "rating": "PG-13",
        "genre": "Drama"
    },
];

let comingSoonMovies = [
    {
        "title": "Tenet",
        "release_date": "Monday, August 31, 2020",
        // "trailer": embed movie trailer here,
        "synopsis": "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
        // "movie_poster": insert image here,
        "runtime": 150,
        "rating": "PG-13",
        "genre": "Action",
        "Director": "Christopher Nolan",
        "Cast": "John David Washington"
    },
    {
        "title": "The New Mutants",
        "release_date": "Friday, August 28, 2020",
        // "trailer": embed movie trailer here,
        "synopsis": "Twentieth Century Fox in association with Marvel Entertainment presents \"The New Mutants,\" an original horror thriller set in an isolated hospital where a group of young mutants is being held for psychiatric monitoring. When strange occurrences begin to take place, both their new mutant abilities and their friendships will be tested as they battle to try and make it out alive.",
        // "movie_poster": insert image here,
        "runtime": 94,
        "rating": "PG-13",
        "genre": "Action/Adventure",
        "Director": "Josh Boone",
        "Cast": "Anya Taylor-Joy, Maisie Williams, Charlie Heaton"
    },
    {
        "title": "Cut Throat City",
        "release_date": "Friday, August 28, 2020",
        // "trailer": embed movie trailer here,
        "synopsis": "Four boyhood friends return to New Orleans’ Lower Ninth Ward after Hurricane Katrina, to find their home decimated and prospects for work swept away. Turning to a local gangster for employment, the crew is hired to pull off a daring casino heist, right in the heart of the city.",
        // "movie_poster": insert image here,
        "runtime": 123,
        "rating": "R",
        "genre": "Action"
    },
    {
        "title": "Padre no hay mas que Uno 2",
        "release_date": "Friday, August 28, 2020",
        // "trailer": embed movie trailer here,
        "synopsis": "The funniest family in Spanish cinema is back accompanied by a surprise visit: the mother-in-law. Santiago Segura (the father), Toni Acosta (the mother), the children Martina D'Antiochia, Calma Segura, Luna Fulgencio, Carlos G. Morollon and Sirena Segura and the brothers-in-law played by Leo Harlem and Silvia Abril will live a new and fun adventure in which, again, many Spanish families will be reflected.",
        // "movie_poster": insert image here,
        "runtime": 96,
        "rating": "TBC",
        "genre": "Comedy"
    }
];

let movies = function () {
    let allMovies = nowPlayingMovies.concat(comingSoonMovies);
    return allMovies;
};

console.log(movies());