import "./menu-item.styles.scss";
import {withRouter} from 'react-router-dom'

const MenuItem = ({ title, imageUrl, importance, history, linkUrl, match }) => (
  // get history object from withRouter, access it to provide dynamic url
  <div className={`${importance} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title}</h1>
      {/* <span className="subtitle">SHOP NOW</span> */}
    </div>
  </div>
);

export default withRouter(MenuItem);
