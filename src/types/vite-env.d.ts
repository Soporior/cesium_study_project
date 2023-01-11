/// <reference types="vite/client" />
declare const Cesium: any
declare const config: any

declare global {
    namespace NodeJS {
      interface Global {
        signin(): string[]
      }
    }
  }
declare const globalThis: globalThis & { viewer: any };
declare interface Window {
    viewer: any;
  }