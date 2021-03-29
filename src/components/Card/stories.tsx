import { Story, Meta } from '@storybook/react/types-6-0'
import Card, { CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    name: 'charizard',
    id: 6,
    weight: 905,
    baseXp: 240,
    height: 17,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
  }
} as Meta

export const Default: Story<CardProps> = (args) => (
  <div style={{ width: '300px', margin: '0 auto' }}>
    <Card {...args} />
  </div>
)
