const dummy = "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"


export const checkImageURL = url =>

  !url ? dummy : (p =>
    p.test (url) ? url : dummy
  ) (
    new RegExp ('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i')
  )