

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import DocumentPicker from 'react-native-document-picker';

const onDocumentPress = async () => {
  try {
    // let urlOFS = 'https://slipper-cell.onrender.com/api/file-upload';
    const res = await DocumentPicker.pick({
      type: [ DocumentPicker.types.allFiles],
    });
    if (res.size< 50000000) {
      let data = new FormData();
      data.append('file', res);
      try {
        const responseOfFileUpload = await fetch(urlOFS, {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body:data,
        });
        if (responseOfFileUpload.status==200) {
          let responseInJs = await responseOfFileUpload.json();
          let fileName = responseInJs.fileName;
          showTopToast('Upload Succesful');
        } else {
          showTopToast('Upload Failed');
        }
    
  } catch (err) {
    if (DocumentPicker.isCancel(err)){
    showTopToast('No document selected');
    } else {
      throw err;
    }
  }
}
  };
   
  
  const image ={uri:'https://res.cloudinary.com/dgaobrwxs/image/upload/v1640165269/flying-kite_x6evda.jpg'};
  
const App = () => {
  
  return (
    <SafeAreaView>
    <ScrollView>
      <Text>sup</Text>
      <Button title='select document' onPress={onDocumentPress}/>
    </ScrollView>
    </SafeAreaView>
  );
};

export default App;