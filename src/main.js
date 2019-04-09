import './static/css/index.scss';
import axios from 'axios';
import 'babel-polyfill';

const BASE_URL = '/api';

axios.get(`${ BASE_URL }/index`)
    .then((res) => {
        document.getElementById('pic').src = `data:image/png;base64,${res.data}`;
        document.getElementById('pic').style.opacity = 1;
    });