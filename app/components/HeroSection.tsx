'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'

export default function HeroSection() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'green.400',
                zIndex: -1,
              }}>
              Zavia
            </Text>
            <br />{' '}
            <Text color={'green.400'} as={'span'}>
              Conectamos a los protagonistas de la transición energética
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            La plataforma que une a proveedores, compradores y operadores logísticos en el sector de energía renovable.  
            Forma parte de la nueva economía circular y transforma el UCO en una oportunidad sostenible.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }}>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdyLoIb1m_gDxI8RGhBKtmKC3MBJxziee0BUmirw90VO-Z-ZQ/viewform?usp=dialog" >
              <Button 
                rounded={'full'} 
                bg={'green.400'} 
                color={'white'} 
                _hover={{ bg: 'green.500' }}
              >
                Únete a la lista de espera
              </Button>
            </Link>
          </Stack>
        </Stack> 
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Cocina profesional'}
          objectFit={'cover'}
          src={
            'https://theoctopusguide.discefa.com/wp-content/uploads/2021/06/caracteristicas-ideales-que-deben-tener-una-cocina.jpg'
          }
        />
      </Flex>
    </Stack>
  )
}
