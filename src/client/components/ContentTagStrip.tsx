import * as React from 'react';

export interface ContentTagStripProperties
{
  tags: string[];
};

export function ContentTagStrip(props: ContentTagStripProperties)
{
  const items = props.tags.map((tag, i) => <a
    key={i}
    href="/"
    className="badge badge-primary mr-1">{tag}</a>);

  return <div>
    {items}
  </div>;
}