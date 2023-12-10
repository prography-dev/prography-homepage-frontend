'use client';

import { usePathname } from 'next/navigation';

const ProjectDetailPage = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div style={{ position: 'absolute', zIndex: 1 }}>
      <h1>Project Detail Page - {pathName}</h1>
    </div>
  );
};

export default ProjectDetailPage;
