
import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
//Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import H1 from '../../components/H1'
import Paragraph from '../../components/Paragraph'
import Content from '../../components/Content'
import Sidebar from '../../components/Sidebar'
import Img from '../../components/Img'
//Assets
import Me from './me.png'

function Home() {
  return (
    <div className={s.root}>
      <Header />
      <Content>
        <H1><strong> Hello </strong>  WORLD.</H1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
          pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
        </Paragraph>
      </Content>
      <Sidebar>
        <Img src={Me} />
      </Sidebar>
      <Footer />
    </div>
  );
}

Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
