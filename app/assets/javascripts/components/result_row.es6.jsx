class ResultRow extends React.Component {
  render() {
    return <li>
            <a href={this.props.url}>{this.props.title} </a>
            at {this.props.date}
           </li>
  }
}

