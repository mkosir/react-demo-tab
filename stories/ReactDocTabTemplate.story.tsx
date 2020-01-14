import React from 'react';
import { storiesOf } from '@storybook/react';

import Default from './Default/Default';
import './ReactDocTabTemplate.scss';

const stories = storiesOf('React DocTab', module);

stories.add('Default', () => <Default />);
