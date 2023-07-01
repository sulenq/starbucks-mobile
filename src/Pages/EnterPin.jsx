import React, { useState, useEffect } from 'react';

import {
  Box,
  HStack,
  Icon,
  Image,
  Text,
  Link,
  PinInput,
  PinInputField,
} from '@chakra-ui/react';

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useNavigate } from 'react-router-dom';

export default function EnterPin() {
  const navigate = useNavigate();

  const [pin, setPin] = useState({
    first: '',
    second: '',
    third: '',
    forth: '',
    fifth: '',
    sixth: '',
  });

  useEffect(() => {
    if (
      pin.first &&
      pin.second &&
      pin.third &&
      pin.forth &&
      pin.fifth &&
      pin.sixth
    ) {
      setTimeout(() => {
        navigate('/home');
      }, 1000);
    }
  }, [pin, navigate]);

  return (
    <Box id={'appContainer'}>
      <Image
        w={'240px'}
        position={'absolute'}
        top={0}
        right={0}
        src="./bgLogoOverlay.png"
      />
      <Box p={'16px'}>
        <HStack justifyContent={'space-between'} mb={'32px'}>
          <Icon w={'20px'} as={ArrowBackIosNewRoundedIcon} />
          <Image h={4} src={'starbucks.png'} />
        </HStack>
        <Text fontSize={'25px'} fontWeight={800} color={'primary'}>
          Enter Your PIN
        </Text>
        <HStack w={'100%'} justifyContent={'center'} my={'25px'}>
          <PinInput type="number" mask>
            <PinInputField
              className="pinField"
              onChange={e => {
                setPin(ps => ({ ...ps, first: e.target.value }));
              }}
              value={pin.first}
            />
            <PinInputField
              className="pinField"
              onChange={e => {
                setPin(ps => ({ ...ps, second: e.target.value }));
              }}
              value={pin.second}
            />
            <PinInputField
              className="pinField"
              onChange={e => {
                setPin(ps => ({ ...ps, third: e.target.value }));
              }}
              value={pin.third}
            />
            <PinInputField
              className="pinField"
              onChange={e => {
                setPin(ps => ({ ...ps, forth: e.target.value }));
              }}
              value={pin.forth}
            />
            <PinInputField
              className="pinField"
              onChange={e => {
                setPin(ps => ({ ...ps, fifth: e.target.value }));
              }}
              value={pin.fifth}
            />
            <PinInputField
              className="pinField"
              onChange={e => {
                setPin(ps => ({ ...ps, sixth: e.target.value }));
              }}
              value={pin.sixth}
            />
          </PinInput>
        </HStack>
        <Text fontSize={'13px'} color={'primary'} textAlign={'center'}>
          Forgot your <Link className="textPrimary">passcode</Link>?
        </Text>
      </Box>
    </Box>
  );
}
