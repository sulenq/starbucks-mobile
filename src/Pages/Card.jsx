import React from 'react';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';

import {
  Text,
  VStack,
  Box,
  HStack,
  Image,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Icon,
  Checkbox,
} from '@chakra-ui/react';

import { Nav } from '../myComponents';

export default function Card() {
  const cardSize = window.innerWidth < 480 ? window.innerWidth - 48 : 420;
  const history = [
    { purpose: 'Top Up', date: '12 Mar 2023', total: 'Rp 100.000' },
    { purpose: 'Purchase', date: '12 Mar 2023', total: 'Rp 100.000' },
    { purpose: 'Top Up', date: '12 Mar 2023', total: 'Rp 100.000' },
    { purpose: 'Top Up', date: '12 Mar 2023', total: 'Rp 100.000' },
    { purpose: 'Purchase', date: '12 Mar 2023', total: 'Rp 100.000' },
  ];

  const TransHistory = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const transHistory = [
      {
        period: 'March 2023',
        trans: [
          { purpose: 'Top Up', date: '12 Mar 2023', total: 'Rp 100.000' },
          { purpose: 'Purchase', date: '12 Mar 2023', total: 'Rp 100.000' },
          { purpose: 'Top Up', date: '12 Mar 2023', total: 'Rp 100.000' },
        ],
      },
      {
        period: 'January 2023',
        trans: [
          { purpose: 'Top Up', date: '12 Mar 2023', total: 'Rp 100.000' },
          { purpose: 'Purchase', date: '12 Mar 2023', total: 'Rp 100.000' },
          { purpose: 'Top Up', date: '12 Mar 2023', total: 'Rp 100.000' },
        ],
      },
    ];

    return (
      <>
        <Text
          cursor={'pointer'}
          onClick={onOpen}
          fontWeight={700}
          color={'primary.500'}
        >
          Show All
        </Text>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={'full'}
          motionPreset="slideInRight"
        >
          <ModalContent>
            <ModalHeader className="modalProps bs" px={4}>
              <HStack>
                <Icon
                  cursor={'pointer'}
                  onClick={onClose}
                  w={'20px'}
                  mt={'2px'}
                  mr={2}
                  as={ArrowBackIosNewRoundedIcon}
                />
                <Text fontSize={'20px'} fontWeight={800}>
                  Transaction History
                </Text>
              </HStack>
            </ModalHeader>
            <ModalBody className="modalProps" p={0}>
              <Box w={'100%'} p={4}>
                {transHistory?.map((h, index) => {
                  return (
                    <Box key={index}>
                      <Text fontWeight={800} mb={4}>
                        {h?.period}
                      </Text>
                      {h?.trans?.map((t, tIndex) => {
                        return (
                          <HStack
                            key={tIndex}
                            className="bs"
                            p={4}
                            mb={4}
                            w={'100%'}
                            justifyContent={'space-between'}
                          >
                            <Box>
                              <Text
                                fontWeight={700}
                                mb={t?.purpose === 'Purchase' && 1}
                              >
                                {t?.purpose}
                              </Text>
                              {t?.purpose === 'Purchase' && (
                                <Text fontSize={'10px'} fontWeight={300}>
                                  Star Earned 4
                                </Text>
                              )}
                            </Box>
                            <VStack alignItems={'flex-end'} gap={null}>
                              <Text fontSize={'10px'} opacity={0.8} mb={1}>
                                {t?.date}
                              </Text>
                              <Text
                                fontWeight={700}
                                color={
                                  t?.purpose !== 'Purchase'
                                    ? 'primary.500'
                                    : 'red'
                                }
                              >
                                {t?.total}
                              </Text>
                            </VStack>
                          </HStack>
                        );
                      })}
                    </Box>
                  );
                })}
              </Box>
            </ModalBody>
            <ModalFooter className="modalProps bs" color={'primary.500'} p={0}>
              <HStack w={'50%'} justifyContent={'center'} p={4}>
                <Icon fontSize={'20px'} as={SortOutlinedIcon} />
                <Text onClick={onClose} fontSize={'13px'}>
                  Urutkan
                </Text>
              </HStack>
              <HStack w={'50%'} justifyContent={'center'} p={4}>
                <Icon fontSize={'20px'} as={FilterAltOutlinedIcon} />
                <Text onClick={onClose} fontSize={'13px'}>
                  Filter
                </Text>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  const Manage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <Text
          cursor={'pointer'}
          onClick={onOpen}
          fontWeight={700}
          color={'primary.500'}
          mb={4}
        >
          Manage
        </Text>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={'full'}
          motionPreset="slideInRight"
        >
          <ModalContent>
            <ModalHeader className="modalProps bs" px={4}>
              <HStack>
                <Icon
                  cursor={'pointer'}
                  onClick={onClose}
                  w={'20px'}
                  mt={'2px'}
                  mr={2}
                  as={ArrowBackIosNewRoundedIcon}
                />
                <Text fontSize={'20px'} fontWeight={800}>
                  Manage Card
                </Text>
              </HStack>
            </ModalHeader>
            <ModalBody className="modalProps" p={0}>
              <Box w={'100%'} p={4}>
                <Image w={'80%'} mx={'auto'} src={'card.png'} />
              </Box>

              <Box p={4} className="bs" mx={4} mb={4}>
                <Text fontSize={'10px'} fontWeight={400} mb={2}>
                  Details
                </Text>
                <Box px={2}>
                  <Text fontSize={'10px'} fontWeight={400} mb={1}>
                    Balance
                  </Text>
                  <Text fontSize={'13px'} fontWeight={700} mb={2}>
                    Rp 100.000
                  </Text>
                  <Text fontSize={'10px'} fontWeight={400} mb={1}>
                    Card Number
                  </Text>
                  <Text fontSize={'13px'} fontWeight={700}>
                    092832139791230555
                  </Text>
                </Box>
              </Box>

              <Box p={4} className="bs" mx={4}>
                <Text fontSize={'10px'} fontWeight={400} mb={4}>
                  Card Settings
                </Text>
                <Box px={2}>
                  <Checkbox colorScheme="primary" mb={4}>
                    <Text fontSize={'13px'} ml={1}>
                      Set as default card
                    </Text>
                  </Checkbox>
                  <HStack mb={4}>
                    <Image ml={'-2px'} w={'20px'} src="./receipt.png" />
                    <Text fontSize={'13px'} ml={1}>
                      Transaction History
                    </Text>
                  </HStack>
                  <HStack mb={4}>
                    <Image ml={'-2px'} w={'20px'} src="./danger.png" />
                    <Text fontSize={'13px'} ml={1}>
                      Report Lost Card
                    </Text>
                  </HStack>
                  <HStack>
                    <Image ml={'-2px'} w={'20px'} src="./trash.png" />
                    <Text fontSize={'13px'}>Remove Card</Text>
                  </HStack>
                </Box>
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
          Starbucks Card
        </Text>
      </HStack>

      <VStack overflow={'auto'} h={'100%'} w={'100%'} pb={4}>
        <Box
          w={'100%'}
          maxW={'480px'}
          flexShrink={0}
          overflow={'auto'}
          pt={4}
          scrollSnapType={'x mandatory'}
        >
          <HStack w={'max-content'} gap={5} px={4}>
            <Image scrollSnapAlign={'center'} w={cardSize} src="./card.png" />
            <Image
              scrollSnapAlign={'center'}
              w={cardSize}
              src="./addCard.png"
            />
          </HStack>
        </Box>

        <Manage />

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
          <TransHistory />
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
                    color={h?.purpose !== 'Purchase' ? 'primary.500' : 'red'}
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
