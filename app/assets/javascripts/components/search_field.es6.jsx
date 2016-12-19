class SearchField extends React.Component {
  constructor() {
    super()
    this.state = { posts: [] }
    this.fillList = this.fillList.bind(this)
  }
  fillList(results) {
    this.setState({ posts: results })
  }
  render() {
    results = []
    $(this.state.posts).each(function() {
      results.push(<ResultRow title={this.title} url={this.url} />)
    })
      
    return <div>
            <SearchForm fillList={this.fillList}/>
            <ul>
              {results}
            </ul>
           </div>
  }
}
