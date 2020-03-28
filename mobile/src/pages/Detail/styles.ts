import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },

    incidentHolder: {
        flexGrow: 1,
    },

    incident: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    propertyBlock: {
        flexGrow: 1,
        width: 35,
    },

    incidentProperty: {
        color: '#41414d',
        fontWeight: 'bold',
    },

    incidentValue: {
        fontSize: 15,
        color: '#737380',
    },

    contactBox: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 26
    },

    heroSubTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 26
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 8,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
})
