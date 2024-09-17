import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function Screen3({ navigation, route}) {

  const { mensaje } = route.params || {};
  const { authenticated } = route.params;

  const resetear = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Screen1' }],
    });
  };

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    { authenticated ? (
      <>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Screen 3</Text>
        <Text style={{fontSize: 20}}>Autorización exitosa</Text>
        <Text>{mensaje}</Text>

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
            color='red'
            title="Regresar"
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={{margin: 10}}>
          <Button
            color='purple'
            title="Resetear"
            onPress={resetear}
          />
        </View>
      </>
    ) : (
      <>
      <Text style={{color: 'red'}}>No tienes permiso para ver esta pantalla</Text>
      <View style={{margin: 10}}>
          <Button
            color='red'
            title="Regresar"
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={{margin: 10}}>
          <Button
            color='purple'
            title="Resetear"
            onPress={resetear}
          />
        </View>
      </>
    )}
    </View>
  );
}