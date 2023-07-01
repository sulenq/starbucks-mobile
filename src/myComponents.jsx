import {
  Center,
  HStack,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  VStack,
  useDisclosure,
  Icon,
  Box,
  Button,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const Nav = () => {
  const location = useLocation();
  const activeNav = location.pathname;

  const Scan = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cardSize = window.innerWidth - 48;
    return (
      <>
        <VStack className="navItem" onClick={onOpen}>
          <Center
            w={'58px'}
            h={'58px'}
            flexShrink={0}
            bg={'primary.500'}
            borderRadius={'100%'}
          >
            <Image w={'28px'} src={'./nav/barcode.png'} />
          </Center>
        </VStack>

        <Modal
          size={'full'}
          motionPreset="slideInBottom"
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalContent>
            <ModalHeader className="modalProps" px={4} mb={2}>
              <HStack justifyContent={'space-between'}>
                <Icon
                  onClick={onClose}
                  w={'20px'}
                  as={ArrowBackIosNewRoundedIcon}
                />
                <Image h={4} src={'starbucks.png'} />
              </HStack>
            </ModalHeader>
            <ModalBody className="modalProps" p={0}>
              <VStack gap={null}>
                <Box w={'100%'} overflow={'auto'} mb={4}>
                  <HStack w={'max-content'} gap={5} px={4}>
                    <Image w={cardSize} src="./card.png" />
                    <Image w={cardSize} src="./addCard.png" />
                  </HStack>
                </Box>

                <HStack
                  px={4}
                  w={'100%'}
                  justifyContent={'space-between'}
                  mb={4}
                >
                  <Box>
                    <Text alignSelf={'flex-start'} fontSize={'10px'}>
                      Balance
                    </Text>
                    <Text
                      alignSelf={'flex-start'}
                      fontSize={'20px'}
                      fontWeight={800}
                    >
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

                <Box px={4} w={'100%'}>
                  <HStack
                    w={'100%'}
                    borderRadius={'8px'}
                    border={'1px solid var(--primary)'}
                    p={3}
                    color={'primary.500'}
                  >
                    <Icon
                      mt={'-4 px'}
                      fontSize={'38px'}
                      as={StarRateRoundedIcon}
                    />
                    <HStack justifyContent={'space-between'} w={'100%'}>
                      <Box justifySelf={'flex-start !important'}>
                        <Text fontSize={'13px'} fontWeight={700}>
                          Use your rewards
                        </Text>
                        <Text fontSize={'10px'}>2 reward can be used</Text>
                      </Box>
                      <Icon as={KeyboardArrowRightRoundedIcon} />
                    </HStack>
                  </HStack>
                </Box>
                <VStack w={'100%'} px={4} my={'128px'}>
                  <Image w={'80%'} src="./barcode.png" />
                </VStack>
              </VStack>
            </ModalBody>
            <ModalFooter className="modalProps">
              <Button onClick={onClose} className="btn primaryBtn" w={'100%'}>
                Done
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  return (
    <HStack className="nav bs">
      <VStack className="navItem">
        <Link href={'/home'}>
          <Image
            opacity={activeNav !== '/home' && 0.5}
            mx={'auto'}
            w={'28px'}
            src={
              activeNav === '/home'
                ? './nav/iconVisited/home.png'
                : './nav/icon/home.png'
            }
            mb={2}
          />
          <Text
            className={activeNav === '/home' ? 'navName visitedNav' : 'navName'}
          >
            Home
          </Text>
        </Link>
      </VStack>

      <VStack className="navItem">
        <Link href={'/card'}>
          <Image
            opacity={activeNav !== '/card' && 0.5}
            mx={'auto'}
            w={'28px'}
            src={
              activeNav === '/card'
                ? './nav/iconVisited/card.png'
                : './nav/icon/card.png'
            }
            mb={2}
          />
          <Text
            className={activeNav === '/card' ? 'navName visitedNav' : 'navName'}
          >
            Card
          </Text>
        </Link>
      </VStack>

      <Scan />

      <VStack className="navItem">
        <Link href={'/reward'}>
          <Image
            opacity={activeNav !== '/reward' && 0.5}
            mx={'auto'}
            w={'28px'}
            src={
              activeNav === '/reward'
                ? './nav/iconVisited/reward.png'
                : './nav/icon/reward.png'
            }
            mb={2}
          />
          <Text
            className={
              activeNav === '/reward' ? 'navName visitedNav' : 'navName'
            }
          >
            Reward
          </Text>
        </Link>
      </VStack>

      <VStack className="navItem">
        <Link href={'/profile'}>
          <Image
            opacity={activeNav !== '/profile' && 0.5}
            mx={'auto'}
            w={'28px'}
            src={
              activeNav === '/profile'
                ? './nav/iconVisited/profile.png'
                : './nav/icon/profile.png'
            }
            mb={2}
          />
          <Text
            className={
              activeNav === '/profile' ? 'navName visitedNav' : 'navName'
            }
          >
            Profile
          </Text>
        </Link>
      </VStack>
    </HStack>
  );
};

export { Nav };
