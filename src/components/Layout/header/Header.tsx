import { revalidateTag } from 'next/cache';
import HeaderComponent from './HeaderComponent';
import { getLastGeneration, GenerationType } from '@/apis/generation';

async function getGenerationData() {
  revalidateTag('generation');
  return getLastGeneration();
}

export const revalidate = 300;

const Header = async () => {
  const generation = await getGenerationData();
  const { name, status, landingUrl } = generation as GenerationType;

  return <HeaderComponent name={name} status={status} url={landingUrl} />;
};

export default Header;
