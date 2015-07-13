var React = require("react");

var FilterSelectLink = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  propTypes: {
    label: React.PropTypes.string,
    onSelect: React.PropTypes.func,
    extraClass: React.PropTypes.string
  },

  onSelect() {
    if (this.props.onSelect) {
      this.props.onSelect();
    }
  },

  render() {
    var className = this.props.extraClass;
    className += ' btn btn-default';

    if (this.props.isActive) {
      className += ' active';
    }

    return (
      <a className={className} onClick={this.onSelect}>
        {this.props.label}
      </a>
    );
  }
});

module.exports = FilterSelectLink;
