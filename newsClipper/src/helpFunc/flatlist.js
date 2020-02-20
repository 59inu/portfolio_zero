const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};
const isOverHeight = ({contentOffset}) => contentOffset.y - 20 > 0;

export default funcFlatlist = {
  isCloseToBottom,
  isOverHeight,
};
