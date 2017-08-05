import dataMock from '../../data/index.json'

const getAll = () => {
  return new Promise((resolve, reject) => resolve(
    dataMock.lessons
  ))
}

export {
  getAll
}
