import { Marp } from '@marp-team/marp-core'
import fs from 'node:fs'

const quizMdContents = fs.readFileSync('quiz/sample_quiz.md', 'utf8')
console.log({quizMdContents})

// Convert Markdown slide deck into HTML and CSS
const marp = new Marp()
const { html, css } = marp.render(quizMdContents)
console.log({html})
