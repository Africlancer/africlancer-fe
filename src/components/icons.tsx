import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { ArrowRightSvg, CameraSvg, EditSvg, GlobeSvg } from '@/src/custom';

interface IProps
{
    // width: string,
    // height: string,
    // fill?: string,
    // stroke?: string,
    className?: string,
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

export const GlobeFolderIcon = () => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--gis" preserveAspectRatio="xMidYMid meet" >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
        <path d="M9.5 9.125a3.5 3.5 0 0 0-3.5 3.5v21.25H3.5a3.5 3.5 0 0 0-3.469 3.973l6 49.998v.002c.008.05.016.101.026.152v.004l.03.15v.002l.04.15v.005c.014.05.029.099.045.148v.002c.016.05.034.098.053.146v.002c.018.048.038.096.058.143v.002a3.5 3.5 0 0 0 .065.142v.002c.023.047.047.092.072.137v.002a3.497 3.497 0 0 0 .11.188a3.5 3.5 0 0 0 .14.21l.002.002c.03.042.061.083.094.124v.001a3.5 3.5 0 0 0 .207.235l.002.002c.035.037.072.074.109.11l.002.001a3.5 3.5 0 0 0 .623.473h.002l.049.027a3.5 3.5 0 0 0 .226.121h.002a3.5 3.5 0 0 0 .711.25l.03.008h.001c.051.012.102.022.153.031h.002a3.5 3.5 0 0 0 .467.051h.002c.048.002.097.004.146.004h81a3.5 3.5 0 0 0 2.74-1.32v-.002a3.5 3.5 0 0 0 .48-.807v-.002a3.5 3.5 0 0 0 .06-.144v-.002a3.5 3.5 0 0 0 .189-.75l6-50a3.5 3.5 0 0 0-3.469-3.973H94v-12.5a3.5 3.5 0 0 0-3.5-3.5H40.75v-5.25a3.5 3.5 0 0 0-3.5-3.5H9.5zm3.5 7h20.75v5.25a3.5 3.5 0 0 0 3.5 3.5H87v9H13v-17.75zm38.29 23.443c2.715.463 5.312 2.7 7.356 6.412a26.359 26.359 0 0 1 1.758 3.999H51.29v-10.41zm-2.58.102v10.309h-8.638a26.359 26.359 0 0 1 1.758-3.999c1.925-3.495 4.339-5.68 6.88-6.31zm-5.94.697c-1.199 1.213-2.274 2.693-3.198 4.371c-.866 1.573-1.612 3.335-2.224 5.24h-6.94a23.22 23.22 0 0 1 12.362-9.61zm15.167.238a23.234 23.234 0 0 1 11.655 9.374h-6.465c-.61-1.906-1.355-3.668-2.22-5.24c-.865-1.57-1.863-2.966-2.97-4.134zM28.988 52.557h7.637c-.642 2.662-1.035 5.548-1.135 8.576h-8.658c.167-3.055.923-5.95 2.156-8.576zm10.301 0h9.422v8.576H38.07c.109-3.06.537-5.958 1.218-8.576zm12 0h9.898c.681 2.618 1.11 5.515 1.22 8.576H51.288v-8.576zm12.56 0h7.163a23.096 23.096 0 0 1 2.156 8.576h-8.186c-.1-3.028-.492-5.914-1.132-8.576zM26.833 63.71h8.643c.066 3.02.424 5.906 1.029 8.576h-7.516a23.096 23.096 0 0 1-2.156-8.576zm11.22 0h10.659v8.576h-9.55c-.643-2.63-1.036-5.526-1.108-8.576zm13.237 0h11.135c-.073 3.05-.465 5.946-1.108 8.576H51.29V63.71zm13.705 0h8.174a23.096 23.096 0 0 1-2.156 8.576H63.97c.604-2.67.957-5.556 1.023-8.576zM30.408 74.865h6.776c.64 2.106 1.444 4.043 2.388 5.758a20.69 20.69 0 0 0 2.502 3.62a23.235 23.235 0 0 1-11.666-9.378zm9.487 0h8.816V85.59c-.159-.009-.315-.024-.473-.035c-2.367-.773-4.603-2.899-6.408-6.176c-.737-1.338-1.388-2.856-1.935-4.514zm11.394 0h9.293c-.547 1.658-1.199 3.176-1.936 4.514c-1.767 3.21-3.946 5.315-6.26 6.127c-.362.037-.73.064-1.097.084V74.865zm12.002 0h6.3a23.239 23.239 0 0 1-10.946 9.098a21.03 21.03 0 0 0 2.261-3.34c.944-1.715 1.746-3.651 2.385-5.758z" fill="#22c55e">
        </path>
    </g>
    </svg>  
)

export const ApClockIcon: React.FC = () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="cs5:w-6 cs5:h-6 w-5 h-5 inline-block mr-2 text-skin-muted"
    >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
      clipRule="evenodd"
    />
  </svg>
)

export const ApBadgeWithMarkIcon: React.FC = () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="cs5:w-6 cs5:h-6 w-5 h-5 inline-block mr-2 text-skin-muted"
  >
    <path
      fillRule="evenodd"
      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
      clipRule="evenodd"
    />
  </svg>
)

export const ApLikeIcon: React.FC = () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="cs5:w-6 cs5:h-6 w-5 h-5 inline-block mr-2 text-skin-muted"
  >
    <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
  </svg>
)

export const ApDollarIcon: React.FC<IProps> = ({ className }) => (
    <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={ className ? className : " " }
        >

        <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
        <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
            clipRule="evenodd"
        />
    </svg>
)

export const ApGlobeIcon: React.FC<IProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={ className ? className : " " }>
  <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
  </svg>
)

export const ApSaveIcon: React.FC<IProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={ className ? className : " " } fill="currentColor" viewBox="0 0 24 24"><path d="M14 3h2.997v5h-2.997v-5zm9 1v20h-22v-24h17.997l4.003 4zm-17 5h12v-7h-12v7zm14 4h-16v9h16v-9z"/></svg>
)