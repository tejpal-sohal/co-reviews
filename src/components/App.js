import React from 'react';
import '../styles/index.css';
import FeedbackContextProvider from '../contexts/FeedbackContext.js'
import Nav from './Nav.js';
import FeedbackForm from './Form/Form'
import Graph from '../components/Graph/Graph'
import Comments from './Comments.js'
import Footer from './Footer.js'

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <div className="row mt-5">
          <FeedbackContextProvider>
            <FeedbackForm />
            <Graph />
            <Comments />
          </FeedbackContextProvider>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default App;
