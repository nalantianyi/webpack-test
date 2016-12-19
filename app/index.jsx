import '../node_modules/bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDom from 'react-dom';
import Search from './components/search';
import Plist from './components/plist';

class App extends React.Component {
    constructor() {
        super();
        this.state = {"keyword": ""};
        this.refreshKeyword = this.refreshKeyword.bind(this);
    }

    refreshKeyword(name) {
        this.setState({"keyword": name});
    }

    render() {
        return (
            <div className="container">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <Search sendAction={this.refreshKeyword}/>
                </section>

                <Plist keyword={this.state.keyword}/>
            </div>);
    }
}
const app = document.createElement('div');
document.body.appendChild(app);
ReactDom.render(<App></App>, app);