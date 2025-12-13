import React from 'react';
import NavbarItem from '@theme-original/NavbarItem';
import Auth from '@site/src/components/Auth'; // Import the Auth component

export default function NavbarItemWrapper(props) {
  if (props.type === 'custom-auth-navbar-item') {
    return <Auth />;
  }
  return (
    <>
      <NavbarItem {...props} />
    </>
  );
}
