import React from "react";

import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, routeName }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toLowerCase()}</h1>

    <h4 className="route-style">/{routeName}</h4>
    <div className="preview">
      {items
        .filter((item, i) => i < 4)
        .map(({ id, ...otherProps }) => (
          <>
            <CollectionItem key={id} {...otherProps} />
          </>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
