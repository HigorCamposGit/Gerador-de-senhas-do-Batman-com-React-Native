import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#3A3A3A',
    backgroundColor: '#1F1F1F',
    marginTop: 12,
  },
  buttonHovered: {
    backgroundColor: '#2E2E2E',
    borderColor: '#E5BF3C',
  },
  buttonPressed: {
    backgroundColor: '#3D3D3D',
    transform: [{ scale: 0.98 }],
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 1.2,
    color: '#F5F5F5',
  },
  textHighlight: {
    color: '#E5BF3C',
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
    gap: 8,
  },
  sizeButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: '#171717',
    borderWidth: 1,
    borderColor: '#333333',
  },
  sizeButtonHovered: {
    backgroundColor: '#262626',
    borderColor: '#666666',
  },
  sizeButtonActive: {
    backgroundColor: '#333333',
    borderColor: '#E5BF3C',
  },
  sizeText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#9CA3AF',
  },
  sizeTextActive: {
    color: '#E5BF3C',
  },
});