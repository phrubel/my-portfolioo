
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

const GetInTouch = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm();


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_3dpgdrn', 'template_w7c7ygv', e.target, 'user_6nlV1IHrXz2bfCnMOrjdF')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }



  return (
    <div className="container">
      <form className="contact-form text-white" onSubmit={sendEmail}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                className="form-control mb-2"
                id="name"
                placeholder="first name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-danger">Name field is required</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="mobile">Last Name</label>
              <input
                type="text"
                className="form-control mb-2"
                id="name"
                placeholder="first name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-danger">Name field is required</span>
              )}
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control mb-2"
            id="email"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            })}
          />
          {errors?.email?.type === "required" && (
            <span className="text-danger">Email field is required</span>
          )}
          {errors?.email?.type === "pattern" && (
            <span className="text-danger">Input A Valid Email</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="massage">Massage</label>
          <textarea
            className="d-block w-100 rounded p-2"
            rows="4"
            id="massage"
            placeholder="Write Your Massage"
            {...register("massage", { required: true })}
          ></textarea>
          {errors?.massage?.type === "required" && (
            <span className="text-danger">Massage field is required</span>
          )}
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    </div>
  );
};

export default GetInTouch;

