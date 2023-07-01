import React, { useState } from 'react';

import {
  VStack,
  HStack,
  Text,
  Box,
  Image,
  Progress,
  Button,
  Input,
  Modal,
  ModalContent,
  ModalBody,
  Icon,
  ModalOverlay,
  useDisclosure,
  ModalHeader,
} from '@chakra-ui/react';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

import { Nav } from '../myComponents';

export default function Reward() {
  const validPromotionCode = 'sb1234';
  const [promotionCode, setpromotionCode] = useState('');
  const [promotionCodeValid, setpromotionCodeValid] = useState(false);

  const reward = [
    {
      src: '1.png',
      name: 'A Great Start For You At Starbucks',
      desc: 'Lorem ipsum dolor sit amet consectetur. Dictumst tempor tellus.',
      exp: 'Expire on 30 Agust 2023',
    },
    {
      src: '2.png',
      name: 'BUY 1 GET 1 FREE for your first Top up',
      desc: 'Lorem ipsum dolor sit amet consectetur. Dictumst tempor tellus.',
      exp: 'Expire on 30 July 2023',
    },
  ];
  const sk = [
    'Promo berlaku SETIAP HARI berupa potongan harga Rp5000,- untuk pembelian minuman jika menggunakan tumbler official Starbucks.',
    'Minuman yang tidak bisa mengikuti promo: Special price, Manual Brew, Reserve, Ice Cream Series.',
    'Promo berlaku untuk transaksi Dine In, Take Away dan Drive-Thru di gerai Starbucks.',
    'Berlaku di seluruh gerai Starbucks Indonesia, kecuali gerai airport dan Starbucks Reserve Dewata.',
    'Berlaku untuk semua jenis metode pembayaran.',
    'Promo tidak berlaku untuk penukaran Rewards Starbucks Rewards.',
    ' Promo tidak dapat digabungkan dengan promo lainnya.',
  ];

  const RewardDetails = props => {
    const r = props?.r;
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <HStack onClick={onOpen} gap={4} p={4} className="bs" mb={4}>
          <Image w={'70px'} src={'./rewards/' + r?.src} />
          <Box>
            <Text noOfLines={2} fontWeight={700} mb={1}>
              {r?.name}
            </Text>
            <Text
              opacity={0.8}
              fontWeight={400}
              noOfLines={1}
              fontSize={'13px'}
              mb={1}
            >
              {r?.desc}
            </Text>
            <Text fontSize={'10px'}>{r?.exp}</Text>
          </Box>
        </HStack>

        <Modal
          isOpen={isOpen}
          size={'full'}
          onClose={onClose}
          motionPreset="slideInRight"
        >
          <ModalContent>
            <ModalHeader className="modalProps bs">
              <HStack>
                <Icon
                  onClick={onClose}
                  w={'20px'}
                  mt={'2px'}
                  mr={2}
                  as={ArrowBackIosNewRoundedIcon}
                />
                <Text fontSize={'20px'} fontWeight={800}>
                  Promo
                </Text>
              </HStack>
            </ModalHeader>
            <ModalBody className="modalProps" p={0} overflow={'auto'}>
              <Box p={4}>
                <Image src={'./rewards/details/' + r?.src} />
              </Box>

              <Box px={4}>
                <Text fontWeight={800}>TUMBLER DAY</Text>
                <Text fontSize={'10px'} mb={4}>
                  Expire on 30 January 2024
                </Text>

                <Text fontSize={'13px'} mb={4}>
                  Tumbler Day jadi cukup spesial karena selain memberikan
                  potongan 30-50% setiap hari Kamis dan tanggal 22 setiap bulan
                  untuk minuman favorit kepada pelanggan jika membawa tumbler
                  official Starbucks, program ini juga merupakan salah satu
                  langkah Starbucks untuk mengurangi penggunaan plastik sekali
                  pakai di gerai.
                </Text>

                <Text fontSize={'13px'} fontWeight={700} mb={2}>
                  Syarat dan ketentuan TUMBLER DAY:
                </Text>
                {sk?.map((s, index) => {
                  return (
                    <HStack
                      key={index}
                      fontSize={'13px'}
                      alignItems={'flex-start'}
                      mb={1}
                    >
                      <Text>{index + 1 + '.'}</Text>
                      <Text>{s}</Text>
                    </HStack>
                  );
                })}
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  };

  return (
    <VStack id="appContainer">
      <Nav />
      <HStack className="bs" w={'100%'} borderRadius={0}>
        <Text fontSize={'20px'} p={4} fontWeight={800}>
          Starbucks Rewards
        </Text>
      </HStack>
      <Box w={'100%'} h={'100%'} p={4} overflow={'auto'}>
        <Box
          w={'100%'}
          h={'210px'}
          p={4}
          bgImage={'./rewardCard.png'}
          bgPosition={'center'}
          bgSize={'cover'}
          borderRadius={'8px'}
          color={'white'}
          mb={4}
        >
          <HStack justifyContent={'space-between'}>
            <Text fontSize={'13px'}>Star Balance</Text>
            <Text>Green Level</Text>
          </HStack>
          <HStack mb={2}>
            <Text fontSize={'25px'} fontWeight={700}>
              50
            </Text>
            <Image w={'16px'} src="./rewardStar.png" />
          </HStack>

          <Progress
            value={25}
            colorScheme="voundation"
            borderRadius={'10px'}
            mb={1}
          />
          <HStack fontSize={'10px'} justifyContent={'space-between'} mb={4}>
            <Text>25</Text>
            <Text>50</Text>
            <Text>100</Text>
            <Text>200</Text>
            <Text>400</Text>
          </HStack>

          <HStack justifyContent={'center'} fontSize={'10px'} mb={4}>
            <Text>50</Text>
            <Image w={'8px'} src="./rewardCardWhiteStar.png" />
            <Text>to Next reward</Text>
          </HStack>

          <HStack>
            <Button color={'primary.500'} className="btn" w={'50%'} h={'36px'}>
              History
            </Button>
            <Button color={'primary.500'} className="btn" w={'50%'} h={'36px'}>
              Redeem
            </Button>
          </HStack>
        </Box>

        <Text fontWeight={800} mb={4}>
          Promotion Code
        </Text>

        <HStack mb={4}>
          <Input
            onChange={e => {
              setpromotionCode(e.target.value);
            }}
            value={promotionCode}
            className="input"
            placeholder="E-code"
            _placeholder={{ fontSize: '13px' }}
          />
          <Button
            onClick={() => {
              if (promotionCode === validPromotionCode) {
                setpromotionCodeValid(true);
                setTimeout(() => {
                  setpromotionCodeValid(false);
                }, 3000);
              }
            }}
            className="btn primaryBtn"
            w={'100px'}
          >
            Apply
          </Button>
        </HStack>

        <Modal
          isOpen={promotionCodeValid}
          onClose={() => {
            setpromotionCodeValid(false);
          }}
          isCentered
        >
          <ModalOverlay />
          <ModalContent mx={4}>
            <ModalBody>
              <VStack p={4}>
                <VStack
                  w={'100px'}
                  h={'100px'}
                  bg={'primary.500'}
                  borderRadius={'100%'}
                  justifyContent={'center'}
                  mb={4}
                >
                  <Icon
                    color={'white'}
                    fontSize={'56px'}
                    as={CheckRoundedIcon}
                  />
                </VStack>
                <Text fontWeight={700}>Success</Text>
                <Text fontSize={'13px'} textAlign={'center'}>
                  The promo code you entered has been successfully activated.
                  Enjoy this exclusive promo!
                </Text>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>

        <Text fontWeight={800} mb={4}>
          Rewards (2)
        </Text>

        <VStack gap={null}>
          {reward?.map((r, index) => {
            return <RewardDetails key={index} r={r} />;
          })}
        </VStack>
      </Box>
    </VStack>
  );
}
