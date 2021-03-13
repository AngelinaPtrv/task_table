const localDataProvider = {

  options: {
    sort: {},
    filter: {},
    pagination: {}
  },
  data: [],
  viewData: [],
  headers: [],

  setSort() {
  },

  setPagination() {
  },

  setFilter() {
  },

  getHeader() {
    return [
      {name: 'id', view: 'ID'},
      {name: 'firstName', view: 'ИМЯ'},
      {name: 'secondName', view: 'ФАМИЛИЯ'},
      {name: 'city', view: 'ГОРОД'},
      {name: 'telephone', view: 'ТЕЛЕФОН'}
    ];
  },

  getData() {
    return [
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
  }


};

export default localDataProvider;