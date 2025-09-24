"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

type FormInputs = {
  name: string;
  email: string;
  company?: string;
  interest?: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormInputs>();
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = async (data: FormInputs) => {
    setStatus(null);
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      setStatus('Thanks! We will get back to you shortly.');
      reset();
    } else {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Header />
      <main className="pt-28 md:pt-36">
        <section className="container-grid">
          <h1 className="heading-lg">Let’s talk</h1>
          <p className="mt-3 text-osloGray max-w-2xl font-body-extended">Share a few details and we’ll follow up quickly.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-osloGray font-body-condensed font-semibold">Name</label>
              <input className="mt-2 w-full rounded-lg bg-capeCod/30 border border-capeCod/40 px-4 py-3" {...register('name', { required: true })} />
              {errors.name && <p className="mt-1 text-xs text-fuelYellow">Required</p>}
            </div>
            <div>
              <label className="block text-sm text-osloGray font-body-condensed font-semibold">Email</label>
              <input type="email" className="mt-2 w-full rounded-lg bg-capeCod/30 border border-capeCod/40 px-4 py-3" {...register('email', { required: true })} />
              {errors.email && <p className="mt-1 text-xs text-fuelYellow">Required</p>}
            </div>
            <div>
              <label className="block text-sm text-osloGray font-body-condensed font-semibold">Service of Interest</label>
              <select className="mt-2 w-full rounded-lg bg-capeCod/30 border border-capeCod/40 px-4 py-3" {...register('interest')}>
                <option value="">Select one</option>
                <option>Website Development</option>
                <option>Shopify Storefront</option>
                <option>App Development</option>
              </select>
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm text-osloGray font-body-condensed font-semibold">Company</label>
              <input className="mt-2 w-full rounded-lg bg-capeCod/30 border border-capeCod/40 px-4 py-3" {...register('company')} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-osloGray font-body-condensed font-semibold">Message</label>
              <textarea rows={6} className="mt-2 w-full rounded-lg bg-capeCod/30 border border-capeCod/40 px-4 py-3" {...register('message', { required: true })} />
              {errors.message && <p className="mt-1 text-xs text-fuelYellow">Required</p>}
            </div>
            <div className="md:col-span-2 flex items-center gap-4">
              <button disabled={isSubmitting} className="btn-primary disabled:opacity-60" type="submit">Send</button>
              {status && <span className="text-osloGray">{status}</span>}
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}


