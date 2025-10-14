// Ark Dino Images Module
// Auto-import all dino images from assets/ark directory

const images = import.meta.glob('../assets/ark/*.webp', { eager: true })

const arkDinoImages = {}

// Process the imported images
for (const path in images) {
  // Extract filename without extension
  const filename = path.split('/').pop().replace('.webp', '')
  arkDinoImages[filename] = images[path].default
}

// Vue plugin to provide dino images globally
export default {
  install(app) {
    app.config.globalProperties.$arkDinos = arkDinoImages
    app.provide('arkDinos', arkDinoImages)
  }
}

// Also export the images object for direct import
export { arkDinoImages }