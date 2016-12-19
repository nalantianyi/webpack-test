import '../node_modules/bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                </section>
            </div>
        );
    }
}
const app = document.createElement('div');
document.body.appendChild(app);
ReactDom.render(<App></App>, app);