import { send } from './request.mjs';
import { read } from './response.mjs';

function makeRequest(url, data) {
  send(url, data);
  return read();
}

const responseData = makeRequest('www.google.com', 'HELLO THERE⚠️');
console.log(responseData);
