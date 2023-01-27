import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { ArrowRightSvg, CameraSvg, EditSvg, GlobeSvg } from '@/src/custom';

interface IcProps
{
    width: string,
    height: string,
    fill?: string,
    stroke?: string,
}

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

export const GlobeFolderIcon = ({width, height, fill, stroke}: IcProps) => (
    <svg height={width} width={height} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--gis" preserveAspectRatio="xMidYMid meet" fill={fill} stroke={stroke}>
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
        <path d="M9.5 9.125a3.5 3.5 0 0 0-3.5 3.5v21.25H3.5a3.5 3.5 0 0 0-3.469 3.973l6 49.998v.002c.008.05.016.101.026.152v.004l.03.15v.002l.04.15v.005c.014.05.029.099.045.148v.002c.016.05.034.098.053.146v.002c.018.048.038.096.058.143v.002a3.5 3.5 0 0 0 .065.142v.002c.023.047.047.092.072.137v.002a3.497 3.497 0 0 0 .11.188a3.5 3.5 0 0 0 .14.21l.002.002c.03.042.061.083.094.124v.001a3.5 3.5 0 0 0 .207.235l.002.002c.035.037.072.074.109.11l.002.001a3.5 3.5 0 0 0 .623.473h.002l.049.027a3.5 3.5 0 0 0 .226.121h.002a3.5 3.5 0 0 0 .711.25l.03.008h.001c.051.012.102.022.153.031h.002a3.5 3.5 0 0 0 .467.051h.002c.048.002.097.004.146.004h81a3.5 3.5 0 0 0 2.74-1.32v-.002a3.5 3.5 0 0 0 .48-.807v-.002a3.5 3.5 0 0 0 .06-.144v-.002a3.5 3.5 0 0 0 .189-.75l6-50a3.5 3.5 0 0 0-3.469-3.973H94v-12.5a3.5 3.5 0 0 0-3.5-3.5H40.75v-5.25a3.5 3.5 0 0 0-3.5-3.5H9.5zm3.5 7h20.75v5.25a3.5 3.5 0 0 0 3.5 3.5H87v9H13v-17.75zm38.29 23.443c2.715.463 5.312 2.7 7.356 6.412a26.359 26.359 0 0 1 1.758 3.999H51.29v-10.41zm-2.58.102v10.309h-8.638a26.359 26.359 0 0 1 1.758-3.999c1.925-3.495 4.339-5.68 6.88-6.31zm-5.94.697c-1.199 1.213-2.274 2.693-3.198 4.371c-.866 1.573-1.612 3.335-2.224 5.24h-6.94a23.22 23.22 0 0 1 12.362-9.61zm15.167.238a23.234 23.234 0 0 1 11.655 9.374h-6.465c-.61-1.906-1.355-3.668-2.22-5.24c-.865-1.57-1.863-2.966-2.97-4.134zM28.988 52.557h7.637c-.642 2.662-1.035 5.548-1.135 8.576h-8.658c.167-3.055.923-5.95 2.156-8.576zm10.301 0h9.422v8.576H38.07c.109-3.06.537-5.958 1.218-8.576zm12 0h9.898c.681 2.618 1.11 5.515 1.22 8.576H51.288v-8.576zm12.56 0h7.163a23.096 23.096 0 0 1 2.156 8.576h-8.186c-.1-3.028-.492-5.914-1.132-8.576zM26.833 63.71h8.643c.066 3.02.424 5.906 1.029 8.576h-7.516a23.096 23.096 0 0 1-2.156-8.576zm11.22 0h10.659v8.576h-9.55c-.643-2.63-1.036-5.526-1.108-8.576zm13.237 0h11.135c-.073 3.05-.465 5.946-1.108 8.576H51.29V63.71zm13.705 0h8.174a23.096 23.096 0 0 1-2.156 8.576H63.97c.604-2.67.957-5.556 1.023-8.576zM30.408 74.865h6.776c.64 2.106 1.444 4.043 2.388 5.758a20.69 20.69 0 0 0 2.502 3.62a23.235 23.235 0 0 1-11.666-9.378zm9.487 0h8.816V85.59c-.159-.009-.315-.024-.473-.035c-2.367-.773-4.603-2.899-6.408-6.176c-.737-1.338-1.388-2.856-1.935-4.514zm11.394 0h9.293c-.547 1.658-1.199 3.176-1.936 4.514c-1.767 3.21-3.946 5.315-6.26 6.127c-.362.037-.73.064-1.097.084V74.865zm12.002 0h6.3a23.239 23.239 0 0 1-10.946 9.098a21.03 21.03 0 0 0 2.261-3.34c.944-1.715 1.746-3.651 2.385-5.758z" fill="#22c55e">
        </path>
    </g>
    </svg>  
)