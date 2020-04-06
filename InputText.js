// IMPORTS 
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { vg } from './styles/variables';
import styled from 'styled-components/native';


const InputText = (props) => {

    const [stateEmail, setStateEmail] = useState({
        focusEmail: false,
    });

    const handleFocusEmail = () => {
        if (!stateEmail.focusEmail) {
            setStateEmail({ focusEmail: true });
        }
    }

    const handleBlurEmail = () => {
        if (stateEmail.focusEmail) {
            setStateEmail({ focusEmail: false });
        }
    }

    return (

        <FormGroup>
            <Label name="email">{props.textLabel}</Label>
            <Input
                name={props.textName}
                type={props.textType}
                value={props.textValue}
                onChangeText={props.changeEmail}
                onFocus={() => handleFocusEmail}
                onBlur={() => handleBlurEmail}
                focusEmail={stateEmail.focusEmail}
                mt={props.mt}
                mb={props.mb}
                ml={props.ml}
                mr={props.mr}
            />
            <MessageError>{props.messageError}</MessageError>
        </FormGroup>

    )

}

InputText.propTypes = {
    textValue: PropTypes.string,
    textName: PropTypes.string.isRequired,
    textType: PropTypes.string.isRequired,
    changeEmail: PropTypes.func.isRequired,
    blurEmail: PropTypes.bool,
    focusEmail: PropTypes.bool,
    mt: PropTypes.oneOf(['neg', 0, 1, 2, 3, 4, 5]),
    mb: PropTypes.oneOf(['neg', 0, 1, 2, 3, 4, 5]),
    ml: PropTypes.oneOf(['neg', 0, 1, 2, 3, 4, 5]),
    mr: PropTypes.oneOf(['neg', 0, 1, 2, 3, 4, 5]),
}

InputText.defaultProps = {
    focusEmail: false,
};

// CSS COMPONENT
const FormGroup = styled.View`
  margin-bottom: 10px;
`;

const Label = styled.Text`
  display: flex;
  position: absolute;
  background-color: #fff;
  font-size: 10px;
  color:  ${props => props.focusEmail ? vg.BLUE_55 : vg.GRAY_50};
  top: 0;
  left: 10px;
  padding: 0 4px;
  z-index: 1;
`;

const Input = styled.TextInput`
  width: 100%;
  border: 1px solid ${props => props.focusEmail ? vg.BLUE_55 : vg.GRAY_50};
  border-radius: 4px;
  height: 40px;
  padding: 10px;
  color:  #999;
  font-size: 12px;
  margin-top: ${props => (props.mt >= 0 || props.mt === 'neg' ? vg.handleMargin(props.mt) : '8px')};
  margin-bottom: ${props => (props.mb >= 0 || props.mb === 'neg' ? vg.handleMargin(props.mb) : '0px')};
  margin-left: ${props => (props.ml >= 0 || props.ml === 'neg' ? vg.handleMargin(props.ml) : '0px')};
  margin-right: ${props => (props.mr >= 0 || props.mr === 'neg' ? vg.handleMargin(props.mr) : '0px')};
`;

const MessageError = styled.Text`
  color: ${vg.GRAY_50};
  font-size: 10px;
  text-align: right;
`;

export default InputText;

