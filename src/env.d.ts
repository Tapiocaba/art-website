/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLOUDINARY_CLOUD_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
