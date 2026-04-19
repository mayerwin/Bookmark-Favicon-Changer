/**
 * Utilities for favicon manipulation
 */
const FaviconUtils = {
  /**
   * Convert an emoji to a high-quality data URL
   */
  async emojiToDataUrl(emoji) {
    const size = 128; // High DPI for crispness
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d', { alpha: true });

    // Precise centering
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    
    // Choose font based on platform
    const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI Emoji", "Noto Color Emoji", "Apple Color Emoji", serif';
    ctx.font = `${size * 0.8}px ${fontStack}`;
    
    // Draw emoji centered
    ctx.fillText(emoji, size / 2, size / 2 + size * 0.05); // Slight offset for visual balance

    return canvas.toDataURL('image/png');
  },

  /**
   * Convert an SVG path to a high-quality data URL
   */
  async svgToDataUrl(path, color = '#6366f1') {
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // MDI icons are typically on a 24x24 grid
    const scale = size / 24;
    
    ctx.scale(scale, scale);
    ctx.fillStyle = color;
    
    const p = new Path2D(path);
    ctx.fill(p);

    return canvas.toDataURL('image/png');
  },

  /**
   * Resize and optimize an uploaded image
   */
  async processUploadedImage(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const size = 128; // Target size for favicons
          canvas.width = size;
          canvas.height = size;
          const ctx = canvas.getContext('2d');
          
          // Draw image contained/centered
          const scale = Math.min(size / img.width, size / img.height);
          const x = (size - img.width * scale) / 2;
          const y = (size - img.height * scale) / 2;
          ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
          
          resolve(canvas.toDataURL('image/png'));
        };
        img.onerror = reject;
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
};

export default FaviconUtils;
