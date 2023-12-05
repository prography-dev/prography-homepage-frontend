import Link from 'next/link';
import Button from '@/components/common/button/Button';

export default function Home() {
  return (
    <div>
      <div className="sf_heading_2">Hello! prography-hompage</div>
      <Link href="/test">공통컴포넌트 보러 가기</Link>
      <div style={{ display: 'block', background: 'black', padding: '30px' }}>
        <Button label="test" />
        <Button label="test" disabled />
        <Button label="test" button_size="56" />
        <Button label="test" button_size="48" />
      </div>
    </div>
  );
}
