import Aos from "aos";
import "aos/dist/aos.css";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import { Router } from "./Router";

const App = () => {
  Aos.init({
    duration: 2500,
    delay: 400,
  });
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
};
export default App;
