
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import DownloadTable from '@/components/downloads/DownloadTable';

const Downloads = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-6 h-full">
        <h1 className="text-2xl font-bold mb-4">Downloads</h1>
        <div className="bg-white rounded-lg shadow-sm h-[calc(100vh-180px)]">
          <DownloadTable />
        </div>
      </div>
    </AppLayout>
  );
};

export default Downloads;
