import React, {useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const Profile = () => {
  const [image, setImage] = useState(
    'data:image/jpeg;base64,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',
  );
  const press = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setImage(image.path);
      })
      .catch(() => {
        Alert.alert('please select image');
      });
  };
  return (
    <TouchableOpacity onPress={press} style={styles.profileContainer}>
      <Image
        source={{uri: image}}
        style={{width: 200, height: 200, borderRadius: 100}}
      />
    </TouchableOpacity>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
