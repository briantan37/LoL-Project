import React from 'react';
import {Jumbotron as Jumbo,Container} from 'react-bootstrap';
import styled from 'styled-components';
import AkaliImage from '../assets/KDA-Akali.jpg';

const Styles = styled.div`
    .jumbo{
        background:url(${AkaliImage}) no-repeat;
        background-size: cover;
        color: #efefef;
        height: 780px;
        position: relative;
        z-index: 0;
        
    }

    .overlay {
        background-color: #000;
        opacity: .6;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        
    }
`;


export const SearchPlayer = () => (
    <Styles>
        <Jumbo fluid className='jumbo'>
            <div className="overlay"></div>
            <Container>
                
                <div class="search">
                    <h1>Search Player</h1>
                    <div class="form-group mb-4">
                        <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
                    </div>
                </div>
            </Container>
        </Jumbo>
    </Styles>
)