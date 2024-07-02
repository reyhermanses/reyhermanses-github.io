// src/components/Autocompleter.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CAutocompleter, { AutocompleterProps } from './CAutocompleter';

export default {
  title: 'Components/Autocompleter',
  component: CAutocompleter,
  argTypes: {
    backgroundColor: { control: 'boolean' }, // Add control for backgroundColor
    multipleSelection: { control: 'boolean'}
  }
} as Meta;

const Template: StoryFn<AutocompleterProps> = (args) => <CAutocompleter {...args} />;

export const Default = Template.bind({});
Default.args = {
  suggestions: ['Option 1', 'Long Option2', 'Loong Option3', 'Looong Option4', 'Loooong Option5', 'Looooong Option6', 'Looooooong Option7'],
};
