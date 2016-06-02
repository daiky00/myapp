
import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Linkedin.css';
//Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import H1 from '../../components/H1'
import Paragraph from '../../components/Paragraph'
import Content from '../../components/Content'
import Sidebar from '../../components/Sidebar'
import Button from '../../components/Button'
//Assets
import Img from './linkedin.gif'

function Linkedin() {
  return (
    <div className={s.root}>
      <Header />
      <Content>
        <H1><strong> My </strong>  LINKEDIN.</H1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </Paragraph>
        <Button>See more</Button>
      </Content>
      <Sidebar>
        <img className={s.animated} src={Img} alt="React"  />
      </Sidebar>
      <Footer />
    </div>
  );
}

Linkedin.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Linkedin);