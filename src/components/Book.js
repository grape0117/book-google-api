export default function Book(index) {
    console.log(index.book.volumeInfo)
    return (
        <div className="book-card">
            <div className="book-thumbnail">
                <img src={index.book.volumeInfo.imageLinks.thumbnail} alt="Book Cover" data-xblocker="passed" style={{ visibility: 'visible' }} />
            </div>
            <div className="book-details">
                <h3 className="book-title">{index.book.volumeInfo.title}</h3>
                <p className="book-author">Author(s): {index.book.volumeInfo.authors[0]}</p>
                <p className="book-excerpt">{index.book.volumeInfo.description}</p>
                <p className="book-volume-id">Volume ID: {index.book.id}</p>
                <a href={index.book.volumeInfo.infoLink} target="_blank" className="btn btn-primary book-button">Read More</a>
            </div>
        </div>
    )
};