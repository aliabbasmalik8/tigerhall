export const IMAGE_BASE_URL = "https://images.prod.tigerhall.io/"

export const removeBaseURL = (uri) => {
  return uri.replace(IMAGE_BASE_URL, '');
}