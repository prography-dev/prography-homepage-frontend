// pc 화면인지 아닌지 return
export default function isPcDevice() {
  if (typeof window !== 'undefined') {
    const breakPoint = 1280;
    return window.innerWidth >= breakPoint;
  }

  return false;
}
