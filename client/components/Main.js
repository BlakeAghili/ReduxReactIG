import React from 'react';
import { Render } from 'react-dom';
import { Link } from 'react-router';

const Main = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    <Link to='/'>BlakeGram</Link>
                </h1>
            </div>
        )
    }
});

export default Main;
