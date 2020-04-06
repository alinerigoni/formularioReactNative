import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { vg } from './styles/variables';


const InputPassword = (props) => {

    const [statePassword, setStatePassword] = useState({
        focusPassword: false,
    });

    const handleFocusPassword = () => {
        if (!statePassword.focusPassword) {
            setStatePassword({ focusPassword: true });
        }
    }

    const handleBlurPassword = () => {
        if (statePassword.focusPassword) {
            setStatePassword({ focusPassword: false });
        }
    }

    return (

        <FormGroup>
            <Label>{props.textLabel}</Label>
            <Input
                name={props.textName}
                type={props.textType}
                value={props.textValue}
                secureTextEntry={true}
                onChangeText={props.changePassword}
                onFocus={() => handleFocusPassword}
                onBlur={() => handleBlurPassword}
                focusPassword={statePassword.focusPassword}
                mt={props.mt}
                mb={props.mb}
                ml={props.ml}
                mr={props.mr}
            />
            <MessageError>{props.messageError}</MessageError>
        </FormGroup>

    )

}

InputPassword.propTypes = {
    textValue: PropTypes.string,
    textName: PropTypes.string.isRequired,
    textType: PropTypes.string.isRequired,
    changePassword: PropTypes.func.isRequired,
    blurPassword: PropTypes.bool,
    focusPassword: PropTypes.bool,
    mt: PropTypes.oneOf(['neg', 0, 1, 2, 3, 4, 5]),
    mb: PropTypes.oneOf(['neg', 0, 1, 2, 3, 4, 5]),
    ml: PropTypes.oneOf(['neg', 0, 1, 2, 3, 4, 5]),
    mr: PropTypes.oneOf(['neg', 0, 1, 2, 3, 4, 5]),
}

InputPassword.defaultProps = {
    focusPassword: false,
};

const FormGroup = styled.View`
  margin-bottom: 10px;
`;

const Label = styled.Text`
  font-size: 10px;
  color: ${props => props.focusPassword ? vg.BLUE_55 : vg.GRAY_50};
  background-color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 10px;
  padding: 0 4px;
  z-index: 1;
`;

const Input = styled.TextInput`
  border: 1px solid ${props => props.focusPassword ? vg.BLUE_55 : vg.GRAY_50};
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

export default InputPassword;