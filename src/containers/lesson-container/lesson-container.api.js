import dataMock from '../../data'

const getById = (id) => {
  return new Promise((resolve, reject) => resolve(
    dataMock.lessons[id].data
  ))
}

export {
  getById
}
