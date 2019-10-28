import React from 'react'
import {render} from '@testing-library/react'
import Manager from './manager'

const systems = [
    {
        id: 1,
        name: 'System 1',
        token: 'awefgu623tg6u2trf'
    },
    {
        id: 2,
        name: 'System 2',
        token: 'ndsolu8fy3hw7y3h3'
    },
    {
        id: 3,
        name: 'System 3',
        token: '3j7ry2683rt86r3u4'
    }
]

it('should render systems', async () => {
    const {getByText, getByDisplayValue} = render(<Manager
        services={systems}
        onCreate={() => null}
        errorAdd={{}}
        onDelete={id => null}
    />)

    getByText('System 1')
    getByDisplayValue('ndsolu8fy3hw7y3h3')
    getByText('System 3')
})