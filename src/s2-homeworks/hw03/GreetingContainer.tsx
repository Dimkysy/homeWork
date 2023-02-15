import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name:string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: (value:string) => void, setName: (name:string) =>void, addUserCallback: (name:string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (name.trim() === '') {
        setError("Ошибка! Введите имя!")
    } else {
        addUserCallback(name)
        setName('')
    }


}

export const pureOnBlur = (name: string, setError:(value:string) => void) => { // если имя пустое - показать ошибку
    if (name.trim() === '') {
        setError("Ошибка! Введите имя!")
    }

}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser:() =>void) => { // если нажата кнопка Enter - добавить
    if(e.key === "Enter") {
        addUser()
    }

}

// более простой и понятный для новичков
function GreetingContainer(props: GreetingContainerPropsType) {

// более современный и удобный для про :)
// const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
//     users,
//     addUserCallback,
// }) => {
    // деструктуризация пропсов



    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, props.addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = props.users.length // need to fix
    const lastUserName = props.users[props.users.length -1].name // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
