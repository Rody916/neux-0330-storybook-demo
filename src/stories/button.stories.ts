import { ButtonDemoComponentComponent } from '../app/button-demo-component/button-demo-component.component';
import { centered } from '@storybook/addon-centered/angular';
import {select, withKnobs } from '@storybook/addon-knobs';
import {moduleMetadata} from '@storybook/angular';

const label = 'type';
const options = {
  Default: 'default',
  Error: 'error',
  Warning: 'warning',
  Positive: 'positive',
  Negative: 'negative',
};
const defaultValue = 'default';

const value = select(label, options, defaultValue);

export default {
  title: 'Button',
  decorators: [
    centered,
    withKnobs,
  ],
  parameters: {
    componentSubtitle: '副標題副標題副標題',
  },
};


export const Default = () => ({
  component: ButtonDemoComponentComponent,
  template: `
  <app-button-demo-component [type]="'default'">Default
  </app-button-demo-component>
  `
});
Default.story = {
  name: 'default',
};

export const Error = () => ({
  component: ButtonDemoComponentComponent,
  template: `
  <app-button-demo-component [type]="'error'">Error
  </app-button-demo-component>
  `
});
Error.story = {
  name: 'error',
};

export const Warning = () => ({
  component: ButtonDemoComponentComponent,
  template: `
  <app-button-demo-component [type]="'warning'">Warning
  </app-button-demo-component>
  `
});
Warning.story = {
  name: 'warning',
};

export const Positive = () => ({
  component: ButtonDemoComponentComponent,
  template: `
  <app-button-demo-component [type]="'positive'">Positive
  </app-button-demo-component>
  `
});
Positive.story = {
  name: 'positive',
};

export const Negative = () => ({
  component: ButtonDemoComponentComponent,
  template: `
  <app-button-demo-component [type]="'negative'">Negative
  </app-button-demo-component>
  `
});
Negative.story = {
  name: 'negative',
};


export const DefaultWithKnobs = () => ({
  component: ButtonDemoComponentComponent,
  props: {
    type : value
  },
  template: `
  <app-button-demo-component [type]="'default'">Knobs
  </app-button-demo-component>
  `
});
DefaultWithKnobs.story = {
  name: 'defaultWithKnobs',
};
