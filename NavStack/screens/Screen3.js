import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function Screen3({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen 3</Text>
      <View style={{margin: 10}}> 
        <Button
          title="Ir a la pantalla 1"
          onPress={() => navigation.navigate('Screen1')}
        />
      </View>
      <View style={{margin: 10}}> 
        <Button
          title="Ir a la pantalla 2"
          onPress={() => navigation.navigate('Screen2')}
        />
      </View>
      <View style={{margin: 10}}>
        <Button
          title="Regresar a la pantalla anterior"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}