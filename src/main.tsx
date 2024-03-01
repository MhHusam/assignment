import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import Layout from "./components/Layout/Layout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Layout>
      <App />
    </Layout>
  </Provider>
);