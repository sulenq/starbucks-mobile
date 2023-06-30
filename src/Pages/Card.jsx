import React from 'react';

import AddRoundedIcon from '@mui/icons-material/AddRounded';

import { Text, VStack, Box, HStack, Image, Button } from '@chakra-ui/react';

import { Nav } from '../myComponents';

export default function Card() {
  const cardSize = window.innerWidth - 48;
  const history = [
    { purpose: 'Top Up', date: '12 Mar 2023', total: 'Rp 100.000' },
    { purpose: 'Purchase', date: '12 Mar 2023', total: 'Rp 100.000' },
    { purpose: 'Top Up', date: '12 Mar 2023', total: 'Rp 100.000' },
    { purpose: 'Top Up', date: '12 Mar 2023', total: 'Rp 100.000' },
    { purpose: 'Purchase', date: '12 Mar 2023', total: 'Rp 100.000' },
  ];

  return (
    <VStack id="appContainer">
      <Nav />
      <Box className="bs" p={4} w={'100%'}>
        <Text fontSize={'20px'} fontWeight={800}>
          Starbucks Card
        </Text>
      </Box>

      <VStack overflow={'auto'} h={'100%'} w={'100%'} pb={4}>
        <Box w={'100%'} flexShrink={0} overflow={'auto'} pt={4}>
          <HStack w={'max-content'} gap={5} px={4}>
            <Image w={cardSize} src="./card.png" />
            <Image w={cardSize} src="./addCard.png" />
          </HStack>
        </Box>

        <Text fontWeight={700} color={'primary.500'} mb={4}>
          Manage
        </Text>

        <HStack px={4} w={'100%'} justifyContent={'space-between'} mb={4}>
          <Box>
            <Text alignSelf={'flex-start'} fontSize={'10px'}>
              Balance
            </Text>
            <Text alignSelf={'flex-start'} fontSize={'20px'} fontWeight={800}>
              Rp 100.000
            </Text>
          </Box>
          <Button
            className="btn primaryBtn"
            pl={'8px !important'}
            leftIcon={<AddRoundedIcon />}
            color={'white !important'}
          >
            Top Up
          </Button>
        </HStack>

        <HStack w={'100%'} justifyContent={'space-between'} px={4} mb={2}>
          <Text fontWeight={'800'}>Transaction</Text>
          <Text fontWeight={'800'} color={'primary.500'}>
            Show All
          </Text>
        </HStack>

        <VStack w={'100%'} px={4} gap={4}>
          {history?.map((h, index) => {
            return (
              <HStack
                key={index}
                className="bs"
                p={4}
                w={'100%'}
                justifyContent={'space-between'}
              >
                <Box>
                  <Text fontWeight={700} mb={h?.purpose === 'Purchase' && 1}>
                    {h?.purpose}
                  </Text>
                  {h?.purpose === 'Purchase' && (
                    <Text fontSize={'10px'} fontWeight={300}>
                      Star Earned 4
                    </Text>
                  )}
                </Box>
                <VStack alignItems={'flex-end'} gap={null}>
                  <Text fontSize={'10px'} opacity={0.8} mb={1}>
                    {h?.date}
                  </Text>
                  <Text
                    fontWeight={700}
                    color={h?.purpose === 'Purchase' ? 'primary.500' : 'red'}
                  >
                    {h?.total}
                  </Text>
                </VStack>
              </HStack>
            );
          })}
        </VStack>
      </VStack>
    </VStack>
  );
}
