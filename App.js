import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppCont from './routes';

export default function App() {
  return (
    <AppCont />
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
