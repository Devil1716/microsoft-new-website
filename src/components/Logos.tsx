import React from 'react';
import logo from '../../assets/images/logo.png';

export const MSCLogo = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h11v11H4V4z" fill="#00A4EF"/>
    <path d="M17 4h11v11H17V4z" fill="#7FBA00"/>
    <path d="M4 17h11v11H4V17z" fill="#FFB900"/>
    <path d="M17 17h11v11H17V17z" fill="#F25022"/>
  </svg>
);

export const MLSALogo = ({ className = "" }: { className?: string }) => (
  <img src={logo} alt="MLSALogo" className={className} />
);