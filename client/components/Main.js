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
{/*                when using props.CHILDREN, can't pass them down normally like a normal .props.
                we have to use clone for that purpose which is like this below:*/}
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
});

export default Main;
