import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {
    console.log(route);
  }, []);

  return (
    <View>
      <Text style={{ color: 'white' }}>Hello from Album Screen</Text>
    </View>
  );
};

export default AlbumScreen;
