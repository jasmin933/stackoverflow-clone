import React from 'react';
import { Link, useParams } from 'react-router-dom';
import upvote from '../../assets/upvote.svg';
import downvote from '../../assets/352021_arrow_drop down_icon.png';
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from '../../pages/Questions/DisplayAnswer';

const QuestionDetails = () => {
    const {id} = useParams()
    var questionsList =[{
        _id:'1',
        upVotes:3,
        downVotes:2,
        noOfAnswers:2,
        questionTitle:"what is a function?",
        questionBody:" It mean to be",
        questionTags:["java","node js","php"],
        userPosted:"mano",
        userId:1,
        askedOn:"jan1",
        answers:[{
            answersBody:"Answer",
            userAnswered:'kumar',
            answeredOn:"jan 2",
            userId:2,
        }]},
        {
            _id:'2',
            upVotes:3,
            downVotes:2,
            noOfAnswers:2,
            questionTitle:"what is afunction?",
            questionBody:" It mean to be",
            questionTags:["java","node js","php"],
            userPosted:"mano",
            userId:2,
            askedOn:"jan1",
            answers:[{
                answersBody:"Answer",
                userAnswered:'kumar',
                answeredOn:"jan 2",
                userId:2,
            }]
        },
            {
                _id:'3',
                upVotes:2,
                downVotes:2,
                noOfAnswers:2,
                questionTitle:"what is afunction?",
                questionBody:" It mean to be",
                questionTags:["java","node js","php"],
                userPosted:"mano",
                userId:3,
                askedOn:"jan1",
                answers:[{
                    answersBody:"Answer",
                    userAnswered:'kumar',
                    answeredOn:"jan 2",
                    userId:2,
                }]
            }
        
    
    
    ]

    return (
    <div  className='question-details-page'>
        {
            questionsList===null?
            <h1>Loading...</h1>:
            <>
            {
                questionsList.filter(question =>question._id ===id).map(question => (
                    <div key={question._id}>
                        {console.log(question._id)}
                        <section className='question-details-container-1'>
                            <h1>{question.questionTitle}</h1>
                            <div className='question-details-container-2'>
                                <img src={upvote} alt="" width="18"/>
                                <p>{question.upVotes-question.downVotes}</p>
                                <img src={downvote} alt="" width="35"/>

                            </div>
                            <div tyle={{width:"100%"}}>
                                <p className='question-body'>{question.questionBody}</p>
                                <div>
                                    {
                                        question.questionTags.map((tag)=>(
                                            <p key={tag}>{tag}</p>

                                        ))
                                    }
                                </div>
                                <div className='question-action-user'>
                                    <div>
                                        <button>Share</button>
                                        <button>Delete</button>
                                    </div>
                                    <div>
                                        <p>asked{question.askedOn}</p>
                                        
                                       <Link to={`/User/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                       <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toLocaleUpperCase()}</Avatar>
                                       <div>
                                        {
                                            question.userPosted
                                        }
                                       </div>
                                       </Link>
                                    </div>
                                </div>
                            </div>

                        </section>
                        {
                            question.noOfAnswers > 0 && (
                                <section>
                                    <h3>{question.noOfAnswers} answers</h3>
                                    <DisplayAnswer key={question._id} question={question} />
                                </section>

                            )
                        }
                        <section className='post-ans-container'>
                            <h3>Your Answer</h3>
                            <form>
                                <textarea name='' id='' cols='30' rows='10'></textarea><br />
                                <input type="submit" className='post-ans-btn'/>                          
                                 </form>
                                 <p>
                                    Browse other Question tagged 
                                    {
                                       question.questionTags.map((tag)=>(
                                        <Link to='/Tags' key={tag} className='ans-tags'>{tag}</Link>
                                       ))
                                    } 
                                   or 
                                   <Link to='/AskQuestion' style={{textDecoration:"none",color:"#009dff"}}>ask your own question</Link>
                                 </p>
                        </section>
                    </div>
                ))
            }

            </>
        }

    </div>
    );
}



export default QuestionDetails;