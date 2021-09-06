import { Switch, Route } from "react-router-dom";

import "./App.scss";

import HomePage from "./pages/homepage/homepage.component";
// import CartPage from "./pages/"
import ShopPage from "./pages/shop/shop.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component"

import NavBar from "./components/nav-bar/nav-bar.component"
const MusicEquip = () => <h1>hats dawg.</h1>;

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/cart" component={CartPage} /> */}
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/login" component={SignInSignUpPage} />
        

        <Route exact path="/shop/music-gear/" component={MusicEquip} />
        <Route exact path="/shop/music-gear/:id" component={MusicEquip} />
        <Route exact path="/shop/misc/" component={MusicEquip} />
        <Route exact path="/shop/misc/:id" component={MusicEquip} />
        <Route exact path="/shop/clothing/" component={MusicEquip} />
        <Route exact path="/shop/clothing/:id" component={MusicEquip} />
        <Route exact path="/shop/misc/" component={MusicEquip} />
        <Route exact path="/shop/misc/:id" component={MusicEquip} />
      </Switch>
    </>
  );
}

export default App;
