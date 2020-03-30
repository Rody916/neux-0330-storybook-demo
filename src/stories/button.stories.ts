import { ButtonDemoComponentComponent } from '../app/button-demo-component/button-demo-component.component';
import { centered } from '@storybook/addon-centered/angular';
import {select, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

const label = 'type';
const options = {
  Default: 'default',
  Error: 'error',
  Warning: 'warning',
  Positive: 'positive',
  Negative: 'negative',
};
const defaultValue = 'default';

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
  <app-button-demo-component [type]="'default'" [text]="'default'">Default
  </app-button-demo-component>
  `
});
Default.story = {
  name: 'default',
};

export const Error = () => ({
  component: ButtonDemoComponentComponent,
  template: `
  <app-button-demo-component [type]="'error'" [text]="'error'">Error
  </app-button-demo-component>
  `
});
Error.story = {
  name: 'error',
};

export const Warning = () => ({
  component: ButtonDemoComponentComponent,
  template: `
  <app-button-demo-component [type]="'warning'" [text]="'warning'">Warning
  </app-button-demo-component>
  `
});
Warning.story = {
  name: 'warning',
};

export const Positive = () => ({
  component: ButtonDemoComponentComponent,
  template: `
  <app-button-demo-component [type]="'positive'" [text]="'positive'">Positive
  </app-button-demo-component>
  `
});
Positive.story = {
  name: 'positive',
};

export const Negative = () => ({
  component: ButtonDemoComponentComponent,
  template: `
  <app-button-demo-component [type]="'negative'" [text]="'negative'">Negative
  </app-button-demo-component>
  `
});
Negative.story = {
  name: 'negative',
};


export const DefaultWithKnobs = () => ({
  component: ButtonDemoComponentComponent,
  props: {
    knobsOptionType : select(label, options, defaultValue),
    knobsText: text('button text', 'custom text'),
    callActions: action('This was clicked OMG'),
  },
  template: `
  <app-button-demo-component [type]="knobsOptionType" [text]="knobsText">Knobs
  </app-button-demo-component>
  `
});
DefaultWithKnobs.story = {
  name: 'defaultWithKnobs',
};
