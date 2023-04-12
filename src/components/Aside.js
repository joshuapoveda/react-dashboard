
const users = [
    {name:'John Doe',age: 21, occupation: 'Software Engineer',eyeColor: 'brown', id:0},
    {name:'Jack Doe',age: 23, occupation: 'Electrical Engineer', eyeColor: 'blue',id:1},
    {name:'Jane Doe',age: 22, occupation: 'Sound Engineer', eyeColor: 'green',id:2}
]

function Aside(){
const attrList = users.map(attr => 
    <li key={users.id} className="user" style={{ listStyle: 'none' }}>{attr.name}</li>
    )
    return(
        <div className="aside">
        <ul>{attrList}</ul>
        </div>
    )
    }

export default Aside