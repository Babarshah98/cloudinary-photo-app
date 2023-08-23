"use client"


import Image from 'next/image'
import { CldImage } from 'next-cloudinary';
import { CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';

 export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};




export default function Home() {
  const [ImageId, setImageId ]= useState("")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <CldUploadButton
  onUpload={(result: UploadResult) => 
    setImageId(result.info.public_id)}
    
    uploadPreset="shvwhn8i" />
    {ImageId && (
    <CldImage
     width="560"
     height="400"
     src={ImageId}
     sizes="100vw"
     alt="Description of my image"
/>)}
    </main>
  )
}
