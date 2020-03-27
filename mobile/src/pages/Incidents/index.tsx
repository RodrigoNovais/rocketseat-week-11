import React from 'react'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'

import logoImage from '../../assets/logo.png'

export default function Incidents() {
    const navigation = useNavigation()

    const navigateToDetail = () => navigation.navigate('Details')

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImage} />
                <Text style={styles.headerText} >
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>.
                </Text>
            </View>
            
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                style={styles.incidentList} 
                data={[1, 2, 3, 4, 5]}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>Greenpeace</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>Nsdf</Text>
                    
                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>$$$</Text>

                    <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetail}>
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name='arrow-right' size={16} color="#E02041" />
                    </TouchableOpacity>
                </View>
            )} />
        </View>
    )
}
