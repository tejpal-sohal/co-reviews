import React from 'react';
import { mount } from '../enzyme';
import FeedbackContextProvider from '../contexts/FeedbackContext.js'
import Comments from '../components/Comments'

function App() {
    return (
        <FeedbackContextProvider>
            <Comments />
        </FeedbackContextProvider>
    );
}

describe('Comments Render', () => {
    it('Renders comments component', () => {
        const commentWrapper = mount(<App />);
        expect(commentWrapper.find('Comments').length).toBe(1);
    });

    it('Comments contains h5', () => {
        const commentWrapper = mount(<App />);
        expect(commentWrapper.find('.list-group div p').first().exists());
    });

    it('Comments contains rating component', () => {
        const commentWrapper = mount(<App />);
        expect(commentWrapper.find('.list-group div Ratings').first().exists());
    });


});