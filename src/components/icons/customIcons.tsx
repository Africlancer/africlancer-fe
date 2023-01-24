import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { ArrowRightSvg, CameraSvg, EditSvg, GlobeSvg } from '@/src/custom';

export const CameraIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={CameraSvg} {...props} />
);

export const EditIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={EditSvg} {...props} />
);

export const ArrowRightIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={ArrowRightSvg} {...props} />
);

export const GlobeIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={GlobeSvg} {...props} />
);