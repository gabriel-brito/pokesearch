import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: Story<ButtonProps> = () => (
  <Button func={action('clicked')}>Search</Button>
)
