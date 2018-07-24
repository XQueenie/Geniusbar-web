<template>
  <!-- <div> -->
    <nuxt/>
  <!-- </div> -->
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: function(title) {
        return title ? `${title} - GeniusBar` : "GeniusBar";
      }
    };
  }
};
</script>
