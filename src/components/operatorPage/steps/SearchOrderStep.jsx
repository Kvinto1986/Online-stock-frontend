import React from 'react';
import Search from "../search";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const SearchOrderStep = ({search, searchError, searchValue, setSearchValue, onSubmit}) => {
    return (
        <>
            <Search
                search={search}
                searchText="Search order by TTN number"
                error={searchError}
                value={searchValue}
                setValue={setSearchValue}
            />
            {
                searchError && (
                    <Grid container spacing={3}>
                        <Grid item xl={4} xs={1}>
                        </Grid>
                        <Button variant="outlined" color="primary" type="button"
                                style={{marginLeft: '2%'}}
                                onClick={onSubmit}>
                            Create custom TTN order
                        </Button>
                    </Grid>
                )
            }
        </>
    );
};

export default SearchOrderStep;
