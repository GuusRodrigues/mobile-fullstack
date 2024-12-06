import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f8ff', 
  },
  input: {
    borderWidth: 2,
    borderColor: '#4caf50', 
    padding: 15,
    marginVertical: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff', 
    fontSize: 16,
    color: '#333',
  },
  image: {
    width: 120,
    height: 120,
    marginVertical: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4caf50', 
  },
  presencaItem: {
    borderWidth: 2,
    borderColor: '#3f51b5', 
    padding: 15,
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: '#e3f2fd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  presencaText: {
    fontWeight: '600',
    fontSize: 18,
    color: '#3f51b5', 
    marginBottom: 5,
  },
});

export default styles;
