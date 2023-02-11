import React, { useContext } from 'react';

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Grid,
  Image,
  Text,
  Flex,
  Link
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

import { ShopContext } from '../context/shopContext';

const Cart = () => {
  const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(ShopContext);

  return (
    <>
      <Drawer
        isOpen={isCartOpen}
        placement='right'
        onClose={closeCart}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>

          <DrawerBody>
            {
              checkout && checkout.lineItems && checkout.lineItems.map((item) => {
                console.log('item', item);
                return (
                <Grid templateColumns='repeat(4, 1fr)' gap={1} key={ item.id }>
                  <Flex alignItems='center' justifyContent='center'>
                    <CloseIcon cursor='pointer' onClick={ () => removeLineItem(item.id) }/>
                  </Flex>
                  <Flex alignItems='center' justifyContent='center'>
                    <Image src={ item.variant.image.src }/>
                  </Flex>
                  <Flex alignItems='center' justifyContent='center'>
                    <Text>{ item.title }</Text>
                  </Flex>
                  <Flex alignItems='center' justifyContent='center'>
                    <Text>{ item.variant.price.amount }</Text>
                  </Flex>
                </Grid>
              )})
            }
          </DrawerBody>

          <DrawerFooter>
            <Button w='100%'>
              {/* <Link href={ checkout.webUrl }>Checkout</Link> */}
              {/* console errors if no cart */}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart