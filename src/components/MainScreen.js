import React from 'react';
import Book from "./Book";

const MainScreen = (props) => {
    return(
        <div>
            {
                props.books.map((b, idx) => (
                    (<Book key={idx} title={b.title}/>)
                ))
            }
        </div>
    )
};

export default MainScreen;