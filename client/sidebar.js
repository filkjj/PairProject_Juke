import React from 'react'

const SideBar = ({changeBackToEmpty}) =>{
    return(
        <div id='sidebar'>
          <img src='juke.svg' id='logo' />
          <section>
            <h4>
              <a onClick={()=>changeBackToEmpty()}>ALBUMS</a>
            </h4>
          </section>
        </div>
)}

export default SideBar