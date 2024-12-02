'use client';

interface FormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form = (props: FormProps) => {
  const { onSubmit } = props;

  return (
    <form onSubmit={onSubmit}>
      <input type='text' />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
