import React, { useContext } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const SettingsScreen = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkTheme ? '#000' : '#fff',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: isDarkTheme ? '#fff' : '#000',
      marginBottom: 100,
      textAlign: 'center',
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: isDarkTheme ? '#333' : '#ccc',
    },
    itemText: {
      fontSize: 18,
      color: isDarkTheme ? '#fff' : '#000',
    },
    themeToggle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 15,
      marginTop: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.item}>
        <Text style={styles.itemText}>Language</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>My Profile</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Contact Us</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Change Password</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Privacy Policy</Text>
      </View>
      <View style={styles.themeToggle}>
        <Text style={styles.itemText}>Theme</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkTheme ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={isDarkTheme}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;