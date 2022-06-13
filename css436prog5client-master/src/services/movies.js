const axios = require("axios");

const BASE_URL = "http://program5-env-1.eba-mihuv8he.us-west-2.elasticbeanstalk.com/";

const searchMovies = async (title) => {
    // replace all spaces with query string spaces
    const queryTitle = title.split(" ").join("%20");
    const res = await axios({
        method: "get",
        url: BASE_URL + "api/movies/movieSearch?title=" + queryTitle,
    });
    return res.data;
}

const getMovies = async () => {
    const res = await axios({
        method: "get",
        url: BASE_URL + "query/movies",
    });
    return res.data;
}

const addNewMovie = async (movie) => {
    const movieObj = {
        title: movie.Name,
        year: movie.Year,
        plot: movie.Plot,
        type: "movie",
        up_votes: 1,
        director: movie.Director
    }
    const res = await axios({
        method: "post",
        url: BASE_URL + "add",
        data: movieObj
    });
    return res.data;
}

const updateMovie = async (movie) => {
    const votes = parseInt(movie.up_votes) + 1;
    const movieObj = {
        title: movie.title,
        year: movie.year,
        up_votes: votes
    }
    const res = await axios({
        method: "put",
        url: BASE_URL + "update",
        data: movieObj
    });
    return res.data;
}

module.exports = {
    searchMovies,
    getMovies,
    addNewMovie,
    updateMovie
}