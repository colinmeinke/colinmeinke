import config from '../config';

let ENV;

const isNode = () => typeof window === 'undefined';

const getEnvFromClient = () => {
  const clientHostName = window.location.hostname;

  for ( const env of config.envs ) {
    if ( config[ env ].location.hostName === clientHostName ) {
      return env;
    }
  }

  return 'development';
};

const getEnvFromServer = () => {
  if ( config.envs.indexOf( process.env.NODE_ENV ) !== -1 ) {
    return process.env.NODE_ENV;
  }

  return 'development';
};

const getEnv = () => ENV || ( isNode() ? getEnvFromServer() : getEnvFromClient());

export { getEnv, isNode };
