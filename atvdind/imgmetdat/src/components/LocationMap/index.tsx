import React from "react";
import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import type { Local } from "../../types/location";
import { styles } from "./styles";

type LocationMapProps = {
  location: Local;
  title?: string;
  description?: string;
};

export function LocationMap({
  location,
  title = "Sua localizacao",
  description = "Aqui e onde voce se encontra",
}: LocationMapProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.coords}>
        Lat: {location.latitude} | Long: {location.longitude}
      </Text>
      <MapView
        style={styles.map}
        pointerEvents="none"
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title={title}
          description={description}
        />
      </MapView>
    </View>
  );
}
