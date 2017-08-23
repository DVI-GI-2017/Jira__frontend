import * as Vue from 'vue';
import Component from 'vue-class-component';

import './login-form.component.scss';
import {isUndefined} from 'util';


@Component({
  template: `<div class="parent__form">
                <div class="block__form">
                    <div class="block__form-form">
                      <p class="center-align">Добро пожалоать в <em>Jira</em></p>
                      <div class="row">
                        <form class="col s12">
                          <p class="error__text center-align"></p>
                          <div class="row">
                            <div class="input-field col s12">
                              <input 
                              id="email" 
                              type="email" 
                              class="validate form__input-color form__label-color"
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
                              class="validate form__input-color form__label-color"
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
                          <a class="waves-effect waves-light btn signup__button">Регистрация</a>
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
  private errorText: HTMLElement;

  public mounted() {
    this.errorText = document.querySelector('.error__text') as HTMLElement;
  }

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
    console.log("em:", this.checkEmail());
    console.log("p:", this.checkPassword());
    console.log("a:", this.checkEmail() && this.checkPassword());

    return !(this.checkEmail() && this.checkPassword());
  }

  public get formData() {
    return {
      email: this.loginEmailInput,
      password: this.loginPasswordInput
    };
  }
}
