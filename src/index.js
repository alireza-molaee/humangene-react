import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import moment from "moment-jalaali";
import fa from "moment/locale/fa";

moment.locale("fa", fa);
moment.loadPersian({usePersianDigits: true});

library.add(fas)

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
