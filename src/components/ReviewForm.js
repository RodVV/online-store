import React, { Component } from 'react';
import { addForm, getForm } from '../services/storage';

export default class ReviewForm extends Component {
  constructor() {
    super();
    this.state = {
      nota: '0',
      textArea: '',
      email: '',
      reviews: [],
    };
  }

  componentDidMount() {
    const loadForm = getForm() !== null ? getForm() : [];
    // console.log(loadForm);
    this.setState({ reviews: loadForm });
  }

  notaChange = (value) => {
    this.setState({ nota: value });
  };

  commentChange = ({ target: { value } }) => {
    this.setState({ textArea: value });
  };

  emailChange = ({ target: { value } }) => {
    this.setState({ email: value });
  };

  submitBtn = (e) => {
    e.preventDefault();
    const { nota, textArea, email } = this.state;
    const obj = { nota, textArea, email };
    addForm(obj);
    this.setState((prevState) => ({
      reviews: [...prevState.reviews, obj],
    }));
  };

  render() {
    const { textArea, email, reviews } = this.state;
    const magic1 = 1;
    const magic2 = 2;
    const magic3 = 3;
    const magic4 = 4;
    const magic5 = 5;
    // console.log(reviews);
    return (
      <>
        <form onSubmit={ this.submitBtn }>
          {/*
        avaliação 1-5 -> radio buttons (required)
          -> data-testid="${index}-rating"
          -> index = nota
          */}
          <div>
            <label htmlFor="nota1">
              <input
                name="nota"
                type="radio"
                id="nota1"
                onChange={ () => this.notaChange(magic1) }
                data-testid="1-rating"
              />
              1
            </label>
            <label htmlFor="nota2">
              <input
                name="nota"
                type="radio"
                id="nota2"
                onChange={ () => this.notaChange(magic2) }
                data-testid="2-rating"
              />
              2
            </label>
            <label htmlFor="nota3">
              <input
                name="nota"
                type="radio"
                id="nota3"
                onChange={ () => this.notaChange(magic3) }
                data-testid="3-rating"
              />
              3
            </label>
            <label htmlFor="nota4">
              <input
                name="nota"
                type="radio"
                id="nota4"
                onChange={ () => this.notaChange(magic4) }
                data-testid="4-rating"
              />
              4
            </label>
            <label htmlFor="nota5">
              <input
                name="nota"
                type="radio"
                id="nota5"
                onChange={ () => this.notaChange(magic5) }
                data-testid="5-rating"
              />
              5
            </label>
          </div>
          {/*
        comentários -> text area (opcional)
          -> data-testid="product-detail-evaluation"
        exibir prev reviews
        */}
          <label htmlFor="Comment">
            <input
              type="text"
              placeholder="digite aqui seu comentário"
              name="Comment"
              data-testid="product-detail-evaluation"
              value={ textArea }
              onChange={ (e) => this.commentChange(e) }
            />
          </label>
          {/*
        email -> data-testid="product-detail-email"
        */}
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              data-testid="product-detail-email"
              value={ email }
              onChange={ (e) => this.emailChange(e) }
            />
          </label>
          {/*
          botão submit -> data-testid="submit-review-btn"
        localStorage
        */}
          <button type="submit" data-testid="submit-review-btn">
            Enviar
          </button>
        </form>
        <div>
          {reviews.map((review) => (
            <div key={ review.email }>
              <p data-testid="product-detail-email">{review.email}</p>
              <br />
              <p data-testid={ `${review.nota}-rating` }>{review.nota}</p>
              <br />
              <p data-testid="product-detail-evaluation">{review.textArea}</p>
              <br />
            </div>
          ))}
        </div>
      </>
    );
  }
}
