import Navbar from "./Navbar";
import home from "./Home/home";
import Blog from "./Blog/Blog";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./Footer";
import Container from "./User/Container";

const BlogWithLink = ({ match, location, history }) => (
  <Blog blogTitle={match.params.blogTitle} />
);

const Main = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/blogs/:blogTitle" component={BlogWithLink} />
        <Route
          exact
          path="/login"
          component={() => <Container type="login" />}
        />
        <Route
          exact
          path="/signup"
          component={() => <Container type="signup" />}
        />
        <Route exact path="/" component={home} />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Main;
