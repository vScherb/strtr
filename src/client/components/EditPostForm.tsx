import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface EditPostFormProperties
{
  onSaveButtonClick: (state: EditPostFormState) => void;
};

export interface EditPostFormState
{
  titleTextboxValue: string;
  contentTextboxValue: string;
  tagsTextboxValue: string;
};

export class EditPostForm extends React.Component<EditPostFormProperties, EditPostFormState>
{
  constructor(props: any)
  {
    super(props);

    this.state = {
      titleTextboxValue: '',
      contentTextboxValue: '',
      tagsTextboxValue: ''
    };
  }

  private onTitleTextboxChange(e: React.ChangeEvent)
  {
    const { value } = (e.target as HTMLInputElement);

    this.setState({
      titleTextboxValue: value
    });
  }

  private onContentTextboxChange(e: React.ChangeEvent)
  {
    const { value } = (e.target as HTMLTextAreaElement);

    this.setState({
      contentTextboxValue: value
    });
  }

  private onTagsTextboxChange(e: React.ChangeEvent)
  {
    const { value } = (e.target as HTMLInputElement);

    this.setState({
      tagsTextboxValue: value
    });
  }

  render()
  {
    return <>
      <div className="row mt-3">
        <div className="col-md-12 mb-3">
          <input type="text" className="form-control form-control-lg" placeholder="Title..." value={this.state.titleTextboxValue} onChange={this.onTitleTextboxChange.bind(this)} />
        </div>

        <div className="col-md-12 mb-3">
          <textarea className="form-control blog-content-textarea" placeholder="Blogtext..." value={this.state.contentTextboxValue} onChange={this.onContentTextboxChange.bind(this)}></textarea>
        </div>

        <div className="col-md-12 mb-3">
          <input type="text" className="form-control" placeholder="Tags..." value={this.state.tagsTextboxValue} onChange={this.onTagsTextboxChange.bind(this)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 text-right">
          <button type="button" className="btn btn-success" onClick={() =>
          {
            this.props.onSaveButtonClick(this.state);
          }}>
            <FontAwesomeIcon icon="save" />&nbsp;Save
          </button>
        </div>
      </div>
    </>;
  }
}  