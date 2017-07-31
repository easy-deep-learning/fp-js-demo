import dataMock from '../../data/index.json'

const getAll = () => {
  return new Promise((resolve, reject) => resolve(
    Object.keys(dataMock.lessons).map(dataKey => (dataMock.lessons[dataKey].data))
  ))
}

export {
  getAll
}
