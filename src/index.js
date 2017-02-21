import './index.css';

import numeral from 'numeral';

const value = numeral(1000).format('$0,0.00');

console.log(`Pay ${value} for this!`); // eslint-disable-line no-console
