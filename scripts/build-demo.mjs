import { copyFileSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const demoSource = 'demo';
const demoOutput = join('dist', 'demo');
const staticFiles = ['index.html', 'styles.css', 'favicon.svg'];

rmSync(demoOutput, { force: true, recursive: true });
mkdirSync(demoOutput, { recursive: true });

staticFiles.forEach((fileName) => {
  copyFileSync(join(demoSource, fileName), join(demoOutput, fileName));
});
