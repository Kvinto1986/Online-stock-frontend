import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DndElement from './dndElement'
import { DndProvider } from 'react-dnd-cjs'
import HTML5Backend from 'react-dnd-html5-backend-cjs'

const space = '\u0020'
const props = {
    name: 'Apples',
    amount: '10',
    dimension: 'Box',
    ttnId: '00000000000000',
    setCurrentHendleCargoUnit: () => {},
    id: 1,
    spinerIndex: null
}

it('show an cargo unit', async () => {
    const { getByText } = render(
        <DndProvider backend={HTML5Backend}>
            <DndElement {...props}/>
        </DndProvider>
    )

    getByText('Apples')
    getByText(`|${space}10${space}Box`)
}) 