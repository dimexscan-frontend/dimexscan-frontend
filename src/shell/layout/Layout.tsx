// SPDX-License-Identifier: LicenseRef-Blockscout

import React from 'react';
import type { Props } from './types';
import DimeXLayoutHome from './DimeXLayoutHome';

const LayoutDefault = ({ children }: Props) => {
  return <DimeXLayoutHome>{children}</DimeXLayoutHome>;
};

export default LayoutDefault;
