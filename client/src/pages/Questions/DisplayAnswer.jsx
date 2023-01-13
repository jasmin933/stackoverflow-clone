import React from 'react';
import './Questions.css'


const DisplayAnswer = ({question}) => {
    return (
       
        
       
       <div>

        <h5>Answers</h5>
          {
             question?.answer?.map((answer)=>(
                <div className='display-ans' key={answer._id}>
                <p>{answer.answersBody}</p>
                <div className='question-action-users'>
                    <div>
                        <button>Share</button>
                        <button>Delete</button>
                    </div>
                    <p>answer</p>

                </div>
                </div>
          )) 
        }
        
      </div>
    
    
    );
}



export default DisplayAnswer;