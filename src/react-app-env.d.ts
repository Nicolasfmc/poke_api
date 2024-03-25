/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
      PORT: string
      REACT_APP_API_URL: string
    }
  }