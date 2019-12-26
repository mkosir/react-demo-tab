import React from 'react';
import { storiesOf } from '@storybook/react';

import Default from './Default/Default';
import './StoryTabReact.scss';

const stories = storiesOf('StoryTab - React', module);

stories.add('Default', () => <Default />);
