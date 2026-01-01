import React, { useEffect, useMemo, useState } from "react";
import { Image, Text, View, type LayoutChangeEvent } from "react-native";
import { styles } from "./styles";

type ImagePreviewProps = {
  uri: string;
  caption: string;
};

export function ImagePreview({ uri, caption }: ImagePreviewProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const [naturalSize, setNaturalSize] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    let active = true;

    Image.getSize(
      uri,
      (width, height) => {
        if (!active) return;
        if (width > 0 && height > 0) {
          setNaturalSize({ width, height });
        }
      },
      () => {
        if (active) {
          setNaturalSize(null);
        }
      }
    );

    return () => {
      active = false;
    };
  }, [uri]);

  const handleLayout = (event: LayoutChangeEvent) => {
    const width = event.nativeEvent.layout.width;
    if (width && width !== containerWidth) {
      setContainerWidth(width);
    }
  };

  const imageStyle = useMemo(() => {
    if (!naturalSize || !containerWidth) {
      return [styles.image, styles.imageFallback];
    }

    const displayWidth = Math.min(containerWidth, naturalSize.width);
    const scale = displayWidth / naturalSize.width;
    const displayHeight = Math.round(naturalSize.height * scale);

    return [styles.image, { width: displayWidth, height: displayHeight }];
  }, [containerWidth, naturalSize]);

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <Image source={{ uri }} style={imageStyle} resizeMode="contain" />
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
}
