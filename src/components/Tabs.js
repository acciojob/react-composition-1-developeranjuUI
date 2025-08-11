
import React, { useState } from "react";
import './../styles/App.css';

const Tabs = ({tabs}) => {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
        <ul>
          {tabs.map((tab, index)=>(
            <li 
            key={index}
            style={{ cursor: 'pointer'}}
            onClick={() => setActiveTab(index)}
            >{tab.title}</li>
          ))}
        </ul>
        <p>{tabs[activeTab]?.content}</p>
    </div>
  )
}

export default Tabs;
