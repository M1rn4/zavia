'use client'

import { ReactNode } from 'react'
import { Stack, Container, Box, Flex, Text, Heading, SimpleGrid } from '@chakra-ui/react'

export default function Features() {
  return (
    <Box bg={'gray.800'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
    
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}>
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                Economía Circular
              </Text>
              <Heading color={'white'} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
                Conectando el Mercado de UCO con Tecnología
              </Heading>
              <Text fontSize={'xl'} color={'gray.400'}>
                Zavia es el primer marketplace digital de UCO en Perú, donde proveedores, 
                recolectores y compradores industriales se conectan para optimizar la comercialización 
                y trazabilidad del aceite usado, asegurando eficiencia, cumplimiento normativo y 
                sostenibilidad.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} >
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text fontFamily={'heading'} fontSize={'3xl'} color={'white'} mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.400'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  )
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
)

const stats = [
  {
    title: '100,000+',
    content: (
      <>
        <StatsText>Toneladas de UCO</StatsText> generadas anualmente en Perú, con alto 
        potencial para la producción de biodiésel.
      </>
    ),
  },
  {
    title: '1,500+',
    content: (
      <>
        <StatsText>Toneladas de UCO</StatsText> transaccionadas en nuestra plataforma, asegurando
        trazabilidad y cumplimiento normativo.
      </>
    ),
  },
  {
    title: '500+',
    content: (
      <>
        <StatsText>Proveedores</StatsText> registrados, incluyendo restaurantes, hoteles 
        y empresas del sector alimentario.
      </>
    ),
  },
  {
    title: '50+',
    content: (
      <>
        <StatsText>Recolectores y Transportistas</StatsText> optimizando la logística 
        y distribución del UCO en todo el país.
      </>
    ),
  },
]
