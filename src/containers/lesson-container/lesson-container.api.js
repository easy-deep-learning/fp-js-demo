import dataMock from '../../data/index.json'

const getById = (id) => {
  return new Promise((resolve, reject) => resolve(
    dataMock.lessons[id].data
  ))
}

export {
  getById
}
