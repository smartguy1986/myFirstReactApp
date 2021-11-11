import React from "react";
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles'

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
        
            <ImageBackground source={require('../../assets/images/car1.jpg')} style={styles.image}/>

            <View style={styles.titles}>
            <Text style={styles.title}>Jeep Wrangler</Text>
            <Text style={styles.subtitle}>Starting at $69,500</Text>
            </View>
        
        </View>
    );
};

export default CarItem;