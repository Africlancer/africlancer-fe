import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { CameraSvg } from '@/src/custom';

export const CameraIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={CameraSvg} {...props} />
);