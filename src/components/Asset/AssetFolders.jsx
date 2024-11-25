import { FolderUp, Gem, Plus } from 'lucide-react'
import React from 'react'
import { Button } from "@nextui-org/react";
import AssetCard from './AssetCard';


const AssetFolders = () => {
  return (
    <>
        <div className="w-full mr-5 my-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-lg subpixel-antialiased my-4">
              <p className="px-2">Folders (2)</p>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                startContent={<FolderUp size={15} />}
                className="bg-transparent border-2 rounded-md hover:bg-gray-100 transition-all duration-600"
              >
              
                New Folder
              </Button>
              
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2.5">
            <AssetCard/>
            <AssetCard/>
          </div>
        </div>
    </>
  )
}

export default AssetFolders
