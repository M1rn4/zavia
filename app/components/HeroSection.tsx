'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  StackProps,
  Text,
  useBreakpointValue,
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
                height: useBreakpointValue({ base: '10%', md: '30%' }),
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
            Conectamos a quienes están transformando el futuro energético
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            La plataforma ideal para conectar con proyectos exclusivos en energía renovable. Unete a nuestra lista de espera si eres proveedor, comprador o te encargas de la logista.
          </Text>
          {/* <Stack direction={{ base: 'column', md: 'row' }}>
            <Button
              rounded={'full'}
              bg={'green.400'}
              color={'white'}
              _hover={{
                bg: 'green.500',
              }}>
              Publicar proyecto
            </Button>
            <Button rounded={'full'}>Adiconar a la lista </Button>
          </Stack>
        </Stack> */}
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://theoctopusguide.discefa.com/wp-content/uploads/2021/06/caracteristicas-ideales-que-deben-tener-una-cocina.jpg'
          }
        />
      </Flex>
    </Stack>
  )
}
