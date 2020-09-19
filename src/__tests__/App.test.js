import React from 'react';
import { shallow } from '../enzyme';

import App from '../components/App';

describe('Application Tests', () => {

  it('Renders Nav Component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find('Nav').exists());
  });
  it('Renders <FeedbackContextProvider> Component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find('FeedbackContextProvider').exists());
  });
  it('Renders <Graph /> Component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find('Graph').exists());
  });

  it('Renders  <Comments /> Component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find('Comments').exists());
  });

});