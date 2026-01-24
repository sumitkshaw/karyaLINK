/**
 * Utility functions for image handling
 */

// Check if image exists
export const checkImageExists = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

// Get appropriate fallback based on image type
export const getFallbackForImage = (imagePath: string): string => {
  if (imagePath.includes('plumber')) return '/default-images/plumber.svg';
  if (imagePath.includes('electric')) return '/default-images/electrician.svg';
  if (imagePath.includes('tutor')) return '/default-images/tutor.svg';
  if (imagePath.includes('property')) return '/default-images/property.svg';
  if (imagePath.includes('verify')) return '/default-images/verify.svg';
  if (imagePath.includes('location')) return '/default-images/location.svg';
  if (imagePath.includes('shield')) return '/default-images/shield.svg';
  if (imagePath.includes('badge')) return '/default-images/badge.svg';
  return '/placeholder.svg';
};

// Preload images for better UX
export const preloadImages = (imageUrls: string[]): void => {
  if (typeof window === 'undefined') return;
  
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};