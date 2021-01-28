import React, { useContext } from 'react';
import { Text, Image, View, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';
import { Song } from '../../types';
import { AppContext } from '../../AppContext';

export type SonListItemProps = {
  song: Song;
};

const SongListItem = (props: SonListItemProps) => {
  const { song } = props;

  const { setSongId } = useContext(AppContext);

  const onPlay = () => {
    setSongId(song.id);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlay}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SongListItem;
