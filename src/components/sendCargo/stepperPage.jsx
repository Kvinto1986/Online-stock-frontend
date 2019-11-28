import React, {useState} from 'react'
import SendTTNForm from './sendTTNform'
import SuccessPage from '../operatorPage/successPage'
import Stepper from "../Stepper";
import SearchCarrierStep from "../operatorPage/steps/SearchCarrierStep";
import SearchDriverStep from "../operatorPage/steps/SearchDriverStep";
import SearchOrderStep from "../operatorPage/steps/SearchOrderStep";

export default ({
                    activeStep, setActiveStep, searchCarrier, searchCarrierError, createCarrier, createCarrierError,
                    searchDriver, searchDriverError, createDriver, createDriverError, createTtn, createTtnError,
                    carriers, drivers, authUser, searchOrder, searchOrderError, orders, handleResetForm
                }) => {

    const [carrierFormVisibility, setCarrierFormVisibility] = useState(false);
    const [driverFormVisibility, setDriverFormVisibility] = useState(false);
    const [carrierId, setCarrierId] = useState('');
    const [driverId, setDriverId] = useState('');
    const [ttnId, setTtnId] = useState('');

    return (
        <Stepper step={activeStep}>
            <SearchCarrierStep search={searchCarrier}
                               searchError={searchCarrierError.carrier}
                               visibility={carrierFormVisibility}
                               setVisibility={setCarrierFormVisibility}
                               onSubmit={createCarrier}
                               submitError={createCarrierError}
                               value={carrierId}
                               setValue={setCarrierId}
                               stepperLabel="Carrier check"/>

            <SearchDriverStep search={searchDriver}
                              searchError={searchDriverError.driver}
                              visibility={driverFormVisibility}
                              setVisibility={setDriverFormVisibility}
                              onSubmit={createDriver}
                              submitError={createDriverError}
                              value={driverId}
                              setValue={setDriverId}
                              stepperLabel="Driver check"/>

            <SearchOrderStep search={searchOrder}
                             searchValue={ttnId}
                             setSearchValue={setTtnId}
                             searchError={searchOrderError.order}
                             onSubmit={() => setActiveStep(x => ++x)}
                             stepperLabel="Check order"/>

            <SendTTNForm ttnNumber={ttnId}
                     carrier={carriers[carrierId]}
                     driver={drivers[driverId]}
                     onSubmit={createTtn}
                     error={createTtnError}
                     authUser={authUser}
                     orders={orders}
                     stepperLabel="Create TTN"/>

            <SuccessPage reset={handleResetForm}/>
        </Stepper>
    )
}
