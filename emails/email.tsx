import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import { Link } from '@react-email/link';
import * as React from 'react';

export default function Email() {

  return (
    <Html>
      <Head />
      <Preview>CAN - TEST - 2015000</Preview>
      <Section style={main}>


          <Container style={container}>
          
            <Section style={logoCont}>
              <Img
                src='https://f.hubspotusercontent40.net/hubfs/19575543/Aarsleff%20Logo%20(HQ%20JPEG).jpg'
                width="150"
                height="80"
                alt="Aarsleff"
              />
            </Section>

            <Section style={header}>
              <Text style={heading}>The below CAN has been received</Text>
            </Section>

            <Section style={review}>
              <table cellSpacing="16">
                <tbody>   
                    <tr>
                        <td><b style={paragraph}>CAN:&nbsp;</b></td>
                        <td><p style={paragraph}>Test</p></td>
                    </tr>
                    <tr>
                        <td><b style={paragraph}>Description:&nbsp;</b></td>
                        <td><p style={paragraph}>Test</p></td>
                    </tr>
                    <tr>
                        <td><b style={paragraph}>Client:&nbsp;</b></td>
                        <td><p style={paragraph}>Test</p></td>
                    </tr>
                    <tr>
                        <td><b style={paragraph}>Department:&nbsp;</b></td>
                        <td><p style={paragraph}>Test</p></td>
                    </tr>
                    <tr>
                        <td><b style={paragraph}>Estimator:&nbsp;</b></td>
                        <td><p style={paragraph}>Test</p></td>
                    </tr>
                    <tr>
                        <td><b style={paragraph}>Start Date:&nbsp;</b></td>
                        <td><p style={paragraph}>Test</p></td>
                    </tr>
                    <tr>
                        <td><b style={paragraph}>Value:&nbsp;</b></td>
                        <td><p style={paragraph}>Test</p></td>
                    </tr>
                    <tr>
                        <td><b style={paragraph}>AGE %:&nbsp;</b></td>
                        <td><p style={paragraph}>Test</p></td>
                    </tr>
                    <tr>
                        <td><b style={paragraph}>Group:&nbsp;</b></td>
                        <td><p style={paragraph}>Test</p></td>
                    </tr>
                    <tr>
                        <td><b style={paragraph}>Scope:&nbsp;</b></td>
                        <td><p style={paragraph}>Test</p></td>
                    </tr>
                    <tr>
                        <td><b style={paragraph}>Testing:&nbsp;</b></td>
                        <td><p style={paragraph}>Test</p></td>
                    </tr>
                    <tr>
                        <td><b style={paragraph}>Design:&nbsp;</b></td>
                        <td><p style={paragraph}>Test</p></td>
                    </tr>
                    <tr>
                        <td><b style={paragraph}>FPS:&nbsp;</b></td>
                        <td><p style={paragraph}>Test</p></td>
                    </tr>
                    <tr>
                        <td><b style={paragraph}>Infastructure:&nbsp;</b></td>
                        <td><p style={paragraph}>Test</p></td>
                    </tr>
                    <tr>
                        <td><b style={paragraph}>Notes:&nbsp;</b></td>
                        <td><p style={paragraph}>Test</p></td>
                    </tr>
                </tbody> 
              </table>
            </Section>

              <Section style={footer}>
                <Link 
                style={{
                  ...link,
                  fontSize: '12px',
                }} 
                href="https://aarsleff.atlassian.net/servicedesk/customer/portal/3"
                >
                  <b>Click HERE&nbsp;</b>to report an issue if this CAN doesn&apos;t look correct
                </Link>
              </Section>
              
      
          </Container>
      </Section>

    </Html>
    
  );
}


const fontFamily =
'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

const main = {
  backgroundColor: '#1f2045',
  padding: '36px',
};

const container = {
  margin: '0 auto',
  width: '610px',
  backgroundColor: '#ffff',
  borderRadius: 5,
  overflow: 'hidden',
  padding: '18px',
};

const paragraph = {
  fontFamily,
  fontSize: '18px',
  lineHeight: '12px',
};


const heading = {
  fontFamily,
  fontSize: '24px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
};

const footer = {
  display: 'flex',
  padding: '20px 0 10px',
  overflow: 'hidden',
  textAlign: 'center',
  justifyContent: 'center',
};


const header = {
  display: 'flex',
  padding: '24px 0 12px',
  overflow: 'hidden',
  textAlign: 'center',
  justifyContent: 'center'
};

const link = {
  ...paragraph,
  padding: '24px',
  display: 'flex',
  justifyContent: 'center',
};

const review = {
  ...paragraph,
  padding: '24px',
  backgroundColor: '#f2f3f3',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'start'
};

const logoCont = {
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
  textAlign: 'center',
};