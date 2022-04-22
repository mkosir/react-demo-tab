import React from 'react';

import { DemoTab } from '../../src';

import Demo from './Default';

const code = `import React from 'react';

const Default = () => <h3>DemoTab 📑</h3>;

export default Default;`;

const _Default = () => (
  <DemoTab code={code} codeExt="jsx">
    <Demo />
  </DemoTab>
);

export default _Default;
