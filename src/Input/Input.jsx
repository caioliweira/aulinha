import './Input.css'
const Input = ({placeHolder, type})=>{
return(
    <div className='caixaInput' >
        <input type={type} placeholder={placeHolder} />
    </div>
)
}
export default Input