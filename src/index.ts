import { loadInterface } from './ui/ui-manager'
import uiHomepage from './ui/interfaces/home.html?raw'


loadInterface(uiHomepage);


// get build date
fetch(`gha-build.txt`).then((request) => {
  if (request.status !== 200) return console.warn(`gha-build: ${request.status}`);
  request.text().then(text => {
    const num = parseInt(text);
    if (isNaN(num)) return console.warn(`gha-build: ${num}`);
    const buildDate = new Date(num * 1000);

    console.log(`Build Date:`, buildDate.toUTCString());
  }).catch(console.warn);
}).catch(console.warn);

// get rev hash
fetch(`gha-hash.txt`).then((request) => {
  if (request.status !== 200) return console.warn(`gha-hash: ${request.status}`);
  console.debug(request);
  request.text().then(text => {
    console.log(`Revision Hash:`, text);
  }).catch(console.warn);
}).catch(console.warn);