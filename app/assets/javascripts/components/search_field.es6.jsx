class SearchField extends React.Component {
  constructor() {
    super()
    this.state = { posts: [] }
    this.fillList = this.fillList.bind(this)
  }
  fillList(results) {
    alert(5)
  }
  render() {
    results = []
    $(this.state.posts).each(function() {
      <Row title={this.state} url={this.state} />
    })
      
    return <div>
            <SearchForm fillList={this.fillList}/>
            {results}
           </div>
  }
}

