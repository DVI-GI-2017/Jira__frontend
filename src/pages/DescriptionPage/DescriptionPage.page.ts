import * as Vue from 'vue';
import Component from 'vue-class-component';

import {HeaderComponent} from '../../components/header/header.component';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';
import {ContentComponent} from '../../components/content/content.component';
import {NewTaskFormComponent} from "../../components/new-task-form/new-task-form.component";

import './DescriptionPage.page.scss';

@Component({
  template: `
    <div>
      <new-task-form-component></new-task-form-component>
      <header-component></header-component>
      <sidebar-component></sidebar-component>
      <content-component>
        <div class="w3-container">
          <h1 class="center-align">Описание</h1>
          <p>Top project</p>
        </div>
        
        <div class="w3-container">
          <h1 class="center-align">Участники</h1>
          <p style="color: #0D47A1; width: 270px;" class="text__decorator">
            <router-link to="/user?id=1">
              Вася Васильевич Пупкин
            </router-link>
          </p> <!-- from bd-->
          <p style="color: #0D47A1; width: 270px;" class="text__decorator">
            <router-link to="/user?id=2">
              Вася Васильевич Пупкин
            </router-link>
          </p>
        </div>
        
        <div class="w3-container">
          <h1 class="center-align">Задачи</h1>
          <p class="center-align text__decorator" style="color: #0D47A1;">
            <router-link to="/tasks?filter=current">Текущих задач 6</router-link>
          </p> <!-- from bd-->
          <p class="center-align text__decorator" style="color: #0D47A1;">
            <router-link to="/tasks?filter=work">В работе 2</router-link>
          </p> <!-- from bd-->
          <p class="center-align text__decorator" style="color: #0D47A1;">
            <router-link to="/tasks?filter=closed">Завершено 145</router-link>
          </p> <!-- from bd-->
        </div>
      </content-component>
      <router-view></router-view>
    </div>
  `,
  components: {
    'header-component': HeaderComponent,
    'sidebar-component': SidebarComponent,
    'content-component': ContentComponent,
    'new-task-form-component': NewTaskFormComponent
  }
})
export class DescriptionPage extends Vue {
}
