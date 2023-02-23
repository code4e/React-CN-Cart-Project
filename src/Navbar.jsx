import React from 'react';

class Navbar extends React.Component{
    render() {
        
        const { itemsCount } = this.props;
        return (
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" style={styles.cartIcon} alt="cart-icon" />
                    <span style={styles.cartCount}>{itemsCount}</span>
                </div>
            </div>
        );
    }
}

const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20,
        padding: 10
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9,
        margin: 10
    }
};

export default Navbar;