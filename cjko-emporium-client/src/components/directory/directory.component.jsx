import React from "react";
import { Component } from "react";

import "./directory.styles.scss";

import MenuItem from "../../components/menu-item/menu-item.component";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "music equipment",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/music-gear",
        },
        {
          title: "misc.",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/misc",
        },
        {
          title: "clothing",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/clothing",
        },
        {
          title: "services",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          importance: "large",
          id: 4,
          linkUrl: "shop/services",
        },
        {
          title: "charity",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          importance: "large",
          id: 5,
          linkUrl: "shop/charity",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory">
        {this.state.sections.map(({title, imageUrl, id, importance}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} importance={importance} />
        ))}
      </div>
    );
  }
}

export default Directory;
