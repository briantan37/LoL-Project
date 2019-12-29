import React from 'react'

import Aatrox from "../assets/icons/A/Aatrox-Icon.png"
import Ahri from "../assets/icons/A/Ahri-Icon.png"
import Akali from "../assets/icons/A/Akali-Icon.png"
import Alistar from "../assets/icons/A/Alistar-Icon.png"
import Amumu from "../assets/icons/A/Amumu-Icon.png"
import Anivia from "../assets/icons/A/Anivia-Icon.png"
import Annie from "../assets/icons/A/Annie-Icon.png"
import Aphelios from "../assets/icons/A/Aphelios-Icon.png"
import Ashe from "../assets/icons/A/Ashe-Icon.png"
import AurelionSol from "../assets/icons/A/AurelionSol-Icon.png"
import Azir from "../assets/icons/A/Azir-Icon.png"

import Bard from "../assets/icons/B/Bard-Icon.png"
import Blitzcrank from "../assets/icons/B/Blitzcrank-Icon.png"
import Brand from "../assets/icons/B/Brand-Icon.png"
import Braum from "../assets/icons/B/Braum-Icon.png"

import styled from "styled-components"
const Styles = styled.div`

.img-responsive{
    padding: 1px 1px;
}

`;


export const ChampionsList = () => (
    <Styles>
        <div class="container-fluid">

            <header><h1>Choose a Champion</h1></header>
            <div class="form-group mb-4">
                <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
            </div>
            

                <div class="row">
                    <a href="/Aatrox"><img class="img-responsive" src={Aatrox}></img></a>
                    <a href="/Ahri"><img class="img-responsive" src={Ahri}></img></a>

                    <a href="/Akali"><img class="img-responsive" src={Akali}></img></a>


                    <a href="/Alistar"><img class="img-responsive" src={Alistar}></img></a>


                    <a href="/Amumu"><img class="img-responsive" src={Amumu}></img></a>


                    <a href="/Anivia"><img class="img-responsive" src={Anivia}></img></a>

                    <a href="/Annie"><img class="img-responsive" src={Annie}></img></a>

                    <a href="/Aphelios"><img class="img-responsive" src={Aphelios}></img></a>

                    <a href="/Ashe"><img class="img-responsive" src={Ashe}></img></a>

                    <a href="/AurelionSol"><img class="img-responsive" src={AurelionSol}></img></a>

                    <a href="/Azir"><img class="img-responsive" src={Azir}></img></a>

                    <a href="/Bard"><img class="img-responsive" src={Bard}></img></a>

                    <a href="/Blitzcrank"><img class="img-responsive" src={Blitzcrank}></img></a>

                    <a href="/Brand"><img class="img-responsive" src={Brand}></img></a>

                    <a href="/Braum"><img class="img-responsive" src={Braum}></img></a>
                </div>
            </div>

            
    </Styles>
)

