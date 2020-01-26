import React from 'react';
import Appcss from './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'hello world',
        };
    }
    render() {
        return (
            <div className="container">
                <Header />
                <h1 className="center"> {this.state.title.toUpperCase()} </h1>
                <Footer />
            </div>
        );
    }
}

export default App;
