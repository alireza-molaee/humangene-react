import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ScaleLoader } from 'react-spinners';


export default function LoaddingPageInternal() {
    return (
        <Fragment>
            <Header />
            <main className="container">
                <div className="page-loadin-wrapper">
                    <ScaleLoader
                    sizeUnit={"px"}
                    size={150}
                    color={'#123abc'}
                    loading={true}
                    />
                </div>
            </main>
            <Footer />
        </Fragment>
    )
}
