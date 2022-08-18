export default (ref: any) => ({
  show: () => {
    ref.style.display = 'initial';
  },
  hide: () => {
    ref.style.display = 'none';
  },
});
