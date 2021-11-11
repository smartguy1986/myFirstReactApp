import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
      },
      titles:{
        marginTop: '80%',
        width: '100%',
        alignItems: 'center',
      },
      title:{
        fontSize: 36,
        fontWeight: '500',
        color:'#FFB500'
      },
      subtitle: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold'
      },
      image:{
        width:'100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      },
      buttonContainer:{
        position: 'absolute',
        bottom: 30,
        width: '100%'
      },
      subtitleCTA:{
        color: '#99E9FF',
        textDecorationLine: 'underline'
      },
});

export default styles;