import React from 'react'
import * as MailComposer from 'expo-mail-composer'

import { View, Image, Text, TouchableOpacity, Linking, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'

import logoImage from '../../assets/logo.png'
import { IncidentType } from '../Incidents'

export default function Detail() {
    const navigation = useNavigation()
    const route = useRoute()

    const incident = route.params['incident'] as IncidentType

    const formatValue = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de R$ ${formatValue}`

    const navigateBack = () => navigation.goBack()

    const sendMail = () => {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
        .catch(error => console.log(error))
    }

    const sendWhatsApp = () => {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
            .catch(error => alert('Make sure you have whatsapp installed in your device'))
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImage} />
                
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name='arrow-left' size={28} color='#E02041' />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.incidentHolder} >
                <View style={styles.incident}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={styles.propertyBlock}>
                            <Text style={styles.incidentProperty}>ONG: </Text>
                        </View>
                        <View style={{ flex: 10 }}>
                            <Text style={styles.incidentValue}>{incident.name}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', flex: 1, marginTop: 8 }}>
                        <View style={styles.propertyBlock}>
                            <Text style={styles.incidentProperty}>CASO: </Text>
                        </View>
                        <View style={{ flex: 10 }}>
                            <Text style={styles.incidentValue}>{incident.title}</Text>
                            <Text style={styles.incidentValue}>{incident.description}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', flex: 1, marginTop: 8 }}>
                        <View style={styles.propertyBlock}>
                            <Text style={styles.incidentProperty}>VALOR: </Text>
                        </View>
                        <View style={{ flex: 10 }}>
                            <Text style={styles.incidentValue}>{formatValue}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}>Salve o dia!</Text>
                    <Text style={styles.heroSubTitle}>Seja o herói desse caso.</Text>
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
            </ScrollView>
        </View>
    )
}
