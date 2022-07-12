import { ChakraProvider, theme } from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
import DashboardRoutes from "./routes";
import "./App.css";
export const App = () => (
  <ChakraProvider theme={theme}>
    <DashboardRoutes />
    {/* 
        <ColorModeSwitcher justifySelf="flex-end" />
       
    */}
  </ChakraProvider>
);
