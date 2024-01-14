import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0]);

  return (
    <div className="tabs">
      <ul className="tab-list">
        {children.map((child) => (
          <li
            key={child.label}
            className={`tab ${activeTab.label === child.label ? 'active' : ''}`}
            onClick={() => setActiveTab(child)}
          >
            {child.label}
          </li>
        ))}
      </ul>
      <div className="tab-content">{activeTab.content}</div>
    </div>
  );
};

export default Tabs;
