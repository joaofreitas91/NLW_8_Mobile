import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 40,
        backgroundColor: theme.colors.brand,
        borderRadius: 4,
        justifyContent: "center",
    },

    containerDisabled: {
        flex: 1,
        height: 40,
        backgroundColor: "#9e9e9e",
        borderRadius: 4,
        justifyContent: "center",
    },
    textButton: {
        textAlign: "center",
        fontFamily: theme.fonts.medium,
        color: theme.colors.text_on_brand_color,
    },
});
