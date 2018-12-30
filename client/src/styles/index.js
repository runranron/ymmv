import React from 'react';
import { Link as RRLink } from 'react-router-dom';
import {
  Container as BSContainer,
  Modal as BSModal,
  ModalBody as BSModalBody,
  ModalHeader as BSModalHeader,
  ModalFooter as BSModalFooter,
  Input as BSInput,
  InputGroup as BSInputGroup,
  ButtonGroup as BSButtonGroup,
  Form as BSForm,
  Label as BSLabel,
  Card as BSCard,
  CardImg as BSCardImg,
  Button as BSButton,
  Row as BSRow,
  Col as BSCol
} from 'reactstrap';

import { colors } from '../constants/theme';

import styled from 'styled-components';

export const Container = styled(BSContainer)`
  background: ${colors.white};
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
`;

export const Modal = styled(BSModal)`
`;

export const ModalHeader = styled(BSModalHeader)`
  background: ${colors.white};
`;

export const ModalBody = styled(BSModalBody)`
  background: ${colors.white};
`;

export const ModalFooter = styled(BSModalFooter)`
  background: ${colors.white};
`;

export const Button = styled(BSButton)`
  background: ${colors.tertiary};
`;

export const Form = styled(BSForm)`
`;

export const SearchBarRow = styled(BSRow)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export const SearchForm = styled(BSForm)`
  margin: 2rem 0 4rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 50%;
`;

export const Input = styled(BSInput)`
`;

export const BaseInput = styled(BSInput)`
  width: 100%;
`;

export const SearchInput = styled(BSInput)`
`;

export const InputGroup = styled(BSInputGroup)`
  width: 100%;
`;

export const ButtonGroup = styled(BSButtonGroup)`
  margin: 1rem 0 0 0;
`;

export const Label = styled(BSLabel)`
  margin: 1rem 0 0 0;
`;

export const ResultContainer = styled.div`
`

export const Card = styled(BSCard)`
  margin-bottom: 1rem;
`;

export const CardImg = styled(BSCardImg)`
  max-height: 600px;
`

export const Link = styled(RRLink)`
`;

export const ContentHeading = styled(BSRow)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  text-align: center;
`;