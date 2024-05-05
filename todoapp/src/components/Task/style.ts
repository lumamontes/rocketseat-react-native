import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#1F1E25",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    name: {
        flex: 1,
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16
    },
    button: {
        width: 56,
        height: 56, 
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FDFCFE',
        fontSize: 24,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 99,
        borderWidth: 2,
        borderColor: "#4EA8DE",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 16
    },
    checked: {
        width: 12,
        height: 12,
        backgroundColor: "#5E60CE",
        borderRadius: 5,
    },
    checkedText: {
        color: "#FFF",
        fontSize: 14
    },
    checkboxCompleted: {
        width: 24,
        height: 24,
        borderRadius: 99,
        backgroundColor: "#5E60CE",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 16
    }
});