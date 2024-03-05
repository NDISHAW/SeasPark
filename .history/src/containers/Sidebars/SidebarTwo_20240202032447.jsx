import React from 'react';
import {
  Widget, 
  CategoryWidget,
  BannerWidget
} from '../../components';


// Widgets Data
import widgetsData from '../../data/widgets.json';
const {categoryList, workinghours} = widgetsData;

const SidebarTwo = ({className})=> (
  <aside className={`service-sidebar ${className || ''}`}>
    {/* <Widget widgetTitle="All Services" className="widget_nav_menu">
      <CategoryWidget>
        {categoryList.map(cat => (
          <CategoryWidget.Item key={cat} path="/service-details">{cat}</CategoryWidget.Item>
        ))}
      </CategoryWidget>
    </Widget> */}
    <Widget widgetTitle="Working Hours"  className="widget-workhours">
      <CategoryWidget>
        {workinghours.map((item, index) => (
          <CategoryWidget.Item key={index} path="/"><i className="fal fa-clock"/>{item}</CategoryWidget.Item>
        ))}
      </CategoryWidget>
    </Widget>    
    <BannerWidget 
      title="Have Any Query?"
      image="images/widget/quote-box.jpg"
      btnText="Get A Demo"
      path="/contact"
    />
  </aside>
);

export default SidebarTwo;