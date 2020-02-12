import React from 'react';
import { storiesOf } from '@storybook/react';

import Default from './Default/_DefaultDemoTab';
import ButtonGreen from './ButtonGreen/_ButtonGreenDemoTab';
import ButtonRed from './ButtonRed/_ButtonRedDemoTab';
import Counter from './Counter/_CounterDemoTab';

import './DemoTab.scss';

const stories = storiesOf('Examples', module);

stories
  .add('Default', () => <Default />)
  .add('Button Green - .jsx/.css', () => <ButtonGreen />)
  .add('Button Red - .tsx/.scss', () => <ButtonRed />)
  .add('Counter', () => <Counter />);
