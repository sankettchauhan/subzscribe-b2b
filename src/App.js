import Navbar from "./components/Navbar";
import home from "./components/Home/home";
import Blog from "./components/Blog/Blog";
import { BrowserRouter, Route } from "react-router-dom";

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
      </BrowserRouter>
    </div>
  );
}

export default App;
