import type { Meta } from '@storybook/react';
import React from 'react';

import { _ButtonGreen } from './ButtonGreen/_ButtonGreenDemoTab';
import { _ButtonRed } from './ButtonRed/_ButtonRedDemoTab';
import { _Counter } from './Counter/_CounterDemoTab';
import { _Default } from './Default/_DefaultDemoTab';

import './DemoTab.scss';

const meta: Meta = {
  title: 'Examples',
};

export default meta;

export const Default = () => <_Default />;

export const ButtonGreen = () => <_ButtonGreen />;
ButtonGreen.storyName = 'Button Green - .jsx/.css';

export const ButtonRed = () => <_ButtonRed />;
ButtonRed.storyName = 'Button Red - .tsx/.scss';

export const Counter = () => <_Counter />;
