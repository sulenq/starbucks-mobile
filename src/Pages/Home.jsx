import React, { useState } from 'react';

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
  IconButton,
  SimpleGrid,
  ModalFooter,
} from '@chakra-ui/react';

import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

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
          isOpen={isOpen}
          onClose={onClose}
          size={'full'}
          motionPreset="slideInRight"
        >
          <ModalContent gap={'0 !important'} h={'100vh'}>
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

  const Order = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const favorite = [
      {
        name: 'Green tea',
        price: 'Rp 38.000',
        src: '1.png',
      },
      {
        name: 'Mocha Frappucino',
        price: 'Rp 60.000',
        src: '2.png',
      },
      {
        name: 'Caffe Late',
        price: 'Rp 38.000',
        src: '3.png',
      },
    ];
    const blended = [
      {
        name: 'Green tea',
        price: 'Rp 38.000',
        src: '1.png',
      },
      {
        name: 'Mocha Frappucino',
        price: 'Rp 60.000',
        src: '2.png',
      },
      {
        name: 'Strawberry Frapucino',
        price: 'Rp 38.000',
        src: '3.png',
      },
      {
        name: 'Strawberry Latte',
        price: 'Rp 38.000',
        src: '4.png',
      },
    ];
    const espresso = [
      {
        name: 'Caffe Mocha',
        price: 'Rp 38.000',
        src: '1.png',
      },
      {
        name: 'Americano',
        price: 'Rp 38.000',
        src: '2.png',
      },
    ];

    return (
      <>
        <Button onClick={onOpen} w={'50%'} className="btn primaryBtn">
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

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={'full'}
          motionPreset="slideInRight"
        >
          <ModalContent gap={'0 !important'} h={'100vh'}>
            <ModalHeader flexShrink={0} className="modalProps bs" px={4}>
              <HStack justifyContent={'space-between'}>
                <HStack>
                  <Icon
                    onClick={onClose}
                    w={'20px'}
                    mt={'2px'}
                    mr={2}
                    as={ArrowBackIosNewRoundedIcon}
                  />
                  <Text fontSize={'20px'} fontWeight={800}>
                    Order
                  </Text>
                </HStack>
                <Icon as={SearchOutlinedIcon} />
              </HStack>
            </ModalHeader>
            <ModalBody
              as={VStack}
              alignItems={'flex-start'}
              gap={'0 !important'}
              w={'100%'}
              h={'100%'}
              overflow={'auto'}
              className="modalProps"
              p={0}
            >
              <Box p={4} w={'100%'}>
                <HStack
                  className="bo"
                  p={'8px 16px'}
                  w={'100%'}
                  justifyContent={'space-between'}
                >
                  <HStack>
                    <Image w={'16px'} src="locationAlt.png" />
                    <Text fontSize={'13px'}>Starbucks Setiabudi Semarang</Text>
                  </HStack>
                  <Icon as={KeyboardArrowDownOutlinedIcon} />
                </HStack>
              </Box>

              <HStack px={4} w={'100%'} mb={4}>
                <HStack
                  w={'50%'}
                  h={'40px'}
                  justifyContent={'center'}
                  p={'8px 18px'}
                  borderRadius={'8px'}
                  bg={'primary.500'}
                >
                  <Image w={'24px'} src="coffeCup.png" mt={'-4px'} />
                  <Text color={'white'} fontSize={'13px'} fontWeight={600}>
                    Beverages
                  </Text>
                </HStack>
                <HStack
                  w={'50%'}
                  h={'40px'}
                  justifyContent={'center'}
                  p={'8px 18px'}
                  borderRadius={'8px'}
                  border={'1px solid var(--primary)'}
                >
                  <Image w={'24px'} src="foods.png" />
                  <Text
                    fontSize={'13px'}
                    color={'primary.500 !important'}
                    fontWeight={600}
                  >
                    Foods
                  </Text>
                </HStack>
              </HStack>

              <Text px={4} fontWeight={700}>
                Favorite
              </Text>

              <Box
                w={'100%'}
                overflow={'auto'}
                p={'0 !important'}
                flexShrink={0}
              >
                <HStack p={4} w={'max-content'} gap={4}>
                  {favorite?.map((f, index) => {
                    return (
                      <VStack
                        key={index}
                        className="bs"
                        flexShrink={0}
                        p={3}
                        w={'140px'}
                      >
                        <Image h={'120px'} src={'./orderFavorite/' + f?.src} />
                        <HStack w={'100%'} justifyContent={'space-between'}>
                          <Box>
                            <Text
                              fontSize={'13px'}
                              fontWeight={700}
                              noOfLines={1}
                            >
                              {f?.name}
                            </Text>
                            <Text fontSize={'13px'} fontWeight={400}>
                              {f?.price}
                            </Text>
                          </Box>
                          <IconButton
                            borderRadius={'100%'}
                            size={'xs'}
                            colorScheme="primary"
                            icon={<AddRoundedIcon />}
                          />
                        </HStack>
                      </VStack>
                    );
                  })}
                </HStack>
              </Box>

              <Text px={4} fontWeight={700}>
                Blended Coffees
              </Text>

              <Box w={'100%'} flexShrink={0} mb={4}>
                <SimpleGrid columns={[2]} p={4} gap={4}>
                  {blended?.map((f, index) => {
                    return <ProductDetails key={index} f={f} index={index} />;
                  })}
                </SimpleGrid>
              </Box>

              <Text px={4} fontWeight={700}>
                Espresso Beverages
              </Text>

              <Box w={'100%'} flexShrink={0}>
                <SimpleGrid columns={[2]} p={4} gap={4}>
                  {espresso?.map((f, index) => {
                    return (
                      <VStack key={index} className="bs" flexShrink={0} p={3}>
                        <Image h={'120px'} src={'./orderEspresso/' + f?.src} />
                        <HStack w={'100%'} justifyContent={'space-between'}>
                          <Box>
                            <Text
                              fontSize={'13px'}
                              fontWeight={700}
                              noOfLines={1}
                            >
                              {f?.name}
                            </Text>
                            <Text fontSize={'13px'} fontWeight={400}>
                              {f?.price}
                            </Text>
                          </Box>
                          <IconButton
                            borderRadius={'100%'}
                            size={'xs'}
                            colorScheme="primary"
                            icon={<AddRoundedIcon />}
                          />
                        </HStack>
                      </VStack>
                    );
                  })}
                </SimpleGrid>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  };

  const ProductDetails = props => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const f = props?.f;
    const [selectedSize, setSelectedSize] = useState('Tall');

    return (
      <>
        <VStack
          key={props?.index}
          onClick={onOpen}
          className="bs"
          flexShrink={0}
          p={3}
        >
          <Image h={'120px'} src={'./orderBlendedCoffees/' + f?.src} />
          <HStack w={'100%'} justifyContent={'space-between'}>
            <Box>
              <Text fontSize={'13px'} fontWeight={700} noOfLines={1}>
                {f?.name}
              </Text>
              <Text fontSize={'13px'} fontWeight={400}>
                {f?.price}
              </Text>
            </Box>
            <IconButton
              borderRadius={'100%'}
              size={'xs'}
              colorScheme="primary"
              icon={<AddRoundedIcon />}
            />
          </HStack>
        </VStack>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={'full'}
          motionPreset="slideInRight"
        >
          <ModalContent
            gap={'0 !important'}
            position={'absolute'}
            h={'100vh'}
            bg={'var(--a)'}
          >
            <ModalHeader flexShrink={0} className="modalProps" px={4}>
              <HStack justifyContent={'space-between'} color={'white'}>
                <Icon
                  onClick={onClose}
                  w={'20px'}
                  mt={'2px'}
                  mr={2}
                  as={ArrowBackIosNewRoundedIcon}
                />
                <Icon
                  onClick={onClose}
                  w={'24px'}
                  mt={'2px'}
                  mr={2}
                  as={ShoppingCartOutlinedIcon}
                />
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
              <Image
                w={'280px'}
                position={'absolute'}
                top={4}
                right={0}
                src="./bgLogoOverlay2.png"
                zIndex={-1}
              />
              <VStack h={'50%'} w={'100%'} color={'white'}>
                <Image
                  mt={4}
                  maxH={'240px'}
                  flexShrink={1}
                  src={'./orderBlendedCoffees/' + f?.src}
                />
                <Text fontSize={'20px'} fontWeight={800} mt={4}>
                  {f?.name}
                </Text>
                <Text fontSize={'13px'} fontWeight={700}>
                  {f?.price}
                </Text>
                <Text
                  fontSize={'13px'}
                  w={'200px'}
                  textAlign={'center'}
                  pb={4}
                  noOfLines={3}
                >
                  Lorem ipsum dolor sit amet consectetur. Nisi faucibus
                  interdum.
                </Text>
              </VStack>
              <Box
                h={'50%'}
                w={'100%'}
                bg={'white'}
                borderRadius={'16px 16px 0 0'}
                overflow={'auto'}
              >
                <Text p={4} pb={2} fontWeight={700}>
                  Size
                </Text>

                <Box w={'1005'} overflow={'auto'} pt={2}>
                  <HStack w={'max-content'} px={4} gap={4}>
                    <Box
                      onClick={() => {
                        setSelectedSize('Tall');
                      }}
                      w={'132px'}
                      flexShrink={0}
                      p={'8px 16px'}
                      className={
                        selectedSize === 'Tall'
                          ? 'selectedSize size'
                          : 'unselectedSize size'
                      }
                      borderRadius={'8px'}
                    >
                      <HStack justifyContent={'space-between'} mb={2}>
                        <Text fontWeight={700}>Tall</Text>
                        <Image
                          w={'24px'}
                          src={
                            selectedSize === 'Tall'
                              ? './cupWhite.png'
                              : './cup.png'
                          }
                        />
                      </HStack>
                      <Text fontSize={'10px'}>354 ml • 398 kcal</Text>
                    </Box>
                    <Box
                      onClick={() => {
                        setSelectedSize('Grande');
                      }}
                      w={'132px'}
                      p={'8px 16px'}
                      className={
                        selectedSize === 'Grande'
                          ? 'selectedSize size'
                          : 'unselectedSize size'
                      }
                      flexShrink={0}
                      borderRadius={'8px'}
                    >
                      <HStack justifyContent={'space-between'} mb={2}>
                        <Text fontWeight={700}>Grande</Text>
                        <Image
                          w={'24px'}
                          src={
                            selectedSize === 'Grande'
                              ? './cupWhite.png'
                              : './cup.png'
                          }
                        />
                      </HStack>
                      <Text fontSize={'10px'}>473 ml • 498 kcal</Text>
                    </Box>
                    <Box
                      onClick={() => {
                        setSelectedSize('Venti');
                      }}
                      w={'132px'}
                      p={'8px 16px'}
                      className={
                        selectedSize === 'Venti'
                          ? 'selectedSize size'
                          : 'unselectedSize size'
                      }
                      flexShrink={0}
                      borderRadius={'8px'}
                    >
                      <HStack justifyContent={'space-between'} mb={2}>
                        <Text fontWeight={700}>Venti</Text>
                        <Image
                          w={'24px'}
                          src={
                            selectedSize === 'Venti'
                              ? './cupWhite.png'
                              : './cup.png'
                          }
                        />
                      </HStack>
                      <Text fontSize={'10px'}>591 ml • 525 kcal</Text>
                    </Box>
                  </HStack>
                </Box>

                <Text p={4} fontWeight={700}>
                  Customize
                </Text>

                <Box w={'100%'} px={4} pb={4}>
                  <HStack justifyContent={'space-between'} mb={2}>
                    <Text fontSize={'13px'}>Espresso shots</Text>
                    <HStack>
                      <IconButton
                        borderWidth={2}
                        borderRadius={'100%'}
                        size={'xs'}
                        h={'26px'}
                        variant={'outline'}
                        colorScheme="primary"
                        icon={<RemoveRoundedIcon />}
                      />
                      <Text>0</Text>
                      <IconButton
                        h={'26px'}
                        borderWidth={2}
                        borderRadius={'100%'}
                        size={'xs'}
                        variant={'outline'}
                        colorScheme="primary"
                        icon={<AddRoundedIcon />}
                      />
                    </HStack>
                  </HStack>

                  <HStack justifyContent={'space-between'}>
                    <Text fontSize={'13px'}>Whole milk</Text>
                    <HStack>
                      <IconButton
                        h={'26px'}
                        borderWidth={2}
                        borderRadius={'100%'}
                        size={'xs'}
                        variant={'outline'}
                        colorScheme="primary"
                        icon={<RemoveRoundedIcon />}
                      />
                      <Text>0</Text>
                      <IconButton
                        borderRadius={'100%'}
                        h={'26px'}
                        borderWidth={2}
                        size={'xs'}
                        variant={'outline'}
                        colorScheme="primary"
                        icon={<AddRoundedIcon />}
                      />
                    </HStack>
                  </HStack>
                </Box>
              </Box>
            </ModalBody>
            <ModalFooter
              className={'modalProps bs'}
              borderRadius={0}
              bg={'white'}
            >
              <HStack w={'100%'} justifyContent={'space-between'}>
                <Box>
                  <Text fontSize={'13px'}>Total</Text>
                  <Text fontSize={'20px'} fontWeight={700}>
                    {f?.price}
                  </Text>
                </Box>
                <Button className="btn primaryBtn">Add to Cart</Button>
              </HStack>
            </ModalFooter>
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
          <Order />

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
