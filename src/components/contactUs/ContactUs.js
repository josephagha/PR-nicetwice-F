import React, { useState, useContext, useEffect } from "react";

import AlertContext from '../../context/alert/alertContext';
import MessageContext from '../../context/message/messageContext';

import Input from "../uiElements/forms/Input";
import Select from "../uiElements/forms/Select";
import Textarea from "../uiElements/forms/Textarea";
import Button from "../uiElements/forms/Button";

const ContactUs = () => {
  const messageContext = useContext(MessageContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { addMessage, error } = messageContext;


  const [step, setStep] = useState(0);

  const [messageItems, setMessageItems] = useState({
    name: '',
    companyName: '',
    service: '',
    phone: '',
    email: '',
    information: ''
  });

  const { name, companyName, service, phone, email, information } = messageItems;

  const onChange = e => setMessageItems({ ...messageItems, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (name === '' || service === '' || email === '') {
      setAlert('Please fill in all fields', 'error');
    } else if (email === '') {
      setAlert('Please fill in all fields', 'error');
    }
    else {
      addMessage(messageItems)
      if (error == null) {
        setStep(1)
      }
    }
  };



  const switchStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className='contact-us_message'>

              {/*  <p>Hallo Nice,</p>
              <div className="message-item">
                <span className=' message-item_title_1 '>mein Name ist {name}</span>
              </div>
              <div className="message-item">
                {companyName && <span className=' message-item_title_2 '>Ich arbeite bei {companyName}</span>}
              </div>
              <div className="message-item">
                <span className=' message-item_title_3 '> {companyName && <>und</>} ich brauche deine Hilfe für {service}.</span>
              </div>
              <div className="message-item">
                {phone && <span className=' message-item_title_4 '>Du kannst mich unter dieser Telefonnummer: {phone}</span>}
              </div>
              <div className="message-item">
                {
                  phone ?
                    <span className=' message-item_title_5 '>erreichen oder einfach per E-Mail: {email}</span>
                    : <span className=' message-item_title_5 '>Du kannst mich per E-Mail: {email} erreichen</span>
                }
              </div>
              <div className="message-item">
                {information && <span> Weitere Informationen : {information} </span>}
              </div>
              <br />
              <p>Dankeschön.</p>

              <br />
              <br /> */}
              <span className="contact-us_success">Danke dir, Wir werden uns bald bei dir melden.</span>

            </div>
          </>
        )
        break;
      default:
        return (
          <>
            <form onSubmit={onSubmit} className='contact-us_message' >

              <p>Hallo Nice,</p>
              <div className="message-item">
                <span className=' message-item_title_1 '>mein Name ist</span>
                <Input
                  id='name'
                  type='text'
                  name='name'
                  value={name}
                  onChange={onChange}
                  placeholder='Vor- und Nachname*'
                  required='required'
                  classs=' message-item_input_1 '
                />
              </div>
              <div className="message-item">
                <span className=' message-item_title_2 '>Ich arbeite bei </span>
                <Input
                  id='companyName'
                  type='text'
                  name='companyName'
                  value={companyName}
                  onChange={onChange}
                  placeholder='Unternehmensname'
                  classs=' message-item_input_2 '
                />
              </div>
              <div className="message-item">
                <span className=' message-item_title_3 '>und ich brauche deine Hilfe für</span>
                <Select
                  id='service'
                  name='service'
                  value={service}
                  onChange={onChange}
                  placeholder='Art des Projekts*'
                  required='required'
                  classs='  message-item_input_3 '
                />
              </div>
              <div className="message-item">
                <span className=' message-item_title_4 '>Du kannst mich unter dieser</span>
                <Input
                  id='phone'
                  type='text'
                  name='phone'
                  value={phone}
                  onChange={onChange}
                  placeholder='Telefonnummer'
                  classs='  message-item_input_4 '
                />
              </div>
              <div className="message-item">
                <span className=' message-item_title_5 '>erreichen oder einfach per E-Mail</span>
                <Input
                  id='email'
                  type='email'
                  name='email'
                  value={email}
                  onChange={onChange}
                  placeholder='E-Mail adresse*'
                  required='required'
                  classs='  message-item_input_5 '
                />
              </div>
              <div className="message-item">
                <Textarea
                  id='information'
                  name='information'
                  value={information}
                  onChange={onChange}
                  placeholder='Weitere Informationen'
                  classs='  message-item_input_5 '
                />
              </div>

              <p>Dankeschön.</p>

              <Button
                type='submit'
                value='SENDEN'
              />
            </form >

          </>
        )
        break;
    }
  };


  return (
    <div id="contact" className="contact-us">
      <h1 className="contact-us_title"> sag mir, was du brauchst.<br /><span className="contact-us_subtitle"> was du wirklich brauchst.</span></h1>
      {switchStep()}
      <p className="city-name">HAMBURG</p>
    </div>
  );
}

export default ContactUs;
