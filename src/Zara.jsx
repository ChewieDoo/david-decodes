import React, { useState } from "react";
import { useGlobalContext } from "./Context";
import ImageModal from "./ImageModal";
import SideBar from "./SideBar";

const ZaraCaseStudy = () => {
  const { isModalOpen, openModal } = useGlobalContext();

  return (
    <div className='casestudy-text'>
      <div className='relative h-screen'>
        <img
          src='src/assets/zaraResource/zara-cover-photo-smaller.jpg'
          alt='Zara cover photo'
          className='sticky top-0 w-full h-[472px] object-cover'
        />
      </div>

      <div>
        <SideBar />
      </div>

      <div className='title-container h-24 flex items-end'>
        <div className='h-full'>
          <img
            src='src/assets/zaraResource/zara-logo.jpg'
            alt='Zara logo'
            className='h-full object-contain'></img>
        </div>
        <div className='flex items-end ml-2'>
          <h1 className='big-text'>Frictionless Fashion</h1>
        </div>
      </div>

      <div className='main-container-background'>
        <section className='tag-container mt-3'>
          <div className='w-full'>
            <h3 className='project-tag'>ACTIVITIES</h3>
            <p>UX Research</p>
            <p>UX Design</p>
            <p>UX Wireframing</p>
            <p>Interaction Design</p>
            <p>Prototyping</p>
          </div>
          <div className='w-full'>
            <h3 className='project-tag '>TIMELINE</h3>
            <p>Aug 30 - Oct 28</p>
            <p>4 weeks</p>
          </div>

          <div className='w-full'>
            <h3 className='project-tag '>DELIVERABLES</h3>
            <p>High-fidelity prototype</p>
            <p>Presentation</p>
            <p>Case study website</p>
          </div>

          <div className='w-full'>
            <h3 className='project-tag '>TOOLS</h3>
            <p>Figma</p>
            <p>Qualtrics</p>
            <p>React JS</p>
          </div>
        </section>

        <section className='section-container mt-16'>
          <div className='mb-16'>
            <h2 className='section-title '>
              Design a frictionless online shopping experience
            </h2>
            <p className='medium-text mb-16'>
              Zara is a global leader in fast fashion and its stores offer the
              widest selection of the trendiest clothing for shoppers.
            </p>

            <blockquote>
              <p className='mb-6'>
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

          <div className='mb-16'>
            <p className='font-medium mb-5'>Challenge</p>
            <p className='mb-9'>
              Zara makes most of its sales at physical stores and has a website.
              However, it is historically known for its low usability, clunky
              interface, and questionable design choices. Zara wants to refresh
              its website to make it intuitive to use and address customer’s
              needs.
            </p>

            <div className='callout-sm'>
              <p className='font-medium'>
                How to design a frictionless online shopping experience for
                customers on Zara while maintaining a minimalistic and
                trendy-setting style the brand projects?
              </p>
            </div>
          </div>

          <div className='mb-16'>
            <p className='font-medium mb-5'>Solution</p>
            <p>
              A re-design of Zara website’s user flow and visuals, focusing on
              navigation, product browsing, and searching. The end product is a
              responsive e-commerce website maintaining Zara’s brand aesthetics
              while offering clear call-to-actions for the user.
            </p>
          </div>
        </section>

        <section className='section-container'>
          <h2 className='section-title'>Approach</h2>
          <p>
            In this case study, I explore the concept of friction in UX and
            structure my design thinking around mitigating negative friction.
          </p>
          <p className=' callout-sm'>
            <span className='font-medium'>Friction</span> is anything that
            forces the user to stop and think. It serves as a barrier between
            the user and their goals.
          </p>

          <p className='mb-6'>
            According to user psychology,&nbsp;
            <span className='font-medium'>
              navigation is a common source of bad friction on many websites.
            </span>
          </p>
          <p className='mb-6'>
            For users to know where they are, where they want to go, and how to
            get there is cumbersome and time-consuming, especially with web
            shops where there are pages upon pages of product content.
          </p>
          <p className='mb-20'>
            Below is my approach to minimize friction when navigating Zara’s
            website.
          </p>
        </section>

        <div className='section-gray-background'>
          <section className='section-container-wide py-5'>
            <h3 className='small-title mb-3'>MY PROCESS</h3>
            <div className='process-container'>
              <div className='md:w-1/4 mb-4 md:mb-0'>
                <h3 className='medium-text mb-3 font-medium'>01 Discovery</h3>
                <p className='max-w-36'>
                  Research to understand our users and their challenges
                </p>
              </div>

              <div className='md:w-1/4 mb-4 md:mb-0'>
                <h3 className='medium-text mb-3 font-medium'>02 Define</h3>
                <p className='max-w-36'>
                  Turn research into actionable insights
                </p>
              </div>

              <div className='md:w-1/4 mb-4 md:mb-0'>
                <h3 className='medium-text mb-3 font-medium'>03 Design</h3>
                <p className='max-w-36'>
                  Brainstorm design solutions to address frictions
                </p>
              </div>

              <div className='md:w-1/4 mb-4 md:mb-0'>
                <h3 className='medium-text mb-3 font-medium'>04 Deliver</h3>
                <p className='max-w-36'>Put it all together</p>
              </div>
            </div>
          </section>
        </div>

        <section className='section-container'>
          <h1 className='section-title'>01 Discover</h1>

          <div className='callout mb-8'>
            <p className='font-medium'>How to build a solution that works?</p>
          </div>

          <p className='mb-3'>
            I conducted research to gain a better understanding of potential
            frictions users face when shopping online. These are my goals:
          </p>

          <div>
            <img
              src='src/assets/zaraResource/goals.jpg'
              alt='User search goals'
            />
          </div>

          <div className='sub-section-container'>
            <h3 className='sub-section-title '>Website Audit</h3>
            <p className='mb-9'>
              Here is what I found browsing through Zara.com.
            </p>
            <img
              src='src/assets/zaraResource/zara-homepage.jpg'
              alt='Zara home page'
            />
            <p className='my-9'>
              From the home page, I am not sure where to go to look for product
              categories. It is hard to find the navigation menu. The text size
              is small and barely visible against the colored background.
            </p>

            <div className='image-text-container-l items-center gap-2 mb-6 '>
              <div className='image-container-l'>
                <img
                  src='src/assets/zaraResource/original-product-page.jpg'
                  alt='Original product page'
                />
              </div>

              <div className='mt-6 md:w-1/3 md:mt-0'>
                <p className='mb-6'>
                  The shop layouts deviates from typical UI patterns we see on
                  other e-commerce websites, where we see product cards
                  displayed in uniform grid.
                </p>
                <p>
                  Each product category page layouts are also inconsistent (see
                  left).
                </p>
              </div>
            </div>

            <div className='image-text-container-r gap-2 items-center'>
              <div className='md:w-1/3'>
                <p className='mb-6'>
                  Overall, the lack of visual cues make the website clunky to
                  navigate.
                </p>
                <p className='mb-6'>
                  We need to scroll down to see more product categories but the
                  indicator is barely visible.
                </p>
                <p className='mb-6'>
                  The loading indicator is also tiny and is positioned on the
                  very top right corner.
                </p>
              </div>
              <div className='image-container-r md:-mt-0'>
                <img
                  src='src/assets/zaraResource/origina-call-to-action.jpg'
                  alt='Original call to action'
                />
              </div>
            </div>
          </div>

          <div className='sub-section-container'>
            <h3 className='sub-section-title '>Competitor Analysis</h3>
            <div className='callout mb-8'>
              <p className='font-medium'>What are our competitors doing?</p>
            </div>
            <p className='mb-8'>
              I looked into the websites of Zara’s direct competitors,
              smaller-scale e-commerce shops, and well-established luxury brands
              to explore design choices and generate inspiration for my designs.
            </p>
            <img
              src='src/assets/zaraResource/competitor-analysis.jpg'
              alt='Competitor analysis'
            />
            <p className='mt-8'>
              In summary, these websites use a diverse range of design choices
              (combining navigation features, accent colors, UI layouts, etc.)
              to highlight call-to-actions and guide users on completing their
              tasks. This provided me with an abundant design toolkit to work
              with later on.
            </p>
          </div>

          <div className='subsection-container'>
            <h3 className='sub-section-title  mt-16'>User Research</h3>
            <p className='mb-10'>
              I interviewed 8 participants between the ages of 22 to 36, who
              frequently shop online, through video calls and in-person chats. I
              recruited my participants from my personal network and design
              communities.
            </p>
            <img
              src='src/assets/zaraResource/user-research-result.jpg'
              alt='User research result'
            />
          </div>
        </section>

        <section className='section-container'>
          <h1 className='section-title'>02 Define</h1>
          <div className='sub-section-container'>
            <h3 className='sub-section-title '>Persona</h3>
            <p className='mb-6'>Meet Ed</p>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className='pr-52 md:pb-6 max-w-96 '>
                <img
                  src='src/assets/zaraResource/user-profile.png'
                  alt='User profile'
                />
              </div>
              <div className='callout max-w-[364px]'>
                <p className='font-medium mb-2'>Bio</p>
                <p>
                  Ed is a fashion enthusiast, eager to browse new pieces and
                  collections. He frequently buys clothes online. His top 2 web
                  shops are Uniqlo and Temu. He also has the habit of finding
                  pieces online and trying them at physical stores.
                </p>
              </div>
              <div className='callout max-w-[364px]'>
                <p className='font-medium mb-2'>Goals</p>
                <ul className='bullet-points'>
                  <li>
                    Find unique pieces and collections with specific filter
                    criteria, he is picky.
                  </li>
                  <li>
                    Easily understand the type of clothes you can get from a
                    specific collection.
                  </li>
                  <li>Check their availability in-store.</li>
                </ul>
              </div>
              <div className='callout max-w-[364px]'>
                <p className='font-medium mb-2'>Challenges</p>
                <ul className='bullet-points'>
                  <li>
                    Understanding where to go to look for specific product
                    categories
                  </li>
                  <li>
                    Looking through all available collections and understanding
                    what is in it
                  </li>
                  <li>
                    Finding a cloth he likes only to find it not available at
                    his store
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='sub-section-container'>
            <h3 className='sub-section-title'>Problem definition</h3>
            <p>
              Piecing together a) Website audit, b) Competitor analysis, c) User
              interviews and the generated persona, here are 3 areas of
              potential friction Ed will face when browsing through Zara’s
              website:
            </p>
            <div>
              <div className=' callout-sm'>
                <p className='font-medium mb-2'>
                  Navigation (Overall user flow)
                </p>
                <p>
                  Navigating the website to browse products can be very complex
                  for the user. The digital experience is very unpredictable as
                  user flow designs deviate from typical UI patterns.
                </p>
              </div>
              <div className='callout-sm'>
                <p className='font-medium mb-2'>UI Layout</p>
                <p>
                  The UI has low accessibility and the visual layout is very
                  cluttered. Texts are difficult to read and high-quality videos
                  on pages increase loading times. Pages are also very lengthy,
                  leading to content towards the end of the page less likely to
                  be seen by users.
                </p>
              </div>
              <div className='callout-sm'>
                <p className='font-medium mb-2'>
                  Lack of visual affordance (UI Element)
                </p>
                <p>
                  There is a lack of visual cues and unintuitive UI elements,
                  resulting in a lack of clear call to action for the user. The
                  layout is inconsistent across different product pages.
                </p>
              </div>
            </div>
            <p>
              My design solution targets these 3 areas of friction on the
              relevant web pages.
            </p>
          </div>
          <div className='sub-section-container'>
            <h3 className='sub-section-title'>Site map</h3>
            <div className='callout'>
              <p className='font-medium'>
                Scanning how competitor brands are designing their websites
                provided me with great insights on must-have features, and
                informed my design solutions to address Zara’s challenges.
              </p>
            </div>
            <p className='mb-7'>
              I mapped out key web pages users come across when browsing and
              searching for a product. I found key user tasks, such as using the
              search bar and filtering for products require a few extra steps,
              meaning more web pages need to be loaded. Redundant steps and
              functions within web pages make completing user tasks
              unnecessarily difficult.
            </p>
            <div>
              <p className='font-medium mb-4'>OLD SITE MAP</p>
              <img
                src='src/assets/zaraResource/old-site-map.jpg'
                alt='Original site map'
                className='mb-8'
              />
            </div>
            <p className='mb-7'>
              In my design, I focused on eliminating these redundancies and
              making completing user tasks more intuitive. One of the biggest
              changes is to combine the search and navigation functions under a
              single search bar that triggers a drop-down when clicked, since
              users mentioned the search bar as the first component they to go
              to.
            </p>
            <div>
              <p className='font-medium mb-4'>NEW SITE MAP</p>
              <img
                src='src/assets/zaraResource/new-site-map.jpg'
                alt='New site map'
              />
            </div>
          </div>
          <div className='sub-section-container'>
            <h3 className='sub-section-title'>User flow</h3>
            <div className='callout'>
              <p className='font-medium'>
                I had users go through the original website to find a random
                product. Mapping out their journeys enabled me to understand
                where the sources of friction lie, which steps along the journey
                I can shorten, and where to streamline.
              </p>
            </div>
            <p className='mb-7'>
              I found that it takes a lot more steps for users to reach the
              product they are looking for. This is further complicated by
              additional web pages and inconsistent functionalities across the
              pages. For instance, the user can apply filters when browsing
              product categories but they cannot do so when searching for
              products.
            </p>
            <div>
              <p className='font-medium mb-4'>OLD USER FLOW</p>
              <img
                src='src/assets/zaraResource/old-user-flow.jpg'
                alt='Original user flow'
                className='mb-8'
              />
            </div>
            <p className='mb-7'>
              In my design, I focused on eliminating these redundancies and
              making completing user tasks more intuitive. One of the biggest
              changes is to combine the search and navigation functions under a
              single search bar that triggers a drop-down when clicked, since
              users mentioned the search bar as the first component they to go
              to.
            </p>
            <div>
              <p className='font-medium mb-4'>NEW USER FLOW</p>
              <img
                src='src/assets/zaraResource/new-user-flow.jpg'
                alt='New user flow'
                className='mb-8'
              />
            </div>
          </div>
        </section>

        <section className='section-container'>
          <h1 className='section-title'>03 Design</h1>
          <p className='mb-9'>
            Since I am focusing on Ed’s navigation experience on Zara, I built
            out the home page, search page, product categories page, as well as
            collections page to demonstrate this.
          </p>
          <div>
            <img
              src='src/assets/zaraResource/zara-wireframe-small.jpg'
              alt='Wire frame'
              className='cursor-pointer h-full'
              onClick={() =>
                openModal("src/assets/zaraResource/zara-wireframe-small.jpg")
              }
            />
          </div>
          <div className='mt-12 text-center'>
            <p
              className='underline cursor-pointer'
              onClick={() =>
                openModal("src/assets/zaraResource/zara-wireframe-small.jpg")
              }>
              Click to enlarge
            </p>
          </div>
          {isModalOpen && <ImageModal />}

          <div className='sub-section-container mt-12'>
            <h3 className='sub-section-title'>The Brand</h3>
            <p className='mb-9'>
              Zara’s brand identity is best described as embodying a
              minimalistic editorial magazine with a strong emphasis on its
              collection pieces.
            </p>
            <div className='-mx-[282px]'>
              <img
                src='src/assets/zaraResource/style.jpg'
                alt='Zara brand'
                className='w-full'
              />
            </div>
          </div>
          <div className='sub-section-container'>
            <h3 className='sub-section-title'>UI Kit</h3>
            <p className='mb-9'>
              With this in mind, I built a UI Kit to ensure design consistency
              going forward.
            </p>
            <img src='src/assets/zaraResource/ui-kit.jpg' alt='UI Kit' />
          </div>
          <div className='sub-section-container'>
            <h3 className='sub-section-title'>Visual Design</h3>
            <div className='callout'>
              <p className='font-medium'>
                I tailor my design solutions to address the 3 areas of friction
                (navigation, accessibility, calls to action) that Ed faces.
              </p>
            </div>

            <div>
              <p className='font-medium mb-4'>NAVIGATION</p>
              <p className='font-medium mb-6'>
                Integrate the navigation panel with a search bar
              </p>
              <p className='mb-9'>
                Since many users said the search bar is the first component they
                click in an e-commerce website, my design embeds the navigation
                panel within the search bar.
              </p>
              <div>
                <img
                  src='src/assets/zaraResource/navigation-frame.jpg'
                  alt='Navigation panels'
                  className='mb-9'
                />
              </div>

              <p className='mb-9'>
                Having the navigation panel take up the whole page allows the
                user to view all product categories without the need to scroll.
                This also allows us to add additional content under the search
                bar. In my case, I added recent searches and trending items.
              </p>
              <p className='font-medium mb-9'>
                Horizontal browsing for collections and vertical scroll for
                collection content
              </p>
              <div>
                <img
                  src='src/assets/zaraResource/collection-slider.jpg'
                  alt='Collection slider navigation'
                />
              </div>

              <div className='image-text-container-l items-center gap-2 mb-9'>
                <img
                  src='src/assets/zaraResource/navigation-image-2.jpg'
                  alt='Sample collections content'
                  className='image-container-l'
                />
                <div className='md:w-1/3 mt-6 md:-mt-48'>
                  <p className='mb-6'>
                    Consistent designs across the website makes navigation more
                    intuitive. I replicated how collection pages are laid out to
                    match the home page.
                  </p>
                  <p className='mb-6'>
                    Instead of putting all collection content vertically on one
                    page, I made each collection take up its own page that the
                    user can navigate by scrolling horizontally.
                  </p>
                  <p className='mb-6'>
                    If the users want to see the content of the collection, they
                    can scroll down to see the collection in detail.
                  </p>
                </div>
              </div>

              <div className='image-text-container-r gap-2 mb-9'>
                <div className='md:w-1/3'>
                  <div>
                    <p className='font-medium mb-6'>Availability in store</p>
                    <p className='mb-6'>
                      I created additional filter criteria that allow users to
                      find all items available at a specified store.
                    </p>
                    <p className='mb-6 md:mb-0'>
                      Users can search by postcode or keywords.
                    </p>
                  </div>
                </div>
                <div className='image-container-r'>
                  <img
                    src='src/assets/zaraResource/store-availability.jpg'
                    alt='Store availability filter'
                  />
                </div>
              </div>
            </div>

            <p className='font-medium mb-9'>UI LAYOUT</p>

            <div className='image-text-container-l items-center gap-2 mb-9'>
              <div className='image-container-l'>
                <img
                  src='src/assets/zaraResource/filter-stack.jpg'
                  alt='Product filter'
                  className='mb-6'
                />
              </div>
              <div className='md:w-1/3'>
                <p className='font-medium mb-6 md:-mt-56'>
                  Consistent design across product category pages (top) and
                  search pages (bottom)
                </p>
                <p>
                  This involved having the same filters at the top across pages
                  and their visual designs consistent. I also made all filters
                  visible to the user without the need to click on an additional
                  page.
                </p>
              </div>
            </div>

            <div className='mb-9'>
              <p className='font-medium mb-6'>VISUAL AFFORDANCE</p>
              <div className='image-text-container-r items-center mb-9'>
                <div className='md:w-1/3 mb-6 md:mb-0'>
                  <p className='font-medium mb-6 md:-mt-48'>
                    Thumbnails as user feedback
                  </p>
                  <p>
                    When the webpage updates, instead of using a loading
                    indicator, I created a loading screen with thumbnails to
                    make it clear to the user their input is triggering an
                    update.
                  </p>
                </div>
                <div className='image-container-r'>
                  <img
                    src='src/assets/zaraResource/thumb-nail-stack.jpg'
                    alt='Loading thumb nail'
                  />
                </div>
              </div>

              <div className='image-text-container-l items-center mb-9'>
                <div className='image-container-l'>
                  <img
                    src='src/assets/zaraResource/call-to-action.jpg'
                    alt='Call to action check out'
                  />
                </div>

                <div className='md:w-1/3 mt-6 md:-mt-48'>
                  <p className='font-medium mb-6'>Clearer call to action</p>
                  <p>
                    I redesigned the product page to enlarge all text and made
                    use of accent colors to highlight major call-to-actions such
                    as selecting sizing and ‘add to cart’.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section-container'>
          <h1 className='section-title'>04 Deliver</h1>
          <p className='mb-9'>
            My final prototype shows Ed’s navigating and browsing journey from
            first arriving at the home page to finding a product he is looking
            for, which is a matrix-inspired trench coat.
          </p>
          <div className='video-responsive mb-10'>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/8Baa_CPoXn4?si=gw2qxaUgGaCrG6AJ'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen></iframe>
          </div>
          <div className='sub-section-container'>
            <h3 className='sub-section-title'>What’s next?</h3>
            <div className='callout'>
              <p className='font-medium'>
                Design additional user flows and web pages that come after
                browsing
              </p>
            </div>
            <p>
              These include user flow for favoriting items, sign-ups, and check
              out. Another way to expand on the project is to identify new flows
              created by new features I introduced such as the availability in
              store. Overall, the goal here is to close the loop on the various
              user flows to build an MVP for the users.
            </p>
            <div className='callout'>
              <p className='font-medium'>
                Design and conduct a usability test with MVP on a group of
                participants
              </p>
            </div>
            <p>
              Design user tasks and KPIs to measure, set timelines, build out
              workflow, and identify participants. This will allow me to gain
              insight into how the user interacts with the new components,
              whether they make a difference from the old user flow, and see if
              the assumptions from my design-thinking hold up.
            </p>
            <div className='callout'>
              <p className='font-medium'>
                Review insights from the usability test and make adjustments to
                my design
              </p>
            </div>
            <p className='mb-10'>
              User insights will generate further questions and actions for me
              to act upon to improve my design.
            </p>
            <h3 className='sub-section-title'>What I've learned</h3>
            <p className='mb-6'>
              Having my initial understanding of the Zara website’s situation is
              equally as important as listening to the user. The initial website
              audit allowed me to find potential areas of ‘friction’ in the user
              journey and design my user research.
            </p>
            <p className='mb-6'>
              Understanding the user and scanning what our competitors are
              doing, it became clear what the problem is and what tools I need
              to tackle these problems.
            </p>
            <p className='mb-6'>
              I learned a lot from working on this project and stay tuned for
              more case studies coming up!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ZaraCaseStudy;
