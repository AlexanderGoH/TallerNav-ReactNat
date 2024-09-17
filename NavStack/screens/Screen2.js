import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function Screen2({ navigation, route }) {

  const { saludo } = route.params;
  const mensaje = 'Screen2 es mejor que Screen1 😛';

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen 2</Text>
      <Text>{saludo}</Text>

      <View style={{margin: 10}}> 
        <Button
          title="Ir a la pantalla 1"
          onPress={() => navigation.navigate('Screen1')}
        />
      </View>
      
      <View style={{margin: 10}}> 
        <Button
          title="Ir a la pantalla 3"
          onPress={() => navigation.navigate('Screen3', {mensaje})}
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