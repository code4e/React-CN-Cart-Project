import React from "react";

class TotalPrice extends React.Component {
    render () {
        return (
            <div className="price-container">
                <h2>Total</h2>
                <h4>Rs. {this.props.cartTotalPrice}</h4>
            </div>
        );
    }
}

export default TotalPrice;