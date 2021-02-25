# Address Hero - Client

## Store contacts & addresses. Keep track of cards you have sent in the mail.

---

[View the Address Hero app here](https://addresshero-client.vercel.app)

[View the Address Hero server repo here](https://github.com/sean21johnson/AddressHero-Server)

**Address Hero** was created to help people store contacts and addresses. Furthermore, it was designed to keep track of cards you have sent in the mail by logging the event each time a card is sent. Users log in and add contacts to their Address Book. Within each contact's profile, there is an option to add addresses. Once addresses are added, users have an option to log the event of sending a card in the mail. After an event is logged, it will be added to a user's timeline. Users can utilize their timeline to keep track of all cards they have sent historically. Keeping track of addresses and remembering which cards you've sent to whom just got a whole lot easier!

---

### User Flows

New / any user goes to landing page:

    -> views description of site
    -> views steps for getting
    -> views details to use demo account

New user registers for an account:

    -> user goes to signup page
    -> user enters registration details

New user logs into account:

    -> user enters username and password

User adds contact:

    -> user clicks on 'Add Contact' button
    -> user enters full name, phone number, picture of contact
    -> user repeats process to create multiple contacts

User edits contact:

    -> user clicks on 'Edit' button
    -> user enters full name, phone number, picture of contacts

User navigates contacts using search bar:

    -> user searches for the name of a contact
    -> only names matching that search term will be displayed on the address book page

User views contact's profile page

    -> user clicks on 'Add New Address' button
    -> user enters street, city, state, zip code, google maps link
    -> user repeats process to create multiple addresses for the contact if necessary
    -> user clicks on 'Send Card' button after adding at least one address
    -> user enters the address and card type

User views their Timeline page

    -> after a user sends a card, they are re-directed to their timeline page
    -> the most recent card sent will appear on the top of the timeline
    -> users can view all the cards they have sent historically
    -> user can click on the picture of any contact on the timeline to view their specific profile page

---

### Screenshots

<img width="400px" alt="Add New Contact" src="https://imgur.com/EL2U2Kn.jpg">

<img width="400px" alt="Address Book" src="https://imgur.com/Nu6bKbE.jpg">

<img width="400px" alt="Edit Contact Info" src="https://imgur.com/L4BuMfR.jpg">

<img width="400px" alt="Add New Address" src="https://imgur.com/FOW9j5d.jpg">

<img width="400px" alt="Contact Profile Page" src="https://imgur.com/1UYCsQk.jpg">

<img width="400px" alt="Send Card" src="https://imgur.com/1mxlZ3V.jpg">

<img width="400px" alt="Timeline" src="https://imgur.com/5ah3k2X.jpg">

---

### Tech Stack

This client-side application was created with:

<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />
<img align="left" alt="HTML5" src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" />
<img align="left" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img align="left" alt="CSS3" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />
<img align="left" alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />
<img align="left" alt="GitHub" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />

<br/>

---

### Components Tree

**App🔻**

➖**Header🔻** 

➖➖**Landing Page**  
➖➖➖*Introduction*  
➖➖➖*Getting Started*  
➖➖➖*Demo Info*  

➖➖**Registration Page**  
➖➖➖*Registration Form*  

➖➖**Login Page**  
➖➖➖*Login Form*  

➖➖**Contact List Page** 
➖➖➖*Contact Search/Add Contact Nav Bar*  
➖➖➖*Individual Contact Items*  
➖➖➖➖*Add New Contact Form* 
➖➖➖➖*Edit Individual Contact*  

➖➖**Contact Profile Page**  
➖➖➖*Add New Address/Send Card Nav Bar*  
➖➖➖*Individual Contact Item*   
➖➖➖➖*Add New Address Form*  
➖➖➖➖*Send Card Form*  

➖➖**Timelin Page**
➖➖➖*Individual Timeline Items*  

➖**Footer🔻** 

---

### Available Scripts

In the project directory, you can run:

`npm start`

The page will reload if you make any edits.

`npm test`

Launches the test runner in the interactive watch mode.

`npm run build`

Builds the app for production to the `build` folder
