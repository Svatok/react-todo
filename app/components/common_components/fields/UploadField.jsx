import React, { Component } from 'react';

class UploadField extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.removeFile = this.removeFile.bind(this);
  }

  componentWillUnmount() {
    this.props.removeFile();
  }

  onChange(e) {
    const { input: { onChange } } = this.props;
    const file = e.target.files[0];
    onChange(file);
    this.props.addFile(file);
  }

  removeFile() {
    this.props.removeFile();
  }

  render() {
    const { meta: { touched, error, submitFailed }} = this.props;
    const fileInputKey = this.props.value ? this.props.value.name : +new Date();
    return (
      <div className={touched && error && 'has-error'}>
        <input
          id="file"
          key={fileInputKey}
          className="hide"
          type="file"
          onChange={this.onChange}
        />
        { this.props.fileName ?
          <a className="attachment-button" onClick={this.removeFile}>
            Remove File
            <i className="glyphicon glyphicon-remove" />
          </a>
          :
          <label htmlFor="file" className="attachment-button">
            Attach File&nbsp;
            <i className="glyphicon glyphicon-floppy-disk" />
          </label>
        }
        { submitFailed && error && this.props.fileName &&
          <div>
            <span className="help-block">{error}</span>
          </div>
        }
      </div>
    );
  }
}

export default UploadField;
