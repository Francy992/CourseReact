import React, { Component } from 'react'
import '../../css/booklist/booklist.css'
import Modal from './modal';


export class Booklist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "C++",
            books: { items: [] },
            visible: { display: "block" },
            showModal: 0
        }
    }

    fetchBooks = () => {
        const API = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}`
        fetch(API)
            .then(r => r.json())
            .then(r => {
                console.log(`Recupero dati:`);
                console.log(r);
                this.setState({ books: r, visible: { display: "none" } });
            })
            .catch(error => {
                console.error("Errore durante il recupero dei dati: " + error);
            });
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.fetchBooks();
        this.setState({ visible: { display: "block" } });
    }

    onInputChange = (e) => {
        console.log(`InputChange: ${e.target.value}`);
        this.setState({ searchTerm: e.target.value });
    }

    hideModal = () => {
        this.setState({ showModal: 0 });
    }

    getModal = (bookId) => {
        this.setState({ showModal: bookId })
    }

    render() {
        return (
            <React.Fragment>
                <div className='container-fluid codrops-header'>
                    <section className='text-center'>
                        <h2>Search for books</h2>
                        <form className='form-inline' onSubmit={this.onSubmitHandler}>
                            <div className="form-group" style={{ margin: ' 30px auto' }} >
                                <input
                                    className='form-control'
                                    type="search"
                                    placeholder="book title..."
                                    value={this.searchTerm}
                                    onInput={this.onInputChange} />
                                <button style={{ padding: '8px 15px', borderRadius: '5px' }} className='btn btn-warning' type="submit">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
                <div className="main" style={{ marginTop: '10px' }}>
                    <div className="bookshelf" id='bookshelf'>
                        <div className="search-icon" data-reactid=".0.1.0.0" style={this.state.visible}>
                            <i className="fas fa-search"></i>
                        </div>

                        {
                            this.state.books.items.map((book, index) => {
                                const backgroundImage = `https://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`;
                                return (
                                    <figure key={index} className='details-open'>
                                        <Modal show={this.state.showModal === book.id} onHide={() => this.hideModal(book.id)} title={book.volumeInfo.title} desc={book.volumeInfo.description} pag={book.volumeInfo.pageCount}/>
                                        <div className="perspective">
                                            <div className="book">
                                                <div className="cover">
                                                    <div className="front" style={{ background: "url(" + backgroundImage + ") 0% 0% /100% 100% no-repeat", border: "2px solid rgb(238,238,238)", width: "170px", height: "240px" }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="buttons">
                                            <button className="btn btn-warning btn-small" style={{ padding: "2px", borderRadius: "5px" }}
                                                onClick={() => this.getModal(book.id)}>
                                                Dettagli
                                    </button>
                                            <a href={book.volumeInfo.infoLink} target="_blank">Preview</a>
                                        </div>
                                        <figcaption>
                                            <h2>
                                                <span>{book.volumeInfo.title}</span>
                                                <span>{book.volumeInfo.authors}</span>
                                                <span>{book.volumeInfo.publishedDate}</span>
                                            </h2>
                                        </figcaption>
                                    </figure>
                                );
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Booklist
