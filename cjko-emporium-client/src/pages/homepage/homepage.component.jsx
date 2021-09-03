import "./homepage.styles.scss";

import Directory from "../../components/directory/directory.component";
import Container from "@material-ui/core/Container";
import Typing from "react-typing-animation";

const HomePage = () => (
  <div className="homepage">
    <Container className="contentArea">
      <Container>
        <i>
          <h4>
            An exercise in...
            <Typing speed={100} loop={true}>
              minimalism.
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={30} />
              patience.
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={30} />
              letting go.
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={30} />
              discovery.
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={30} />
            </Typing>
          </h4>
        </i>
      </Container>
      <div>
        <Directory />
      </div>
    </Container>
  </div>
);

export default HomePage;
