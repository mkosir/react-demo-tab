import React from 'react';
import { storiesOf } from '@storybook/react';

import Default from './Default/Default';
import './StoryTabTemplateReact.scss';

const stories = storiesOf('StoryTab Template - React', module);

stories.add('Default', () => <Default />);
