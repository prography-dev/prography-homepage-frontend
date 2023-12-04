import StyledTest from '@/components/StyledTest';
import Button from '@/components/common/button/Button';

export default function Home() {
  return (
    <div>
      hello! prography-homepage <br />
      자동배포 테스트입니다
      <br />
      <StyledTest />
      좋은 하루 되세요
      <br />
      ㅎㅇㅎㅇ
      <div style={{ display: 'block', background: 'black', padding: '30px' }}>
        <Button label="test"></Button>
        <Button label="test" disabled></Button>
        <Button label="test" button_size="56"></Button>
        <Button label="test" button_size="48"></Button>
      </div>
    </div>
  );
}
