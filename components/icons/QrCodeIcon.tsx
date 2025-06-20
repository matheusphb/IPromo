import React from 'react';

export const QrCodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5A.75.75 0 014.5 3.75h15a.75.75 0 01.75.75v15a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75v-15z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 8.25v7.5h7.5V8.25h-7.5zM12 12h3.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 8.25H6m12 0h2.25M3.75 15.75H6m12 0h2.25M8.25 3.75V6m0 12v2.25m7.5-16.5V6m0 12v2.25" />
  </svg>
);