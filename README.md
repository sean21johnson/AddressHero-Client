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


