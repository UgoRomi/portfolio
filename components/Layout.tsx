import React from 'react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen bg-slate-900 text-slate-400'>
      <main>{children}</main>
    </div>
  );
};
