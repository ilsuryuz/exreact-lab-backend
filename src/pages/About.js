import { useState, useEffect } from 'react'


const About = (props) => {
    // ** state **
    const [about, setAbout] = useState(null);

    // ** make api call **
    const getAboutData = async () => {
        const response = await fetch(props.URL + "about");
        const data = await response.json();

        setAbout(data);
    };

    // ** on component load **
    useEffect(() => {
        getAboutData();
    }, []);

    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    );

    return about ? loaded() : <h1>Loading...</h1>;
}

export default About