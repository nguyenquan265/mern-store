import { Form, Link, useLoaderData } from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormCheckbox from './FormCheckbox'

const Filters = () => {
  const { meta, params } = useLoaderData()

  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      <FormInput
        label='search product'
        name='search'
        type='text'
        defaultValue={params.search}
        size='input-sm'
      />
      <FormSelect
        label='select category'
        name='category'
        list={meta.categories}
        defaultValue={params.category}
        size='select-sm'
      />
      <FormSelect
        label='select company'
        name='company'
        list={meta.companies}
        defaultValue={params.company}
        size='select-sm'
      />
      <FormSelect
        label='sort by'
        name='order'
        list={['a-z', 'z-a', 'high', 'low']}
        defaultValue={params.order}
        size='select-sm'
      />
      <FormRange label='select price' name='price' size='range-sm' price={params.price * 1} />
      <FormCheckbox
        label='free shipping'
        name='shipping'
        defaultValue={params.shipping}
        size='checkbox-sm'
      />
      <button type='submit' className='btn btn-primary btn-sm '>
        SEARCH
      </button>
      <Link to='/products' className='btn btn-accent btn-sm'>
        RESET
      </Link>
    </Form>
  )
}

export default Filters
