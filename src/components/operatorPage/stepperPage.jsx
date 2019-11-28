import React, {useState} from 'react'
import useStyles from './operatorPageStyles'
import TTNForm from './TTNform'
import SuccessPage from './successPage'
import SearchCarrierStep from "./steps/SearchCarrierStep";
import SearchDriverStep from "./steps/SearchDriverStep";
import SearchOrderStep from "./steps/SearchOrderStep";
import Stepper from "../Stepper";

export default ({
                    activeStep, setActiveStep, searchCarrier, searchCarrierError, createCarrier, createCarrierError,
                    searchDriver, searchDriverError, createDriver, createDriverError, createTtn, createTtnError,
                    carriers, drivers, authUser, services, searchOrder, searchOrderError, orders, handleResetForm,
                }) => {

    const classes = useStyles();

    const [carrierFormVisibility, setCarrierFormVisibility] = useState(false);
    const [driverFormVisibility, setDriverFormVisibility] = useState(false);
    const [carrierId, setCarrierId] = useState('');
    const [driverId, setDriverId] = useState('');
    const [ttnId, setTtnId] = useState('');

    return (
        <div className={classes.root}>
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

                <TTNForm ttnNumber={ttnId}
                         carrier={carriers[carrierId]}
                         driver={drivers[driverId]}
                         onSubmit={createTtn}
                         error={createTtnError}
                         authUser={authUser}
                         services={services}
                         orders={orders}
                         stepperLabel="Create TTN"/>

                <SuccessPage reset={handleResetForm}/>
            </Stepper>
        </div>
    )
}
