import React, { useContext } from "react";
import { useGlobalContext } from "./Context";

const ZaraCaseStudy = () => {
  return (
    <div>
      <div>
        <img
          src='src/assets/zaraResource/zara-cover-photo.jpg'
          alt='Zara cover photo'
        />
      </div>

      <div>
        <div className='flex'>
          <div>
            <img
              src='src/assets/zaraResource/zara-logo.jpg'
              alt='Zara logo'></img>
          </div>
          <div>
            <h1>Frictionless Fashion</h1>
          </div>
        </div>

        <div className='flex'>
          <div>
            <h3>ACTIVITIES</h3>
            <p>UX Research</p>
            <p>UX Design</p>
            <p>UX Wireframing</p>
            <p>Interaction Design</p>
            <p>Prototyping</p>
          </div>

          <div>
            <h3>TIMELINE</h3>
            <p>Aug 30 - Oct 28</p>
            <p>4 weeks</p>
          </div>

          <div>
            <h3>DELIVERABLES</h3>
            <p>High-fidelity prototype</p>
            <p>Presentation</p>
            <p>Case study website</p>
          </div>

          <div>
            <h3>TOOLS</h3>
            <p>Figma</p>
            <p>Qualtrics</p>
            <p>React JS</p>
          </div>
        </div>

        <section>
          <div>
            <h2>Design a frictionless online shopping experience.</h2>
            <p>
              Zara is a global leader in fast fashion and its stores offer the
              widest selection of the trendiest clothing for shoppers.
            </p>

            <blockquote>
              <p>
                “Fast fashion industry continues to grow rapidly and is expected
                to reach $142.06 billion by the end of 2024 at a CAGR of 15.5%.”
              </p>
              <footer>The Business Research Company, 2020</footer>
            </blockquote>
            <p>
              With innovations such as augmented reality and the growing
              popularity of online shopping, brands are racing to digitalize
              their shopping experience to capture these opportunities.
            </p>
          </div>

          <div>
            <p>Challenge</p>
            <p>
              Zara makes most of its sales at physical stores and has a website.
              However, it is historically known for its low usability, clunky
              interface, and questionable design choices. Zara wants to refresh
              its website to make it intuitive to use and address customer’s
              needs.
            </p>

            <div>
              <p>
                How to design a frictionless online shopping experience for
                customers on Zara while maintaining a minimalistic and
                trendy-setting style the brand projects?
              </p>
            </div>
          </div>

          <div>
            <p>Solution</p>
            <p>
              A re-design of Zara website’s user flow and visuals, focusing on
              navigation, product browsing, and searching. The end product is a
              responsive e-commerce website maintaining Zara’s brand aesthetics
              while offering clear call-to-actions for the user.
            </p>
          </div>
        </section>

        <section>
          <div>
            <h2>Approch</h2>
          </div>

          <div>
            <p>
              In this case study, I explore the concept of friction in UX and
              structure my design thinking around mitigating negative friction.
            </p>
            <div>
              <p>
                Friction is anything that forces the user to stop and think. It
                serves as a barrier between the user and their goals.
              </p>
            </div>

            <p>
              According to user psychology, navigation is the most common source
              of bad friction on websites.
            </p>
            <p>
              For users to know where they are, where they want to go, and how
              to get there is cumbersome and time-consuming, especially with web
              shops where there are pages upon pages of product content.
            </p>
            <p>
              Below is my approach to minimize friction when navigating Zara’s
              website.
            </p>
          </div>

          <div>
            <p>MY PROCESS</p>
            <div className='flex'>
              <div>
                <h3>01 Discovery</h3>
                <p>Research to understand our users and their challenges</p>
              </div>

              <div>
                <h3>02 Define</h3>
                <p>Turn research into actionable insights</p>
              </div>

              <div>
                <h3>03 Design</h3>
                <p>Brainstorm design solutions to address frictions</p>
              </div>

              <div>
                <h3>04 Deliver</h3>
                <p>Put it all together</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ZaraCaseStudy;
