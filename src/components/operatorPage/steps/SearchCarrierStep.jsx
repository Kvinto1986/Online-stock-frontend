import React from 'react';
import Search from "../search";
import ExpansionPanel from "../expansionPanel";
import CarrierForm from "../carrierForm";

const SearchCarrierStep = ({
                               search, searchError,
                               visibility, setVisibility, onSubmit, submitError, value, setValue
                           }) => {
    return (
        <>
            <Search
                search={search}
                searchText="Search carrier by UNP"
                error={searchError}
                value={value}
                setValue={setValue}
            />
            {
                searchError && (
                    <ExpansionPanel
                        formVisibility={visibility}
                        setFormVisibility={setVisibility}
                        Form={CarrierForm}
                        onSubmit={onSubmit}
                        error={submitError}
                        id={value}
                        setValue={setValue}
                        value={value}
                    />
                )
            }
        </>
    );
};

export default SearchCarrierStep;
