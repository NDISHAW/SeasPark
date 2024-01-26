import React from 'react';

const SecSubTitle = ({children, className})=> (
  <h1></h1>
); 

const SecTitle = ({children, className})=> (
  <h3 className={`sec-title ${className || ''}`}>{children}</h3>
);

const TitleWrap = ({children, className})=> (  
  <div className={`title-area ${className || ''}`}>{children}</div>
);

export {SecSubTitle, SecTitle, TitleWrap}