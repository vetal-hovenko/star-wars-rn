import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {GOLD_COLOR} from '../lib/utils/constants';

interface PaginationButtonProps {
    icon: IconProp;
    disabled: boolean;
    handlePageSwitch: () => void;
}

const PaginationButton = (props: PaginationButtonProps) => {
    const {disabled, handlePageSwitch, icon} = props;

    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={() => handlePageSwitch()}>
            <FontAwesomeIcon
                color={disabled ? 'black' : GOLD_COLOR}
                size={32}
                icon={icon}
            />
        </TouchableOpacity>
    );
};

export default PaginationButton;
