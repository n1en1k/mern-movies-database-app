import React from "react";

const createMovie = () => {
  return (
    <main>
      <h2 className="heading2">Create Movie</h2>

      <form name="createMovie" id="createMovie" className="basicForm">
        <p className="formLabelP">
          <label htmlFor="name">
            Name: <span className="required">*</span>
          </label>
        </p>
        <p className="formInputWrap">
          <input
            type="text"
            id="name"
            name="name"
            className="textInput"
            placeholder="Name:"
            required
          />
        </p>
        <p className="formLabelP">
          <label htmlFor="year">
            Year: <span className="required">*</span>
          </label>
        </p>
        <p className="formInputWrap">
          <input
            type="number"
            id="year"
            name="year"
            className="textInput numberInput"
            placeholder="Year:"
            min="1888"
            max="2030"
            required
          />
        </p>
        <p className="formLabelP">
          <label htmlFor="director">
            Director: <span className="required">*</span>
          </label>
        </p>
        <p className="formInputWrap">
          <select id="director" name="director" className="textInput" required>
            <option value="" disabled selected>
              Director:
            </option>
            <option value="0">James Cameron</option>
            <option value="1">Alejandro González Iñárritu</option>
          </select>
        </p>
        <p className="inputInfo cursorpointer" id="DirectorModalBtn">
          Director missing? Click this to create new director
        </p>
        <input type="submit" className="btn btn-success" value="create" />
      </form>
      <p className="inputInfo">
        <span className="msgSuccess">Success!</span> Now you can add actors to
        newly added movie.
      </p>
    </main>
  );
};

export default createMovie;
