import { useForm } from 'react-hook-form';
import './DynamicForm.css'

const DynamicForm = () => {
    const {
        register,
        watch,
        handleSubmit,
        reset,
        formState:{ errors },
    } = useForm({
      mode: 'onBlur',
    });

    const firstInput = watch('first')

    const onSubmit = (data)=>{
        console.log(JSON.stringify(data));
        reset();
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            First Input
        </label>
            <input {... register('first',{required:'Fild is required', minLength: {
                value: 6,
                message: 'Write more than 5 symbols',
            },})}/>
            {errors.first && <p>{errors.first.message}</p>}
{firstInput?.length >= 6 && (
        <>
          <label>Second input</label>
          <input
            {...register('second', { required: 'Fild is required' })}
          />
          <p>{errors.second?.message}</p>
        </>
      )}
        <button type='submit'>Submit</button>
    </form>
  )
}

export default DynamicForm