import React, { useContext } from 'react';

import { MdMenu, MdShoppingBasket } from 'react-icons/md';

import { Flex, Icon, Image, Text } from '@chakra-ui/react';

import { ShopContext } from '../context/shopContext';

const NavBar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex backgroundColor='#FFA8E2' flexDir='row' justifyContent='space-between' p='2rem'>
      <Icon fill='white' cursor='pointer' as={ MdMenu } w={ 30 } h={ 30 }/>
      <Text>Logo</Text>
      <Icon fill='white' cursor='pointer' as={ MdShoppingBasket } w={ 30 } h={ 30 }
        onClick={() => openCart() }/>
    </Flex>
  )
}

export default NavBar