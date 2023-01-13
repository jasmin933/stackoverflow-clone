import React from 'react';
import './HomeMainbar.css'
import { Link,useLocation, useNavigate} from 'react-router-dom';

import QuestionsList from './QuestionList';


const HomeMainbar = () => {
    const location =useLocation()
    const user = 1;
    const navigate = useNavigate()

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

    const  checkAuth = () =>{
        if(user ===null)
        {
        alert("login or signup to ask a question")
        navigate('/Auth')
        }else{
            navigate('/AskQuestion')
        }
    }
    
    return(
    <div className='main-bar'>
        <div className='main-bar-header'>
            {
            location.pathname === '/'? <h1>Top Questions</h1> :<h1>All Questions</h1>
            }
           
            <button onClick={checkAuth} className='ask-btn'>AskQuestion</button>
        </div>
        <div >
            {
                questionsList === null ?
                <h1>Loading......</h1> :
                <>
                <p>{questionsList.length} questions</p>
                <QuestionsList questionsList={questionsList} />
            
                
                </>
            }
        </div>

    </div>
    );
}



export default HomeMainbar;