import React from 'react';

const styles = {
    image: {
        height: "110px",
        width: "110px",
        borderRadius: "4px",
        background: "#ccc"
    }
};

class CartItem extends React.Component{
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img src="" alt="" style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: "25px"}}>Phone</div>
                    <div style={{color: "#777"}}>Rs 999</div>
                    <div style={{color: "#777"}}>Qty: 1</div>
                    <div className="cart-item-actions">
                        
                    </div>
                </div>

            </div>
        );
    }
}

export default CartItem;