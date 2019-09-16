import React from "react";

function Form ({ q, handleInputChange, handleFormSubmit}) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="Query">
                    Book
                </label>
                <Input
                className="form-control"
                id="Title"
                type="text"
                value={q}
                placeholder="Ready To Play"
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
                </button>
            </div>
        </form>
    );
}

export default Form;