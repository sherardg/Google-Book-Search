import React from "react";

function Form ({ searchTerm, handleInputChange, handleFormSubmit}) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="Query">
                    Book
                </label>
                <input
                className="form-control"
                id="Title"
                type="text"
                value={searchTerm}
                placeholder="Ready To Search"
                name="searchTerm"
                onChange={handleInputChange}
                required
                />
            </div>
            <div className="pull-right">
                <button 
                onClick={handleFormSubmit}
                type="submit"
                className="btn btn-lg btn-danger float-right"
                >
                    Search
                </button>
            </div>
        </form>
    );
}

export default Form;