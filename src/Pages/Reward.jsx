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
} from '@chakra-ui/react';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

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

        <VStack>
          {reward?.map((r, index) => {
            return (
              <HStack key={index} gap={4} p={4} className="bs" mb={4}>
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
            );
          })}
        </VStack>
      </Box>
    </VStack>
  );
}
