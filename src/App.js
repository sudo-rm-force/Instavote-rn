
import React, { Component } from 'react';
import AppContainer from './router';
import "./global";
const Web3 = require('web3');
class App extends Component {
    componentWillMount() {
        async function hello() {
            const web3 = new Web3(
                new Web3.providers.HttpProvider('https://mainnet.infura.io/')
            );

            web3.eth.getBlock('latest').then(console.log)
            console.log("hello")
        }
        hello()
    }

    render() {
        return <AppContainer />
    }

}

export default App;
