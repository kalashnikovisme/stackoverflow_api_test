class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      spinnerDisplay: 'none'
    }
    this.onTextChange = this.onTextChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onTextChange(e) {
    this.setState({ text: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    this.setState({ spinnerDisplay: 'inline-block' })
    $.ajax({
      url: '/api/posts',
      method: 'GET',
      data: {
        query: this.state.text
      },
      dataType: 'JSON',
      success: ((data) => {
        this.setState({ spinnerDisplay: 'none' })
        this.props.fillList(data)
      }).bind(this),
    })
  }
  render () {
    const display = this.state.spinnerDisplay
    return <div>
            <form onSubmit={this.onSubmit}>
              <input type="text" name='query' onChange={this.onTextChange} value={this.state.text} />
              <input type="submit" className="button" value="Найти" name="search" />
              <i className="fa fa-spinner fa-spin" style={{display}}></i>
            </form>
           </div>
  }
}

