import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DndDestenationArea from './dndDestenationArea'
import { DndProvider } from 'react-dnd-cjs'
import HTML5Backend from 'react-dnd-html5-backend-cjs'

const props = {
    index: '1',
    area: '100',
    freeArea: '100',
    products: [],
    type: 'unheated',
    isActiveArea: false,
    activeCargoUnit: [],
    initActiveCargoAndArea: () => {}
}

it('show an warehouse area block', async () => {
    const { getByText } = render(
        <DndProvider backend={HTML5Backend}>
            <DndDestenationArea {...props}/>
        </DndProvider>
    )

    getByText('Area')
    getByText('№ 1')
    getByText('Type:')
    getByText('unheated')
    getByText('Free area: 100m')
}) 
