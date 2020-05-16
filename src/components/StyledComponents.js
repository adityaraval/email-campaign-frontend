import styled from 'styled-components';
import {
  Row, Button, Form,
} from 'react-bootstrap';
import colors from '../theme';

export const Title = styled.h2`
    color:${colors.BrandDark};
`;

export const Description = styled.p`
    color:${colors.BrandDark};
`;

export const HeaderContainer = styled(Row)`
    background-color: ${colors.BrandWhite};
    padding: 16px;
    // width: 750px;
    // margin: auto;
`;

export const FormLabel = styled(Form.Label)`
    color: ${colors.BrandDark};
    font-size:12px;
    font-weight:500;
`;


export const FormControl = styled(Form.Control)`
    border: 1px solid ${colors.BrandDark};
    background-color:#eee;
`;

export const SubmitButton = styled(Button)`
    background-color:${colors.BrandBlue};
    color:${colors.BrandWhite}
    border:0;
`;
