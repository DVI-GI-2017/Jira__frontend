import * as Vue from 'vue';
import Component from 'vue-class-component';

import './sidebar.component.scss';

@Component({
  template: `
       <div class="w3-sidebar w3-light-grey w3-bar-block left__navbar">
          <router-link to="/main">
            <a class="w3-bar-item w3-button">Главная</a>
          </router-link>
          <router-link to="/tasks">
            <a class="w3-bar-item w3-button">Задачи</a>
          </router-link>
          <router-link to="/calendar">
            <a class="w3-bar-item w3-button">Календарь</a>
          </router-link>
          <router-view></router-view>
       </div>
  `
})
export class SidebarComponent extends Vue {
}
