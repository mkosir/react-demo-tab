import React from 'react';

import { DemoTab } from 'index';

import Demo from './Default';

const code = `import React from 'react';

const Default = () => <h3>DemoTab 📑</h3>;

export default Default;`;

export const _Default = () => (
  <DemoTab code={code} codeExt="jsx">
    <Demo />
  </DemoTab>
);
