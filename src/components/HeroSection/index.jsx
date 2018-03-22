import React from 'react';

const HeroSection = () => {
    return (
        <section class="hero is-medium is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Welcome!
                    </h1>
                    <h2 class="subtitle">
                        This is a simple utility tool for editing your JSON files.
                    </h2>
                    <p>
                        <i>It is working for non-nested files and is still a work-in-progress.</i>
                    </p>
                    <p>
                        <i>If you want to try it out, see below.</i>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;