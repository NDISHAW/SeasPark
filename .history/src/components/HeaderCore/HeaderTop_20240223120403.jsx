// import React from 'react';

// const HeaderTop = ({children}) => (
//   <div className="header-top">
//     <div className="container">
//       <div className="row align-items-center justify-content-between text-center text-lg-start">
//         {children}
//       </div>
//     </div>
//   </div>
// );

// HeaderTop.Left = ({children})=> (
//   <div className="col-md-auto text-center text-md-start">{children}</div>
// );

// HeaderTop.Right = ({children})=> (
//   <div className="col-auto d-none d-md-block">{children}</div>
// );


// export default HeaderTop;




import React, { useState, useEffect } from 'react';

const HeaderTop = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header-top ${isVisible ? '' : 'hidden'}`}>
      <div className="container">
        <div className="row align-items-center justify-content-between text-center text-lg-start">
          {children}
        </div>
      </div>
    </div>
  );
};

HeaderTop.Left = ({ children }) => (
  <div className="col-md-auto text-center text-md-start">{children}</div>
);

HeaderTop.Right = ({ children }) => (
  <div className="col-auto d-none d-md-block">{children}</div>
);

export default HeaderTop;