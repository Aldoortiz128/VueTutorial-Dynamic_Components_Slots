import { createApp } from "vue";
//importing Components
import App from "./App.vue";
//import TheHeader from './components/TheHeader.vue';
import BaseBadge from "./components/UI/BaseBadge.vue";
//import BadgeList from './components/BadgeList.vue';
//import UserInfo from './components/UserInfo.vue';
//import BaseCard component
import BaseCard from "./components/UI/BaseCard.vue";

const app = createApp(App);

//Registering Components
//Registered Locally in App.vue
//app.component('the-header', TheHeader);
//app.component('badge-list', BadgeList);
//app.component('user-info', UserInfo);
//Registered Globally
app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);

app.mount("#app");
