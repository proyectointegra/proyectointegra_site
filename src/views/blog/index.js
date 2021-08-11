import React from 'react';
import Layout from '../../components/layout';
import Settings from '../../components/_settings';
import ArticleContainer from './articles/articleContainer';
import image from './bg-main.png';

class Blog extends React.Component {
  render() {
    return (
      <Layout
        title='Blog'
        slogan='Conocenos un poco mas'
        destination='Quienes Somos'
        redirect={Settings.ABOUT}
        image={image}
      >
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12">
                <blockquote>Detalle</blockquote>
                <h5 className="left-align light">Te invitamos a seguir nuestros articulos, solo hace click en alguno</h5>
              </div>
            </div>
          </div>
        </div>
        <ArticleContainer></ArticleContainer>
      </Layout>
    );
  };
};

export default Blog;