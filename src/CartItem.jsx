import React from 'react';

const styles = {
    image: {
        height: "110px",
        width: "110px",
        borderRadius: "4px",
        background: "#ccc"
    }
};

class CartItem extends React.Component {
    constructor() {
        super();
        
        this.state = {
            title: "Phone",
            price: 999,
            qty: 2,
            img: "item"
        }

    }

    qtyHandler = e =>  {
        let qtyChecker = e.target.alt;
        // console.log(this.props);
        let { qty } = this.props.item;
        if(this.props.item.qty === 0 && qtyChecker === "decrease") return; 
        let newQty = qty + (qtyChecker === "decrease" ? -1 : 1);
        let newItemState = {
            ...this.props.item,
            qty: newQty
        }
        this.props.updateItems(newItemState);
        // if(this.state.qty === 0 && qtyChecker === "decrease") return; 
        // this.setState(prevState => ({ qty: prevState.qty + ( qtyChecker === "decrease" ? -1 : 1)}));
    }

    deleteItemHandler = e => {
        let { id } = this.props.item;
        this.props.deleteItem(id);
    }

    render() {
        const { title, price, qty } = this.props.item;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img src="" alt="" style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: "25px" }}>{title}</div>
                    <div style={{ color: "#777" }}>Rs {price}</div>
                    <div style={{ color: "#777" }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" onClick={this.qtyHandler} alt="decrease" className='action-icons' />
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png"  onClick={this.qtyHandler} alt="increase" className='action-icons' />
                        <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="delete" onClick={this.deleteItemHandler} className='action-icons' />
                    </div>
                </div>

            </div>
        );
    }
}

export default CartItem;