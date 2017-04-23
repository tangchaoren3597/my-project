/**
 * Created by liuyuan on 2017/4/22.
 */
import React fromm 'react';

import {render} from 'react-dom';

import greeter from './greeter';

import './main.css'; //使用require导入css文件;

render (<greeter />,document.getElementById('root'));