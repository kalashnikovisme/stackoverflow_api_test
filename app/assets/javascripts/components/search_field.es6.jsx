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
    let results = []
    $(this.state.posts).each(function(index) {
      results.push(<ResultRow title={this.title} url={this.link} date={this.created_at} key={index} />)
    })
      
    return <div>
            <SearchForm fillList={this.fillList}/>
            <ul>
              {results}
            </ul>
           </div>
  }
}
