import { FormEvent, useState } from 'react';

interface FormType {
  name?: string;
  email?: string;
}

export default function AppForm() {
  const [form, setForm] = useState<FormType>({ name: '', email: '' });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름:</label>
      <input type="text" id="name" name="name" value={form.name} onChange={handleChange} />
      <label htmlFor="email">이메일:</label>
      <input type="email" id="email" name="email" value={form.email} onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}
