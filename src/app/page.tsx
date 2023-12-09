import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="sf_heading_2 red600">Hello! prography-hompage</div>
      <Link href="/test">공통컴포넌트 보러 가기</Link>
    </div>
  );
}
