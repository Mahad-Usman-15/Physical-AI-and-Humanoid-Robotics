import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';

function Footer() {
  const {footer} = useThemeConfig();
  if (!footer) {
    return null;
  }
  const {copyright, links, logo, style} = footer;

  const modulesLinks = {
    title: 'Book Modules',
    items: [
      {
        label: 'ROS 2',
        to: '/docs/modules/ros2',
      },
      {
        label: 'Simulation',
        to: '/docs/modules/gazebo',
      },
      {
        label: 'NVIDIA Isaac',
        to: '/docs/modules/nvidia-isaac',
      },
      {
        label: 'VLA Robotics',
        to: '/docs/modules/vla-robotics',
      },
      {
        label: 'Physical AI',
        to: '/docs/modules/physical-ai',
      },
      {
        label: 'Humanoid Robotics',
        to: '/docs/modules/humanoid-robotics',
      },
    ],
  };

  const updatedLinks = links ? [...links, modulesLinks] : [modulesLinks];

  return (
    <FooterLayout
      style={style}
      links={updatedLinks && updatedLinks.length > 0 && <FooterLinks links={updatedLinks} />}
      logo={logo && <FooterLogo logo={logo} />}
      copyright={copyright && <FooterCopyright copyright={copyright} />}
    />
  );
}
export default React.memo(Footer);
