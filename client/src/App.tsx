import { Switch, Route } from "wouter";
import NotFound from "./pages/not-found";
import Home from "./pages/Home";
import ServicePage from "./pages/Services";
import TeamPage from "./pages/Team";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={ServicePage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
