export default function triggerGtm(payload: object) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}
