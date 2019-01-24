import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class EditPostForm extends React.Component<{}, {}>
{
  constructor(props: any)
  {
    super(props);
  }

  render()
  {
    return <>
      <div className="row mt-3">
        <div className="col-md-12 mb-3">
          <input type="text" className="form-control form-control-lg" placeholder="Title..." />
        </div>

        <div className="col-md-12 mb-3">
          <textarea className="form-control blog-content-textarea" placeholder="Blogtext..."></textarea>
        </div>

        <div className="col-md-12 mb-3">
          <input type="text" className="form-control" placeholder="Tags..." />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 text-right">
          <button type="button" className="btn btn-success" >
            <FontAwesomeIcon icon="save" />&nbsp;Save
          </button>
        </div>
      </div>
    </>;
  }
}  