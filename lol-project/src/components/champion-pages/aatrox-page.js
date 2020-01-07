import React, { Component } from 'react';

import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import AatroxImage from '../../assets/Aatrox.jpg';
import Aatroxstats from "../../assets/Aatrox-stats.PNG"
import Aatroxitems from "../../assets/Aatrox-items.PNG"
import Aatroxrunes from "../../assets/Aatrox-runes.PNG"

const Styles = styled.div`
    .jumbo{
        background:url(${AatroxImage}) no-repeat;
        background-size: cover;
        color: #efefef;
        height: 280px;
        position: relative;
        margin-bottom: 0em;
        z-index: -2;
        
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
        .row-full{
            width: 100vw;
            position: relative;
            margin-left: -50vw;
            height: 100px;
            margin-top: 100px;
            left: 50%;
           }
        
    }

`;

export default class AatroxPage extends Component {
    render() {
        return (
            <Styles>
                <Jumbo fluid className='jumbo'>
                    <div className="overlay"></div>
                    <Container>
                        <h1>Aatrox</h1>
                        <p>the Darkin Blade</p>
                    </Container>
                </Jumbo>

                <div class="row">
                    <div><img class="image-responsive" src={Aatroxstats} style={{ width: "600px", height: "500px" }}></img></div>
                    <div>
                        <div class="items"><img class="image-responsive" src={Aatroxitems} style={{ width: "1050px", height: "350px" }}></img></div>
                        <div class="runes"><img class="image-responsive" src={Aatroxrunes} style={{ width: "1000px", height: "150px" }}></img></div>
                    </div>
                </div>





            </Styles>
        );
    }
}

