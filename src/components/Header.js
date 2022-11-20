import React from 'react'
class Header extends React.Component {
    componentDidMount() {

    }
    render() {

        return (

            <div>
                <div >
                <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'></link>
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                </div>

                {/* <div className='header-logo'>
                    <img  className='img-logo'
                          src='/img/Go-Toubun_no_Hanayome_logo_header.png'/>
                </div>
                <div className='header-right'>
                    <a>Login</a>
                </div> */}
            </div>
        );
    }
}
export default Header;