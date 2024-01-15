import { ApButton, ApTextInput } from '@/src/components'
import { Form, Formik } from 'formik'
import React from 'react'

export const AddShowcaseForm = () => {
  return (
    <div>
        <Formik
            initialValues={{}}
            onSubmit={() => {}}
        >
            <Form className='flex flex-col gap-8'>
                <h1 className="font-semibold">How much did the project cost</h1>
                <div className='flex gap-8 justify-between -mt-4'>
                    {/* <ApSelect
                        containerClassName='w-full'
                        placeholder="Select a currency"
                        name='category'
                        options={[]}
                    /> */}

                    <ApTextInput
                        placeholder='Enter an amount' 
                        name='description'
                    />
                </div>

                {/* <ApSelect
                    label='Recent Projects and Contests'
                    placeholder="Select a recent project or contest"
                    name='category'
                    options={[]}
                />

                <ApSelect
                    label='Select the category that best fits the project'
                    placeholder="Select a category"
                    name='category'
                    options={[]}
                />

                <ApSelect
                    label='Enter at least 5 tags that describe your project'
                    placeholder="Select a tag"
                    name='category'
                    options={[]}
                /> */}

                <ApTextInput
                    label='Give your work a descriptive title'
                    placeholder='e.g, Minimalist website, red logo' 
                    name='description'
                />

                <ApTextInput
                    label='How would you best describe your project?'
                    placeholder='Say something nice' 
                    name='description'
                    textarea
                />

                <ApTextInput
                    label='What did you like best about this project?'
                    placeholder='Say something nice' 
                    name='description'
                    textarea
                />

                <div className='self-end pt-3'>
                    <ApButton
                        title="Submit Showcase"
                    />
                </div>
            </Form>
        </Formik>
    </div>
  )
}