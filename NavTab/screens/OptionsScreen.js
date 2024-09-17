import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const options = [
  { id: '1', title: 'Opción 1' },
  { id: '2', title: 'Opción 2' },
  { id: '3', title: 'Opción 3' },
  { id: '4', title: 'Opción 4' },
  { id: '5', title: 'Opción 5' },
  { id: '6', title: 'Opción 6' },
];

export default function OptionsScreen() {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', margin: 20}}>Opciones</Text>
      <FlatList
        data={options}
        renderItem={({item}) => (
          <TouchableOpacity style={{padding: 10, margin: 5, backgroundColor: '#cccccc', width: 200, alignItems: 'center'}} onPress={() => alert(`${item.title} seleccionada`)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};