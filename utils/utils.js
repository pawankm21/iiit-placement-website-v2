export default function getLastPlacementYear() {
  var now = new Date();
  if (now.getMonth() > 4) {
    return now.getFullYear();
  }
  return now.getFullYear() - 1;
}
