import React from 'react';

class SearchField extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }
  render() {
    return(<div>
            <form action="/api/search" acceptCharset="UTF-8" method="get" onSubmit={this.search}>
              <input type="text" name='query' onChange={this.onTextChange} value={this.state.text} />
            </form>
           </div>)
  }
}

export default CommentsField
