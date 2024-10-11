import type { Meta, StoryObj } from '@storybook/react'
import { DecksTable } from './decksTable'

const meta = {
  title: 'Components/DecksTable',
  component: DecksTable,
  tags: ['autodocs'],
  args: {
    decks: [
      {
        id: 'cm23n8tn2031ejq01t236r3ci',
        userId: '1bdfe750-4dcc-45a8-adc9-b5c71cd05ad0',
        name: 'sklrhgjpoitjmb',
        isPrivate: false,
        cover: null,
        created: '2024-10-10T18:40:16.143Z',
        updated: '2024-10-10T18:40:16.143Z',
        cardsCount: 0,
        isFavorite: false,
        author: { id: '1bdfe750-4dcc-45a8-adc9-b5c71cd05ad0', name: 'spivakjkkjn' },
      },
      {
        id: 'cm23kf7rp030vjq01t0hem8wh',
        userId: '31689a85-4371-4c3d-8a4c-77d782ed960d',
        name: 'Mr Erikson',
        isPrivate: false,
        cover: null,
        created: '2024-10-10T17:21:15.541Z',
        updated: '2024-10-10T17:44:31.731Z',
        cardsCount: 0,
        isFavorite: false,
        author: { id: '31689a85-4371-4c3d-8a4c-77d782ed960d', name: 'erikbonopart12' },
      },
      {
        id: 'cm23dq0nb0303jq01njj2aiwj',
        userId: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
        name: 'dfdfdfd updated updated',
        isPrivate: false,
        cover: null,
        created: '2024-10-10T14:13:42.216Z',
        updated: '2024-10-10T14:21:30.253Z',
        cardsCount: 0,
        isFavorite: false,
        author: { id: 'f2be95b9-4d07-4751-a775-bd612fc9553a', name: 'Nik-Kik-Shpink' },
      },
    ],
  },
} satisfies Meta<typeof DecksTable>

export default meta
type Story = StoryObj<typeof meta>

// stories
export const DecksTableExample: Story = {}
