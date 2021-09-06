import React from "react";

import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl, dateSold, isSold }) => (
  <div className={"collection-item"}>
    <div
      className={`image ${isSold ? "sold" : ""}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    {isSold ? (
      <div className="collection-footer">
        <span className="name">sold {dateSold.toLowerCase()}</span>
        <span className="price">{price}</span>
      </div>
    ) : (
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    )}
  </div>
);

export default CollectionItem;
