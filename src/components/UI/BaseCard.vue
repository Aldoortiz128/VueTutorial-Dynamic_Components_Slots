<template>
  <div>
    <header v-if="this.$slots.header">
      <!--Content rendered by default whenever slot "header" is called-->
      <slot name="header">
        <!--<h2>The Default</h2>-->
      </slot>
    </header>
    <slot></slot>
  </div>
</template>
<script>
export default {
    mounted(){
        //console.log(this.$slots)
        //console.log(this.$slots.default)
        //Header will print undefined because there is no content within the header
        //So it won't render, make sure it only renders if this.$slots.header is truthy
		console.log(this.$slots.header)
    }
};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>