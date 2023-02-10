import React, { Component } from 'react'
import Client from 'shopify-buy';

const ShopContext = React.createContext();

const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
});

export class ShopProvider extends Component {
  state = {
    product: {},
    products: [],
    isCartOpen: false,
    isMenuOpen: false
  };

  componentDidMount() {
    if (!localStorage.checkout_id) {
      this.createCheckout();
    } else {
      this.fetchCheckout(localStorage.checkout_id);
    }
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create();

    localStorage.setItem('checkout-id', checkout.id);

    this.setState({ checkout: checkout });
  }

  fetchCheckout = (checkoutId) => {
    client.checkout.fetch(checkoutId).then((checkout) => {
      this.setState({ checkout: checkout });
    });
  }

  addItemToCheckout = async () => {}

  removeLineItem = async (lineItemId) => {}

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();

    this.setState({ products: products });

    /* client.product.fetchAll().then((products) => {
      this.setState({ products: products });
      console.log(products);
    }); */
  }

  fetchProductWithHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);

    this.setState({ product: product });
  }

  closeCart = () => {}

  openCart = () => {}

  closeMenu = () => {}

  openMenu = () => {}



  render() {
    // console.log(this.state.checkout);
    return (
      <ShopContext.Provider value={{
        ...this.state,
        fetchAllProducts: this.fetchAllProducts,
        fetchProductWithHandle: this.fetchProductWithHandle,
        addItemToCheckout: this.addItemToCheckout,
        removeLineItem: this.removeLineItem,
        closeCart: this.closeCart,
        openCart: this.openCart,
        closeMenu: this.closeMenu,
        openMenu: this.openMenu,
      }}>
        { this.props.children }
      </ShopContext.Provider>
    )
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider