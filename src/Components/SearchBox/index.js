import React from 'react'
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'

import useStyle from './styles'

const SearchBox = (props) => {
    const { searchTerm, handleChange, handleSearch } = props
    const classes = useStyle()
    return (
        <div className={classes.search}>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={searchTerm}
                onChange={handleChange}
            />
            <Button variant="outlined" color="secondary" startIcon={<SearchIcon />} onClick={handleSearch}>
                Search
            </Button>
        </div>
    )
}

export default SearchBox