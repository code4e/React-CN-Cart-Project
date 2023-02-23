import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import TotalPrice from './TotalPrice';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [{
        title: "Phone",
        price: 999,
        qty: 2,
        img: "item",
        id: 1
      },
      {
        title: "Laptop",
        price: 1999,
        qty: 4,
        img: "item",
        id: 2
      },
      {
        title: "Fridge",
        price: 1000,
        qty: 3,
        img: "item",
        id: 3
      }]
    };
  }
  render() {
    const { items } = this.state;
    const cartItemCount = items.reduce((accumulator, currentItem) => currentItem.qty + accumulator, 0);
    const cartTotalPrice = items.reduce((accumulator, currentItem) => (currentItem.qty * currentItem.price) + accumulator, 0);

    const updateItemsHandler = (newItem) => {
      let newItems = [];
      let itemIdx = items.findIndex(item => item.id === newItem.id);
      if (itemIdx !== -1) {
        newItems = [...items];
        newItems[itemIdx] = newItem;
        this.setState({ items: newItems });
      }


    }

    const deleteItemHandler = (id) => {
      let newItems = items.filter(item => item.id !== id);
      this.setState({ items: newItems });
    }

    return (<div className="App">
      <Navbar itemsCount={cartItemCount}/>
      <Cart
        items={items}
        onUpdateItems={updateItemsHandler}
        onDeleteItems={deleteItemHandler}
      />
      <TotalPrice cartTotalPrice={cartTotalPrice}/>
    </div>
    );
  }
}

export default App;
