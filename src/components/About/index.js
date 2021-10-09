import React from 'react';

function About() {
    return (
        <section id="me" className="bio">
          <h2 className = " bio-title centered">Who I Am</h2>
            <p className = "bio-para centered">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              aliquam iste repudiandae totam, dolore, nesciunt provident iusto atque
              error corrupti laborum cum sint, accusantium odio voluptatum. Ad beatae
              voluptatum facilis!
            </p>

            <p className = "bio-paratwo centered">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              aliquam iste repudiandae totam, dolore, nesciunt provident iusto atque
              error corrupti laborum cum sint, accusantium odio voluptatum. Ad beatae
              voluptatum facilis!
            </p>
            
            <img className = "centered circle-edge mar-left" src = "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.18169-9/10616389_10152724967231520_44937518280355120_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=-XL7n7ryYIkAX9BT10D&_nc_ht=scontent-dfw5-2.xx&oh=6e98aa4b2830635f6111e04d1d229eff&oe=61865E78" alt = "It's a me, Manny." />

        </section>
    );
}

export default About;