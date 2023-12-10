import Link from 'next/link';
import Button from '@/components/common/button/Button';

export default function Home() {
  return (
    <div>
      <div className="sf_display_1">Hello! prography-hompage</div>
      <Link href="/test">공통컴포넌트 보러 가기</Link>
      <div style={{ display: 'block', background: 'black', padding: '30px' }}>
        <Button label="test" />
        <Button label="test" disabled />
        <Button label="test" buttonSize="56" />
        <Button label="test" buttonSize="48" />
      </div>
      <Link href="/project">프로젝트</Link>
    </div>
  );
}
