class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.onTextChange = this.onTextChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onTextChange(e) {
    this.setState({ text: e.target.value })
  }
  onSubmit() {
    this.props.searchCall(null, this.state.text) 
  }
  render () {
    return <div>;
            <form action="/api/search" acceptCharset="UTF-8" method="get" onSubmit={this.search}>
              <input type="text" name='query' onChange={this.onTextChange} value={this.state.text} />
              <input type="submit" value="Найти" />
            </form>
           </div>;
  }
}

