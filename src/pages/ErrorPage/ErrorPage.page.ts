import * as Vue from 'vue';
import Component from 'vue-class-component';

import {HeaderComponent} from '../../components/header/header.component';

import './ErrorPage.page.scss';

@Component({
  template: `
        <div>
            <header-component></header-component>
            <div class="parent__error">
              <div class="block__error">
                <div class="block__error-error">
                  <p class="center-align">404</p>
                  <p class="center-align">Такой страницы не существует</p>
                  <router-link to="/" style="position: relative; left: 43px;">
                    <a class="waves-effect waves-light btn button__login__color">На главную</a>
                  </router-link>
                </div>
              </div>
            </div>
            <router-view></router-view>
        </div>
    `,
  components: {
    'header-component': HeaderComponent
  }
})
export class ErrorPage extends Vue {
}
