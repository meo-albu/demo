import React, { useEffect, useState } from 'react'
import {Input, SIZE} from '@driven-crm/ui/Input'
import {FormControl} from '@driven-crm/ui/FormControl'

import {Button, SIZE as buttonSize} from '@driven-crm/ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { changeUser } from './store/actions/authActions'

const ChangeUserDetails = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.authReducer.user)
  const [disabled, setDisabled] = useState(true)
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')


  const handleSubmit = e => {
    e.preventDefault()

    if(name.length && position.length)
      dispatch(changeUser({
        password: user.password,
        name: name,
        position: position
      }))
      setName('')
      setPosition('')
  }

  useEffect(() => {
    if(position.length > 0 && name.length > 0) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [position, name])

  return (
      <div className='mt-8'>
        <div className='font-bold mb-3'>Change User Details</div>
        <form onSubmit={handleSubmit}>
          <FormControl label="Name" caption='User name'>
            <Input size={SIZE.compact} name='name' value={name} onChange={e => setName(e.target.value)} />
          </FormControl>
          <FormControl label="Position" caption='Position name'>
            <Input size={SIZE.compact} name='position' value={position} onChange={e => setPosition(e.target.value)} />
          </FormControl>
          <Button type='submit' disabled={disabled} size={buttonSize.compact}>Change Details</Button>
        </form>
      </div>
  )
}

export default ChangeUserDetails
