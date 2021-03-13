let tableOrder = {
  changeOrder(item) {
    this[item] = this[item] === undefined ? true : !this[item];
  },
  comparator(item) {
    let compare = function (a, b) {
      if (this[item])
        return innerCompare(b[item], a[item]);
      return innerCompare(a[item], b[item]);
    };
    return compare.bind(this);
  }
};

function innerCompare(el1, el2) {
  return el1 < el2 ? -1 : el1 > el2 ? 1 : 0;
}

export default tableOrder;

