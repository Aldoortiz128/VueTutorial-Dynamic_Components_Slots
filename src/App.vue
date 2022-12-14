<template>
  <div>
    <!--Components -->
    <!--PascalCase works because we assigned the property name in components. It's also self-closing -->
    <TheHeader />
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!--Cycling components using v-if
    <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <keep-alive>
    <component :is="selectedComponent"></component>
    </keep-alive>
    <!--Badge List Component 
    <BadgeList /> -->
    <!--Passing data into user-info component with props
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info> -->
    <!--Slot Props Example
    <course-goals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps["anotherProp"] }}</p>
      </template>
    </course-goals> -->
  </div>
</template>

<script>
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";
import TheHeader from "./components/Layout/TheHeader.vue";
//import BadgeList from "./components/BadgeList.vue";
//import UserInfo from "./components/UserInfo.vue";
//import CourseGoals from "./components/CourseGoals.vue";
export default {
  //Registering components locally with components option
  components: {
    //CourseGoals,
    TheHeader,
    ActiveGoals,
    ManageGoals
    //BadgeList,
    //UserInfo, //The value of this key has the same name
  },
  //Managing data of the entire app
  data() {
    return {
      //Component State
      selectedComponent: 'active-goals',
      activeUser: {
        name: "Aldo Ortiz",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp){
      this.selectedComponent = cmp
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>