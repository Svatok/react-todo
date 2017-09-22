import { SubmissionError } from 'redux-form';

// export default function showFormErrors(formError, fieldsErrors) {
export default function showFormErrors(fieldsErrors) {
  delete error.data.errors['full_messages'];
  // if (fieldsErrors.length) {
  //   const errors = Object.assign({}, ...fieldsErrors);
  //   console.log(JSON.stringify(errors));
  //   throw new SubmissionError(errors);
  // }
  // if (formError.length) {
    throw new SubmissionError({
      _error: JSON.stringify(fieldsErrors)
    });
  // }
}
