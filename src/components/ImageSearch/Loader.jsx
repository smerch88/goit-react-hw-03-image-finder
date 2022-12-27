import React from 'react';
import { Oval } from 'react-loader-spinner';

export function Loader({ size, wrapperClass }) {
  return (
    <>
      <Oval
        height={80}
        width={80}
        color="#303f9f"
        wrapperStyle={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#303f9f"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </>
  );
}
