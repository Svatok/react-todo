import { SubmissionError } from 'redux-form';

export default function showFormErrors(formError, fieldsErrors) {
  if (fieldsErrors.length) {
    const errors = Object.assign({}, ...fieldsErrors);
    throw new SubmissionError(errors);
  }
  if (formError.length) {
    throw new SubmissionError({
      _error: formError
    });
  }
}
