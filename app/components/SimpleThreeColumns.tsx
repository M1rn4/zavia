'use client'

import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react'
import { FcFactory, FcBusinessman, FcShipped } from 'react-icons/fc' 

interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={'vw'}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default function SimpleThreeColumns() {
  return (
    <Box p={4} w={'full'}>
      <SimpleGrid columns={{ base: 1, md: 3 }}>
        <Feature
          icon={<Icon as={FcFactory} w={10} h={10} />}
          title={'Proveedores de UCO'}
          text={
            'Restaurantes, hoteles y negocios venden su aceite usado en Zavia para monetizarlo y cumplir normativas ambientales.'
          }
        />
        <Feature
          icon={<Icon as={FcBusinessman} w={10} h={10} />}
          title={'Compradores de UCO'}
          text={
            'Empresas como BioEnergy publican órdenes de compra y reciben UCO con trazabilidad y seguridad garantizada.'
          }
        />
        <Feature
          icon={<Icon as={FcShipped} w={10} h={10} />}
          title={'Recolectores de UCO'}
          text={
            'Transportistas especializados compiten por rutas de recolección y optimizan la logística del UCO con eficiencia.'
          }
        />
      </SimpleGrid>
    </Box>
  )
}
