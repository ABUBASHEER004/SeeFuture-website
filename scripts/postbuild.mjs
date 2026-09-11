import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve('dist');
const index = resolve(dist, 'index.html');
const notFound = resolve(dist, '404.html');

if (existsSync(index)) {
  // Static hosts such as GitHub Pages use 404.html for deep links.
  // Copying the SPA shell lets BrowserRouter render the requested route.
  copyFileSync(index, notFound);
}
