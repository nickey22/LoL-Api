import React from 'react';
import Head from 'next/head';
import LayoutManager from '../../hoc/LayoutManager';
import '../../sass/global.sass'

const Layout = ( props ) =>{
    return(
        <LayoutManager>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" integrity="sha256-+N4/V/SbAFiW1MPBCXnfnP9QSN3+Keu+NlB+0ev/YKQ=" crossorigin="anonymous" />
                <title>{props.pageTitle}</title> 
            </Head>
            <div className = {'page-view ' + props.pageView}>
                {props.children}
            </div>
        </LayoutManager>
    )
}

export default Layout;