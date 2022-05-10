import React from "react";
import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    ActivityIndicator,
} from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
    isLoading: boolean;
    hasComment: boolean;
}

export function SendFeedbackButton({ isLoading, hasComment, ...rest }: Props) {
    return (
        <TouchableOpacity
            style={hasComment ? styles.containerDisabled : styles.container}
            {...rest}
            disabled={hasComment}
        >
            {isLoading ? (
                <ActivityIndicator color={theme.colors.text_on_brand_color} />
            ) : (
                <Text style={styles.textButton}>Enviar Feedback</Text>
            )}
        </TouchableOpacity>
    );
}
