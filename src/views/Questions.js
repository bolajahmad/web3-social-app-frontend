import React, { createRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Menu, Sticky } from 'semantic-ui-react';
import AccountSelector from '../AccountSelector';
import { DummyQuestions } from '../constants/DummyQuestions';
import { QuestionDisplay } from './Question';

export const Questions = (props) => {
    // 'interesting' | 'hot' | 'time' | 'rewarded'
    const [filter, setFilter] = useState('interesting');
    const contextRef = createRef();

    return (
        <div ref={contextRef}>
            <Sticky context={contextRef}>
                <AccountSelector />
            </Sticky>

            <Container>
                <Container fluid style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 30 }}>
                    <h2>All Questions</h2>

                    <Link to="/questions/ask">
                    <Button as="span" to="" primary>Ask Question</Button></Link>
                </Container>

                <Menu position="right" style={{maxWidth: 'fit-content', marginLeft: 'auto', marginTop: 30 }}>
                    <Menu.Item
                        name='interesting'
                        active={filter === 'interesting'}
                        content='Interesting'
                        onClick={() => setFilter('interesting')}
                    />

                    <Menu.Item
                        name='hot'
                        active={filter === 'hot'}
                        content='Hot'
                        onClick={() => setFilter('hot')}
                    />

                    <Menu.Item
                        name='rewarded'
                        active={filter === 'rewarded'}
                        content='Rewarded'
                        onClick={() => setFilter('rewarded')}
                    />

                    <Menu.Item
                        name='time'
                        active={filter === 'time'}
                        content='Time Based'
                        onClick={() => setFilter('time')}
                    />
                </Menu>

                <div>
                    {DummyQuestions.map((props) => (
                        <QuestionDisplay key={props.id} {...props} />
                    ))}
                </div>
            </Container>

            <footer>
                
            </footer>
        </div>
    )
}