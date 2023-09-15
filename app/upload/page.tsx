'use client';
import React, { useState } from 'react';
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface CloudinaryResult {
  public_id: string;
}

// Upload files to cloudinary
const UploadPage = () => {
  const [publicId, setPublidId] = useState('');
  return (
    // Expects a function as children, and passes an object to this function
    <>
      { publicId && 
          <CldImage src={publicId} width={960} height={640} alt='Placeholder' />
      }
      <CldUploadWidget
        uploadPreset='nextappUpload'
        options={{ 
          sources: ['local'],
          multiple: false,
          maxFiles: 5
        }}
        onUpload={(result, widget) => {
          if (result.event !== 'success') return
          const info = result.info as CloudinaryResult
          setPublidId(info.public_id)
          console.log(result)
        }}
      >
        {({ open }) => 
          <button 
            className='btn btn-primary'
            onClick={() => open()}
          >
            Upload
          </button>}
      </CldUploadWidget>
    </>
  )
}

export default UploadPage