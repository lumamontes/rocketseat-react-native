import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    eventName: {
      color: "#FDFCFE",
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate:{
      color: "#6b6b6b",
      fontSize: 16
    },
    input: {
        height: 56,
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        color: '#FDFCFE',
        padding: 16,
        flex: 1,
        fontSize: 16,
        marginRight: 12
    },
    button: {
        width: 56,
        height: 56, 
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FDFCFE',
        fontSize: 24,
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    }
  });
  
