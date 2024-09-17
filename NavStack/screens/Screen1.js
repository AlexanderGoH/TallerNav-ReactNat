import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function Screen1({ navigation }) {

  const saludo = 'Saludo enviado desde Screen1!';
  const authenticated = false;

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Screen 1</Text>

      <View style={{margin: 10}}> 
        <Button
          title="Ir a la pantalla 2"
          onPress={() => navigation.navigate('Screen2', {saludo})}
        />
      </View>

      <View style={{margin: 10}}> 
        <Button
          title="Ir a la pantalla 3"
          onPress={() => navigation.navigate('Screen3', {authenticated})}
        />
      </View>
    </View>
  );
}