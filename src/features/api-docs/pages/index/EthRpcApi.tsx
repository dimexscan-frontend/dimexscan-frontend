// SPDX-License-Identifier: LicenseRef-Blockscout

import { Box, Text } from '@chakra-ui/react';
import React from 'react';


const EthRpcApi = () => {
  return (
    <Box>
      <Text>
        In addition to the custom RPC endpoints documented here,
        the DimeXScan ETH RPC API supports Ethereum-compatible JSON-RPC methods,
        Use the Ethereum JSON-RPC specification for request and response formats.
      </Text>
    </Box>
  );
};

export default React.memo(EthRpcApi);
