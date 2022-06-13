<template>
  <div class="hello">
    <h1>Watchlist</h1>
    <p>Save and vote for your favorate movies and anime!</p>
    <div class="search-container">
      <h2>Add Movies</h2>
      <input class="search-bar" @keyup="getMovies" v-model="search" list="movies" name="browser" placeholder="Add a Movie!" />
      <p v-if="notified" class="notification">Movie Added!!</p>
      <div class="selection-container">
        <movie-selection-card
          v-for="(movie, index) in movies"
          @select="addMovie(movie)"
          :key="index"
          :name="movie.Name">
        </movie-selection-card>
      </div>
    </div>
    <h2 class="movie-title">Top Movies</h2>
    <div class="card-container">
      <movie-card
        v-for="(movie, index) in watchlist"
        @vote="voteForMovie(movie)"
        :key="index"
        :name="movie.title"
        :year="movie.year"
        :director="movie.director"
        :synopsis="movie.plot"
        :votes="movie.up_votes">
      </movie-card>
    </div>
    <p v-if="watchlist.length == 0">No movies yet!</p>
  </div>
</template>

<script>
import { searchMovies, getMovies, addNewMovie, updateMovie } from "../services/movies";
import MovieCard from "../components/MovieCard.vue";
import MovieSelectionCard from "../components/MovieSelectionCard.vue"

export default {
  name: 'HelloWorld',
  components: {
    MovieCard,
    MovieSelectionCard
  },
  mounted() {
    getMovies().then(res => {
      this.watchlist = res;
    });
  },
  data() {
    return {
      movies: [],
      search: "",
      watchlist: [],
      notified: false
    }
  },
  methods: {
    getMovies() {
      this.notified = false;
      searchMovies(this.search)
        .then(res => {
          if (!res === undefined || !res.length == 0) {
            this.movies = res;
          }
        });
    },
    voteForMovie(movie) {
      updateMovie(movie).then(() => {
        const delay = ms => new Promise(res => setTimeout(res, ms));
        const waitOneSecond = async () => {
          await delay(500);
          getMovies().then(res => {
            this.watchlist = res;
          });
        }
        waitOneSecond();
      });
    },
    addMovie(movie) {
      addNewMovie(movie).then(res => {
        console.log(res);
        this.movies = [];
        this.search = "";
        this.notified = true;
      });
      const delay = ms => new Promise(res => setTimeout(res, ms));
      const waitTwoSeconds = async () => {
        await delay(1000);
        getMovies().then(res => {
          this.watchlist = res;
        });
      }
      waitTwoSeconds();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notification {
  color: #4CAF50;
}
.search-bar {
  width: 300px;
  height: 20px;
}
.movies-title {
  margin-top: 200px;
}
.search-container {
  padding-bottom: 50px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
}
.card-container {
  width: 1000px; /* Can be in percentage also. */
  height: auto;
  margin: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
.selection-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  row-gap: 15px;
  column-gap: 15px;
}
</style>
