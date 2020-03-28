import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },
    
    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginTop: 24,
        color: '#13131a',
        fontWeight: 'bold',
    },

    description: {
        fontSize: 16,
        color: '#737380',
    },

    incidentList: {
        marginTop: 16,
    },

    incident: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    incidentProperty: {
        flexGrow: 1,
        width: 35,
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    incidentValue: {
        flex: 10,
        fontSize: 15,
        color: '#737380',
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText: {
        color: '#E02041',
        fontSize: 15,
        marginTop: 8,
        fontWeight: 'bold',
    }
})
