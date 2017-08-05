import React from 'react'
import {
  Editor,
  EditorState,
  RichUtils,
  ContentState
} from 'draft-js'
import './code-editor.css'

/**
 * @see https://facebook.github.io/draft-js/docs/overview.html#content
 */
class CodeEditor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editorState: EditorState.createWithContent(ContentState.createFromText(this.props.code))
    }
    this.onChange = (editorState) => this.setState({ editorState })
    this._onBoldClick = this._onBoldClick.bind(this)
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
  }

  render() {
    return (
      <div className="code-editor">
        <div className="code-editor__panel">
          <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        </div>
        <div className="code-editor__code">
          <Editor editorState={this.state.editorState} onChange={this.onChange} />
        </div>
      </div>
    )
  }
}

export default CodeEditor
