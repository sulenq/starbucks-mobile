import React from 'react';

import { VStack, HStack, Text, Box, Image, Button } from '@chakra-ui/react';

import { Nav } from '../myComponents';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

  const settings = [
    {
      name: 'Account Settings',
      src: './profile/accountSettings/',
      settings: [
        { icon: '1.png', name: 'Change Details Account' },
        { icon: '2.png', name: 'Change Password' },
        { icon: '3.png', name: 'Referral code' },
        { icon: '4.png', name: 'Starbuck Premium' },
      ],
    },
    {
      name: 'Security',
      src: './profile/security/',
      settings: [{ icon: '1.png', name: 'PIN Lock' }],
    },
    {
      name: 'Other',
      src: './profile/other/',
      settings: [
        { icon: '1.png', name: 'Language' },
        { icon: '2.png', name: 'FAQ' },
        { icon: '3.png', name: 'Privacy & Policy' },
        { icon: '4.png', name: 'Term & Condition' },
        { icon: '5.png', name: 'Contact Us' },
      ],
    },
  ];

  return (
    <VStack id="appContainer">
      <Nav />
      <HStack className="bs" w={'100%'} borderRadius={0}>
        <Text fontSize={'20px'} p={4} fontWeight={800}>
          Profile
        </Text>
      </HStack>
      <Box w={'100%'} h={'100%'} p={4} overflow={'auto'}>
        <Text fontWeight={800} mb={1}>
          George Lee
        </Text>
        <Text fontWeight={400} fontSize={'10px'} mb={4}>
          George_lee@mail.com
        </Text>

        {settings?.map((setting, index) => {
          return (
            <Box key={index} className="bs" p={4} mb={4}>
              <Text fontSize={'10px'} mb={2}>
                {setting?.name}
              </Text>
              <VStack gap={2} alignItems={'flex-start'}>
                {setting?.settings?.map((s, sIndex) => {
                  return (
                    <HStack key={sIndex} p={2}>
                      <Image w={'20px'} src={setting?.src + s?.icon} />
                      <Text pl={2} fontSize={'13px'}>
                        {s?.name}
                      </Text>
                    </HStack>
                  );
                })}
              </VStack>
            </Box>
          );
        })}

        <Box py={4}>
          <Button
            onClick={() => {
              navigate('/');
            }}
            className="btn"
            variant={'outline'}
            colorScheme="primary"
            w={'100%'}
          >
            Sign Out
          </Button>
        </Box>
      </Box>
    </VStack>
  );
}
