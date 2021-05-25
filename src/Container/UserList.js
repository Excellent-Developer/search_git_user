import React, { useState, useEffect } from 'react'
import { Alert, AlertTitle } from '@material-ui/lab';

import useStyle from './styles'

import SearchBox from '../Components/SearchBox'
import Table from '../Components/Table'

import { getUsers } from '../Services/query'

const headCells = [
    { id: 'avatar_url', numeric: false, disablePadding: false, label: 'Avatar URL' },
    { id: 'login', numeric: false, disablePadding: false, label: 'Login' },
    { id: 'type', numeric: false, disablePadding: false, label: 'Type' }
];


const UserList = () => {
    const classes = useStyle()
    const [searchTerm, setSearchTerm] = useState('')
    const [page, setPage] = useState(0)
    const [users, setUsers] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const [errorMessage, setErrorMessage] = useState(null)

    const handleSearch = async () => {
        if (!searchTerm) {
            setUsers([])
            setTotalCount(0)
            setPage(0)
            return
        }
        const response = await getUsers(searchTerm, page + 1)
        setUsers(response.items || [])
        setTotalCount(response.total_count || 0)
        setErrorMessage(response.message)
    }

    useEffect(() => {
        handleSearch()
    }, [page])

    return (
        <div className={classes.container}>
            {
                errorMessage && 
                <div className={classes.alert}>
                    <Alert severity="error">
                        <AlertTitle classes={classes.alert}><strong>Error!</strong></AlertTitle>
                        {errorMessage}
                    </Alert>
                </div>
            }
            <SearchBox searchTerm={searchTerm} handleChange={(e) => setSearchTerm(e.target.value)} handleSearch={handleSearch} />
            <Table page={page} setPage={setPage} headCells={headCells} rows={users} totalCount={totalCount} />
        </div>
    )
}

export default UserList
