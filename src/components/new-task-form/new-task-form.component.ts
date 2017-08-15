import * as Vue from 'vue';
import Component from 'vue-class-component';

import {selectUpdate, dataPickerUpdate, chipsUpdate} from '../../scripts/update.js';

import './new-task-form.component.scss';

@Component({
  template: `
    <div>
      <div class="new-form-background__black"></div>
      <div class="parent__task-form">
          <div class="block__task-form">
              <span class="close">
                &times;
              </span>
              <div class="block__task-form__task-form">
                <div class="row">
                  <form class="col s12">
                    <p style="font-size: 16pt;" class="center-align">Новая задача</p>
                    <div class="row" style="position: relative; left: 200px;">
                      <div class="input-field col s6">
                        <input id="topic" type="text" class="validate">
                        <label for="topic">Тема*</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="input-field col s8" style="position: relative; left: 130px;">
                        <textarea id="descript" class="materialize-textarea"></textarea>
                        <label for="descript">Описание*</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="input-field col s4" style="position: relative; left: 265px;">
                        <select>
                          <option value="" disabled selected>Выберите исполнителя</option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                        </select>
                        <label>Исполнитель*</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="input-field col s4" style="position: relative; left: 265px;">
                        <input type="text" class="datepicker" placeholder="Срок*">
                      </div>
                    </div>
                    <div class="row">
                      <div class="file-field input-field col s7" style="position: relative; left: 165px; top: -20px;">
                        <div class="btn">
                          <span>Добавить</span>
                          <input type="file" multiple>
                        </div>
                        <div class="file-path-wrapper">
                          <input class="file-path validate" type="text" placeholder="Вложения">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="input-field col s4" style="position: relative; left: 265px; top: -20px;">
                        <select>
                          <option value="" disabled selected></option>
                          <option value="1">Срочно</option>
                          <option value="2">Терпит</option>
                          <option value="3">На будущее</option>
                        </select>
                        <label>Приоритет*</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="input-field col s8" style="position: relative; left: 125px; top: -20px;">
                        <label>Метки*</label>
                        <div class="chips"></div>
                      </div>
                    </div>
                    <a class="waves-effect waves-light btn" style="position: relative; left: 270px; top: -20px;">Поставить задачу</a>
                  </form>
                </div>
              </div>
          </div>
      </div>
      <router-view></router-view>
    </div>
  `
})
export class NewTaskFormComponent extends Vue {
  public mounted() {
    selectUpdate();
    dataPickerUpdate();
    selectUpdate();
    chipsUpdate();

    this.backgroundActive();
  }

  private backgroundActive() {
    const backgroundNewTask = document.body.querySelector('.close') as HTMLElement;
    console.log(backgroundNewTask);

    backgroundNewTask.addEventListener('click', () => {
      const backgroundBlackNewTask = document.body.querySelector('.new-form-background__black') as HTMLElement;
      backgroundBlackNewTask.style.display = 'none';

      const newTask = document.body.querySelector('.parent__task-form') as HTMLElement;
      newTask.style.display = 'none';
    });
  }
}
