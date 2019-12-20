import React from 'react';

import StoryTab from '../../src';
import './Default.scss';

const code = `<div className="default">
  StoryTab <div>Default Example</div>
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

const StoryTabDefault = () => (
  <StoryTab code={code} style={style} codeExt="tsx" styleExt="scss">
    <div className="default">
      StoryTab <div>Default Example</div>
    </div>
  </StoryTab>
);

export default StoryTabDefault;
