import React, { useEffect, useState } from 'react'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'

import logoImage from '../../assets/logo.png'
import api from '../../services/api'

export interface IncidentType {
    id: number
    title: string
    description: string,
    value: number
    ngo_id: string
    name: string
    email: string
    whatsapp: string
    city: string
    uf: string
}

export default function Incidents() {
    const navigation = useNavigation()

    const [incidents, setIncidents] = useState<IncidentType[]>([])
    const [total, setTotal] = useState(0)

    const navigateToDetail = (incident: IncidentType) => {
        navigation.navigate('Details', { incident })
    }

    const loadIncidents = async () => {
        api.get<IncidentType[]>('incidents')
            .then(response => {
                setIncidents(response.data)
                setTotal(response.headers['x-total-count'])
            })
            .catch(error => console.log(error))
    }

    useEffect(() => { loadIncidents() }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImage} />
                <Text style={styles.headerText} >
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>
            
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                style={styles.incidentList} 
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                <View style={styles.incident}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{item.name}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', flex: 1, marginTop: 8 }}>
                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{item.title}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', flex: 1, marginTop: 8 }}>
                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>{
                            Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(item.value)
                        }</Text>
                    </View>

                    <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(item)}>
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name='arrow-right' size={16} color="#E02041" />
                    </TouchableOpacity>
                </View>
            )} />
        </View>
    )
}
