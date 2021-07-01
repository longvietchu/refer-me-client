import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    app: {
        backgroundColor: 'rgb(243, 242, 239)'
    },

    app__header: {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        height: 50,
        display: 'flex',
        justifyContent: 'center'
    },

    app__body: {
        display: 'flex',
        minHeight: 'calc(100vh - 50px)',
        justifyContent: 'center',
        marginTop: 10
        // marginBottom: 50
    },

    noOrgContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px 50px'
    },
    noOrgText: {
        textTransform: 'capitalize',
        color: '#00000099',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    noOrgImage: {
        borderRadius: 10,
        marginBottom: 10,
        width: '20%'
    }
}));
