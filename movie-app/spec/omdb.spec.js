/**
 * Created by sushi on 07/05/16.
 */

describe('omdb service', function () {
    var movieData = {
        Title: "Terminator 2: Judgment Day",
        Year: "1991",
        Rated: "R",
        Released: "03 Jul 1991",
        Runtime: "137 min",
        Genre: "Action, Sci-Fi",
        Director: "James Cameron",
        Writer: "James Cameron, William Wisher Jr.",
        Actors: "Arnold Schwarzenegger, Linda Hamilton, Edward Furlong, Robert Patrick",
        Plot: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her young son, John Connor, from a more advanced cyborg, made out of liquid metal.",
        Language: "English, Spanish",
        Country: "USA, France",
        Awards: "Won 4 Oscars. Another 20 wins & 22 nominations.",
        Poster: "http://ia.media-imdb.com/images/M/MV5BMTI4MDAwMDY3N15BMl5BanBnXkFtZTcwODIwMzMzMQ@@._V1._CR46,1,342,473_SY132_CR3,0,89,132_AL_.jpg_V1_SX300.jpg",
        Metascore: "75",
        imdbRating: "8.5",
        imdbVotes: "721,972",
        imdbID: "tt0103064",
        Type: "movie",
        Response: "True"
    };

    it('should return search movie data', function () {
        var service = {
            search: function (query) {
                return movieData;
            }
        };
        expect(service.search('Terminator 2: Judgment Day')).toEqual(movieData);
    });
});