import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';


export default function Mailing({ className }) {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: (values) => {
            const err = {}
            for (let key of Object.keys(values)) {
                if (values[key] == '') {
                    err[key] = '*Campo requerido'
                }
            }
            return err;
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_agsxtpg', 'template_gowsdj9', form.current, 'nNjQRasUzo22T76d5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className={'text-white font-light my-[3em] md:my-[5em] w-[80%] max-w-[700px] ' + className}>

            <form className='flex flex-col mx-auto items-center w-full ' ref={form} onSubmit={formik.handleSubmit}>
                <div className='flex flex-col items-center  justify-center sm:flex-row sm:justify-between mb-4 md:mb-10 w-full'>

                    <label className='text-center sm:text-left'>Nombre</label>
                    <div className='flex flex-col'>

                        <input className='rounded text-black p-1 w-[200px]' {...formik.getFieldProps('name')} />
                        <label className='text-[#f00] text-sm '>{(formik.touched['name'] && formik.errors['name'] ? formik.errors['name'] : '')}</label>
                    </div>

                </div>
                <div className='flex flex-col items-center  justify-center sm:flex-row sm:justify-between mb-4 md:mb-10 w-full'>

                    <label className='text-center sm:text-left'>Email</label>
                    <div className='flex flex-col'>

                        <input className='rounded text-black p-1 w-[200px]' type="text" {...formik.getFieldProps('email')} />
                        <label className='text-[#f00] text-sm'>{(formik.touched['email'] && formik.errors['email'] ? formik.errors['email'] : '')}</label>
                    </div>
                </div>
                <div className='flex flex-col items-center  justify-center sm:flex-row sm:justify-between mb-4 md:mb-10 w-full'>

                    <label className='text-center sm:text-left'>¿Qué necesitas?</label>
                    <div className='flex flex-col'>

                        <textarea className='rounded text-black p-1 w-[200px]' {...formik.getFieldProps('message')} />
                        <label className='text-[#f00] text-sm'>{(formik.touched['message'] && formik.errors['message'] ? formik.errors['message'] : '')}</label>
                    </div>
                </div>
                <button className='mt-4 py-2 px-8 font-bold  rounded bg-[#1F1D36]' type="submit" value="Send">Enviar</button>
            </form>

        </div>
    )
}