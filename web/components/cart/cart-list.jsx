import React, { Component, PropTypes } from 'react'
import CartItem from './cart-item'

class CartList extends Component {
  static propTypes = {
    cartList: PropTypes.arrayOf(React.PropTypes.object),
  }

  static defaultProps = {
    cartList: [],
  }

  constructor(props) {
    super(props)
    this.state = {}
    console.log(this.props)
  }

  render() {
    console.log('CartList')
    console.log(this.props)
    console.log(this.props.cartList)
    if (!this.props.cartList) {
      return null
    }

    return (
      <div>
        {
          this.props.cartList.map(cart => (
            <CartItem
              className="cartItem"
              productId={cart.productId}
              createdAt={cart.createdAt}
              updatedAt={cart.updatedAt}
              userId={cart.userId}
              key={cart.createdAt}
            />
          ))
        }
      </div>
    )
  }
}

export default CartList
