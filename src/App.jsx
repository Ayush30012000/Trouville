import { Switch, Route } from "wouter";
import Navigation from "./Components/Navigation.jsx";
import Footer from "./Components/Footer.jsx"
import Home from "./pages/Home.jsx";
import Packages from "./pages/Packages.jsx";
import Gallery from "./pages/Gallery.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/packages" component={Packages} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route>
            <div className="pt-16 min-h-screen flex items-center justify-center">
              <h1 className="text-4xl font-bold text-[#22223b]">Page Not Found</h1>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;