import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function Screen1({ navigation }) {

  const saludo = 'Saludo enviado desde Screen1!';
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen 1</Text>

      <View style={{margin: 10}}> 
        <Button
          title="Ir a la pantalla 2"
          onPress={() => navigation.navigate('Screen2', {saludo})}
        />
      </View>

      <View style={{margin: 10}}> 
        <Button
          title="Ir a la pantalla 3"
          onPress={() => navigation.navigate('Screen3')}
        />
      </View>
      
      <View style={{margin: 10}}>
        <Button
          color='red'
          title="Regresar"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}