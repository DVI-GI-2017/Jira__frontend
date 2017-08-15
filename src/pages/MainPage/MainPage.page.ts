import * as Vue from 'vue';
import Component from 'vue-class-component';

import {HeaderComponent} from '../../components/header/header.component';
import {LoginFormComponent} from '../../components/login-form/login-form.component';

@Component({
  template: `
    <div>
      <header-component></header-component>
      <login-form-component></login-form-component>
      <router-view></router-view>
    </div>
  `,
  components: {
    'header-component': HeaderComponent,
    'login-form-component': LoginFormComponent
  }
})
export class MainPage extends Vue {
}
