import '@/global.css';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background p-4">
      <Text className="text-xl font-bold text-success">Welcome to Nativewind!</Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary p-4 text-white">
        Go to Onboarding
      </Link>
      <Link href="/sign-up" className="mt-4 rounded bg-primary p-4 text-white">
        Sign-Up
      </Link>
      <Link href="/sign-in" className="mt-4 rounded bg-success p-4 text-white">
        Sign In
      </Link>

      <Link href="/subscriptions/spotify" className="mt-4 rounded bg-success p-4 text-white">
        Spotify Subscription
      </Link>
      <Link
        href={{
          pathname: '/subscriptions/[id]',
          params: { id: 'claude' },
        }}
        className="mt-4 rounded bg-success p-4 text-white"
      >
        Claude Max Subscription
      </Link>
    </View>
  );
}
