<template>
  <div class="card h-50" v-if="movie">
    <div class="row">
      <div class="col-md-6 mx-auto card-header">
        <img
          :src="
            movie.poster_path
              ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
              : 'placeholder.jpg'
          "
          class="card-img-top img-fluid"
          :alt="movie.original_title"
        />
      </div>
      <div class="card-body">
        <div class="row">
          <h4 class="card-title fs-5 fst-italic" id="examplecardLabel">
            Movie tagline: '{{ movie.tagline }}'
          </h4>
          <p>Description: {{ movie.overview }}</p>
          <p>Langauge: {{ movie.original_language }}</p>
          <p>Release Date: {{ movie.release_date }}</p>
          <router-link :to="{ name: 'home' }">
            <button type="button" class="btn btn-primary">
              Back
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="container vh-100">
      <h2>There is no data here... yet</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  mounted() {
    return this.$store.dispatch("getMovie", this.id);
  },
  computed: {
    movie() {
      return this.$store.state.movie;
    },
  },
};
</script>
