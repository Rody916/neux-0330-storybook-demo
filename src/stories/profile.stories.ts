import { ProfileDemoComponentComponent } from '../app/profile-demo-component/profile-demo-component.component';

import { centered } from '@storybook/addon-centered/angular';
import {select, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'profile',
  decorators: [
    centered,
    withKnobs,
  ],
  parameters: {
    componentSubtitle: '',
  },
};


export const Default = () => ({
  component: ProfileDemoComponentComponent,
  template: `
  <app-profile-demo-component>fds</app-profile-demo-component>
  `,
});
Default.story = {
  name: 'default',
};
