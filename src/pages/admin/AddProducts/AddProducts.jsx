// import React from 'react'
// import { Formik } from 'formik';
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';


// function AddProducts() {
//     return (
//         <div>
//             <Formik
//                 initialValues={{ name: '', image: '', price: " " }
//                     validate={values => {
//                     onSubmit = {(values, { setSubmitting }) => {
//                 axios.delete("http://localhost:3001/products", {
//                     id: uuidv4(),
//                     name: values.name,
//                     image: values.image,
//                     price: values.price
//                 })
//             }}

//     }}}
       
//      >

//             {({
//                 values,
//                 errors,
//                 touched,
//                 handleChange,
//                 handleBlur,
//                 handleSubmit,
//                 isSubmitting,
//                 /* and other goodies */
//             }) => (
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         placeholder='name'
//                         name="name"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.name}
//                     />
//                     {errors.name && touched.name && errors.name}
//                     <input
//                         type="text"
//                         name="image"
//                         placeholder='img'
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.image}
//                     />
//                     {errors.image && touched.image && errors.image}

//                     <input
//                         type="number"
//                         placeholder='price'
//                         name="price"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.price}
//                     />
//                     {errors.price && touched.price && errors.price}
//                     <button type="submit" disabled={isSubmitting}>
//                         Submit
//                     </button>
//                 </form>
//             )}
//         </Formik>
//     </div >
//   )
// }

// export default AddProducts

import { Formik,Form,ErrorMessage,Field} from 'formik';
import React, { useContext } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import MainContext from '../../../context/context';


function AddProducts() {
    const {data, setData} = useContext(MainContext)
  return (
    <div>
        <Formik
       initialValues={{image :'',name:"", price:'' }}
       
       onSubmit={(values, { setSubmitting }) => {
        axios.post("http://localhost:3000/products",{
            id:uuidv4(),
            name:values.name,
            image:values.image,
            price:values.price
        })

        .then((resp)=>{
            setData([...data,resp.data])
            
        })
         
       }} >
       {({ isSubmitting }) => (
         <Form>

           <Field type="text" name="image" />
           <ErrorMessage name="image" component="div" />
           <Field type="text" name="name" />
           <ErrorMessage name="name" component="div" />
           <Field type="number" name="price" />
           <ErrorMessage name="price" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default AddProducts
