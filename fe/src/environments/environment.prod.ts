import { Environment } from './environment.type';

export const environment: Environment = {
  production: '#{isProd}#' as unknown as boolean,
  ssr: false,
};
