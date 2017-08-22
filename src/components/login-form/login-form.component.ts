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
                              <input 
                              id="email" 
                              type="email" 
                              class="form__input-color form__label-color"
                              v-model='loginEmailInput'
                              @keyup='checkEmail'>
                              <label for="email" class="form__label-color">Email</label>
                            </div>
                          </div>
                          <div class="row">
                            <div class="input-field col s12">
                              <input 
                              id="password" 
                              type="password" 
                              class="form__input-color form__label-color"
                              v-model='loginPasswordInput'>
                              <label for="password">Password</label>
                            </div>
                          </div>
                          <a 
                          class="waves-effect waves-light btn-large button__login button__login__color"
                          @:click='eventForm'
                          :disabled='getIsValid'>
                            Войти
                          </a>
                        </form>
                      </div>
                    </div>
                </div>
            </div>`
})

export class LoginFormComponent extends Vue {
  public loginEmailInput: string = '';
  public loginPasswordInput: string = '';
  private emailRegExp: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private isValid: boolean = false;

  public checkEmail(): boolean {
    return this.loginEmailInput.length > 5 && this.emailRegExp.test(this.loginEmailInput);
  }

  public checkPassword() {
    return this.loginPasswordInput.length > 8;
  }

  public eventForm() {
    this.$emit('login-data', this.formData);
  }

  public get getIsValid() {
    return !this.checkEmail() || !this.checkPassword();
  }

  public get formData() {
    return {
      email: this.loginEmailInput,
      password: this.loginPasswordInput
    };
  }
}
