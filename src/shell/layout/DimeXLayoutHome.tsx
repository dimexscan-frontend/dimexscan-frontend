// SPDX-License-Identifier: LicenseRef-Blockscout

import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

import type { Props } from './types';
import HeaderAlert from 'src/shell/header/HeaderAlert';
import AppErrorBoundary from 'src/shared/errors/AppErrorBoundary';
import SearchBar from 'src/slices/search/components/search-bar/SearchBarDesktop';
import SearchBarMobile from 'src/slices/search/components/search-bar/SearchBarMobile';
import UserProfileDesktop from 'src/features/account/components/user-profile/UserProfileDesktop';
import config from 'src/config';
import useIsMobile from 'src/shared/hooks/useIsMobile';
import SpriteIcon from 'src/sprite/SpriteIcon';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Blockchain', href: '/blocks' },
  { label: 'Transactions', href: '/txs' },
  { label: 'Tokens', href: '/tokens' },
  { label: 'Statistics', href: '/stats' },
];

const DimeXLayoutHome = ({ children }: Props) => {
  const isMobile = useIsMobile();

  return (
    <Box minH="100vh" bg="#F5F7FA" color="#182230">
      <Box bg="#101D32" color="white">
        <Flex
          maxW="1440px"
          mx="auto"
          px={{ base: 4, md: 7 }}
          minH="76px"
          align="center"
          justify="space-between"
          gap={4}
        >
          <Flex align="center" gap={3} flexShrink={0}>
            <img
              src="https://www.dimex.site/assets/dimex-token-logo-navy.svg"
              alt="DimeX"
              width="42"
              height="42"
              style={{ objectFit: 'contain', background: 'white', borderRadius: '10px', padding: '4px' }}
            />
            <Box>
              <Text fontSize="21px" fontWeight="800" lineHeight="1.1">
                DimeX<span color="#AAB8CC">Scan</span>
              </Text>
              <Text fontSize="10px" color="#AAB8CC" letterSpacing="2px">
                BLOCKCHAIN EXPLORER
              </Text>
            </Box>
          </Flex>

          {!isMobile && (
            <Box flex="1" maxW="560px">
              <SearchBar />
            </Box>
          )}

          <Box display={{ base: 'none', lg: 'block' }}>
            <UserProfileDesktop />
          </Box>
          <Text fontSize="12px" color="#C5D0DF" display={{ base: 'none', md: 'block' }}>
            Chain ID: {config.chain.id}
          </Text>
        </Flex>
      </Box>

      <Box bg="white" borderBottom="1px solid #E4E9F0">
        <Flex
          maxW="1440px"
          mx="auto"
          px={{ base: 4, md: 7 }}
          minH="52px"
          align="center"
          gap={{ base: 5, md: 8 }}
          overflowX="auto"
          whiteSpace="nowrap"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              color="#536174"
              fontSize="13px"
              fontWeight="600"
              _hover={{ color: '#172D4B', textDecoration: 'none' }}
            >
              {item.label === 'Home' ? '⌂ Home' : item.label}
            </Link>
          ))}
        </Flex>
      </Box>

      {isMobile && (
        <Box bg="white" px={4} py={3} borderBottom="1px solid #E4E9F0">
          <SearchBarMobile />
        </Box>
      )}

      <Box maxW="1440px" mx="auto" px={{ base: 3, md: 7 }} py={5}>
        <HeaderAlert mb={4} />
        <AppErrorBoundary>
          {children}
        </AppErrorBoundary>
      </Box>

      <Box mt={10} bg="#101D32" color="#C5D0DF">
        <Flex maxW="1440px" mx="auto" px={{ base: 4, md: 7 }} py={4}
          justify="center" align="center" gap={{ base: 5, md: 9 }} wrap="wrap">
          <Link href="https://www.dimex.site" aria-label="Explorer" title="Explorer"
            fontSize="13px" _hover={{ color: "white" }}><SpriteIcon name="globe" boxSize="18px"/></Link>
          <Link href="https://www.dimexchain.tech" aria-label="Main Website" title="Main Website"
            fontSize="13px" _hover={{ color: "white" }}><SpriteIcon name="globe" boxSize="18px"/></Link>
          <Link href="mailto:info@dimexscan.tech" aria-label="Contact" title="Contact"
            fontSize="13px" _hover={{ color: "white" }}><SpriteIcon name="email" boxSize="18px"/></Link>
          <Link href="https://x.com/DimeXGlobal" aria-label="X" title="X"
            fontSize="13px" fontWeight="700" _hover={{ color: "white" }}><SpriteIcon name="social/twitter" boxSize="18px"/></Link>
        </Flex>
        <Text textAlign="center" fontSize="10px" color="#8190A5" pb={3}>
          © {new Date().getFullYear()} DimeXScan
        </Text>
      </Box>
    </Box>
  );
};

export default DimeXLayoutHome;
