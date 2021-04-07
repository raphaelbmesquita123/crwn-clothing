import React from 'react'
import CustomButtom from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'

const CartDropDown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <CustomButtom>GO TO CHECKOUT</CustomButtom>
        </div>
    )
}

export default CartDropDown