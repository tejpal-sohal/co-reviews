import React from 'react';
import { shallow } from '../enzyme';

import Nav from '../components/Nav.js';

describe('Navigation tests', () => {

  it('renders Navigation Bar', () => {
    const navWrapper = shallow(<Nav />);
    expect(navWrapper.find('nav').length).toBe(1);
  });

  it('renders svg in Navbar ', () => {
    const navWrapper = shallow(<Nav />);
    expect(navWrapper.find('img').length).toBe(1);
  });

  it('contains anchor-Tag ', () => {
    const navWrapper = shallow(<Nav />);
    expect(navWrapper.find('a').length).toBe(1);
  });

  it('has href for anchor-tag ', () => {
    const navWrapper = shallow(<Nav />);
    expect(navWrapper.find('a').prop('href')).toEqual("https://www.checkout.com/");
  });

  it('has aria-label', () => {
    const navWrapper = shallow(<Nav />);
    expect(navWrapper.find('a').prop('aria-label')).toEqual("checkout.com");
  });



});