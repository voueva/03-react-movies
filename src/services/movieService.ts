import type { Movie } from "../types/movie";

export function fetchMovies(query: string): Promise<Array<Movie>> {
    console.log(query); // TODO: HTTP
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve([
                    {
                        id: 5,
                        poster_path: 'dsas',
                        backdrop_path: 'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
                        title: 'Hello World',
                        overview: 'bh jhb dsbjjh sdbsbj sb sbs dbs dbh sdbjhb sdjbds b bsdb sdb sbj sdbh bsdhb bds bjhs',
                        vote_average: 7,
                        release_date: '17/07/1986'
                    } as Movie,
                    {
                        id: 10,
                        poster_path: 'dsas',
                        backdrop_path: 'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
                        title: 'Hello World2',
                        overview: 'dcsd',
                        vote_average: 7
                    } as Movie,
                    {
                        id: 11,
                        poster_path: 'dsas',
                        backdrop_path: 'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
                        title: 'Hello World3',
                        overview: 'dcsd',
                        vote_average: 7
                    } as Movie,
                ]);
            } else {
                reject();
            }
        }, 2000);
    });
}
