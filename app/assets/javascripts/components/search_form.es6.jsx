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
  onSubmit(e) {
    e.preventDefault()
    $.ajax({
      url: '/api/posts',
      method: 'GET',
      data: {
        query: e.target.value
      },
      dataType: 'JSON',
      success: ((data) => {
        this.props.fillList(data)
      }).bind(this),
    })
  }
  render () {
    return <div>
            <form onSubmit={this.onSubmit}>
              <input type="text" name='query' onChange={this.onTextChange} value={this.state.text} />
              <input type="submit" value="Найти" name="search" />
            </form>
           </div>
  }
}

