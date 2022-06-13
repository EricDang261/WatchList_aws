<template>
    <div class="card">
        <div class="container">
            <div class="movie-name">
              <h4>{{ name }}</h4>
              <p>{{ year }}</p>
            </div>
            <div class="movie-info">
              <p>{{ director }}</p>
            </div>
            <div class="synopsis">
              <p>{{ synopsis }}</p>
            </div>
            <div class="votes">
              <p><b>Votes: {{ votes }}</b></p>
              <button @click="$emit('vote')">Vote!</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    name: String,
    year: String,
    director: String,
    synopsis: String,
    votes: String
  }
}
</script>

<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 6px; /* 5px rounded corners */
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
  display: flex;
  flex-direction: row;
  justify-content: left;
}
.movie-info {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  padding: 20px;
}
.synopsis {
  width: 40%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
}
p {
  font-size: 14px;
}
.votes {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 20%;
  align-items: center;
  justify-content: center;
}
.movie-name {
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 12px 26px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 6px;
}
button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>
