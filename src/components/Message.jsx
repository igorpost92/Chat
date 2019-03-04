import React from 'react';
import cn from 'classnames';
import useUsername from '../hooks/useUsername';

const Message = (props) => {
  const { text, author } = props;
  const username = useUsername();
  const isOwn = username === author;

  return (
    <div className={cn('d-inline border border-primary rounded mx-2 my-1 px-3 py-2', { 'align-self-end': isOwn })}>
      <p className="font-weight-bold">
        {author}
        :
      </p>
      <p className="mb-0">{text}</p>
    </div>
  );
};

export default Message;
