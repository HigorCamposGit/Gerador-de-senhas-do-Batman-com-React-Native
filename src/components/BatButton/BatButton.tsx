import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';

export function BatButton() {
  const [pass, setPass] = useState('');
  const [passLength, setPassLength] = useState(8);
  const [copied, setCopied] = useState(false);

  function handleGenerateButton() {
    let generateToken = generatePass(passLength);
    setPass(generateToken);
    setCopied(false);
  }

  function handleCopyButton() {
    if (!pass) return;
    Clipboard.setStringAsync(pass);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <View style={{ width: '100%' }}>
      <BatTextInput pass={pass} />

      <View style={styles.sizeContainer}>
        {[8, 12, 16].map((size) => {
          const isActive = passLength === size;
          return (
            <Pressable
              key={size}
              onPress={() => setPassLength(size)}
              style={({ hovered, pressed }: any) => [
                styles.sizeButton,
                hovered && !isActive && styles.sizeButtonHovered,
                isActive && styles.sizeButtonActive,
                pressed && styles.buttonPressed,
              ]}
            >
              <Text
                style={[
                  styles.sizeText,
                  isActive && styles.sizeTextActive,
                ]}
              >
                {size} CHARS
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Pressable
        onPress={handleGenerateButton}
        style={({ hovered, pressed }: any) => [
          styles.button,
          hovered && styles.buttonHovered,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={[styles.text, styles.textHighlight]}>GENERATE</Text>
      </Pressable>

      <Pressable
        onPress={handleCopyButton}
        style={({ hovered, pressed }: any) => [
          styles.button,
          hovered && styles.buttonHovered,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.text}>{copied ? 'COPIED!' : 'COPY'}</Text>
      </Pressable>
    </View>
  );
}