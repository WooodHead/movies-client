import React, { useRef, useState, useEffect } from 'react';

import { Skeleton } from 'antd';

interface LazyLoadImageProps {
  src: string;
  alt: string;
}

const LazyLoadImage: React.FC<LazyLoadImageProps> = ({ src, alt }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const image = entries[0];
      if (image.isIntersecting) {
        setIsLoading(false);
        observer.unobserve(imgRef.current as HTMLImageElement);
      }
    });
    observer.observe(imgRef.current as HTMLImageElement);

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  const urlImage = src ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${src}` : '/images/uploads/mv1.jpg';

  return (
    <>
      {isLoading && <Skeleton.Image style={{ width: '100%' }} />}
      <img
        ref={imgRef}
        onLoad={() => setIsLoading(false)}
        style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease-in' }}
        src={isLoading ? '' : urlImage}
        alt={alt}
      />
    </>
  );
};

export default LazyLoadImage;
