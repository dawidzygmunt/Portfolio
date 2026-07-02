'use client'

import Image, { ImageProps } from 'next/image'

const FALLBACK_SRC = '/images/fallback.png'

export const SafeImage: React.FC<ImageProps> = ({ onError, ...props }) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text -- alt is a required prop on ImageProps and is forwarded via spread
    <Image
      {...props}
      onError={(e) => {
        e.currentTarget.src = FALLBACK_SRC
        onError?.(e)
      }}
    />
  )
}
