# Launching david.decodes

My profile coded in React Framework with Tailwind CSS.

The code is destructured so that if any changes need to be made, I just need to edit the JS object that I have created inside `Context.jsx`. The React components uses the data context to then render specific parts of the webpage.

I try to keep the jsx components below 100 lines when possible and destructure as much as I can to make it easy to read and understand.

Tasks:

- COMPLETED Figure out responsive CSS (when in mobile or smaller display size, wrap the social icons around)
- COMPLETED Route up the links
- COMPLETED Organize code into React framework (data context, Tailwind components, etc.)
- COMPLETED Develop Zara page (build out prototype, create skeleton HTML, styling, destructure)
- Develop Depop page -> change layout
- COMPLETED Deploy website

Zara Page:

1. REMOVED Add in an image loader
2. COMPLETED Build out basic HTML skeleton for 2 sections
3. COMPLETED Style it -> create common Tailwind components that can be applied to other sections
4. COMPLETE Make case study responsive
   _NOTE_ When in large display, things a bit funky... the content is not centered
5. COMPLETED Add fancy stuff (back-button, navigation, catalog on right hand side <-consider how to destucture this)
6. Add in image loading function so website loads in time
7. Destructure - CSS, JSX
8. COMPLETED Deploy

Daily Plan:

- DONE One of the image is jutting out in Zara Page
- (Priority next time)Issue with loading larger image (i.e. Wireframe onto webpage when deployed, need to consider alternative methd of uploading images)
- Organize code and remove redundancies

Structure:

src
main.jsx
index.css
App.jsx

assets
...images and stuff...

context

components
HomePage.jsx
Resume.jsx
Gallery.jsx
BlahBlah.jsx

      content
         ImageModal.jsx
         SideBar.jsx
         SmallFooter.jsx
            zara
               Zara.jsx -> overall structure / layout of the case study
            depop

