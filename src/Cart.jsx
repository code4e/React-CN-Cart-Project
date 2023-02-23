import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {items: [{
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
        }]};
    }

    render() {
        const {items} = this.state;
        const updateItemsHandler = (newItem) => {
            // console.log(newItem);
            // let newItems = [...items.filter(item => item.id !== newItem.id), newItem];
            // this.setState({ items : newItems })
            let newItems = [];
            let itemIdx = items.findIndex(item => item.id === newItem.id);
            if(itemIdx !== -1){
                newItems = [...items];
                newItems[itemIdx] = newItem;
                this.setState({ items : newItems });
            }


        }

        const deleteItemHandler = (id) => {
            let newItems = items.filter(item => item.id !== id);
            this.setState({ items : newItems });
        }
        return (
            <div className='cart'>
                {
                    items.map(item => <CartItem key={item.id} item={item} updateItems={updateItemsHandler} deleteItem={deleteItemHandler}/> )
                }
            </div>
        );
    }
}

export default Cart;