import React from 'react';

import {
  Description,
  Title,
} from './StyledComponents';

const Header = ({ title, description }) => (
  <>
    <Title>
      {title}
    </Title>
    <Description>
      {description}
    </Description>
  </>
);

export default Header;
