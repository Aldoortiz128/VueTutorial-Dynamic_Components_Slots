<template>
  <section>
    <!--Wrapped by base-card component using a slot -->
    <base-card>
    <!--Named slot v-bind-->
      <template v-slot:header>
        <!--Rendering props-->
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <!--Default slot content -->
      <template v-slot:default>
      <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
//Defining props
export default {
  props: ["fullName", "infoText", "role"],
};
</script>

