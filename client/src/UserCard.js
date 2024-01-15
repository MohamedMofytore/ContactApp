import React from 'react'
import {Card,CardBody,CardTitle,CardSubtitle,CardText,Button} from "reactstrap"
import {useDispatch} from "react-redux"
import {deleteUser} from "./redux/actions"
import EditUser from './EditUser'
function UserCard({el}) {
    console.log(el)
const dispatch=useDispatch()
    const deletee=()=>{
      dispatch(deleteUser(el._id))
    }
  return (
    
<Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
{el.name}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    {el.email}
    </CardSubtitle>
    <CardText>
{el.phone}    </CardText>
    <Button onClick={deletee}>
      delete
    </Button>
    <EditUser el={el}/>
  </CardBody>
</Card>
  )
}

export default UserCard
