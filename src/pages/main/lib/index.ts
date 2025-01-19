export const isLoadMoreData = () => {
  return (
    window.innerHeight + document.documentElement.scrollTop ===
    document.documentElement.offsetHeight
  );
};
