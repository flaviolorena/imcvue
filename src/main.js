import { createApp } from "vue";
import App from "./App.vue";

import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

//importação de tema css
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";

//instanciamento da aplicação
const app = createApp(App);

app.use(PrimeVue);
app.component("Button", Button);
app.component("InputText", InputText);

//montagem da aplicação (após as utilizações)
app.mount("#app");
