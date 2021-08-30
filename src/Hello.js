import React from 'react';
import './Hello.css';

class Hello extends React.Component {
    render(){
        return(
            <div className="f1 tc courier  ">
                <h1 className ="green">hello world </h1>
                <p>welcome to the wonderland</p>
                <p>{this.props.greeting}</p>
                <h2 className="ttu" pr={123}>this is not taugh</h2>
                <p>i can make it happened</p>
                <p>{this.props.pr}</p>
            </div>
        );
    }
}

export default Hello;