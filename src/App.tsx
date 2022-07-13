import { ChakraProvider, theme } from "@chakra-ui/react";
import DashboardRoutes from "./routes";
import "./App.css";
import { AppContextProvider } from "./context/AppContext";
export const App = () => (
  <ChakraProvider theme={theme}>
    <AppContextProvider>
      <DashboardRoutes />
    </AppContextProvider>
  </ChakraProvider>
);
