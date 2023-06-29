import React from 'react';

import {
  Box,
  Button,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react';

import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

export default function Home() {
  const homeFeatured = ['1.png', '2.png', '3.png', '4.png', '5.png'];
  const hfSize = window.innerWidth - 80;
  const homePromo = [
    {
      src: '1.png',
      title: 'Monday Mood Booster Buy 1 Get 1 FREE',
      desc: 'Diskon setiap hari senin dengan menggunakan debit BCA',
      exp: 'Expire on 31 January 2024',
    },
    {
      src: '2.png',
      title: 'Starbucks Fun Out Loud Buy 1 Get 1 FREE',
      desc: 'Khusus di hari Senin ini, kamu pun bisa dapetin promo diskon 10% dengan bertransaksi menggunakan kartu debit BCA.',
      exp: 'Expire on 31 January 2024',
    },
    {
      src: '3.png',
      title: 'Promo Starbucks 21st Anniversary',
      desc: 'Lorem ipsum dolor sit amet consectetur. Dictumst tempor tellus.',
      exp: 'Expire on 31 January 2024',
    },
  ];

  return (
    <VStack id={'appContainer'}>
      <HStack w={'100%'} flexShrink={0} p={4} justifyContent={'space-between'}>
        <Box>
          <Text fontSize={'20px'} fontWeight={800}>
            George Lee
          </Text>
          <HStack gap={1} color={'primary.500'}>
            <Text>50</Text>
            <Icon fontSize={'16px'} mb={'1px'} as={StarRateRoundedIcon} />
            <Text>Green Level</Text>
          </HStack>
        </Box>
        <Button size={'lg'} borderRadius={'100%'} w={'50px'}>
          <Icon fontSize={'26px'} as={MailOutlinedIcon} />
        </Button>
      </HStack>
      <Box overflow={'auto'} w={'100%'} h={'100%'} px={4} pt={'13px'}>
        <HStack
          bgImage={'./cardBalance.png'}
          bgSize={'cover'}
          w={'100%'}
          p={4}
          borderRadius={'8px'}
          justifyContent={'space-between'}
          mb={4}
        >
          <Box>
            <Text fontSize={'10px'} color={'primary.50 !important'}>
              Card Balance
            </Text>
            <Text color={'white !important'} fontSize={'25px'} fontWeight={800}>
              Rp 200.000
            </Text>
          </Box>
          <Button
            className="btn"
            pl={'8px !important'}
            leftIcon={<AddRoundedIcon />}
            color={'primary.500'}
          >
            Top Up
          </Button>
        </HStack>

        <Box w={'100%'} overflow={'auto'} mb={4}>
          <HStack w={'max-content'}>
            {homeFeatured?.map((f, index) => {
              return (
                <Box key={index} maxW={'365px'} w={hfSize}>
                  <Image src={'./homeFeatured/' + f} />
                </Box>
              );
            })}
          </HStack>
        </Box>

        <HStack mb={4}>
          <Button w={'50%'} className="btn primaryBtn">
            <Image
              src="./coffeCup.png"
              position={'absolute'}
              top={'-20px'}
              left={'20px'}
            />
            <Text fontWeight={600} pl={'40px'}>
              Order
            </Text>
          </Button>
          <Button w={'50%'} className="btn primaryBtn">
            <Image
              src="./location.png"
              position={'absolute'}
              top={'-20px'}
              left={'20px'}
            />
            <Text fontWeight={600} pl={'40px'}>
              Location
            </Text>
          </Button>
        </HStack>

        <Text fontWeight={800} mb={4}>
          Promo
        </Text>

        <Box>
          {homePromo?.map((p, index) => {
            return (
              <HStack key={index} mb={4} p={4} className="bs" gap={5}>
                <Image
                  w={'90px'}
                  src={'./homePromo/' + p?.src}
                  flexShrink={0}
                />
                <Box>
                  <Text fontWeight={700} mb={'4px'}>
                    {p?.title}
                  </Text>
                  <Box>
                    <Text fontSize={'13px'} fontWeight={400} noOfLines={2}>
                      {p?.desc}
                    </Text>
                  </Box>
                  <Text fontSize={'10px'} color={'primary.300'}>
                    {p?.exp}
                  </Text>
                </Box>
              </HStack>
            );
          })}
        </Box>
      </Box>
    </VStack>
  );
}
