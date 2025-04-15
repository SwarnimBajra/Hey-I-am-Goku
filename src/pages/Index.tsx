
import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Share2, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/landing/FeatureCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-torrex-light flex flex-col">
      <div className="container mx-auto px-4 py-6">
        <header className="flex justify-between items-center mb-16 rounded-full bg-gray-200 shadow-md p-4">
          <div className="text-4xl font-bold ml-4">
            TORR<span className="text-torrex-primary">EX</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/help" className="text-gray-700 hover:text-torrex-primary">
              Help
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-torrex-primary">
              About
            </Link>
            <Button variant="outline" className="rounded-full border-torrex-primary text-torrex-primary hover:bg-torrex-primary hover:text-white">
              Download
            </Button>
          </div>
        </header>
        
        <div className="text-center mb-16">
          <p className="text-lg mb-2">An initiative by university students from <span className="text-teal-500">Nepal</span></p>
          <h1 className="text-5xl md:text-6xl font-bold text-torrex-primary mb-8">
            Experience more efficient &<br />
            secure Torrent Downloads
          </h1>
          <Button className="bg-torrex-primary hover:bg-torrex-secondary text-white rounded-full px-8 py-6 text-xl">
            Get Torrex
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FeatureCard 
            icon={Download}
            title="Download torrents in bulk"
            description="The lightweight Torrex client serves as a bulk torrent downloader to help you download dozens of files simultaneously."
          />
          <FeatureCard 
            icon={Share2}
            title="Decentralized peer discovery"
            description="Find peers faster with our advanced DHT implementation for more reliable connections."
          />
          <FeatureCard 
            icon={Shield}
            title="Enhanced security & privacy"
            description="Enjoy encrypted connections and secure data transfers to protect your privacy while sharing files."
          />
          <FeatureCard 
            icon={Clock}
            title="Schedule when needed"
            description="Set up downloads to start and stop automatically based on your schedule."
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
