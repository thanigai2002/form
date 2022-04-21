import React, { useState } from "react";
import { validEmail, validPassword } from "./regex";

export default function Form(props) {
  // const [emailErr, setEmailErr] = useState(false);
  // const [pwdError, setPwdError] = useState(false);
  var emailErr = false;
  var pwdError = false;
  const validate = () => {
    if (!validEmail.test(props.data.email)) {
      emailErr = true;
    }
    if (!validPassword.test(props.data.password)) {
      pwdError = true;
    }
  };

  //  const sample = () => {
  //     if (!emailErr && !pwdError) {
  //         return props.handleSubmit
  //     }
  //     return null
  //  }
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-4">
          <div className="main">
            <form onSubmit={props.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address : </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  onChange={props.handleChange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="username">Username : </label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  id="username"
                  onChange={props.handleChange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password : </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  onChange={props.handleChange}
                  validations={{}}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="file-upload" className="upload-file">
                  Upload your image here :{" "}
                </label>
                <span></span>
                <input
                  type="file"
                  className="form-control"
                  name="password"
                  id="password"
                  onChange={props.handleChange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="comment">comment : </label>
                <label
                  type="text"
                  className="form-control"
                  name="comment"
                  id="comment"
                  onChange={props.handleChange}
                >
                  <textarea
                    input="text"
                    maxLength={500}
                    placeholder="Typehere..... "
                  ></textarea>
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={validate}
              >
                Submit
              </button>
              {emailErr && <p>Your email is invalid</p>}
              {pwdError && <p>Your password is invalid</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

