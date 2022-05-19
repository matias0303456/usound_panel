import Layout from "./app_components/layout/Layout";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <Layout>
        <Router />
      </Layout>
    </div>
  );
}

export default App;
