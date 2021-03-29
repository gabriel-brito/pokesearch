import { fireEvent, render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  const handleClick = jest.fn()

  it('should match snapshot', () => {
    const { container } = render(<Button func={handleClick}>Search</Button>)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        background-color: #d31e25;
        border-radius: 0.3em;
        border: none;
        color: white;
        cursor: pointer;
        font-weight: 600;
        padding: 1em;
        text-transform: uppercase;
      }

      .c0:hover {
        box-shadow: 0.3em 0.3em 1em -0.1em rgba(0,0,0,0.25);
      }

      <button
        class="c0"
        value="Search"
      >
        Search
      </button>
    `)
  })

  it('should call action when clicked', () => {
    render(<Button func={handleClick}>Search</Button>)

    fireEvent.click(screen.getByRole('button', { name: /Search/i }))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
