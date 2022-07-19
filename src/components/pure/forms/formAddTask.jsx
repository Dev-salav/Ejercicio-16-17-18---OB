import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  title: Yup.string()
    .min(6, "Título muy corto")
    .max(10, "Título muy largo")
    .required("Please, insert a title for your task"),
  description: Yup.string()
    .max(50, "Descripción muy larga")
    .required("Please, insert a description for your task"),
  priority: Yup.string().required("Please, give a priority to your task"),
});

const FormularioTask = () => {
  const initialValues = {
    title: "",
    description: "",
    priority: "",
  };

  return (
    <div>
      <h4>Formulario Formik Ejercicio OB</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form>
            <label htmlFor="title">Title</label>
            <Field
              id="title"
              name="title"
              placeholder="Insert a Title for your task"
            />
            {errors.title && touched.title && (
              <ErrorMessage name="title" component="div"></ErrorMessage>
            )}

            <label htmlFor="description">Description</label>
            <Field
              id="description"
              name="description"
              placeholder="Insert a task description"
            />
            {errors.description && touched.description && (
              <ErrorMessage name="description" component="div"></ErrorMessage>
            )}
            <label htmlFor="priority">Priority</label>
            <Field
              id="priority"
              name="priority"
              placeholder="Give a priority to yor task"
            />
            {errors.priority && touched.priority && (
              <ErrorMessage name="email" component="div"></ErrorMessage>
            )}
            <button type="submit">Añadir tarea</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormularioTask;
