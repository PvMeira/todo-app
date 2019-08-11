import React, {Component} from 'react';

class HomeComponent extends Component {

    render() {
        return (
            <div className="HomeComponent">
                <h1>HOME</h1>
                <h2>{`Welcome ${this.props.match.params.username}`}</h2>
            </div>
        );
    }
}

export default HomeComponent;

    