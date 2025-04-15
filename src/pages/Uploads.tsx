
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Upload, Plus } from 'lucide-react';

const Uploads = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Uploads</h1>
          <Button className="bg-torrex-primary hover:bg-torrex-secondary flex items-center gap-2">
            <Plus size={16} />
            New Upload
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 min-h-[calc(100vh-200px)]">
          <div className="flex flex-col items-center justify-center h-80 text-center">
            <Upload size={64} className="text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-500 mb-2">No active uploads</h2>
            <p className="text-gray-400 max-w-md mb-6">
              You haven't started any uploads yet. Click the button above to create a new torrent or upload an existing one.
            </p>
            <Button className="bg-torrex-primary hover:bg-torrex-secondary flex items-center gap-2">
              <Plus size={16} />
              Create New Torrent
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Uploads;
