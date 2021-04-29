import React from 'react';
import './about.css';

function About() {
    return (
        <div id="contact">
            <section className="About">
                <div className="pure-u-3-5">

                    <h1>We made our business to be different from every other out there.<br /><br /></h1>
                    <hr id="navy" />
                </div>

                <div className="pure-u-3-5">

                    <h1 className="about-header" id="target">Accessibility and Usability<br /><br /></h1>
                    <p id="target">The project has been developed with accessibility and usability features in the enhanced edition, this has used modern UX design, using a dark navigation bar to anchor the page contents and appeal to the user. <br/> There is also a dark mode feature within the project, with a range of benefits such as reduced battery use of up to 15% compared to white background and reduced eye strain. <br/>There is also a font size changer for users, allowing for accessible needs with low-level-vision users to benefit from increased font size. There is also a responsive design wiithin the page, working with a range of screen sizes and adjusting to the users need.</p>
                    <hr id="blue" />
                    <br />
                </div>

                <div className="pure-u-3-5">

                    <h1 className="about-header" id="target">The Goal<br /><br /></h1>
                    <p id="target">The aim for this project to make a prototype e-commerce website meeting the minimal general requirements to evaluate how to improve usability and accessibility. I also plan to show my improvements to these features creating guidelines for developers alongside implementing the theoretical and practical aspects.</p>
                    <hr id="green" />
                    <br />
                </div>

                <div className="pure-u-3-5">

                    <h1 className="about-header" id="target">The Inspiration<br /><br /></h1>
                    <p id="target">I was interested in making this idea as it is a feasible challenge with a large amount of new research on the topic in a rapidly growing industry. Although the project will involve the development of code, the overall aim is the analysis into E-commerce and evaluate the improvements and findings from my research to support my argument or suggest remeditions of the topic. For an array of skills in management, work ethics, resources, and full stack developmoent, becoming a suitable challenge to advance my knowledge.</p>
                    <hr id="navy" />
                    <br />
                </div>

            </section>
        </div>

    );
}

export default About;