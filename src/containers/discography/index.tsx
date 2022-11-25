import React from 'react';
import Release from "../../components/release";

const Discography: React.FC = () => (
    <>
        <Release
        art="untitled.jpg"
        date="2004"
        format="LP"
        media={["CD", "Digital"]}
        title="Lo-Fi Mouth"
        trackList={[
            "skinned knee mercy",
            "whatever song comes after that",
            "I dunno",
            "who cares anyway?",
            "the good song whose title I forget",
        ]}
        />
    </>
);

export default Discography;
