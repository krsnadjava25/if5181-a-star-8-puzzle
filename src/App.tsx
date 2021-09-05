import React from 'react';
import { EightPuzzle } from './8-puzzle';
import { AStarSearch } from './a-star';
import './App.css';
// import { SolutionNode } from './problem';

function App() {
  const INITIAL_STATE = [[7,2,4], [5, -999, 6], [8,3,1]];
  const GOAL_STATE = [[-999,1,2], [3,4,5], [6,7,8]];
  // const approach1 = new EightPuzzle(INITIAL_STATE, GOAL_STATE, EightPuzzle.MismatchTilesHeuristicFn);
  // const search1 = new AStarSearch(approach1, 2000);
  // search1.execute();
  const approach2 = new EightPuzzle(INITIAL_STATE, GOAL_STATE, EightPuzzle.ManhattanDistanceHeuristicFn);
  const search2 = new AStarSearch(approach2, 2000);
  search2.execute();

  const renderTiles = (str: string) => {
    const tiles: Array<Array<number>> = JSON.parse(str);
    return <table>
      <tr>
        <td>{tiles[0][0] > 0 ? tiles[0][0] : ''}</td>
        <td>{tiles[0][1] > 0 ? tiles[0][1] : ''}</td>
        <td>{tiles[0][2] > 0 ? tiles[0][2] : ''}</td>
      </tr>
      <tr>
        <td>{tiles[1][0] > 0 ? tiles[1][0] : ''}</td>
        <td>{tiles[1][1] > 0 ? tiles[1][1] : ''}</td>
        <td>{tiles[1][2] > 0 ? tiles[1][2] : ''}</td>
      </tr>
      <tr>
        <td>{tiles[2][0] > 0 ? tiles[2][0] : ''}</td>
        <td>{tiles[2][1] > 0 ? tiles[2][1] : ''}</td>
        <td>{tiles[2][2] > 0 ? tiles[2][2] : ''}</td>
      </tr>
    </table>
  }

  // const renderNode = (problem: EightPuzzle, index: number) => {
  //   const node: SolutionNode = problem.nodes[index];
  //   return <>
  //   <hr />
  //   <div className="row">
  //     <div className="current">
  //       <p>Current Node</p>
  //       <p>{renderTiles(node.state)}</p>
  //       <p>f(n): {node.depth} + {node.fn - node.depth}</p>
  //     </div>
  //     <div className="expanded">
  //       <p>New Expanded Nodes</p>
  //       <ul>{node.expandedNodes.map((n) => {
  //         return <li>{renderTiles(n.state)}</li>
  //       })}</ul>
  //     </div>
  //   </div></>;
  // }

  return (
    <div className="page">
      <h1>Latihan A* untuk 8-puzzle</h1>
      <p>Untuk contoh pada buku Russel & Norvig halaman 103, berikanlah pohon pencarian solusinya dengan A*. Tuliskanlah secara eksplisit antrian yang terbentuk, dan untuk setiap node, berikanlah nilai g(n), h(n), dan f(n).</p>
      <p>Latihan dikerjakan berdua dengan menggunakan h1 dan h2.</p>
      <div className="problemContainer">
        <img src="/8-puzzle.png" alt="8-puzzle problem" className="problem" />
      </div>
      <h2>Pencarian A*</h2>
      <p>f(n) = g(n) + h(n)</p>
      <p>Dimana:</p>
      <p>f(n) = perkiraan biaya untuk solusi terbaik pada node n</p>
      <p>g(n) = biaya untuk mencapai node n dari awal pencarian</p>
      <p>h(n) = biaya dari node n ke tujuan</p>
      <h2>Pendekatan menggunakan h1</h2>
      <p>h1 = Jumlah kotak yang tidak sesuai dari current state dengan goal state</p>
      <div className="row">
      {/* {
        search1.problem.nodes.map((n) => {
          return <div className="item">{renderTiles(n.state)}<br/>
          <p>f(n): {n.depth} + {n.fn - n.depth} = {n.fn}</p></div>
        })
      } */}
      </div>
      {/* {
        search1.problem.nodes.map((_, idx) => renderNode(search1.problem, idx))
      } */}
      <h2>Pendekatan menggunakan h2</h2>
      <p>h2 = Jumlah total jarak dari masing-masing kotak ke posisi tujuan mereka (Manhattan distance)</p>
      <div className="row">
      {
        search2.problem.nodes.map((n) => {
          return <div className="item">{renderTiles(n.state)}<br/>
          <p>f(n): {n.depth} + {n.fn - n.depth} = {n.fn}</p></div>
        })
      }
      </div>
      {/* {
        search2.problem.nodes.map((_, idx) => renderNode(search2.problem, idx))
      } */}
    </div>
  );
}

export default App;
