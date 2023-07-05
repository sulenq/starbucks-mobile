import React, { useState } from 'react';

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  useDisclosure,
  Step,
  StepIndicator,
  Stepper,
  useSteps,
  Progress,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Checkbox,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const SignIn = () => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [signInData, setSignInData] = useState({
      email: '',
      password: '',
    });

    return (
      <>
        <Button
          onClick={onOpen}
          className="btn primaryBtn"
          w={'100%'}
          mb={'20px'}
        >
          Sign In
        </Button>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={'full'}
          motionPreset="slideInRight"
        >
          <ModalContent>
            <ModalHeader p={'16px'} mb={'24px'} className="modalProps">
              <HStack justifyContent={'space-between'}>
                <Icon
                  cursor={'pointer'}
                  onClick={onClose}
                  w={'20px'}
                  as={ArrowBackIosNewRoundedIcon}
                />
                <Image h={4} src={'starbucks.png'} />
              </HStack>
              <VStack
                position={'absolute'}
                alignItems={'flex-end'}
                top={'0'}
                maxW={'480px'}
                w={'100%'}
                zIndex={-1}
              >
                <Image w={'280px'} src="./bgLogoOverlay.png" />
              </VStack>
            </ModalHeader>
            <ModalBody py={0} className="modalProps">
              <Text
                fontSize={'25px'}
                fontWeight={800}
                color={'primary'}
                mb={'24px'}
              >
                Sign In
              </Text>
              <Input
                onChange={e => {
                  setSignInData(ps => ({ ...ps, email: e.target.value }));
                }}
                className="input"
                placeholder="Email address"
                mb={4}
              />
              <Input
                onChange={e => {
                  setSignInData(ps => ({ ...ps, password: e.target.value }));
                }}
                className="input"
                placeholder="Password"
                type="password"
                mb={4}
              />
              <Text fontSize={'13px'} className="textPrimary">
                Forgot Password?
              </Text>
            </ModalBody>
            <ModalFooter className="modalProps">
              <Button
                onClick={() => {
                  navigate('/enterpin');
                }}
                className="btn primaryBtn"
                w={'100%'}
                isDisabled={
                  signInData?.email && signInData?.password ? false : true
                }
              >
                Sign In
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  const SignUp = () => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const steps = [
      { title: 'First', description: 'Phone Number OTP' },
      { title: 'Second', description: 'Email & Password' },
      { title: 'Third', description: 'Personal Details' },
    ];
    const { activeStep, setActiveStep } = useSteps({
      index: 0,
      count: steps.length,
    });
    const max = steps.length - 1;
    const progressPercent = (activeStep / max) * 100;

    const [next, setNext] = useState(false);

    const StepOne = () => {
      return (
        <>
          <Text fontWeight={800} mb={'16px'}>
            Please input your phone number
          </Text>
          <HStack mb={2}>
            <Input className="input" placeholder="Phone number" />
            <Button
              onClick={() => {
                setNext(!next);
              }}
              className="btn primaryBtn"
              w={'130px'}
            >
              Send OTP
            </Button>
          </HStack>
          <Text fontSize={'13px'} fontWeight={400} mb={4}>
            Verify your phone number with OTP via SMS
          </Text>
          <Input className="input" placeholder="Input OTP number" mb={4} />
        </>
      );
    };

    const StepTwo = () => {
      return (
        <>
          <Text fontWeight={800} mb={'16px'}>
            Please input your account information
          </Text>
          <Input className="input" placeholder="Email address" mb={4} />
          <Input
            className="input"
            placeholder="Password"
            type="password"
            mb={4}
          />
          <Input
            className="input"
            placeholder="Reconfirm password"
            type="password"
            mb={4}
          />
        </>
      );
    };

    const StepThree = () => {
      return (
        <>
          <Text fontWeight={800} mb={'16px'}>
            Please input your personal details
          </Text>
          <Input className="input" placeholder="First Name" mb={4} />
          <Input className="input" placeholder="Last Name" mb={4} />
          <HStack mb={'25px'}>
            <Input className="input" placeholder="Year" type={'number'} />
            <Menu>
              <MenuButton
                w={'120px'}
                flexShrink={0}
                as={Button}
                rightIcon={<ExpandMoreIcon />}
              >
                Month
              </MenuButton>
              <MenuList>
                <MenuItem>January</MenuItem>
                <MenuItem>February</MenuItem>
                <MenuItem>March</MenuItem>
                <MenuItem>April</MenuItem>
                <MenuItem>May</MenuItem>
                <MenuItem>June</MenuItem>
                <MenuItem>July</MenuItem>
                <MenuItem>August</MenuItem>
                <MenuItem>September</MenuItem>
                <MenuItem>October</MenuItem>
                <MenuItem>November</MenuItem>
                <MenuItem>Desember</MenuItem>
              </MenuList>
            </Menu>
            <Input className="input" placeholder="Date" type={'number'} />
          </HStack>
          <HStack mb={'25px'}>
            <Text fontSize={'13px'} fontWeight={800} color={'primary.500'}>
              If you have referral code
            </Text>
            <Icon as={ExpandMoreIcon} />
          </HStack>
          <Checkbox size="lg" colorScheme="primary">
            <Text fontSize={'13px'} fontWeight={400} pl={1}>
              I wish to receive direct marketing communication from Starbucks
              Indonesia
            </Text>
          </Checkbox>
        </>
      );
    };

    return (
      <>
        <Link onClick={onOpen} className="textPrimary">
          Sign Up
        </Link>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={'full'}
          motionPreset="slideInRight"
        >
          <ModalContent>
            <ModalHeader p={'16px'} mb={'24px'} className="modalProps">
              <HStack justifyContent={'space-between'}>
                <Icon
                  cursor={'pointer'}
                  onClick={onClose}
                  w={'20px'}
                  as={ArrowBackIosNewRoundedIcon}
                />
                <Image h={4} src={'starbucks.png'} />
              </HStack>
              <VStack
                position={'absolute'}
                alignItems={'flex-end'}
                top={'0'}
                maxW={'480px'}
                w={'100%'}
                zIndex={-1}
              >
                <Image w={'280px'} src="./bgLogoOverlay.png" />
              </VStack>
            </ModalHeader>
            <ModalBody py={0} className="modalProps">
              <Text
                fontSize={'25px'}
                fontWeight={800}
                color={'primary'}
                mb={'24px'}
              >
                Sign Up
              </Text>
              <Box position="relative" mb={'24px'}>
                <Stepper
                  colorScheme="primary"
                  size="sm"
                  index={activeStep}
                  gap="0"
                >
                  {steps.map((step, index) => (
                    <Step key={index} gap="0">
                      <StepIndicator bg="white"></StepIndicator>
                    </Step>
                  ))}
                </Stepper>
                <Progress
                  value={progressPercent}
                  colorScheme="primary"
                  position="absolute"
                  height="3px"
                  width="full"
                  top="10px"
                  zIndex={-1}
                />
              </Box>
              {activeStep === 0 ? (
                <StepOne />
              ) : activeStep === 1 ? (
                <StepTwo />
              ) : activeStep === 2 ? (
                <StepThree />
              ) : (
                <Text>Invalid Step</Text>
              )}
            </ModalBody>
            <ModalFooter className="modalProps">
              <Button
                onClick={() => {
                  if (activeStep !== max) {
                    setActiveStep(activeStep + 1);
                  } else {
                    navigate('/createpin');
                  }
                }}
                className="btn primaryBtn"
                w={'100%'}
                isDisabled={next ? false : true}
              >
                {activeStep === 2 ? 'Sign Up' : 'Next'}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  return (
    <Box id={'appContainer'} bgImage={'./landingPage/1.png'} bgSize={'cover'}>
      <Box
        w={'100%'}
        position={'absolute'}
        bottom={'0'}
        left={'0'}
        borderRadius={'40px 0 0 0'}
        p={4}
        bg={'white'}
      >
        <HStack mb={'20px'} gap={'16px'}>
          <Image w={'70px'} flexShrink={0} src={'./logo192.png'} />
          <Box>
            <Text fontSize={'20px'} fontWeight={800}>
              Welcome to the
            </Text>
            <Text
              fontSize={'20px'}
              fontWeight={800}
              lineHeight={'16px'}
              mb={'8px'}
            >
              Starbucks Reward!
            </Text>
            <Text fontSize={'13px'} color={'primary'} fontWeight={400}>
              Experience coffe like never before
            </Text>
          </Box>
        </HStack>
        <SignIn />
        <Text textAlign={'center'} fontSize={'13px'}>
          Don’t have an account? <SignUp />
        </Text>
      </Box>
    </Box>
  );
}
