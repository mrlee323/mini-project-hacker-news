import CommentItem from '../components/CommentItem';
import { Comment as CommentIcon } from '../components/common/Comment';
import { useState } from 'react';
import { useCallback } from 'react';

const CommentContainer = ({ kids, commentCount }) => {
  const [commentSort, setCommentSort] = useState('registered');
  const [sortComment, setSortComment] = useState([]);

  // const Registered = useCallback(() => {
  //   const registerd = c;
  //   setComment(registerd);
  //   setCommentSort('registered');
  // }, []);

  // const onClick = (e) => {
  //   setSortComment([]);
  //   setSortComment([...sortComment].push.comment);
  //   console.log(sortComment);
  //   e.target.children === ' Registered'
  //     ? setCommentSort('registered') &&
  //       setSortComment([...sortComment].sort((a, b) => b.time - a.time))
  //     : setCommentSort('newest') &&
  //       setSortComment([...sortComment].sort((a, b) => a.time - b.time));
  // };
  return (
    <div>
      <div className="bar">
        <div className="sort">
          <div className="registered">Registered</div>
          <div className="newest">Newest</div>
        </div>
        <CommentIcon count={commentCount} />
      </div>
      {kids && kids.map((kid) => <CommentItem kid={kid} key={kid} />)}
    </div>
  );
};

export default CommentContainer;
