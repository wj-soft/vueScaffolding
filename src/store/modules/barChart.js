const state = {
  title: '차트이름',
  xKey: 'name',
  yKey: 'amount',
  barChartData: [
    {
      name: 'lee',
      amount: 20
    },
    {
      name: 'park',
      amount: 30
    },
    {
      name: 'kim',
      amount: 40
    },
    {
      name: 'yu',
      amount: 1
    }
  ]
}

const getters = {
  title: state => state.title,
  xKey: state => state.xKey,
  yKey: state => state.yKey,
  barChartData: state => state.barChartData
}

const actions = {
}

const mutations = {
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
