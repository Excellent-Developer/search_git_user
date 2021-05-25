import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
    container: {
        textAlign: 'center',
        padding: theme.spacing(1, 2, 1, 2),
    },
    alert: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        textAlign: 'left'
    },
}))

export default useStyle