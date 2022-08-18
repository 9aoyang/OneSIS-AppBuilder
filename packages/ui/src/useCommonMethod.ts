export default (props: any) => ({
  show: () => {
    props.config.style.display = 'initial';
  },
  hide: () => {
    props.config.style.display = 'none';
  },
});
