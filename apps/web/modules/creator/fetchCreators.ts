import { sleep } from '@utils/sleep';
import { creatorsMocks } from './creators.mocks';

export const fetchCreators = async (id: string) => {
  await sleep(1500);

  return creatorsMocks;
};
