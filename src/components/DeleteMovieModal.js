import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import MovieList from './MovieList';

const DeleteMovieModal = (props) => {
  const {push} = useHistory();
  const { id } = useParams();
  const { toggleIsDeleting } = props;
  const { deleteMovie } = props;
 
  console.log(deleteMovie);

  const handleDelete = (e)=> {
    e.preventDefault();
    axios.delete(`http://localhost:9000/api/movies/${id}`)
      .then( res => {
        deleteMovie(id);
        toggleIsDeleting();
        push('/movies');

      })
      .catch( err => console.error(err))
  } 
    return (<div id="deleteEmployeeModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">						
                        <h4 className="modal-title">Delete Movie</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body">					
                        <p>Are you sure you want to delete this movie?</p>
                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                    </div>
                    <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                        <input onClick={handleDelete} type="submit" className="btn btn-danger" value="Delete"/>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}

export default DeleteMovieModal;