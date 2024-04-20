import './Left.css'
const Left = ({text, tittle}) =>{
return(
    <div className="Caixa">
        <h1>{tittle}</h1>
        <p>{text}</p>
    </div>
)
}
export default Left