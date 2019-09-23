import React from "react";

function Form ({ q, handleInputChange, handleFormSubmit }) {
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
                value={q}
                placeholder="Ready To Search"
                name="q"
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
                    
                {console.log("button-clicked")}
                </button>
                
            </div>
        </form>
    );
}

export default Form;