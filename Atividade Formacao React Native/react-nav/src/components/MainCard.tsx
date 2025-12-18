import React, { ReactNode } from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { BlackButton } from "./BlackButton";

interface MainCardProps {
  leftLogo?: ReactNode;
  cardTitle: string;
  cardSub: string;
  buttonProps: () => void;
  buttontTitle: string;
  children?: ReactNode;
}
export function MainCard({
  leftLogo,
  cardTitle,
  cardSub,
  buttonProps,
  buttontTitle,
  children,
}: MainCardProps) {
  return (
    <View style={[styles.card, styles.bigCard, styles.mainCard]}>
      <View style={styles.cardHeader}>
        {leftLogo ? (
          <View style={styles.cardHeaderLogo}>{leftLogo}</View>
        ) : null}
        <View style={styles.cardHeaderText}>
          <Text style={styles.cardTitle}>{cardTitle}</Text>
          <Text style={styles.cardSub}>{cardSub}</Text>
        </View>
      </View>

      {children ? <View style={styles.cardBody}>{children}</View> : null}

      <BlackButton title={buttontTitle} onPress={buttonProps} />
    </View>
  );
}
