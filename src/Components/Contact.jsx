import React from 'react';


function Contact() {
  return (
    <div id='contact'>
        <h1>BOOK YOUR TABLE </h1>
        <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Type yourEmail" />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Message"></textarea>
            <input type="submit" value="Book Now" />
        </form>
        </div>
    )
}

export default Contact;
