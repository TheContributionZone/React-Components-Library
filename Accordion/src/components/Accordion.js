import React, { useState } from 'react'; // NOTE useState Returns a stateful value, and a function to update it.

const Accordion = ({ items }) => {
  // NOTE call useState function:
  const [activeIndex, setActiveIndex] = useState(null);

  // NOTE event handler:
  const onTitleClick = (index) => {
    // NOTE call setter to update piece of state and provide new value (such as count + 1 or index)
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.title}>
        {/* <div className={"title" + active} onClick={() => onTitleClick(index)}> */}
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  );
};

export default Accordion;
