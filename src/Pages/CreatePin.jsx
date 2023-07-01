import React, { useState, useEffect } from 'react';

import {
  Box,
  HStack,
  Icon,
  Image,
  Text,
  PinInput,
  PinInputField,
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody,
} from '@chakra-ui/react';

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useNavigate } from 'react-router-dom';

export default function CreatePin() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [pin, setPin] = useState({
    first: '',
    second: '',
    third: '',
    forth: '',
    fifth: '',
    sixth: '',
  });

  const [confirmPin, setConfirmPin] = useState({
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
        onOpen();
      }, 1000);
    }
  }, [pin, onOpen]);

  useEffect(() => {
    if (
      confirmPin.first &&
      confirmPin.second &&
      confirmPin.third &&
      confirmPin.forth &&
      confirmPin.fifth &&
      confirmPin.sixth
    ) {
      setTimeout(() => {
        navigate('/home');
      }, 1000);
    }
  }, [confirmPin, navigate]);

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
          Create New PIN
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
      </Box>

      <Modal isOpen={isOpen} size={'full'}>
        <ModalContent>
          <ModalBody className="modalProps" p={0}>
            <Image
              w={'240px'}
              position={'absolute'}
              top={0}
              right={0}
              src="./bgLogoOverlay.png"
            />
            <Box p={'16px'}>
              <HStack justifyContent={'space-between'} mb={'32px'}>
                <Icon
                  onClick={onClose}
                  w={'20px'}
                  as={ArrowBackIosNewRoundedIcon}
                />
                <Image h={4} src={'starbucks.png'} />
              </HStack>
              <Text fontSize={'25px'} fontWeight={800} color={'primary'}>
                Confirm PIN
              </Text>
              <HStack w={'100%'} justifyContent={'center'} my={'25px'}>
                <PinInput type="number" mask>
                  <PinInputField
                    className="pinField"
                    onChange={e => {
                      setConfirmPin(ps => ({ ...ps, first: e.target.value }));
                    }}
                    value={confirmPin.first}
                  />
                  <PinInputField
                    className="pinField"
                    onChange={e => {
                      setConfirmPin(ps => ({ ...ps, second: e.target.value }));
                    }}
                    value={confirmPin.second}
                  />
                  <PinInputField
                    className="pinField"
                    onChange={e => {
                      setConfirmPin(ps => ({ ...ps, third: e.target.value }));
                    }}
                    value={confirmPin.third}
                  />
                  <PinInputField
                    className="pinField"
                    onChange={e => {
                      setConfirmPin(ps => ({ ...ps, forth: e.target.value }));
                    }}
                    value={confirmPin.forth}
                  />
                  <PinInputField
                    className="pinField"
                    onChange={e => {
                      setConfirmPin(ps => ({ ...ps, fifth: e.target.value }));
                    }}
                    value={confirmPin.fifth}
                  />
                  <PinInputField
                    className="pinField"
                    onChange={e => {
                      setConfirmPin(ps => ({ ...ps, sixth: e.target.value }));
                    }}
                    value={confirmPin.sixth}
                  />
                </PinInput>
              </HStack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
