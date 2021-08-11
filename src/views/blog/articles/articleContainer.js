import React from 'react';
import ArticleCard from './articleCard';
import BlogService from '../../../services/blog';

class ArticleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    BlogService.getBlog()
      .then(response => {
        this.setState({
          articles: response.data.items,
        });
      });
  }

  renderArticles = (articles) => {
    return articles.map((article, index) => {
      return <div className='col s6' key={`article-${index}`}>
          <ArticleCard
            title={article.title}
            img={article.thumbnail}
            author={article.author}
            link={article.link}
          ></ArticleCard>
      </div>

    });
  }

  render() {
    const articles = this.renderArticles(this.state.articles);
    return (
      <div className='container'>
        <div className='row'>
          {articles}
        </div>
      </div>
    );
  }
};

export default ArticleContainer;