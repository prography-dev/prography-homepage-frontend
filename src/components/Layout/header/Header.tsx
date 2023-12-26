import HeaderComponent from './HeaderComponent';
import { getLastGeneration, GenerationType } from '@/apis/generation';

async function getGenerationData() {
  return getLastGeneration();
}

const Header = async () => {
  const generation = await getGenerationData();
  const { name, status, landingUrl } = generation as GenerationType;

  return <HeaderComponent name={name} status={status} url={landingUrl} />;
};

export default Header;
