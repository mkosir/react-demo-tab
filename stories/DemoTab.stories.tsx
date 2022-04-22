import { storiesOf } from '@storybook/react';
import React from 'react';

import ButtonGreen from './ButtonGreen/_ButtonGreenDemoTab';
import ButtonRed from './ButtonRed/_ButtonRedDemoTab';
import Counter from './Counter/_CounterDemoTab';
import Default from './Default/_DefaultDemoTab';

import './DemoTab.scss';

const stories = storiesOf('Examples', module);

stories
  .add('Default', () => <Default />)
  .add('Button Green - .jsx/.css', () => <ButtonGreen />)
  .add('Button Red - .tsx/.scss', () => <ButtonRed />)
  .add('Counter', () => <Counter />);
