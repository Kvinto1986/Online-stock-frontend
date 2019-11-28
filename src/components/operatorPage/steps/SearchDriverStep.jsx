import React from 'react';
import Search from "../search";
import ExpansionPanel from "../expansionPanel";
import DriverForm from "../driverForm";

const SearchDriverStep = ({
                              search, searchError,
                              value, setValue, visibility, setVisibility, onSubmit, submitError
                          }) => {

    return (
        <>
            <Search
                search={search}
                searchText="Search driver by driver license"
                error={searchError}
                value={value}
                setValue={setValue}
            />
            {
                searchError && (
                    <ExpansionPanel
                        setValue={setValue}
                        value={value}
                        formVisibility={visibility}
                        setFormVisibility={setVisibility}
                        Form={DriverForm}
                        onSubmit={onSubmit}
                        error={submitError}
                        id={value}
                    />
                )
            }
        </>
    );
};

export default SearchDriverStep;
