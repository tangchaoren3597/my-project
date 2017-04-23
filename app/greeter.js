/**
 * Created by liuyuan on 2017/4/22.
 */

import React,{component} from 'react'

import config from "./config.json";

import styles from './greeter.css';

class greeter extends Component {
    render(){
        return (
            <div>
            {config.greetText}
            </div>
        );
    }
}

export default greeter