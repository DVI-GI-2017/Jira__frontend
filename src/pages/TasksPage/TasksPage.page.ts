import * as Vue from 'vue';
import Component from 'vue-class-component';

import {HeaderComponent} from '../../components/header/header.component';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';
import {ContentComponent} from '../../components/content/content.component';
import {NewTaskFormComponent} from "../../components/new-task-form/new-task-form.component";

import './TaskPage.page.scss';

@Component({
  template: `
    <div>
      <new-task-form-component></new-task-form-component>
      <header-component></header-component>
      <sidebar-component></sidebar-component>
      <content-component>
        <div class="w3-row">
          <div class="w3-col w3-container m6 l4">
            <div class="collection" style="min-height: 210px;">
              <ul id="dropdown" class="dropdown-content" style="">
                <li><a>Текущие<span class="badge">6</span></a></li>
                <li><a>В работе<span class="badge">2</span></a></li>
                <li><a>Завершены<span class="badge">145</span></a></li>
                <li><a>Все<span class="badge">153</span></a></li>
              </ul>
              <a class="btn dropdown-button" data-activates="dropdown">
                Текущие<i class="material-icons right">arrow_drop_down</i>
              </a>
              <a class="collection-item center-align" style="color: #205081;">Оченьсупердлиннаядол...</a>
              <a class="collection-item center-align" style="color: #205081;">Задача 2</a>
              <a class="collection-item center-align" style="color: #205081;">Задача 3</a>
            </div>
          </div>
          <div class="w3-col w3-container m6 l8">  
            <div class="w3-container">
              <h1 class="center-align">Task 1</h1>
              <p class="center-align">
                <i class="material-icons arrow__style">expand_less</i>
                <i class="material-icons arrow__style">expand_more</i>
              </p>
              <hr>
              <div style="width: 100%;">
                <a class="btn-floating btn-large waves-effect waves-light blue-grey center-align"><i class="material-icons">play_arrow</i></a>
                <a class="btn-floating btn-large waves-effect waves-light blue-grey"><i class="material-icons">create</i></a>
                <a class="btn-floating btn-large waves-effect waves-light blue-grey"><i class="material-icons">save</i></a>
              </div>
              <div class="row">
                <div class="col s6 first__cols">
                  <h3>Детали</h3>
                  <p>
                    <span class="grey-text">Тип:</span> задача
                  </p>
                  <p>
                    <span class="grey-text">Статус:</span> сделать
                  </p>
                  <p>
                    <span class="grey-text">Приоритет:</span> терпимо
                  </p>
                  <p>
                    <span class="grey-text">Метки:</span> метки
                  </p>
                  
                </div>
                <div class="col s6 first__cols">
                  <h3>Люди</h3>
                  <p>
                    <span class="grey-text">Исполнитель:</span> <span class="text__link">Вася Васильевич Пупкин</span>
                  </p>
                  <p>
                    <span class="grey-text">Инициатор:</span> <span class="text__link">Вася Васильевич Пупкин</span>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col s12 first__cols">
                    <h3>Сроки</h3>
                    <p>
                      <span class="grey-text">Дедлайн:</span> <span class="text__link">06.08.2017</span>
                    </p>
                    <p>
                      <span class="grey-text">Создано:</span> <span class="text__link">06.08.2017</span>
                    </p>
                    <p>
                      <span class="grey-text">Обновлено:</span> <span class="text__link">06.08.2017</span>
                    </p>
                </div>
              </div>
              <div class="row">
                <div class="col s12 first__cols">
                  <h3>Описание</h3>
                  <p>
                    Описание суперпупердлинноый задачи блаблаблаблабла блаблаблаблабла блаблаб
                    блаблаблаблабла блаблаблаблаблаблаблаблаблабла блаблаблаблабла блаблаблаблабла
                    блаблаблаблаблаблаблаблаблабла блаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаб
                    блаблаблаблабла блаблаблаблабла блаблаблаблабла блаблаблаблаб 
                    блаблаблаблабла блаблаблаблабла блаблаблаблаблаблаблаблаблабла блаблабл
                    блаблаблаблабла блаблаблаблабла блаблаблаблабла блаблаблаблабла блаблаблаблабла 
                    блаблаблаблабла блаблаблаблабла блаблаблаблабла блаблаблаблабла блаблаблаблаблаблаб
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col s12 first__cols">
                  <h3>Вложения</h3>
                  <p>Супердлинное названиефайла очочочоочочочоочочоч...</p>
                  <p>Файл 2</p>
                  <p>Файл 3</p>
                  <p>Файл 4</p>
                  <div class="file-field input-field">
                    <div class="btn">
                      <span>File</span>
                      <input type="file" multiple>
                    </div>
                    <div class="file-path-wrapper">
                      <input class="file-path validate" type="text" placeholder="Upload one or more files">
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col s12 first__cols">
                  <h3>Подзадачи</h3>
                  <a class="btn-floating btn-large waves-effect waves-light blue-grey"><i class="material-icons">add</i></a>
                  <p>
                    <span style="position: relative; top: -8px;">Купить блаблаadsfdasadsf</span>
                    <input type="checkbox" id="test5"/>
                    <label for="test5"></label>
                  </p>
                  <p>
                    <span style="position: relative; top: -8px;">Купить блаблаadsfdasadsf</span>
                    <input type="checkbox" id="test6"/>
                    <label for="test6"></label>
                  </p>
                  <p>
                    <span style="position: relative; top: -8px;">Купить блаблаadsfdasadsf</span>
                    <input type="checkbox" id="test7"/>
                    <label for="test7"></label>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col s12 first__cols">
                  <h3>Активность</h3>
                  <p>Совсем скоро</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </content-component>
      <router-view></router-view>
    </div>`,
  components: {
    'header-component': HeaderComponent,
    'sidebar-component': SidebarComponent,
    'content-component': ContentComponent,
    'new-task-form-component': NewTaskFormComponent
  }
})
export class TasksPage extends Vue {
  public mounted() {
    const dropdownMenuButton = document.body.querySelector('.dropdown-button') as HTMLElement;

    dropdownMenuButton.addEventListener('click', () => {
      const dropdownMenu = document.body.querySelector('#dropdown') as HTMLElement;

      setTimeout(() => dropdownMenu.style.width = '200px', 90);
    });
  }
}
