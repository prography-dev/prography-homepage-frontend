// pc 화면인지 아닌지 return
export function isPcDevice() {
  if (typeof window !== 'undefined') {
    const breakPoint = 1280;
    return window.innerWidth >= breakPoint;
  }

  return false;
}

export function isTabletDevice() {
  if (typeof window !== 'undefined') {
    const currentWidth = window.innerWidth;
    const TABLET_WIDTH = 768;
    const PC_WIDTH = 1280;
    return TABLET_WIDTH <= currentWidth && currentWidth <= PC_WIDTH;
  }

  return false;
}

export function isPhoneDevice() {
  return !(isPcDevice() || isTabletDevice());
}
