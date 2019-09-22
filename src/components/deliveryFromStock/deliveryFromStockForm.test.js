import React from 'react'
import { mount, configure } from 'enzyme'
import { fireEvent, render } from '@testing-library/react'
import Adapter from 'enzyme-adapter-react-16'

import Form from './deliveryFromStockForm.jsx'
import RightBottomAlert from '../common/alerts/rightBottomAlert'

configure({ adapter: new Adapter() })

// *** Tests ***

describe('Stock delivery form ', () => {

    it("render form correctly with empty initial values", async () => {
        const formProps = {
            senderList: [],
            carrierList: [],
            managerData: [],
            alertMessage: '',
        }

        const FormComponent = mount(<Form {...formProps} />)

        expect(FormComponent.prop("senderList")).toEqual([])
        expect(FormComponent.prop("carrierList")).toEqual([])
        expect(FormComponent.prop("managerData")).toEqual([])
        expect(FormComponent.prop("alertMessage")).toEqual('')
    })

    it("check alert is desplayed", async () => {
        const formProps = {
            senderList:[],
            carrierList:[],
            managerData:{
                lastName: 'Acrobatov',
                firstName: 'Saltoslav',
                patronymic: 'Flexovich'
            },
            alertMessage: 'Alert message',
        }

        const alertProps = {
            message: formProps.alertMessage,
            status: true
        }

        const FormComponent = mount(<Form {...formProps} />)
        expect(FormComponent.contains(<RightBottomAlert {...alertProps} />)).toEqual(true)
    });
});
