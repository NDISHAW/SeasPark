import React from 'react';
import {InfoMedia} from '../';

const ImageBoxThree = ({imageOne})=> (
  <div className="img-box3">
    <div className="img-1">
      <img src={imageOne} alt="img"/>
    </div>
    {/* <div className="img-2"><img src={imageTwo} alt="About2"/></div> */}
    {/* <InfoMedia className="award-box"
      icon={icon}
      info={title}
      title={number}
    /> */}
  </div>
);

export default ImageBoxThree;