import { useField } from "formik"

export const CustomInput = ({label,styles, ...props}) => {
    const [field, meta,helpers] = useField(props)
      const {touched, error} = meta
  return (
    <div className="flex flex-col space-y-0.5">
        <label className="text-gray-400" htmlFor="">{label}</label>
        <input  style={{borderColor:touched&&error?'#ef4444':''}} className={` bg-[#1e1f26] w-full  border rounded-md py-4 px-2 text-white ${styles}`} {...field} {...props} />
        {meta.touched && meta.error ? <p style={{color:'#ef4444'}} className="text-sm">{meta.error}</p> : ""}
    </div>
  )
}
