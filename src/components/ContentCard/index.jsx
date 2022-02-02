import React, { Fragment } from "react";

import { IMAGE_BASE_URL, removeBaseURL} from "helpers/image"

import "./styles.scss"

function ContentCard({name, image, categories, experts}){
  const categoriesName = categories?.map?.(item => item?.name).join(', ');
  return (
    <div className="content-card-banner">
      <img src={`${IMAGE_BASE_URL}resize/250x/${removeBaseURL(image?.uri)}`} alt="card" className="card-image"/>
      <div className="text-container">
        <p className="edge-name">{name}</p>
        <p className="category-name">{categoriesName}</p>
        {experts?.map((expert, index) => (
          <div key={index} className="expert-details">
            <p className="user-name">{`${expert?.firstName} ${expert?.lastName}`}</p>
            <p className="user-title">{expert?.title}</p>
            <p className="user-compnay">{expert?.company}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContentCard;
