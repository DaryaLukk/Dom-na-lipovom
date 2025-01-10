import Link from 'next/link';
import React from 'react';

const ComeBack = ({path='/', title='← на главную'}) => {
  return (
    <Link href={path} legacyBehavior><a className='comeback'>{title}</a></Link>
  )
};

export default ComeBack;