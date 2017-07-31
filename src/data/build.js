const fs = require('fs')

const lessonsList = fs.readdirSync('./lessons')

const lessonsData = lessonsList.map(lessonId => {
  const lessonData = require(`./lessons/${lessonId}/data`)

  return Object.assign(
    {
      id: lessonId,
      theory: fs.readFileSync(`./lessons/${lessonId}/theory.md`, 'utf-8'),
      examples: require(`./lessons/${lessonId}/examples`)
    },
    lessonData
  )
})

fs.writeFileSync('./index.json', JSON.stringify({
  lessons: lessonsData
}))

