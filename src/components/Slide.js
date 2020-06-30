import React, { Component } from 'react';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableItem = sortableElement(({ value }) => (
  <div
    className="Showcase__style__item Showcase__style__stylizedItem"
    style={{ height: '57px' }}
  >
    {value}
  </div>
));

const SortableContainer = sortableContainer(({ children }) => {
  return (
    <div className="nav nav-sidebar">
      <div className="Showcase__style__list Showcase__style__stylizedList">
        {children}
      </div>
    </div>
  );
});

class Slide extends Component {
  state = {
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
      'Item 6',
      'Item 7',
      'Item 8',
      'Item 9',
      'Item 10',
      'Item 11',
    ],
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };

  render() {
    const { items } = this.state;

    return (
      <SortableContainer onSortEnd={this.onSortEnd}>
        {items.map((value, index) => (
          <SortableItem
            key={`item-${value}`}
            index={index}
            value={value}
            sortIndex={index}
          />
        ))}
      </SortableContainer>
    );
  }
}

export default Slide;
