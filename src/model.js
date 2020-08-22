import image from './assets/image.jpg'
import {TextBlock, TitleBlock, ImageBlock, TextColumnsBlock} from './classes/blocks'
import {css} from './utils'

const text = `
Текст как блок p
`

export const model = [
  new TitleBlock('Мини конструктор на JS', {
    tag: 'h2',
    styles: css({
      color: 'black',
      padding: '1.5rem',
      'text-align': 'center'
    })
  }),
  new ImageBlock(image, {
    styles: 'padding: 2rem 0;display: flex;justify-content: center;',
    alt: 'my image',
    imageStyles: 'width: 100%; height: auto;'
  }),
  new TextColumnsBlock([
    'Какой-то интересный текст колонка'
  ], {
    styles: 'padding: 2rem 0; color: black;font-weight: bold;'
  }),
  new TextBlock(text, {
    styles: 'font-weight: bold;padding: 1rem;'
  })
]
