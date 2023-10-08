<template>
  <div class="container vh-100">
    <h1 class="my-5">MovieDB Search Engine</h1>
    <!-- Seach input goes in here --->
    <div class="row my-5">
      <div class="col-md-6 text-center mx-auto">
        <input
          class="form-control"
          type="text"
          name="search"
          id="search"
          v-model="searchInput"
          placeholder="Search for movies"
        />
        <button class="btn my-3 btn-primary" @click="$store.dispatch('search', searchInput)">
          Search
        </button>
      </div>
    </div>
    <div class="row mx-auto">
      <!-- List search results by iterating the search results array and rendering the MovieCard  --->
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from "@/components/MovieCard.vue";

export default {
  name: "HomeView",
  components: {
    MovieCard,
  },
  data() {
    return {
      searchInput: "",
    };
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
};
</script>
