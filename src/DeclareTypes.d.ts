declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.pdf";

declare namespace NodeJS {
  interface ProcessEnv {
    //types of envs
    NODE_ENV: "development" | "production" | "test";
    REACT_APP_MY_SERVICE_ID: string;
    REACT_APP_MY_TEMPLATE_ID: string;
    REACT_APP_MY_PUBLIC_KEY: string;
  }
}
