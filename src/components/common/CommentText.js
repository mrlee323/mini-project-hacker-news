// import React from 'react';

// const CommentText = ({ text }) => {
//   const where = text && text.includes('WHERE:') && text.indexOf('WHERE:');
//   const sacrifice =
//     text && text.includes('WHAT SACRIFICE:') && text.indexOf('WHAT SACRIFICE:');
//   const gained = text && text.includes('GAINED:') && text.indexOf('GAINED:');
//   const edit = text && text.includes('EDIT:') && text.indexOf('EDIT:');

//   return (
//     <>
//       {where ? (
//         <>
//           {text.slice(0, where)}
//           <br />
//           <br />
//           {text.slice(where, sacrifice)}
//           <br />
//           <br />
//           {text.slice(sacrifice, gained)}
//           <br />
//           <br />
//           {text.slice(gained, edit)}
//         </>
//       ) : (
//         text
//       )}
//     </>
//   );
// };

// export default CommentText;
