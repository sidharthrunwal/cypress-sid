import { useFormData } from '../utilities/useFormData';
import { useDbUpdate } from '../utilities/firebase';

const InputField = ({name, text, state, change}) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">{text}</label>
    <input className="form-control" id={name} name={name} 
      defaultValue={state.values?.[name]} onChange={change} />
    <div className="invalid-feedback">{state.errors?.[name]}</div>
  </div>
);

const validateCourseData = (key, val) => {
    switch (key) {
        case 'title':
            return /(^\w\w)/.test(val) ? '' : 'must be least two characters';

        case 'meets':
            return /([0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]-([0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/ .test(val) ? '' : 'must contain days and start-end, e.g., MWF 12:00-13:20';
            
        default: return '';
    }
};

const ButtonBar = ({message, disabled}) => {
    return (
        <div className="d-flex">
        <button type="button" className="btn btn-outline-dark me-2" onClick={() => window.location.href = "/"}>Cancel</button>
        <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button>
        <span className="p-2">{message}</span>
        </div>
    );
};

const CourseEdit = ({data, id}) => {
    const [state, change] = useFormData(validateCourseData, data);
    const [update, result] = useDbUpdate(`/data/courses/${id}`);

    const submit = (evt) => {
        evt.preventDefault();
        if (!state.errors) {
            update(state.values);
        }
    };

    return (
        <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
        <InputField name="title" text="Title" state={state} change={change}/>
        <InputField name="meets" text="Meeting Time" state={state} change={change}/>
        <ButtonBar message={result?.message} />
        </form>
    )
};

export default CourseEdit;