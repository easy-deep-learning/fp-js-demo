import React from 'react'
import {
  Editor,
  EditorState
} from 'draft-js'

/**
 * @see https://facebook.github.io/draft-js/docs/overview.html#content
 */
class CodeEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty() }
    this.onChange = (editorState) => this.setState({ editorState })
  }

  render() {
    return (
      <Editor editorState={this.state.editorState} onChange={this.onChange} />
    )
  }
}

export default CodeEditor
