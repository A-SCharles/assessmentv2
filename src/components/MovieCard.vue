<template>
  <div class="col-md-3 m-4 card border border-1">
    <div class="card-header">
      <img
        :src="
          movie.poster_path
            ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
            : 'placeholder.jpg'
        "
        class="card-img-top"
        :alt="movie.original_title"
      />
      <h2>{{ movie.original_title }}</h2>
    </div>
    <div class="card-body">
      <p>Description: {{ movie.overview }}</p>
    </div>
    <div class="card-footer">
      <router-link :to="{ name: 'ShowMovie', params: { id: movie.id } }">
        <button type="button" class="btn btn-primary">
          View Movie Details
        </button>
        </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["movie"],
};
</script>
