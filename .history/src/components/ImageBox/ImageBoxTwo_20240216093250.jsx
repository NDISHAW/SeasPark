import React from 'react';
import {PlayBtn} from '../';

const ImageBoxOne = ({imageOne, imageTwo, video})=> (
  <div className="img-box2">
    <div className="img-1">
      <img src={imageOne} alt="<a href="https://www.freepik.com/free-vector/blue-web-support-help-page-template-design_9504928.htm#query=question&position=13&from_view=keyword&track=sph&uuid=8b6d8fb6-3699-4bd5-a2bc-3782d789dd7d">Image by starline</a> on Freepik imgOne"/>
    </div>
    {/* <div className="img-2">
      <img src={imageTwo} alt="imgTwo"/>
      <PlayBtn path={video} className="style3 position-center"><i className="fas fa-play"/></PlayBtn>
    </div> */}
  </div>
);

export default ImageBoxOne;