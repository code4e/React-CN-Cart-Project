import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
 

    render() {
        const {items, onUpdateItems, onDeleteItems} = this.props;

        return (
            <ul className='cart'>
                {
                    items.map(item => <CartItem key={item.id} item={item} updateItems={onUpdateItems} deleteItem={onDeleteItems}/> )
                }
            </ul>
        );
    }
}

export default Cart;