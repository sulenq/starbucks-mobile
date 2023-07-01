import React from 'react';

import {
  Box,
  Button,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';

import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

import { Nav } from '../myComponents';

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

  const Location = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const locations = [
      {
        name: 'Starbucks Setiabudi Semarang',
        open: '08.00 - 21.00 WIB',
        address:
          'Jl. Setia Budi, Ngesrep, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50262',
      },
      {
        name: 'Starbucks Museum Mandala Semarang',
        open: '08.00 - 21.00 WIB',
        address:
          'Barusari, Semarang Selatan, Semarang City, Central Java 50245',
      },
      {
        name: 'Starbucks Setiabudi Semarang',
        open: '08.00 - 21.00 WIB',
        address:
          'Jl. Pemuda No.150, Sekayu, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50132',
      },
      {
        name: 'Starbucks Setiabudi Semarang',
        open: '08.00 - 21.00 WIB',
        address:
          'Jl. Gajahmada No.111, Miroto, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50134',
      },
    ];

    return (
      <>
        <Button onClick={onOpen} w={'50%'} className="btn primaryBtn">
          <Image
            src="./location.png"
            position={'absolute'}
            w={'34px'}
            top={'-20px'}
            left={'20px'}
          />
          <Text fontWeight={600} pl={'40px'}>
            Location
          </Text>
        </Button>

        <Modal
          isOpen={true}
          onClose={onClose}
          size={'full'}
          motionPreset="slideInRight"
        >
          <ModalContent as={VStack} gap={'0 !important'} h={'100vh'}>
            <ModalHeader flexShrink={0} className="modalProps bs" px={4}>
              <HStack>
                <Icon
                  onClick={onClose}
                  w={'20px'}
                  mt={'2px'}
                  mr={2}
                  as={ArrowBackIosNewRoundedIcon}
                />
                <Text fontSize={'20px'} fontWeight={800}>
                  Location
                </Text>
              </HStack>
            </ModalHeader>
            <ModalBody
              as={VStack}
              gap={null}
              h={'100%'}
              overflow={'auto'}
              className="modalProps"
              p={0}
            >
              <HStack p={4} pb={0}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={SearchOutlinedIcon} />
                  </InputLeftElement>
                  <Input
                    className="input"
                    placeholder="Search store:Tugu muda store"
                    _placeholder={{ fontWeight: 400, fontsize: '13px' }}
                  />
                </InputGroup>
                <Button
                  variant={'ghost'}
                  color={'primary.500'}
                  leftIcon={<MapOutlinedIcon />}
                >
                  Maps
                </Button>
              </HStack>

              <VStack p={4} gap={4}>
                {locations?.map((l, index) => {
                  return (
                    <Box key={index} className="bs" w={'100%'}>
                      <Image src="./locationImg.png" />
                      <Box p={'8px 16px'}>
                        <Text fontWeight={700} mb={1}>
                          {l?.name}
                        </Text>
                        <HStack fontSize={'13px'} mb={3}>
                          <Text color={'primary.500'}>Open</Text>
                          <Text fontWeight={400}>{l?.open}</Text>
                        </HStack>
                        <Text fontSize={'13px'} fontWeight={400}>
                          {l?.address}
                        </Text>
                      </Box>
                      <Box p={'8px 16px'}>
                        <Button
                          className="btn"
                          variant={'ghost'}
                          colorScheme="primary"
                          w={'100%'}
                          color={'primary.500'}
                        >
                          Choose location
                        </Button>
                      </Box>
                    </Box>
                  );
                })}
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  };

  return (
    <VStack id={'appContainer'}>
      <Nav />
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

      <Box overflow={'auto'} w={'100%'} h={'100%'} pt={'13px'}>
        <Box px={4}>
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
              <Text
                color={'white !important'}
                fontSize={'25px'}
                fontWeight={800}
              >
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
        </Box>

        <Box px={4} w={'100%'} overflow={'auto'} mb={6}>
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

        <HStack px={4} mb={4}>
          <Button w={'50%'} className="btn primaryBtn">
            <Image
              src="./coffeCup.png"
              position={'absolute'}
              w={'40px'}
              top={'-20px'}
              left={'20px'}
            />
            <Text fontWeight={600} pl={'40px'}>
              Order
            </Text>
          </Button>

          <Location />
        </HStack>

        <Text px={4} fontWeight={800} mb={4}>
          Promo
        </Text>

        <Box px={4}>
          {homePromo?.map((p, index) => {
            return (
              <HStack key={index} mb={4} p={4} className="bs" gap={5}>
                <Image
                  w={'90px'}
                  src={'./homePromo/' + p?.src}
                  flexShrink={0}
                />
                <Box>
                  <Text fontWeight={700} mb={1}>
                    {p?.title}
                  </Text>
                  <Text mb={1} fontSize={'13px'} fontWeight={400} noOfLines={2}>
                    {p?.desc}
                  </Text>
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
