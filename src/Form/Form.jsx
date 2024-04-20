import Assinatura from "../Assinatura/Assinatura"
import Button from "../Button/Button"
import Input from "../Input/Input"
import Help from "../Help/Help"
import './Form.css'


const Form = () => {
    return (
<div>
    <div>
        <Assinatura text='Try it free 7 days then $20/mo. thereafter'/>
    </div>
        <form>
            <Input placeHolder='First Name' type='text' />
            <Input placeHolder='Last Name' type='text' />
            <Input placeHolder='Email Address' type='email'/>
            <Input placeHolder='Password' type='password' />
            <Button  />
            <Help/>
        </form>

</div>
    )
}
export default Form