import React from 'react'
// import {    
//     FaChessBishop,
//     FaChessKing,
//     FaChessKnight,
//     FaChessPawn,
//     FaChessQueen,
//     FaChessRook,}
//     from 'react-icons/fa'
import '../App.css';

const verticalAxis = ['1','2','3','4','5','6','7','8'];
const horizontalAxis = ['a','b','c','d','e','f','g','h'];
  
const ChessBoard = () => {
    const board =[];
    for(let i=horizontalAxis.length-1; i>=0;i--){
        for(let j=0; j<verticalAxis.length;j++){
            // console.log(horizontalAxis[j],verticalAxis[i])
            let color = '';
            if(i%2===0){
                if(j%2===0){
                    color='#6F85B7'
                }else{
                    color='#EEEED2'
                }
            }else{
                if(j%2===0){
                    color='#EEEED2'
                }else{
                    color='#6F85B7'
                }
            }   
            

            // console.log(horizontalAxis[j],verticalAxis[i]);
            board.push(
                <div key={`${i}${j}`} className="tile" 
                    style={{ 
                            width:'100%',
                            height:'100%',
                            backgroundColor:`${color}`,
                            textAlign:'center',                            
                         }} >
                    
                    
                    

                </div>)
        }
    }
    return (
        <div className="chessboard">
            {board}
        </div>
    )
}

export default ChessBoard;


