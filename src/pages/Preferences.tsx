
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Preferences = () => {
  const handleSaveChanges = () => {
    toast.success('Preferences saved successfully');
  };
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-4">Preferences</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <Tabs defaultValue="general">
            <TabsList className="mb-6">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="downloads">Downloads</TabsTrigger>
              <TabsTrigger value="connections">Connections</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general" className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Application Settings</h2>
                
                <div className="grid gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="language">Language</Label>
                    <select 
                      id="language" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="en">English</option>
                      <option value="ne">Nepali</option>
                    </select>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="startup">Start Torrex on system startup</Label>
                      <Switch id="startup" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="minimize">Minimize to system tray</Label>
                      <Switch id="minimize" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="updates">Check for updates automatically</Label>
                      <Switch id="updates" defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Theme</h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="light" name="theme" defaultChecked />
                    <Label htmlFor="light">Light</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="dark" name="theme" />
                    <Label htmlFor="dark">Dark</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="system" name="theme" />
                    <Label htmlFor="system">System</Label>
                  </div>
                </div>
              </div>
              
              <Button 
                className="bg-torrex-primary hover:bg-torrex-secondary"
                onClick={handleSaveChanges}
              >
                Save Changes
              </Button>
            </TabsContent>
            
            <TabsContent value="downloads" className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Download Settings</h2>
                
                <div className="grid gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="download-location">Default Download Location</Label>
                    <div className="flex space-x-2">
                      <Input 
                        id="download-location" 
                        defaultValue="/home/user/Downloads" 
                        className="flex-1"
                      />
                      <Button variant="outline">Browse</Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="max-downloads">Maximum Active Downloads</Label>
                    <Input id="max-downloads" type="number" defaultValue="5" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="auto-start">Start downloads automatically</Label>
                      <Switch id="auto-start" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="preallocate">Pre-allocate disk space</Label>
                      <Switch id="preallocate" defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
              
              <Button 
                className="bg-torrex-primary hover:bg-torrex-secondary"
                onClick={handleSaveChanges}
              >
                Save Changes
              </Button>
            </TabsContent>
            
            <TabsContent value="connections">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Connection Settings</h2>
                {/* Connection settings content */}
                <Button 
                  className="bg-torrex-primary hover:bg-torrex-secondary"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="privacy">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Privacy Settings</h2>
                {/* Privacy settings content */}
                <Button 
                  className="bg-torrex-primary hover:bg-torrex-secondary"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="advanced">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Advanced Settings</h2>
                {/* Advanced settings content */}
                <Button 
                  className="bg-torrex-primary hover:bg-torrex-secondary"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AppLayout>
  );
};

export default Preferences;
