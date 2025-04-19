/**
 * Global type definitions
 */
declare global {
  /**
   * Next.js page component props
   */
  interface PageProps {
    params: Promise<{
      id?: string;
      locale?: string;
      [key: string]: string | undefined;
    }>;
    searchParams: Promise<{
      [key: string]: string | string[] | undefined;
    }>;
  }

  /**
   * Environment variables
   */
  namespace NodeJS {
    interface ProcessEnv {
      API_URL: string;
      NODE_ENV: "development" | "production" | "test";
    }
  }
}

export {};
