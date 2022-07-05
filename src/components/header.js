import {useState} from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import {addMovie} from '../redux/movie'


const header = () => {

    // const [movie, setMovie] = useState("")
    // const [genre, setGenre] = useState("")
    // const dispatch = useDispatch();
    // const movieList = useSelector((state) => state.users.value);


  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sort</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Genre
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Comedy</a>
                        <a className="dropdown-item" href="#">Action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Scifi</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="#" onClick={() => {
                            // dispatch(
                            // addMovie({
                            //     id: movieList[movieList.length - 1].id + 1,
                            //     movie,
                            //     genre,
                            //     })
                            // );
                        }}>
                            Add New 
                        </a> */}
                    </li>
                </ul>
            </div>
         </nav>
    </div>
  )
}

export default header
