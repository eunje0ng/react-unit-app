import {Fragment} from 'react';

function Header({props, hello}) {
    return (
        <Fragment>
            <h1 id='mainTitle' onClick={hello} className='center my-0 py-1'>{props}</h1>
            <p style={{fontSize: '15pt'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam vitae nulla non delectus debitis voluptate sunt praesentium placeat enim. Totam beatae provident sed quo recusandae atque nulla quam soluta magni?</p>
        </Fragment>
    )
}

export default Header;