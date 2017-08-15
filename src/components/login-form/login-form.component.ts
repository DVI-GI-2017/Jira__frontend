import * as Vue from 'vue';
import Component from 'vue-class-component';

import './login-form.component.scss';


@Component({
  template: `<div class="parent__form">
                <div class="block__form">
                    <div class="block__form-form">
                      <p class="center-align">Добро пожалоать в <em>Jira</em></p>
                      <div class="row">
                        <form class="col s12">
                          <p class="error__text center-align">• Ошибка</p>
                          <div class="row">
                            <div class="input-field col s12">
                              <input id="email" type="email" class="validate form__input-color form__label-color">
                              <label for="email" class="form__label-color">Email</label>
                            </div>
                          </div>
                          <div class="row">
                            <div class="input-field col s12">
                              <input id="password" type="password" class="validate form__input-color form__label-color">
                              <label for="password">Password</label>
                            </div>
                          </div>
                          <a class="waves-effect waves-light btn-large button__login button__login__color">
                            Войти
                          </a>
                        </form>
                      </div>
                    </div>
                </div>
            </div>`
})
export class LoginFormComponent extends Vue {
}
