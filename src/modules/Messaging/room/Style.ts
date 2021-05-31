import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
    room: {
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky'
    },
    paper: {
        overflow: 'hidden',
        borderRadius: 10
    },
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '1',
        borderBottom: '1px solid #f4f5f6'
    },
    input: {
        marginLeft: theme.spacing(3),
        flex: 1
    },
    typo: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '100%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        fontSize: 14
    },
    typoActive: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '100%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        fontWeight: 'bold',
        color: '#333',
        fontSize: 14
    },
    iconButton: {
        padding: 10
    }
}));
