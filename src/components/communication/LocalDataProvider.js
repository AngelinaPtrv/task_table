import tableOrder from "./order";

class LocalDataProvider {

  data = [
    {id: 1, firstName: 'Ang', secondName: 'Ptrv', city: 'Kzn', telephone: 919},
    {id: 2, firstName: 'Ant', secondName: 'Ptrv', city: 'Msk', telephone: 918},
    {id: 3, firstName: 'Rm', secondName: 'Shk', city: 'Srt', telephone: 302},
    {id: 4, firstName: 'Nst', secondName: 'Ch', city: 'Stp', telephone: 801},
    {id: 5, firstName: 'Jkl', secondName: 'Jhf', city: 'Jdhg', telephone: 546},
    {id: 6, firstName: 'Utr', secondName: 'hgdc', city: 'Ndf', telephone: 876},
    {id: 7, firstName: 'Lde', secondName: 'Xmv', city: 'Bsxv', telephone: 2942},
    {id: 8, firstName: 'Otr', secondName: 'Grn', city: 'Kgcc', telephone: 2},
    {id: 9, firstName: 'Nhy', secondName: 'Lkj', city: 'KD', telephone: 65578},
    {id: 10, firstName: 'Mkl', secondName: 'Ser', city: 'Mget', telephone: 85},
    {id: 11, firstName: 'Aer', secondName: 'Ngf', city: 'Lfd', telephone: 34567},
    {id: 12, firstName: 'Bgt', secondName: 'Xnb', city: 'Nvd', telephone: 24373},
    {id: 13, firstName: 'Ser', secondName: 'Khn', city: 'Per', telephone: 98},
    {id: 14, firstName: 'Mvf', secondName: 'Dnh', city: 'Nec', telephone: 23456},
    {id: 15, firstName: 'drt', secondName: 'Kgd', city: 'Jgd', telephone: 1},
    {id: 16, firstName: 'Kde', secondName: 'Kkb', city: 'X', telephone: 987},
    {id: 17, firstName: 'Fbe', secondName: 'Cgm', city: 'Sp', telephone: 654},
    {id: 18, firstName: 'Ife', secondName: 'Hfd', city: 'tp', telephone: 81},
    {id: 19, firstName: 'Erv', secondName: 'HNcx', city: 'St', telephone: 80},
    {id: 20, firstName: 'Hbe', secondName: 'Yhfv', city: 'Hrd', telephone: 321},
    {id: 21, firstName: 'jhg', secondName: 'Sn', city: 'ver', telephone: 100}
  ];

  options = {
    selected: {
      checkbox: false
    },
    sort: tableOrder.comparator("id"),
    filter: [],
    pagination: {
      totalRecords: this.data.length,
      arrLimit: [10, 15, 20, 30],
      limit: 10,
      page: 0
    },
    addLine: {
      newLine: {
        checkbox: false,
        id: null,
        firstName: null,
        secondName: null,
        city: null,
        telephone: null
      }
    }
  };

  getPageSize = (size) => {
    this.options.pagination.limit = size;
  }

  getTotalPages = () => {
    return Math.ceil(this.options.pagination.totalRecords / this.options.pagination.limit);
  }

  getNewLine = () => {
    return {...this.options.addLine.newLine};
  }

  setSort = (sortField) => {
    tableOrder.changeOrder(sortField);
    this.options.sort = tableOrder.comparator(sortField);
  }

  setFilter = (fieldName, value) => {
    let filter = this.options.filter;
    for (let i = 0; i < filter.length; i++) {
      if (filter[i].field.toLowerCase() === fieldName.toLowerCase()) {
        filter[i].value = value;
        return;
      }
    }
    this.options.filter.push({field: fieldName, value: value});
  }

  setNewLine = (row) => {
    return this.data.push(row);
  }

  gotoPage = (page) => {
    this.options.pagination.page = page;
  }

  applyPagination = (data) => {
    const page = +this.options.pagination.page;
    const limit = +this.options.pagination.limit;
    const offset = page * limit;
    return data.slice(offset, limit + offset);
  }

  applyFilter = (filterArr, dataToFilter) => {
    let result = dataToFilter;
    for (let filter of filterArr) {
      if (!filter.value)
        continue;
      result = result.filter(item => item[filter.field].toString().toLowerCase().includes(filter.value.toLowerCase()))
    }
    return result;
  }

  applySort = (comparator, data) => {
    return data.sort(comparator);
  }

  getHeader = () => {
    return [
      {name: 'id', view: 'ID'},
      {name: 'firstName', view: 'ИМЯ'},
      {name: 'secondName', view: 'ФАМИЛИЯ'},
      {name: 'city', view: 'ГОРОД'},
      {name: 'telephone', view: 'ТЕЛЕФОН'}
    ];
  }

  applyMutations = (dataForMutation) => {
    const result = this.applySort(this.options.sort, this.applyFilter(this.options.filter, dataForMutation));
    return this.applyPagination(result);
  }

  getData = () => {
    return this.applyMutations(this.data);
  }
}

export default LocalDataProvider;