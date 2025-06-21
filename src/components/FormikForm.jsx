import React, { useState } from 'react';
import { Formik,Form } from 'formik';
import { CustomInput } from '../../common/CustomInput';
import { basicSchema } from '../schemas';


export const BasicExample = ({next, loading}) => (
  <div className='pb-10'>
    <Formik
    validationSchema={basicSchema}

      initialValues={{ 
        Type:'New Artist',
        firstName: '', 
        lastName:"",
        age:"",
        dateOfBirth:"",
        location:"",
        email:"",
        phoneNumber:"",
        language:"",
        artistName : "",
        musicGenre:"",
        spotifyLink:"",
        instagramLink:"",
     }}
     onSubmit={(values,actions)=>{
      next(values)
      // console.log(values)
     }}
    >
      {(props) => (
        <Form className='space-y-5'>
         <CustomInput
         label={"First Name"}
         name={"firstName"}
         type={"text"}
         placeholder={"Enter your first name"}
         />
        <CustomInput
         label={"Last Name"}
         name={"lastName"}
         type={"text"}
         placeholder={"Enter your last name"}
         />

        <CustomInput
         label={"Age"}
         name={"age"}
         type={"number"}
         placeholder={"Enter your Age"}
         />

        <CustomInput
         label={"Date of Birth"}
         name={"dateOfBirth"}
         type={"date"}
         placeholder={"Select your DOB"}
         styles={"focus:ring appearance-none"}
         />

        <CustomInput
         label={"Location"}
         name={"location"}
         type={"text"}
         placeholder={"Enter your Location"}
         />

        <CustomInput
         label={"Email"}
         name={"email"}
         type={"email"}
         placeholder={"Enter your Email"}
         />

        <CustomInput
         label={"Phone Number"}
         name={"phoneNumber"}
         type={"number"}
         placeholder={"Enter your Phone number"}
         />

        <CustomInput
         label={"Language"}
         name={"language"}
         type={"text"}
         placeholder={"Enter your Language"}
         />

        <CustomInput
         label={"Artist Name / Label Name / Music Group Name"}
         name={"artistName"}
         type={"text"}
         placeholder={"Enter your Artist Name"}
         /> 

        <CustomInput
         label={"Music Genre"}
         name={"musicGenre"}
         type={"text"}
         placeholder={"Enter your Music Genre"}
         /> 

        <CustomInput
         label={"Spotify Page Link"}
         name={"spotifyLink"}
         type={"text"}
         placeholder={"Enter your Spotify Page Link"}
         /> 

        <CustomInput
         label={"Instagram Page Link"}
         name={"instagramLink"}
         type={"text"}
         placeholder={"Enter your Instagram Page Link"}
         />

          <button disabled={loading} className={`${loading?'bg-gray-300':''} bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 relative top-2 rounded-full w-full uppercase`} type="submit"> {loading?"Loading...":'Submit'}</button>
        </Form>
      )}
    </Formik>
  </div>
);