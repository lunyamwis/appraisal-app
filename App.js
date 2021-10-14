import { useQuery } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FETCH_USERS } from './src/components/authentication/queries';

export default function App() {
  const {data,loading} = useQuery(FETCH_USERS)
  const Item = ({ firstName }) => (
    <View>
      <Text>{firstName}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.firstName} />
  );
  return (
    <FlatList
      data={data.users.items}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
