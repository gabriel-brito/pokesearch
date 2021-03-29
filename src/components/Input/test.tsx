import { screen, render, fireEvent } from '@testing-library/react'

import Input from '.'

describe('<Input />', () => {
  const handleFunc = jest.fn()

  it('should render the input', () => {
    const { container } = render(<Input func={handleFunc} />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        border: none;
        border-bottom: 1px solid lightgray;
        padding: 1em 1em 0.5em;
      }

      .c0:focus {
        outline: none;
      }

      <input
        aria-label="Input"
        class="c0"
        placeholder="type your pokemon name"
      />
    `)
  })

  it('should call the function when user types', () => {
    render(<Input func={handleFunc} />)
    const input = screen.getByLabelText('Input')

    fireEvent.change(input, { target: { value: 'charmander' } })

    expect(handleFunc).toHaveBeenCalledTimes(1)
  })
})
