
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChevronDown, ChevronRight, Pause } from 'lucide-react';

interface DownloadItem {
  id: string;
  name: string;
  size: string;
  status: string;
  seeds: number;
  peers: number;
  downloadSpeed: string;
  uploadSpeed: string;
  eta: string;
}

const mockData: DownloadItem[] = [
  {
    id: '1',
    name: 'Ubuntu 23.04 - Desktop amd64',
    size: '25 GB',
    status: 'Paused',
    seeds: 108,
    peers: 42,
    downloadSpeed: '0 KB/s',
    uploadSpeed: '0 KB/s',
    eta: '--',
  },
  // Add more mock data as needed
];

type FilterCategory = 'status' | 'tags' | 'trackers' | 'owners';

const StatusFilter = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <div className="mb-4">
      <div 
        className="flex items-center cursor-pointer py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        <span className="font-semibold ml-1">STATUS</span>
      </div>
      
      {isOpen && (
        <div className="pl-6 space-y-2">
          <div className="cursor-pointer hover:text-torrex-primary">All</div>
          <div className="cursor-pointer hover:text-torrex-primary">Completed</div>
          <div className="cursor-pointer hover:text-torrex-primary">Downloading</div>
          <div className="cursor-pointer hover:text-torrex-primary">Seeding</div>
          <div className="cursor-pointer hover:text-torrex-primary">Running</div>
          <div className="cursor-pointer hover:text-torrex-primary">Paused</div>
        </div>
      )}
    </div>
  );
};

const TagsFilter = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <div className="mb-4">
      <div 
        className="flex items-center cursor-pointer py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        <span className="font-semibold ml-1">TAGS</span>
      </div>
      
      {isOpen && (
        <div className="pl-6 space-y-2">
          <div className="cursor-pointer hover:text-torrex-primary">All</div>
          <div className="cursor-pointer hover:text-torrex-primary">Untagged</div>
        </div>
      )}
    </div>
  );
};

const CollapsibleFilter = ({ title }: { title: string }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <div className="mb-4">
      <div 
        className="flex items-center cursor-pointer py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        <span className="font-semibold ml-1">{title}</span>
      </div>
      
      {isOpen && (
        <div className="pl-6">
          {/* Content would go here */}
        </div>
      )}
    </div>
  );
};

const DownloadTable = () => {
  return (
    <div className="flex w-full h-full">
      <div className="w-[250px] bg-gray-200 p-4 border-r border-gray-300">
        <StatusFilter />
        <TagsFilter />
        <CollapsibleFilter title="TRACKERS" />
        <CollapsibleFilter title="OWNERS" />
      </div>
      
      <div className="flex-1 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Seeds</TableHead>
              <TableHead>Peers</TableHead>
              <TableHead>Download Speed</TableHead>
              <TableHead>Upload Speed</TableHead>
              <TableHead>ETA</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockData.map((item) => (
              <TableRow key={item.id} className="bg-gray-100">
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.size}</TableCell>
                <TableCell className="flex items-center">
                  <Pause size={16} className="mr-1" /> {item.status}
                </TableCell>
                <TableCell>{item.seeds}</TableCell>
                <TableCell>{item.peers}</TableCell>
                <TableCell>{item.downloadSpeed}</TableCell>
                <TableCell>{item.uploadSpeed}</TableCell>
                <TableCell>{item.eta}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DownloadTable;
