import React from 'react';

const SecSubTitle = ({children, className})=> (
  <span className={`sec-subtitle ${className || ''}`}>{children}</span>
); 

const SecTitle = ({children, className})=> (
  <h className={`sec-title ${className || ''}`}>{children}</h>
);

const TitleWrap = ({children, className})=> (  
  <div className={`title-area ${className || ''}`}>{children}</div>
);

export {SecSubTitle, SecTitle, TitleWrap}