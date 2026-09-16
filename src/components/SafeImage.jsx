import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

export default function SafeImage({ src, alt, className, objectFit = 'object-cover' }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-slate-900 border border-slate-800 text-slate-500 p-4 text-center ${className}`}>
        <ImageOff className="w-8 h-8 mb-2 text-slate-600" />
        <span className="text-xs font-medium">{alt || 'Image Unavailable'}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={`${className} ${objectFit} transition-opacity duration-300`}
      loading="lazy"
    />
  );
}