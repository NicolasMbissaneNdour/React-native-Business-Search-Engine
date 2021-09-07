import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ContactBusiness = ({phone}) => {
  return (
    <View style={styles.container}>
      <FontAwesome name="phone" size={24} color="black" />
      <Text style={styles.phone}>{phone}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'baseline',
    alignSelf: 'center'
  },
  icon: {

  },
  phone: {
    marginLeft: 5
  }
})

export default ContactBusiness;