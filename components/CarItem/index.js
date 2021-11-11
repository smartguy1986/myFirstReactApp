import React from "react";
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from "../StyledButton";

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
        
            <ImageBackground source={require('../../assets/images/car1.jpg')} style={styles.image}/>

            <View style={styles.titles}>
            <Text style={styles.title}>Jeep Wrangler</Text>
            <Text style={styles.subtitle}>Starting at $69,500</Text>
            </View>
        
            <StyledButton 
                type="primary" 
                content={"Click Me"} 
                onPress={() => {
                    console.warn("First Button Pressed");
                }} />

            <StyledButton 
                type="secondary" 
                content={"You Can Also Click Me"} 
                onPress={() => {
                    console.warn("Second Button Pressed");
                }} />

        </View>
    );
};

export default CarItem;