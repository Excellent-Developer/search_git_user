import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
    search: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    },
    inputRoot: {
        color: 'inherit',
        marginRight: theme.spacing(1)
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 1),
        // vertical padding + font size from searchIcon
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
        border: 1,
        borderStyle: 'solid',
        borderColor: 'red'
    },
}))

export default useStyle