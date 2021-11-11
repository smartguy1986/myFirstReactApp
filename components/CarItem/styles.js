import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%',
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
        color: '#5c5e62',
        fontWeight: 'bold'
      },
      image:{
        width:'100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      }
});

export default styles;