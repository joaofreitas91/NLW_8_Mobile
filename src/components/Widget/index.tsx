import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";

import { ChatTeardropDots } from "phosphor-react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { styles } from "./styles";
import { theme } from "../../theme";
import { Options } from "../Options";
import { Form } from "../Form";

import { feedbackTypes } from "../../utils/feedbackTypes";
import { Success } from "../Success";

export type FeedbackType = keyof typeof feedbackTypes;

export function Widget() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedBackSent, setFeedBackSent] = useState(false);

    const bottomSheetRef = useRef<BottomSheet>(null);

    function handleOpen() {
        bottomSheetRef.current?.expand();
    }

    function handleReload() {
        setFeedbackType(null);
        setFeedBackSent(false);
    }

    return (
        <>
            <TouchableOpacity style={styles.button} onPress={handleOpen}>
                <ChatTeardropDots
                    size={24}
                    color={theme.colors.text_on_brand_color}
                    weight={"bold"}
                />
            </TouchableOpacity>

            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={[1, 280]}
                backgroundStyle={styles.modal}
                handleIndicatorStyle={styles.indicator}
            >
                {feedBackSent ? (
                    <Success onSendAnotherFeedback={() => handleReload()} />
                ) : (
                    <>
                        {feedbackType ? (
                            <Form
                                feedbackType={feedbackType}
                                onFeedbackCanceled={() => setFeedbackType(null)}
                                onFeedbackSent={() => setFeedBackSent(true)}
                            />
                        ) : (
                            <Options onFeedbackTypeChanged={setFeedbackType} />
                        )}
                    </>
                )}
            </BottomSheet>
        </>
    );
}

export default gestureHandlerRootHOC(Widget);
