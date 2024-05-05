import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        gap: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    blue:{
        color: '#4EA8DE',
    },
    purple: {
        color: '#8284FA',
    },
    quantity: {
        width: 20,
        height: 20,
        borderRadius: 25 / 2,
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center',
    },
    quantityText: {
        color: '#D9D9D9',
        fontSize: 12,
        fontWeight: 'bold',
    },
});