import React from 'react';
import './custom-button.styles.css'; //No need fot this import
import {CustomButtonContainer} from './custom-button.styles'

const CustomButton = ({children, ...props}) =>
(
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;
