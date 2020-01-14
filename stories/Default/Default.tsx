import React from 'react';

import ReactDocTabTemplate from '../../src';
import './Default.scss';

const code = `<div className="default">
  ReactDocTabTemplate <div>Default Example</div>
</div>`;
const style = `.default {
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 23px;

  div {
    font-size: 16px;
  }
}`;

const ReactDocTabTemplateDefault = () => (
  <ReactDocTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <div className="default">
      ReactDocTabTemplate <div>Default Example</div>
    </div>
  </ReactDocTabTemplate>
);

export default ReactDocTabTemplateDefault;
