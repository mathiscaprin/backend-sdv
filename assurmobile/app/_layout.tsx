import { UserProvider } from "@/contexts/UserContext";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper"

export default function RootLayout() {
  return (
    <PaperProvider>
      <UserProvider>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Homepage" }} />
          <Stack.Screen name="login" options={{ title: "Connexion" }} />
          <Stack.Screen name="sinisters" options={{ title: "Mes Sinistres" }} />
          <Stack.Screen name="sinistre/[id]" options={{ title: "Sinistre"}} />
          <Stack.Screen name="requests" options={{ title: "Mes Dossiers" }} />
          <Stack.Screen name="requests/[id]" options={{ title: "Détails d'un dossier" }} />
        </Stack>
      </UserProvider>
    </PaperProvider>
  );
}