import config from '../config';
import { getEnv } from '.';

const getRootUrl = () => {
  const env = getEnv();
  const { hostName, protocol, port } = config[ env ].location;
  return `${ protocol }//${ hostName }${ port ? `:${ port }` : '' }`;
};

export { getRootUrl };
