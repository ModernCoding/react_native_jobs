export const checkImageURL = url =>

  !url ? false : (p => p.test (url)) (
    new RegExp ('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i')
  )