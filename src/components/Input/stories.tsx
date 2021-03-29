import { Story, Meta } from '@storybook/react/types-6-0'
import { FormEvent } from 'react'
import Input, { InputProps } from '.'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Input',
  component: Input
} as Meta

export const Default: Story<InputProps> = () => (
  <Input func={action('changed')} />
)
