import React from 'react';
import '../App.css';
import './HomeSection.scss';


function HomeSection() {


    return (
        <div className='full-screen-container'>
            <div className='OP-header'>
                Media Information
            </div>
            <div className='OP-text'>
                <p>All media content featured on this website, including images, graphics, and videos, has been personally created by me using tools such as Photoshop or Krita, or has been captured and produced by me through photography or recording processes. Moreover, in instances where visual representations like user profiles or product images are required, I have utilized Bing's AI tool, Copilot, to generate such content based on my prompts. I express my gratitude to Bing's Copilot for its valuable assistance in this process.</p>
                <p>Please note that while I encourage the use of generated content produced with Bing's Copilot, all handcrafted media content is subject to my proprietary rights. Unauthorized use, reproduction, or distribution of these handcrafted images is strictly prohibited. I kindly request all visitors and users to honor my intellectual property rights and refrain from using my handcrafted images without prior consent.</p>
                <p>Thank you for your understanding and cooperation.</p>
            </div>
        </div>
    )
}

export default HomeSection