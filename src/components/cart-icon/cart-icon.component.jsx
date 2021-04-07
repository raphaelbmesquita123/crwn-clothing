import React from 'react'
import './cart-icon.styles.scss'
import { connect } from 'react-redux'
import{ toggleCartHidden } from '../../redux/cart/cart.actions'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'


const CartIcon = ({ toggleCartHidden }) => {
    return(
        <div className="cart-icon" onClick={ toggleCartHidden }>
            <ShoppingIcon className="shopping-icon" />
            <spn className="item-count">0</spn>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)