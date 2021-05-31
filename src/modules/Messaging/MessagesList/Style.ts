import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    right: {
        width: '100%',
        padding: 0,
        alignSelf: 'flex-end'
    },
    left: {
        width: '100%',
        padding: 0,
        alignSelf: 'flex-start'
    },
    chatFooter: {
        padding: '0.5em 1em',
        display: 'flex',
        alignItems: 'center',
        borderTop: '1px solid rgba(190, 190, 190, 0.1)'
    },
    form: {
        flex: '1',
        display: 'flex'
    },
    input: {
        flex: 1,
        padding: '0em 0.8em 0em 1.2em',
        outline: 'none',
        border: 'none',
        borderRadius: '5px',
        background: '#868e991a',
        color: '#000000'
    },
    button: { marginLeft: '0.5em' },
    chatButtonIcon: {
        color: '#0a66c2',
        transition: 'all 80ms ease-out'
    },

    flipMove: {
        minHeight: 500,
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column'
    },

    cardUser: {
        backgroundColor: '#0b81ff',
        textAlign: 'right',
        maxWidth: '80%',
        borderRadius: '20'
    },

    cardGuest: {
        backgroundColor: '#cccccc',
        maxWidth: '80%',
        borderRadius: '20'
    },

    timeRight: {
        fontSize: '10px',
        lineHeight: '12px',
        textAlign: 'right',
        marginRight: '18px'
    },
    timeLeft: {
        fontSize: '10px',
        lineHeight: '12px',
        marginTop: ' 5px',
        marginRight: '18px'
    },
    tick: {
        marginRight: '10px',
        alignSelf: 'flex-end',
        marginLeft: 10,
        width: 18,
        height: 18
    },
    menu: {
        marginTop: 10
    },
    messageBody: {
        backgroundColor: '#f4f5f6',
        padding: '0 16px',
        transform: 'scaleY(-1)',
        flex: 1
    },
    messageItem: {
        transform: 'scaleY(-1)',
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    date: {
        fontSize: '12px',
        lineHeight: '14px',
        textAlign: 'center',
        color: '#666666',
        margin: '12px 0'
    },
    recipientMessage: {
        alignSelf: 'flex-start'
    },
    recipientContent: {
        background: '#ffffff',
        borderRadius: '0px 12px 12px 12px',
        padding: '12px 16px',
        marginBottom: 8,
        fontSize: '14px',
        lineHeight: '16px',
        color: '#333333'
    },
    recipientFooter: {
        fontSize: '12px',
        lineHeight: '14px',
        color: '#666666',
        marginBottom: 8
    },
    senderMessage: {
        alignSelf: 'flex-end'
    },
    senderContent: {
        background: '#0a66c2',
        borderRadius: '12px 0px 12px 12px',
        padding: '12px 16px',
        fontSize: '14px',
        lineHeight: '16px',
        color: '#ffffff',
        marginBottom: 8
    },
    time: {},
    senderFooter: {
        fontSize: '12px',
        lineHeight: '14px',
        textAlign: 'right',
        color: '#666666',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 8
    }
}));
