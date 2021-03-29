import { screen, render } from '@testing-library/react'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a black heading by default', () => {
    const { container } = render(<Heading>Lorem Ipsum</Heading>)

    expect(screen.getByRole('heading', { name: /Lorem Ipsum/i })).toHaveStyle({
      color: 'black'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a white heading', () => {
    render(<Heading isWhite>Lorem Ipsum</Heading>)

    expect(screen.getByRole('heading', { name: /Lorem Ipsum/i })).toHaveStyle({
      color: 'white'
    })
  })

  it('should render a small heading when small is passed', () => {
    render(<Heading small>Lorem Ipsum</Heading>)

    expect(screen.getByRole('heading', { name: /Lorem Ipsum/i })).toHaveStyle({
      fontSize: '1.8em'
    })
  })

  it('should render a uppercase heading when toUppercase is passed', () => {
    render(<Heading toUppercase>Lorem Ipsum</Heading>)

    expect(screen.getByRole('heading', { name: /Lorem Ipsum/i })).toHaveStyle({
      textTransform: 'uppercase'
    })
  })
})
