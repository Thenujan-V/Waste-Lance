import React from 'react'
import { mrfNavbar } from '../Style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faContactCard, faPhone, faRightFromBracket, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const MRFNavbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg p-3">
            <a class="navbar-brand" href="/">Waste Lance</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#"><FontAwesomeIcon icon={faPhone} size='2x'/></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><FontAwesomeIcon icon={faUser} size='2x'/></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/login"><FontAwesomeIcon icon={faRightFromBracket} size='2x'/></a>
                    </li>
                </ul>
            </div>
            </nav>
    </div>
  )
}

export default MRFNavbar