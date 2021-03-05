import React, { useEffect, useState } from 'react'
import {Input, SIZE} from '@driven-crm/ui/Input'
import {FormControl} from '@driven-crm/ui/FormControl'
import {Button, SIZE as buttonSize} from '@driven-crm/ui/Button'
import { useDispatch } from 'react-redux'
import { login } from '../store/actions/authActions'

const Login = () => {
  const dispatch = useDispatch()
  const [disabled, setDisabled] = useState(true)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [position, setPosition] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    if(name.length && password.length && position.length) {
      dispatch(login({
        name,
        password,
        position
      }))
    }
  }
    
  useEffect(() => {
    if(position.length > 0 && password.length > 0 && name.length > 0) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [position, password, name])

  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 shadow-lg w-full md:w-1/2'>
      <div className='font-bold text-xl mb-3'>Login</div>
      <form onSubmit={handleSubmit}>
        <FormControl label="Name" caption='User name'>
          <Input size={SIZE.compact} name='name' value={name} onChange={e => setName(e.target.value)} />
        </FormControl>
        <FormControl label="Password" caption='Password'>
          <Input size={SIZE.compact} name='password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
        </FormControl>
        <FormControl label="Position" caption='Position name'>
          <Input size={SIZE.compact} name='position' value={position} onChange={e => setPosition(e.target.value)} />
        </FormControl>
        <Button type='submit' disabled={disabled} size={buttonSize.compact}>Login</Button>
      </form>
    </div>
  )
}

export default Login
