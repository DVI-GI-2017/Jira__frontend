import * as Vue from 'vue';
import Component from 'vue-class-component';

import './header.component.scss';

@Component({
  template: `<nav class="header__background header__position">
              <div class="nav-wrapper">
                <router-link to="/">
                  <a class="brand-logo not__transform__brand-logo">
                    Jira
                  </a>
                </router-link>
                <ul id="nav-mobile" class="right" v-if='isRenderData'>
                  <li><a>Новая задача</a></li>
                </ul>
              </div>
              <router-view class="view"></router-view>
            </nav>`,
  props: {
    isRender: Boolean
  }
})

export class HeaderComponent extends Vue {
  public isRender: boolean = false;

  public mounted() {
    if (this.isRender) {
      const button = document.body.querySelector('#nav-mobile') as HTMLElement;

      button.children[0].addEventListener('click', () => {
        const backgroundNewTask = document.body.querySelector('.new-form-background__black') as HTMLElement;
        backgroundNewTask.style.display = 'block';

        const newTask = document.body.querySelector('.parent__task-form') as HTMLElement;
        newTask.style.display = 'block';
      });
    }
  }

  public get isRenderData(): boolean {
    return this.isRender;
  }
}
