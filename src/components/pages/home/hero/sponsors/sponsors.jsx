import Image from 'next/image';

import crowdDev from 'svgs/logos/crowd-dev.svg';
import hanko from 'svgs/logos/hanko.svg';
import novu from 'svgs/logos/novu.svg';
import toolJet from 'svgs/logos/tool-jet.svg';
import wasp from 'svgs/logos/wasp.svg';

const logos = [
  {
    src: toolJet,
    alt: 'ToolJet',
    link: 'https://tooljet.com',
    width: 119,
    height: 42,
  },
  {
    src: crowdDev,
    alt: 'CrowdDev',
    link: 'https://www.crowd.dev',
    width: 149,
    height: 44,
  },
  {
    src: novu,
    alt: 'Novu',
    link: 'https://novu.co',
    width: 131,
    height: 40,
  },
  {
    src: hanko,
    alt: 'Hanko',
    link: 'https://www.hanko.io',
    width: 126,
    height: 44,
  },
  {
    src: wasp,
    alt: 'Wasp',
    link: 'https://wasp-lang.dev',
    width: 121,
    height: 44,
  },
];

const Sponsors = () => (
  <div className="pt-[148px] sm:pt-16 xs:pt-12" id="sponsors">
    <ul className="flex flex-wrap justify-center gap-x-[111px] gap-y-10 lg:gap-x-16 sm:gap-x-10">
      {logos.map((props, index) => (
        <li className="shrink-0" key={index}>
          {/* eslint-disable-next-line react/prop-types */}
          <a href={props.link} target="_blank" rel="noreferrer">
            <Image className="w-auto sm:h-9" priority {...props} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Sponsors;
