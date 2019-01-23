// 3rd party
import * as React from 'react';
import { Link } from 'react-router-dom';

export interface ContentTagStripProperties
{
  tags: string[];
};

export function ContentTagStrip(props: ContentTagStripProperties)
{
  const items = props.tags.map((tag, i) => <Link
    key={i}
    to={'/tags/' + tag}
    className="badge badge-primary mr-1">{tag}</Link>);

  return <div>
    {items}
  </div>;
}