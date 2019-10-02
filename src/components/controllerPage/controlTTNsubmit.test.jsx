import React from 'react'
import {fireEvent, render, wait} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ControlSubmit from './controlTTNsubmit'


it('control submit test', async () => {
    const saveTTN = () => {
    }

    const confirm = false
    const open = true

    const setConfirm = (confirm) => {
        expect(confirm).toBe(true)
    }

    const setOpen = (open) => {
        expect(open).toBe(false)
    }

    const {getByTestId} = render(<ControlSubmit
        saveTTN={saveTTN}
        confirm={confirm}
        setConfirm={setConfirm}
        open={open}
        setOpen={setOpen}
    />)

    const currentCheckbox = getByTestId('checkbox')
    const currentReportButton = getByTestId('reportButton')

    fireEvent.click(currentCheckbox)
    fireEvent.click(currentReportButton)
})
