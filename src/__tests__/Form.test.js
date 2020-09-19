import React from 'react';
import { mount } from '../enzyme';
import FeedbackForm from '../components/Form/Form'
import FeedbackContextProvider from '../contexts/FeedbackContext.js'
import Comments from '../components/Comments'
import MutationObserver from 'mutation-observer'
import { act } from 'react-dom/test-utils';
global.MutationObserver = MutationObserver 

function FeedbackFormTest() {
    return (
        <FeedbackContextProvider>
            <FeedbackForm />
            <Comments />
        </FeedbackContextProvider>
    );
}

describe('Feedback Form Render', () => {

    it('Renders FeedbackForm Component', () => {
        const FeedbackWrapper = mount(<FeedbackFormTest/>);
        expect(FeedbackWrapper.find('form').exists());
    });

    it('has name input field', () => {
        const FeedbackWrapper = mount(<FeedbackFormTest/>);
        expect(FeedbackWrapper.find('input[name="name"]').exists());
    });

    it('has email input field', () => {
        const FeedbackWrapper = mount(<FeedbackFormTest/>);
        expect(FeedbackWrapper.find('input[name="email"]').exists());
    });

    it('has rating input field', () => {
        const FeedbackWrapper = mount(<FeedbackFormTest/>);
        expect(FeedbackWrapper.find('input[name="rating"]').exists());
    });

    it('has comment input field', () => {
        const FeedbackWrapper = mount(<FeedbackFormTest/>);
        expect(FeedbackWrapper.find('input[name="comment"]').exists());
    });

    it('has submit button', () => {
        const FeedbackWrapper = mount(<FeedbackFormTest/>);
        expect(FeedbackWrapper.find('button').prop('type')).toEqual('submit');
    });


    it('has submit button',  async  () => {
        await act(async () => {
            const FeedbackWrapper = mount(<FeedbackFormTest />);
            expect(FeedbackWrapper.find('button').simulate('click'))
        });
    });


});