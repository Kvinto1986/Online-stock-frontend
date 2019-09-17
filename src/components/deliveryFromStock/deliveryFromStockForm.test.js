import React from 'react'
import renderer from 'react-test-renderer'
import Form from './deliveryFromStockForm.jsx'

describe('Stock delivery form snapshot', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<Form 
            senderList={[]}
            carrierList={[]}
            managerData={{
                lastName: 'Acrobatov',
                firstName: 'Saltoslav',
                patronymic: 'Flexovich'
            }}
            alertMessage={''}
        />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
});
