import "./homepage.styles.scss";

import Directory from "../../components/directory/directory.component";
import Container from "@material-ui/core/Container";

const HomePage = () => (
  <div className="homepage">
    <Container className="contentArea">
      
      <div>
        <Directory />
      </div>
    </Container>
  </div>
);

export default HomePage;
