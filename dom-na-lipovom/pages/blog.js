import Link from 'next/link';
import React from 'react';
import { MainLayout } from '@/components/MainLayout';
import Blog from "../components/Blog";

const blog = () => {
  return (
    <div className="main-blog">
      <Blog isComeBackShow />
    </div>
  )
};

export default blog;