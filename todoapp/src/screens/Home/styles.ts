import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0D0D0D',
      padding: 24
    },
    header: {
      width: '100%',
      alignItems: 'center'
    },
    title: {
      color: "#4EA8DE",
      fontSize: 48,
      fontWeight: 'bold',
      marginTop: 48
    },
    titlehighlight: {
      color: "#5E60CE",
      fontSize: 48,
      fontWeight: 'bold',
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
        backgroundColor: '#1E6F9F',
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
    },
    listEmptyContainer: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      gap: 4,
      borderTopColor: "#6b6b6b",
      borderTopWidth: 1,
      paddingTop: 48
    },
    listEmptyText: {
      fontWeight: "bold",
      color: "#6b6b6b",
      fontSize: 14,
      textAlign: "center",
      marginTop: 24
    },
    listEmptySubtext:{
      color: "#6b6b6b",
      fontSize: 14
    },
    tasksHeaderContainer: {
      marginBottom: 10
    }
  });
  
