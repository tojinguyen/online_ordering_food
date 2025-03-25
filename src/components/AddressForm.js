import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const AddressForm = ({ address, onChange }) => {
  const countries = ['Vietnam', 'United States', 'Singapore', 'Japan', 'South Korea', 'Thailand', 'Malaysia', 'Indonesia'];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Street</Text>
      <TextInput
        style={styles.input}
        value={address.street}
        onChangeText={(text) => onChange('street', text)}
        placeholder="Enter street address"
      />

      <Text style={styles.label}>City</Text>
      <TextInput
        style={styles.input}
        value={address.city}
        onChangeText={(text) => onChange('city', text)}
        placeholder="Enter city"
      />

      <Text style={styles.label}>State/Province</Text>
      <TextInput
        style={styles.input}
        value={address.state}
        onChangeText={(text) => onChange('state', text)}
        placeholder="Enter state or province"
      />

      <Text style={styles.label}>Postal Code</Text>
      <TextInput
        style={styles.input}
        value={address.postalCode}
        onChangeText={(text) => onChange('postalCode', text)}
        placeholder="Enter postal code"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Country</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={address.country}
          onValueChange={(value) => onChange('country', value)}
          style={styles.picker}
        >
          {countries.map((country) => (
            <Picker.Item key={country} label={country} value={country} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginBottom: 16,
  },
  picker: {
    height: 50,
  },
});

export default AddressForm;
