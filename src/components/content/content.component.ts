import * as Vue from 'vue';
import Component from 'vue-class-component';

import {HeaderComponent} from '../../components/header/header.component';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';

import './content.component.scss';

@Component({
  template: `
    <div class="content__wrapper">
      <slot></slot>
    </div>
  `,
  components: {
    'header-component': HeaderComponent,
    'sidebar-component': SidebarComponent
  }
})
export class ContentComponent extends Vue {
}
