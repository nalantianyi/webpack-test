import React from 'react';
import ReactDom from 'react-dom';
export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch() {
        let name = ReactDom.findDOMNode(this.refs.name).value;
        if (name == '') {
            return;
        }
        this.props.sendAction(name);
    }
    render(){
        return (
            <div>
                <input type="text" ref="name" placeholder="enter the name you wanna search"/>
                <button onClick={this.handleSearch}>Search</button>
            </div>
        );
    }
}
