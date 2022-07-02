import moment from "moment";
import React from "react";
import { Label, Menu } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    padding: 1em;
    padding-left: 2em;
    border-top: 1px solid #ababab;
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    gap: 20px;

    ul {
        list-style: none;
        padding: 0;
        
        li {
            list-style: none;
        }
    } 

    .interaction-box {
        ul&li+li {
            margin-top: 10px;
        }
    }

    .question-box {
        flex: 1;

        ul {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;

            li {
                padding: 1em;
                border-radius: 6px;
                background-color: blue;
            }
        }
    }
`

export const QuestionDisplay = ({
    upvotes, downvotes, answerCount,
    views, title, content, tags,
    author
}) => {
    return (
        <Wrapper>
            <div className="interaction-box">
                <ul>
                    <li>{upvotes + downvotes} votes</li>
                    <li>{answerCount} answers</li>
                    <li>{views} views</li>
                </ul>
            </div>

            <div className="question-box">
                <h3>{title}</h3>

                <p>{content}</p>

                <Menu secondary className="footer">
                    {tags.map((tag, index) => (
                        <Label color="teal" style={{ alignSelf: 'center' }} key={index}>{tag}</Label>
                    ))}

                    <Menu.Menu right style={{ marginLeft: 'auto' }}>
                        <Label image style={{ alignSelf: 'center' }}>
                            <img src={author.avatar} />
                            {author.name}
                        </Label>
                        <Menu.Item>
                            {author.repScore}
                        </Menu.Item>
                        <Menu.Item>
                            {moment().startOf(author.askedAt).fromNow()}
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        </Wrapper>
    )
}