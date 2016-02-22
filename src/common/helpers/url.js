import config from '../config';
import { getEnv } from './env';

const getRootUrl = () => {
  const env = getEnv();
  const { hostName, protocol, port } = config[ env ].location;
  return `${ protocol }//${ hostName }${ port ? `:${ port }` : '' }`;
};

export { getRootUrl };
