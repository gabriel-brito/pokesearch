import { screen, render } from '@testing-library/react'

import Card from '.'
const data = {
  name: 'charizard',
  id: 6,
  weight: 905,
  baseXp: 240,
  height: 17,
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
}

describe('<Card />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Card {...data} />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c3 {
        color: white;
        font-size: 1.8em;
        margin-bottom: 1em;
        position: relative;
        text-transform: uppercase;
      }

      .c3::after {
        border-bottom: 0.5rem solid white;
        bottom: -1rem;
        content: '';
        left: 0;
        position: absolute;
        width: 3rem;
      }

      .c0 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: 0.8em;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-transition: 0.5s ease;
        transition: 0.5s ease;
      }

      .c0:hover {
        box-shadow: 1em 1.5em 1em -0.1em rgba(0,0,0,0.25);
      }

      .c1 {
        margin: 0 auto;
        max-width: 25em;
        width: 100%;
      }

      .c2 {
        background-color: #00154f;
        color: white;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        padding: 1em;
        width: 100%;
      }

      .c4 {
        font-size: 1.5em;
        margin-bottom: 0.5em;
      }

      <article
        class="c0"
      >
        <img
          alt="It's the pokemon named charizard"
          class="c1"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        />
        <div
          class="c2"
        >
          <h1
            class="c3"
          >
            charizard
          </h1>
          <span
            class="c4"
          >
            <strong>
              N°
            </strong>
             
            6
          </span>
          <span
            class="c4"
          >
            <strong>
              Base experience:
            </strong>
            : 
            240
            ;
          </span>
          <span
            class="c4"
          >
            <strong>
              Height
            </strong>
            : 
            17
            '
          </span>
          <span
            class="c4"
          >
            <strong>
              Weight
            </strong>
            : 
            905
             pounds.
          </span>
        </div>
      </article>
    `)
  })
})
