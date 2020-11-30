<template>
  <ScrollTopComponent>
      <a class="btn btn-light">
        <i class="fas fa-chevron-circle-down"></i>
      </a>
  </ScrollTopComponent>
</template>

<script>
import ScrollTop from './ScrollTop'
export default {
  components: {
    ScrollTop
  }
}
</script>

<style>
.btn {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.55);
    padding-top: 27px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
}
</style>