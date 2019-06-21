import React from 'react'
import { ScaleLoader } from 'react-spinners';

export default function LoaddingPage() {
    return (
        <div className="loading-global">
            <img src="/logo-loading.png" alt="humangene" />
            <ScaleLoader
                sizeUnit={"px"}
                size={150}
                color={'#123abc'}
                loading={true}
            />
        </div>
    )
}
