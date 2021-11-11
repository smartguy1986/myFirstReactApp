import React from "react";
import {View, Text, Pressable} from 'react-native';
import styles from './styles'

const StyledButton = (props) => {

    const type = props.type;
    //console.warn(type);
    const content = props.content;
    const onPress = props.onPress;

    const backgroundColor = type === 'primary' ? '#4C3600' : '#FFB500';
    const textColor = type === 'primary' ? '#fff' : '#000';

    return (
        <View style={styles.container}>
            <Pressable 
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => onPress()}>
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>      
        </View>
    );
};

export default StyledButton;