import React from 'react';

// export const Terminal = ({node, lines}) => {
export default Terminal = (lines) => {
  let prefix = 'test: $';
  // return (
  //   <div>
  //     <div>
  //       <span style="background:#f25f58"></span>
  //       <span style="background:#fbbe3c"></span>
  //       <span style="background:#58cb42"></span>
  //       <span>bash</span>
  //     </div>
  //     <div>
  //       {list.each((el) => {
  //         return (
  //           <div>
  //             el
  //           </div>
  //         )
  //       })}
  //     </div>
  //   </div>
  // )
  // =================================================
  // let fmtLines = [];
  // lines.each((l) => {
  //   fmtLines.push(<div>{`${prefix} ${l}`}</div>)
  // })
  // return (
  //   <span>
  //     {...fmtLines}
  //   </span>
  // )
  // =================================================
  return <div>{lines}</div>
};