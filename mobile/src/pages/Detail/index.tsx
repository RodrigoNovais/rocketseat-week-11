import React from 'react'
import * as MailComposer from 'expo-mail-composer'

import { View, Image, Text, TouchableOpacity, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'

import logoImage from '../../assets/logo.png'

export default function Detail() {
    const navigation = useNavigation()
    
    const NGO = ''
    const CASE = ''
    const VALUE = ''
    const message = ''
    const phone = ''
    const email = ''

    const navigateBack = () => navigation.goBack()

    const sendMail = () => {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${NGO}`,
            recipients: [email],
            body: message,
        })
        .catch(error => console.log(error))
    }
    
    const sendWhatsApp = () => {
        Linking.openURL(`whatsapp://send?phone=${phone}&text=${message}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImage} />
                
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name='arrow-left' size={28} color='#E02041' />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentValue}>Greenpeace</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Nsdf</Text>
                
                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>$$$</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
