import { GlobalProvider } from '@/context/GlobalProvider';
import { Stack } from 'expo-router';
import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {
  
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{headerShown : false}}/>
      </Stack>
      </GlobalProvider>
  );
}
