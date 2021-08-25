import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import "./App.scss";

const MusicEquip = () => <h1>hats dawg.</h1>;

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cart" component={HomePage} />

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
