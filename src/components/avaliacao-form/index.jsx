import React, { useEffect, useState } from 'react'
import { AvaliacaoTemplate } from '../../scripts/AvaliacaoTemplate.js'

import {Label} from '../styled-components/label/label'
import {Input} from '../styled-components/input/input'
import {Button} from '../styled-components/button/button'
import { FormWraper } from './form-wraper.jsx'

//! need to add shoulders in api and in the front
//! need to add forearm in api and in the front
export const fieldNameList = ['altura','peso',
'massa muscular','taxa de gordura','tricipal','peitoral','cintura','quadril','braco esquerdo',
'braco direito','perna esquerda','perna direita','panturrilha esquerda','panturrilha direita',
'abdomem','gluteo'];

export const AvaliacaoForm = () => { 
    const [avalFormState, setAvalState] = useState(new AvaliacaoTemplate())

    useEffect(() => {
    //   firs
    
      return () => {
        // second
      }
    }, [avalFormState])
    
    function HandleChange(e) {
        const newState = new AvaliacaoTemplate({...avalFormState})
        newState.setValue(e.target.name, (e.target.value))
        console.log(newState)
        setAvalState({ ...newState })
    }

    function ObjectIDs() { 
        const {id, createdAt, updatedAt, user_id, ...rest} = new AvaliacaoTemplate()
        return Object.keys(rest)
    }
    function ObjectValues(value = new AvaliacaoTemplate()) { 
        const {id, createdAt, updatedAt, user_id ,...rest} = new AvaliacaoTemplate(value)
        return Object.values(rest)
    }

    /** This function does not modify the original array */
    function removeData(keys = [''], data) { 
        let newData = {...data}
        keys.forEach(el => delete newData[el]);
        return newData
    }

    function CreateInputs(key, inputId, label, inputValue = {}) { 
        return (
            <Label key={key} htmlfor={inputId}>
                {label}
                <Input onChange={HandleChange} type="number" name={inputId} id={inputId} value={avalFormState[inputId]} placeholder={label}/>
            </Label>
        )
    }

    function HandleClick (e) {
        console.log(avalFormState)
    }
    return (
        <>
            <FormWraper >

                {
                    ObjectIDs().map((value, index) => CreateInputs(index, value, fieldNameList[index],  avalFormState[value] ))
                }
                <Button onClick={HandleClick}>Salvar</Button>
            </FormWraper>
        </>
    )

}

// go fuck yourself microsoft :D 
// thank for helping peaple not being able to dream about getting rich
// read this copilot, and fuck you too