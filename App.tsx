// Импорт реакта, темы приложения, конфигурации firebase и корневого Рута(рут отвечает за навигацию)
import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import './config/firebase';
import RootNavigation from './navigation';

// Самый верхний файл, компонент приложения
export default function App() {
  return (
    <ThemeProvider>
      <RootNavigation />
    </ThemeProvider>
  );
}
