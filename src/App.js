import Navbar from "./components/Navbar";
import home from "./components/Home/home";
import Blog from "./components/Blog/Blog";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";

const BlogWithLink = ({ match, location, history }) => (
  <Blog blogTitle={match.params.blogTitle} />
)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/blogs/:blogTitle" component={BlogWithLink} />
        <Route exact path="/" component={home} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
