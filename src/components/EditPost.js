import React from 'react'
import Header from './Header'
import EditPostComp from './Dashboard/EditPostComp'
import Footer from './Footer'

export default function EditPost({ match }) {

    return (
        <>
            <Header />
            <EditPostComp postId={match.params.postId} />
            <Footer />
        </>
    )
}
