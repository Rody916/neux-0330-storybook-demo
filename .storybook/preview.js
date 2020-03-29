import { addParameters } from '@storybook/angular';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
 backgrounds: [
	 {name: 'white', value: '#ffffff', default: true},
	 {name: 'black', value: '#000000'},
	 {name: 'transparent', value: 'transparent'},
	 { name: 'twitter', value: '#00aced'},
	 { name: 'facebook', value: '#3b5998' },
	 { name: 'Allianz', value:'#003781'},
 ],
 viewport: {
	 viewports: INITIAL_VIEWPORTS,
 },
});
